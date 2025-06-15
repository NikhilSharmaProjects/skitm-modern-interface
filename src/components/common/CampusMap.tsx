
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const INDORE_COORDS = { lng: 75.9629, lat: 22.6049 }; // Approx SKITM, Indore

const CampusMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [token, setToken] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!token || !mapContainer.current || mapLoaded) return;

    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [INDORE_COORDS.lng, INDORE_COORDS.lat],
      zoom: 15,
    });

    const marker = new mapboxgl.Marker({ color: '#2C4A6B' })
      .setLngLat([INDORE_COORDS.lng, INDORE_COORDS.lat])
      .setPopup(new mapboxgl.Popup().setText('SKITM Campus'))
      .addTo(map);

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setMapLoaded(true);

    return () => map.remove();
  }, [token, mapLoaded]);

  return (
    <div>
      {!token ? (
        <div className="mb-4">
          <label htmlFor="mb-mapbox-token" className="block text-skitm-blue mb-2 font-semibold">
            Enter your Mapbox Public Token to see the campus location:
          </label>
          <input
            id="mb-mapbox-token"
            type="password"
            className="border px-3 py-2 rounded w-full max-w-md"
            placeholder="Mapbox Public Token"
            value={token}
            onChange={e => setToken(e.target.value)}
          />
          <p className="text-xs mt-2 text-skitm-gray">
            Get your token from <a href="https://account.mapbox.com/access-tokens/" className="underline text-skitm-blue" target="_blank" rel="noopener noreferrer">mapbox.com</a>
          </p>
        </div>
      ) : (
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-skitm-blue shadow-lg">
          <div ref={mapContainer} className="absolute inset-0" />
        </div>
      )}
    </div>
  );
};

export default CampusMap;
