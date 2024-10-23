import { fireEvent, screen } from "@storybook/test";
import { composeStories } from "@storybook/react";
import * as stories from "./RequestForm.stories"; // 👈 Our stories imported here.
import { expect } from "@storybook/test";

const { FilledForm } = composeStories(stories);

test("Tests invalid form", async () => {
  await FilledForm.run();

  const buttonElement = screen.getByRole("button", {
    name: "Submit",
  });

  fireEvent.click(buttonElement);

  const isFormFirstNameInvalid = screen.getByTestId("field-error-firstName");
  const isFormLastNameInvalid = screen.getByTestId("field-error-lastName");

  expect(isFormFirstNameInvalid).toBeInTheDocument();
  expect(isFormLastNameInvalid).toBeInTheDocument();
});
