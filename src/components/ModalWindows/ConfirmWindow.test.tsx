import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ConfirmWindow from "./ConfirmWindow";

describe("testing AlertWindow", () => {
  test("rendering alert", () => {
    const confirm = jest.fn();
    const close = jest.fn();
    render(
      <ConfirmWindow
        isOpen={true}
        setClose={close}
        message={"test"}
        confirmedAction={confirm}
      />
    );

    expect(screen.queryByTestId("confirm-window")).toBeInTheDocument();
    expect(screen.queryByTestId("confirm-window-message")).toBeInTheDocument();
    expect(screen.queryByTestId("confirm-window-yes")).toBeInTheDocument();
    expect(screen.queryByTestId("confirm-window-no")).toBeInTheDocument();

    expect(screen.queryByTestId("confirm-window-message")?.textContent).toBe(
      "test"
    );

    userEvent.click(screen.queryByTestId("confirm-window-yes")!);
    expect(confirm).toBeCalled();

    userEvent.click(screen.queryByTestId("confirm-window-no")!);
    expect(close).toBeCalled();
  });
});
