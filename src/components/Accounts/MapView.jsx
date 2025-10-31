import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = () => {
  const position = [20.5937, 78.9629]; // India center coordinates

  return (
    <div className="h-64 w-full rounded-xl overflow-hidden">
      <MapContainer center={position} zoom={5} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/"></a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>India — Central Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
