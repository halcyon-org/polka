import { ReactNode } from "react";
import { Map } from "@/Components/Map";
import { json, useLoaderData } from "@remix-run/react";

import "./styles.css";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";

interface Env {
  GOOGLE_MAPAPI_KEY: string | undefined;
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  const env = ((): Env => {
    try {
      return process.env as unknown as Env;
    } catch {
      return context.cloudflare.env as unknown as Env;
    }
  })();

  return json({
    ENV: {
      GOOGLE_MAPAPI_KEY: env.GOOGLE_MAPAPI_KEY,
    },
  });
}

export default function Page(): ReactNode {
  const data = useLoaderData<typeof loader>();
  const apiKey = data.ENV.GOOGLE_MAPAPI_KEY || "";
  return (
    <div>
      <Map apiKey={apiKey} />
    </div>
  );
}
