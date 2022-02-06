import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "./filter";

describe("testing filter component", () => {
  test("rendering filter", () => {
    const selectFn = jest.fn();
    render(
      <Filter
        optionName={"test"}
        options={[]}
        onSelect={selectFn}
        isLoading={false}
      />
    );

    expect(screen.queryByTestId("filter-test")).toBeInTheDocument();
  });
});
