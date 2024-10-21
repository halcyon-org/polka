import { type ReactNode } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { containerStyle, center } from "./styles.css";

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
  return (
    <div>
      <MapComponent apiKey={apiKey} />
    </div>
  );
};

export default Map;
