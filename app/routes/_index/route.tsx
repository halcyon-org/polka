import { ReactNode } from "react";
import { Map } from "@/Components/Map";
import { json, useLoaderData } from "@remix-run/react";

import "./styles.css";

export async function loader() {
  return json({
    ENV: {
      REACT_APP_ACCESS_KEY: process.env.REACT_APP_ACCESS_KEY,
    },
  });
}

export default function Page(): ReactNode {
  const data = useLoaderData<typeof loader>();
  const apiKey = data.ENV.REACT_APP_ACCESS_KEY || "";
  return (
    <div>
      <Map apiKey={apiKey} />
    </div>
  );
}
