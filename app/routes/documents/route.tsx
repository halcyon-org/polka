import { json, useLoaderData } from "@remix-run/react";
import React, { ElementType, ReactNode } from "react";
import * as styles from "./styles.css";

export async function loader() {
  const { allContents } = await import("content-collections");

  return json({
    contents: allContents,
  });
}
export default function Page(): ReactNode {
  const { contents } = useLoaderData<typeof loader>();

  return (
    <main className={styles.main}>
      <h1>Documents</h1>
      <ul>
        {contents.map((post) => (
          <div key={post._meta.path}>
            <h2 className={styles.header}>{post.title}</h2>
            <p className={styles.content}>
              {post.content.split("\n").map((v) => {
                const count = v.split("#").length;
                if (!count || 0 >= count || count > 6) return v;
                const Head = `h${count}` as ElementType;
                return v.startsWith("#") ? (
                  <Head className={styles.header}>{v}</Head>
                ) : (
                  v
                );
              })}
            </p>
          </div>
        ))}
      </ul>
    </main>
  );
}
