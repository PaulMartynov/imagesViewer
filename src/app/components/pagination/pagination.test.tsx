import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Pagination from "./pagination";

describe("testing pagination component", () => {
  test("render pagination", () => {
    const next = jest.fn();
    const prev = jest.fn();
    const toCurrent = jest.fn();
    render(
      <Pagination
        nextPage={next}
        prevPage={prev}
        toCurrentPage={toCurrent}
        min={1}
        max={16}
        currentPage={1}
        isLoading={false}
      />
    );
    expect(screen.queryByTestId(`pagination-prev`)).toBeInTheDocument();
    expect(screen.queryByTestId(`pagination-next`)).toBeInTheDocument();
    expect(screen.queryByTestId(`pagination-current`)).toBeInTheDocument();
    expect(
      (screen.queryByTestId(`pagination-current`) as HTMLInputElement)?.value
    ).toBe("1");

    userEvent.click(screen.queryByTestId(`pagination-prev`)!);
    expect(prev).toBeCalled();

    userEvent.click(screen.queryByTestId(`pagination-next`)!);
    expect(next).toBeCalled();

    userEvent.paste(screen.queryByTestId(`pagination-current`)!, "2");

    expect(toCurrent).toBeCalledWith(12);
  });
});
