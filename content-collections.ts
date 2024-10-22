import { defineCollection, defineConfig } from "@content-collections/core";

const content = defineCollection({
  name: "content",
  directory: "app/content",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
});

export default defineConfig({
  collections: [content],
});
