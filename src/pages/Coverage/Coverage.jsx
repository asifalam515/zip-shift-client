// src/pages/Coverage/Coverage.jsx

import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { districts } from "../../data/districts";

// Custom icon for warehouse markers
const warehouseIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// Helper component to control map view
const MapController = ({ selectedDistrict }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedDistrict) {
      map.flyTo([selectedDistrict.lat, selectedDistrict.lng], 10, {
        duration: 2,
      });
    }
  }, [selectedDistrict, map]);

  return null;
};

const Coverage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const foundDistrict = districts.find((d) =>
      d.name.toLowerCase().includes(value)
    );

    if (foundDistrict) {
      setSelectedDistrict(foundDistrict);
    } else {
      setSelectedDistrict(null);
    }
  };

  // Filter visible districts
  const filteredDistricts =
    searchText === ""
      ? districts
      : districts.filter((d) =>
          d.name.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        We are available in 64 districts
      </h1>

      {/* Description */}
      <p className="text-center text-gray-500 mb-6 max-w-lg">
        Our parcel delivery network covers every corner of Bangladesh — from
        bustling cities to serene rural towns.
      </p>

      {/* Search box */}
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search a district..."
        className="input input-bordered w-full max-w-sm mb-8 shadow-sm"
      />

      {/* Map */}
      <div className="w-full max-w-6xl h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {/* Control map view */}
          <MapController selectedDistrict={selectedDistrict} />

          {/* Markers */}
          {filteredDistricts.map((d, i) => (
            <Marker key={i} position={[d.lat, d.lng]} icon={warehouseIcon}>
              <Popup>
                <strong>{d.name}</strong> <br />
                Our warehouse is active here!
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Optional feedback text */}
      {searchText && filteredDistricts.length === 0 && (
        <p className="text-red-500 mt-4">No district found!</p>
      )}
    </div>
  );
};

export default Coverage;
