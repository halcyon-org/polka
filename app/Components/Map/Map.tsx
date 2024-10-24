import { type ReactNode } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import * as styles from "./styles.css";

type MapComponentProps = {
  apiKey: string;
  center: {
    lat: number;
    lng: number;
  };
};

const Map = ({ apiKey, center }: MapComponentProps): ReactNode => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={styles.container}
        center={center}
        zoom={15}
      ></GoogleMap>
    </LoadScript>
  );
};
export default Map;
