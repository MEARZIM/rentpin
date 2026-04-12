"use client";

import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
    properties: any[];
    onMarkerClick?: (p: any) => void;
    activeId?: number | null;
}


const createCustomIcon = (price: number, isActive: boolean) => {
    return L.divIcon({
        className: 'custom-marker-container',
        html: `
      <div style="
        background: ${isActive
                ? 'linear-gradient(135deg, #171c1f 0%, #333d42 100%)'
                : 'linear-gradient(135deg, #006948 0%, #00855d 100%)'};
        color: white;
        padding: 6px 14px;
        border-radius: 14px;
        font-weight: 800;
        font-family: 'Inter', sans-serif;
        font-size: 13px;
        box-shadow: ${isActive
                ? '0 10px 25px rgba(0,0,0,0.2)'
                : '0 4px 12px rgba(0,105,72,0.25)'};
        border: 2px solid white;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform: ${isActive ? 'scale(1.1) translateY(-5px)' : 'translateY(0)'};
        white-space: nowrap;
      ">
        $${price.toLocaleString()}
      </div>
    `,
        iconSize: [60, 30],
        iconAnchor: [30, 15],
    });
};

export default function MapComponent({
    properties,
    onMarkerClick = () => { } 
}: MapComponentProps) {

    return (
        <MapContainer
            center={[37.7749, -122.4194]}
            zoom={12}
            style={{ height: '100%', width: '100%', zIndex: 1 }}
            zoomControl={false}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />

            {properties.map((prop) => (
                <Marker
                    key={prop.id}
                    position={prop.coords as [number, number]}
                    icon={createCustomIcon(prop.price, false)}
                    eventHandlers={{
                        click: () => {
                            if (onMarkerClick) onMarkerClick(prop);
                        },
                    }}
                />
            ))}
        </MapContainer>
    );
}