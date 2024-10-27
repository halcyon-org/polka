import { defineCollection, defineConfig } from "@content-collections/core";

const content = defineCollection({
  directory: "contents/contents",
  include: "**/*.md",
  name: "content",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
});

export default defineConfig({
  collections: [content],
});
