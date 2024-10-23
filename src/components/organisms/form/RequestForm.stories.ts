import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor, expect, fireEvent } from "@storybook/test";
import RequestForm from "./Component";

const meta: Meta<typeof RequestForm> = {
  title: "Organism/RequestForm",
  component: RequestForm,
  argTypes: {
    onFormSubmit: { action: "submitted" },
  },
  async beforeEach() {
    localStorage.removeItem("formValues");
  },
};

export default meta;
type Story = StoryObj<typeof RequestForm>;

export const EmptyForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.clear(canvas.getByTestId("firstName"));
    await userEvent.clear(canvas.getByTestId("lastName"));
    await userEvent.clear(canvas.getByTestId("dateOfBirth"));
    await userEvent.clear(canvas.getByTestId("email"));
    await userEvent.selectOptions(canvas.getByRole("combobox"), "");
    await userEvent.click(canvas.getByRole("button", { type: /submit/i }));
    await waitFor(() => {
      expect(canvas.getByTestId("field-error-firstName")).toBeInTheDocument();
      expect(canvas.getByTestId("field-error-lastName")).toBeInTheDocument();
      expect(canvas.getByTestId("field-error-email")).toBeInTheDocument();
      expect(canvas.getByTestId("field-error-list")).toBeInTheDocument();
    });
  },
};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.clear(canvas.getByTestId("firstName"));
    await userEvent.type(canvas.getByTestId("firstName"), "Helena");
    await userEvent.clear(canvas.getByTestId("lastName"));
    await userEvent.type(canvas.getByTestId("lastName"), "van Dorp");
    const dateInput = canvas.getByTestId("dateOfBirth");
    await userEvent.clear(canvas.getByTestId("dateOfBirth"));
    await fireEvent.change(dateInput, { target: { value: "1991-06-21" } });
    await userEvent.clear(canvas.getByTestId("email"));
    await userEvent.type(
      canvas.getByTestId("email"),
      "helena.dorp@example.com",
    );
    await userEvent.selectOptions(canvas.getByRole("combobox"), "Premium Plan");
    await userEvent.click(canvas.getByRole("button", { type: /submit/i }));
  },
};
