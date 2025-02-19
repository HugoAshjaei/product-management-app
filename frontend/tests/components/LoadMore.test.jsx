/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoadMore from "../../src/components/LoadMore";

describe("LoadMore Component", () => {
  test("renders loading button when loading is true", () => {
    render(
      <LoadMore
        loading={true}
        productsLength={0}
        totalProducts={10}
        loadMoreProducts={() => {}}
      />
    );
    const button = screen.getByText("Loading...");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("renders load more button when productsLength is less than totalProducts and loading is false", () => {
    const loadMoreProducts = jest.fn();
    render(
      <LoadMore
        loading={false}
        productsLength={5}
        totalProducts={10}
        loadMoreProducts={loadMoreProducts}
      />
    );
    const button = screen.getByText("Load more");
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
    fireEvent.click(button);
    expect(loadMoreProducts).toHaveBeenCalled();
  });

  test("renders no more products button when productsLength is equal to totalProducts", () => {
    render(
      <LoadMore
        loading={false}
        productsLength={10}
        totalProducts={10}
        loadMoreProducts={() => {}}
      />
    );
    const button = screen.getByText("No more products to load");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
