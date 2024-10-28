import { ReactNode, useState } from "react";
import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import "./styles.css";
import { Header } from "@/routes/_index/features/Header";
import Map from "@/Components/Map";
import { LayerButton } from "./features/LayerButton/LayerButton";
import { LayerSelectionButton } from "./features/LayerSelectionButton/LayerSelectionButton";
// import { ClientAPIKeyInputs } from "./features/ClientAPIKeyInputs";

export const loader = ({ context }: LoaderFunctionArgs) => {
  return json({ apiKey: process.env.GOOGLE_MAPS_API_KEY ?? "" });
};

export default function Page(): ReactNode {
  const data = useLoaderData<typeof loader>();
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <Header />
      <LayerButton onClick={() => alert("asdf")} />
      <LayerSelectionButton
        text="hello"
        visible={visibility}
        onClickInfo={() => alert("info")}
        onClickVisible={() => setVisibility(!visibility)}
      />
      {/* <ClientAPIKeyInputs
        onCanceled={() => alert("asdf")}
        onSaved={(apiKey) => alert(apiKey)}
      /> */}
      <Map
        apiKey={data.apiKey}
        center={{ lat: 34.8503, lng: 136.582 }}
        mapContainerStyle={{ width: "100%", height: "50rem" }}
      />
    </div>
  );
}
