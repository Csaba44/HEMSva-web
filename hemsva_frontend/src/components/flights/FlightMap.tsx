import maplibregl, { Map as MapLibreMap, Marker, Popup } from "maplibre-gl";
import type { LngLatLike } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import type { Waypoint } from "../../types/Flight";

type WaypointType = "takeoff" | "enroute" | "landing";

type FlightMapProps = {
  route: Waypoint[];
};

function FlightMap({ route }: FlightMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markersRef = useRef<Marker[]>([]);

  const center: LngLatLike = [19.07, 47.4];
  const zoom = 9;

  const minAlt = Math.min(...route.map(p => p.altitude));
  const maxAlt = Math.max(...route.map(p => p.altitude));

  function getColorByAltitude(alt: number): string {
    const t = (alt - minAlt) / (maxAlt - minAlt);

    const stops = [
      { stop: 0.0, color: [0, 118, 255] }, // blue
      { stop: 0.25, color: [0, 255, 102] }, // green
      { stop: 0.5, color: [255, 255, 0] }, // yellow
      { stop: 0.75, color: [255, 140, 0] }, // orange
      { stop: 1.0, color: [255, 0, 0] }, // red
    ];

    const lower = [...stops].reverse().find(s => s.stop <= t) ?? stops[0];
    const upper = stops.find(s => s.stop >= t) ?? stops[stops.length - 1];

    const ratio = (t - lower.stop) / (upper.stop - lower.stop || 1);

    const r = Math.round(lower.color[0] + ratio * (upper.color[0] - lower.color[0]));
    const g = Math.round(lower.color[1] + ratio * (upper.color[1] - lower.color[1]));
    const b = Math.round(lower.color[2] + ratio * (upper.color[2] - lower.color[2]));

    return `rgb(${r},${g},${b})`;
  }

  const lineFeatures = route.slice(0, -1).map((point, i) => ({
    type: "Feature" as const,
    geometry: {
      type: "LineString" as const,
      coordinates: [
        [point.long, point.lat],
        [route[i + 1].long, route[i + 1].lat],
      ],
    },
    properties: {
      color: getColorByAltitude((point.altitude + route[i + 1].altitude) / 2),
    },
  }));

  function renderMarkerElement(type: WaypointType) {
    const el = document.createElement("div");
    const root = createRoot(el);

    const iconClass = type === "takeoff" ? "fa-classic fa-solid fa-helicopter text-green-600" : "fa-classic fa-solid fa-location-dot text-hemsred";

    const label = type === "takeoff" ? "Felszállás" : "Leszállás";

    root.render(
      <div className="flex flex-col items-center cursor-pointer select-none font-sans">
        <i className={`${iconClass} text-lg`}></i>
        <div className="mt-1 bg-white/95 px-2 py-[2px] rounded-md text-[12px] shadow-sm">{label}</div>
      </div>
    );

    return el;
  }

  function renderPopupContent(type: WaypointType, lat: number, long: number, alt: number) {
    const el = document.createElement("div");
    const root = createRoot(el);

    root.render(
      <div className="flex flex-col gap-1 items-start text-[13px] font-sans">
        <div className="flex items-center gap-2">
          <i className="fa-classic fa-solid fa-user-pilot text-darkest"></i>
          <p className="m-0">Pilóta: Csörgő Csaba</p>
        </div>
        <p className="text-darkgray">
          <b>Típus:</b> {type}
        </p>
        <p className="text-darkgray">
          <b>Koordináták:</b> {lat.toFixed(5)}, {long.toFixed(5)}
        </p>
        <p className="text-darkgray">
          <b>Magasság:</b> {alt} m AMSL
        </p>
      </div>
    );

    return el;
  }

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `${import.meta.env.VITE_MAPTILER_LINK}${import.meta.env.VITE_MAPTILER_APIKEY}`,
      center,
      zoom,
    });

    map.current.on("load", () => {
      lineFeatures.forEach((feature, idx) => {
        const id = `route-segment-${idx}`;
        const hitId = `route-hitbox-${idx}`;

        map.current!.addSource(id, {
          type: "geojson",
          data: feature,
        });

        map.current!.addLayer({
          id,
          type: "line",
          source: id,
          paint: {
            "line-color": feature.properties.color,
            "line-width": 4,
            "line-opacity": 0.9,
          },
        });

        map.current!.addLayer({
          id: hitId,
          type: "line",
          source: id,
          layout: {},
          paint: {
            "line-color": "#000000",
            "line-opacity": 0,
            "line-width": 25,
          },
        });
      });

      route
        .filter(p => p.type === "takeoff" || p.type === "landing")
        .forEach(point => {
          const el = renderMarkerElement(point.type);
          const popup = new Popup({ offset: 30 }).setDOMContent(renderPopupContent(point.type, point.lat, point.long, point.altitude));
          const marker = new Marker({ element: el, anchor: "bottom" }).setLngLat([point.long, point.lat]).setPopup(popup).addTo(map.current!);
          markersRef.current.push(marker);
        });

      const hoverPopup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 25,
        className: "hover-speed-popup",
      });

      lineFeatures.forEach((_, idx) => {
        const hitLayerId = `route-hitbox-${idx}`;

        map.current!.on("mousemove", hitLayerId, e => {
          const coords = e.lngLat;
          const seg = route[idx];
          if (!seg) return;

          const speed = seg.speed.toFixed(0);
          const alt = seg.altitude.toFixed(0);
          const html = `
        <div style="font-family:sans-serif;font-size:13px;">
          <b>Sebesség:</b> ${speed} kts<br/>
          <b>Magasság:</b> ${alt} ft<br/>
        </div>
      `;

          hoverPopup.setLngLat(coords).setHTML(html).addTo(map.current!);
        });

        map.current!.on("mouseleave", hitLayerId, () => {
          hoverPopup.remove();
        });
      });
    });

    return () => {
      markersRef.current.forEach(m => m.remove());
      markersRef.current = [];
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <div className="map-wrap map h-full w-full">
      <div ref={mapContainer} className="map h-full w-full rounded-lg border-2 border-lightgray" />
    </div>
  );
}

export default FlightMap;
