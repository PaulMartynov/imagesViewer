import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ModalWindow from "./ModalWindow";

describe("testing ModalWindow", () => {
  test("rendering ModalWindow", () => {
    const deleteFn = jest.fn();
    const close = jest.fn();
    render(
      <ModalWindow
        isOpen={true}
        setClose={close}
        photo={{
          albumId: 1,
          id: 2,
          url: "test-url",
          thumbnailUrl: "test-url-2",
          title: "test-title",
        }}
        deletePhoto={deleteFn}
      />
    );

    expect(screen.queryByTestId("modal-window")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-window-id")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-window-img")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-window-title")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-window-del")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-window-close")).toBeInTheDocument();

    expect(screen.queryByTestId("modal-window-id")?.textContent).toBe("#2");
    expect(screen.queryByTestId("modal-window-title")?.textContent).toBe(
      "test-title"
    );

    userEvent.click(screen.queryByTestId("modal-window-del")!);
    expect(deleteFn).toBeCalled();

    userEvent.click(screen.queryByTestId("modal-window-close")!);
    expect(close).toBeCalled();
  });
  test("rendering ModalWindow whitout photo", () => {
    const deleteFn = jest.fn();
    const close = jest.fn();
    render(
      <ModalWindow
        isOpen={true}
        setClose={close}
        photo={undefined}
        deletePhoto={deleteFn}
      />
    );
    expect(screen.queryByTestId("modal-window-id")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-window-title")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-window-del")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-window-close")).toBeInTheDocument();

    expect(screen.queryByTestId("modal-window-id")?.textContent).toBe("#");
    expect(screen.queryByTestId("modal-window-title")?.textContent).toBe("");

    userEvent.click(screen.queryByTestId("modal-window-del")!);
    expect(deleteFn).not.toBeCalled();

    userEvent.click(screen.queryByTestId("modal-window-close")!);
    expect(close).toBeCalled();
  });
});
