import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlertWindow from "./AlertWindow";

describe("testing AlertWindow", () => {
  test("rendering alert", () => {
    render(
      <AlertWindow
        isOpen={true}
        setClose={jest.fn()}
        message={"test"}
        type={"error"}
      />
    );

    expect(screen.queryByTestId("alert-window")).toBeInTheDocument();
  });
});
