import maplibregl, { Map as MapLibreMap, Marker, Popup } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import echo from "../config/echo";

type AircraftData = {
  callsign: string;
  latitude: number;
  longitude: number;
  altitude: number;
  userName: string;
};

function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const lng = 19.530689298910143;
  const lat = 47.09829570596985;
  const zoom = 6;

  const [activeAircraft, setActiveAircraft] = useState<AircraftData[]>([]);

  useEffect(() => {
    // Subscribe to the aircraft-tracking channel
    const channel = echo.channel("aircraft-tracking");

    // Listen for location updates
    channel.listen(".location.updated", (event: any) => {
      console.log("Location update received:", event);

      const newAircraft: AircraftData = {
        callsign: event.callsign,
        latitude: event.latitude,
        longitude: event.longitude,
        altitude: event.altitude,
        userName: event.userName,
      };

      setActiveAircraft(prevAircraft => {
        const existingIndex = prevAircraft.findIndex(aircraft => aircraft.callsign === newAircraft.callsign);
        
        if (existingIndex !== -1) {
          // Update existing aircraft
          const updated = [...prevAircraft];
          updated[existingIndex] = newAircraft;
          return updated;
        } else {
          return [...prevAircraft, newAircraft];
        }
      });
    });

    // Listen for disconnections
    channel.listen(".location.user-disconnect", (event: any) => {
      console.log("Aircraft disconnected:", event);

      setActiveAircraft(prevAircraft => prevAircraft.filter(aircraft => aircraft.callsign !== event.aircraftId));
    });

    // Cleanup on unmount
    return () => {
      echo.leaveChannel("aircraft-tracking");
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Remove old markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    // Add new markers
    activeAircraft.forEach(ac => {
      const el = renderHeliElement(ac.callsign);
      const popupContent = renderPopupContent(ac.userName);
      const popup = new Popup({ offset: 30 }).setDOMContent(popupContent);

      const marker = new Marker({ element: el, anchor: "bottom" }).setLngLat([ac.longitude, ac.latitude]).setPopup(popup).addTo(map.current!);

      markersRef.current.push(marker);
    });
  }, [activeAircraft]);

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

  function renderPopupContent(userName: string) {
    const popupDiv = document.createElement("div");
    const root = createRoot(popupDiv);

    root.render(
      <div className="flex gap-2 items-center justify-center outline-none">
        <i className="fa-classic fa-solid fa-user-pilot"></i>
        <p>Pilóta: {userName}</p>
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
  }, [lng, lat, zoom]);

  return (
    <div className="map-wrap map h-full w-full">
      <div ref={mapContainer} className="map h-full w-full rounded-lg border-2 border-lightgray" />
    </div>
  );
}

export default Map;
