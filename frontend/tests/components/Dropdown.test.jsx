/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dropdown from "../../src/components/Dropdown";

test("renders Dropdown component", () => {
  const items = [
    { _id: "1", name: "Item 1", hex: "#ff0000" },
    { _id: "2", name: "Item 2", hex: "#00ff00" },
  ];
  render(
    <MemoryRouter>
      <Dropdown
        title="Select an item"
        items={items}
        setSelectedItem={() => {}}
      />
    </MemoryRouter>
  );
  const dropdownButton = screen.getByRole("button", {
    name: /select an item/i,
  });
  expect(dropdownButton).toBeInTheDocument();
});
