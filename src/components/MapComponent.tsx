import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const MapComponent = () => {
  const map = useMap();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        map.setView([latitude, longitude], 16);
        // You can also update your state or context here to fetch nearby places
      });
    }
  }, [map]);

  return null;
};

export default MapComponent;