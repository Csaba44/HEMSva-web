import maplibregl, { Map as MapLibreMap, Marker, Popup } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const lng = 19.530689298910143;
  const lat = 47.09829570596985;
  const zoom = 6;

  const coordinates: [number, number][] = [
    [19.114170942353756, 47.51254498706376],
    [20.839732035945318, 48.10417950616453],
    [21.521635500726514, 47.54381605565194],
    [17.88074170160117, 46.96574674953112],
    [17.18461760549211, 46.717529550828736],
    [17.408254346672333, 46.5937780568027],
    [19.31813985576398, 46.995975761761805],
  ];

  function renderHeliElement(callsign: string) {
    const el = document.createElement("div");
    const root = createRoot(el);

    root.render(
      <div className="flex flex-col items-center cursor-pointer select-none font-sans" style={{ userSelect: "none" }}>
        <i className="fa-classic fa-solid fa-helicopter text-hemsred"></i>
        <div className="mt-1 bg-white/95 px-2 py-[2px] rounded-md text-[12px] shadow-sm">{callsign}</div>
      </div>
    );

    return el;
  }

  function renderPopupContent(callsign: string, lat: number, lng: number) {
    const popupDiv = document.createElement("div");
    const root = createRoot(popupDiv);

    root.render(
      <div className="flex gap-2 items-center justify-center outline-none">
        <i className="fa-classic fa-solid fa-user-pilot"></i>
        <p>Pilóta: Csörgő Csaba</p>
      </div>
    );

    return popupDiv;
  }

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `${import.meta.env.VITE_MAPTILER_LINK}${import.meta.env.VITE_MAPTILER_APIKEY}`,
      center: [lng, lat],
      zoom,
    });

    map.current.on("load", () => {
      coordinates.forEach((coord, i) => {
        const callsign = `MEDIC ${i + 1}`;
        const [hlng, hlat] = coord;

        const el = renderHeliElement(callsign);
        const popupContent = renderPopupContent(callsign, hlat, hlng);
        const popup = new Popup({ offset: 30 }).setDOMContent(popupContent);

        const marker = new Marker({ element: el, anchor: "bottom" }).setLngLat([hlng, hlat]).setPopup(popup).addTo(map.current!);

        markersRef.current.push(marker);
      });
    });

    return () => {
      markersRef.current.forEach(m => m.remove());
      markersRef.current = [];
      map.current?.remove();
      map.current = null;
    };
  }, [lng, lat, zoom]);

  return (
    <div className="map-wrap map h-full w-full">
      <div ref={mapContainer} className="map h-full w-full rounded-lg border-2 border-lightgray" />
    </div>
  );
}

export default Map;
