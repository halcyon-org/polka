import { type ReactNode } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "108rem",
  height: "50.7rem",
};

const center = {
  lat: 34.8503, // 東京の緯度
  lng: 136.582, // 東京の経度
};

type MapComponentProps = {
  apiKey: string;
};

const MapComponent = ({ apiKey }: MapComponentProps): ReactNode => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      ></GoogleMap>
    </LoadScript>
  );
};

export const Map = ({ apiKey }: MapComponentProps): ReactNode => {
  if (!apiKey) {
    return <p>Google Maps APIキーが設定されていません。</p>;
  }

  return (
    <div>
      <MapComponent apiKey={apiKey} />
    </div>
  );
};

export default Map;
