import { ReactNode } from "react";
import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import "./styles.css";
import { Header } from "@/routes/_index/features/Header";
import Map from "@/Components/Map";

export const loader = ({ context }: LoaderFunctionArgs) => {
  return json({
    apiKey: "",
  });
};

export default function Page(): ReactNode {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <Header />
      <Map
        apiKey={data.apiKey}
        center={{ lat: 34.8503, lng: 136.582 }}
        mapContainerStyle={{ width: "100%", height: "50rem" }}
      />
    </div>
  );
}
