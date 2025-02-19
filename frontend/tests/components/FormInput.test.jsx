/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormInput from "../../src/components/FormInput";

describe("FormInput Component", () => {
  const defaultProps = {
    label: "Test Label",
    type: "text",
    id: "test-input",
    value: "",
    onChange: jest.fn(),
    readOnly: false,
    required: false,
  };

  test("renders the input with correct label", () => {
    render(<FormInput {...defaultProps} />);
    expect(screen.getByLabelText("Test Label:")).toBeInTheDocument();
  });

  test("renders the input with correct type", () => {
    render(<FormInput {...defaultProps} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
  });

  test("calls onChange when input value changes", () => {
    render(<FormInput {...defaultProps} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  test("renders the input as read-only when readOnly is true", () => {
    render(<FormInput {...defaultProps} readOnly={true} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readOnly");
  });

  test("renders the input as required when required is true", () => {
    render(<FormInput {...defaultProps} required={true} />);
    expect(screen.getByRole("textbox")).toBeRequired();
  });

  test("renders the input with correct value", () => {
    render(<FormInput {...defaultProps} value="test value" />);
    expect(screen.getByRole("textbox")).toHaveValue("test value");
  });
});
