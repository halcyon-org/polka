import { CSSProperties, type ReactNode } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

type MapComponentProps = {
  apiKey: string;
  center: {
    lat: number;
    lng: number;
  };
  mapContainerStyle: CSSProperties;
};

const Map = ({
  apiKey,
  center,
  mapContainerStyle,
}: MapComponentProps): ReactNode => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      ></GoogleMap>
    </LoadScript>
  );
};
export default Map;
