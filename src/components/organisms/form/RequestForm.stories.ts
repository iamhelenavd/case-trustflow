import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor, expect, fireEvent } from "@storybook/test";
import RequestForm, { RequestSchema } from "./Component";
// Mock Data
const handleFormSubmit = (data: RequestSchema) => {
  console.log("Form Submitted:", data);
};

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

// Empty form story
export const EmptyForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simuleer het invullen van het formulier
    await userEvent.clear(canvas.getByTestId("firstName")); // Clear the input
    await userEvent.clear(canvas.getByTestId("lastName")); // Clear the input
    await userEvent.clear(canvas.getByTestId("dateOfBirth")); // Clear the input
    await userEvent.clear(canvas.getByTestId("email")); // Clear the input
    await userEvent.selectOptions(canvas.getByRole("combobox"), ""); // Reset select to default

    // Simuleer het klikken op de submit knop
    await userEvent.click(canvas.getByRole("button", { name: /submit/i }));

    // Wacht op de juiste rendering en controleer of het succesbericht zichtbaar is
    await waitFor(() => {
      expect(canvas.getByTestId("field-error-firstName")).toBeInTheDocument();
      expect(canvas.getByTestId("field-error-lastName")).toBeInTheDocument();
      expect(canvas.getByTestId("field-error-email")).toBeInTheDocument();
      expect(canvas.getByTestId("field-error-list")).toBeInTheDocument();
    });
  },
};

// Filled form story
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simuleer het invullen van het formulier
    await userEvent.clear(canvas.getByTestId("firstName"));
    await userEvent.type(canvas.getByTestId("firstName"), "Helena");
    await userEvent.clear(canvas.getByTestId("lastName")); // Clear the input
    await userEvent.type(canvas.getByTestId("lastName"), "van Dorp");
    const dateInput = canvas.getByTestId("dateOfBirth");
    await userEvent.clear(canvas.getByTestId("dateOfBirth")); // Clear the input
    await fireEvent.change(dateInput, { target: { value: "1991-06-21" } });
    await userEvent.clear(canvas.getByTestId("email")); // Clear the input
    await userEvent.type(
      canvas.getByTestId("email"),
      "helena.dorp@example.com",
    );
    await userEvent.selectOptions(canvas.getByRole("combobox"), "Premium Plan");
    // Simuleer het klikken op de submit knop
    await userEvent.click(canvas.getByRole("button", { name: /submit/i }));

    // Wacht op de juiste rendering en controleer of het succesbericht zichtbaar is
    // await waitFor(() => {
    //   expect(canvas.getByText(/Top Alles is gelukt/i)).toBeInTheDocument();
    // });
  },
};
