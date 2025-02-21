import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box } from '@mui/material';

// Import Leaflet icons using ES6 import
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,  
});

const CompanyMap = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '500px',
      }}
    >
      <MapContainer
        center={[30.6387, 76.8233]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', borderRadius: '20px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[30.6387, 76.8233]}>
          <Popup>
            <span style={{ color: 'brown', fontWeight: 'bold' }}>
              V Recruiter, Sushma Infinium, <br /> Zirakpur, Tri City Chandigarh.
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default CompanyMap;
