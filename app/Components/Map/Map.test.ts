// @vitest-environment jsdom

import { expect, test } from "vitest";

import { composeStories } from "@storybook/react";

import * as stories from "./Map.stories";

const { Default } = composeStories(stories);
test("Map snapshot", async () => {
  await Default.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
