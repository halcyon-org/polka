// @vitest-environment jsdom

import { expect, test } from "vitest";

import { composeStories } from "@storybook/react";

import * as stories from "./layer.stories";

const { Default } = composeStories(stories);
test("Button snapshot", async () => {
  await Default.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
