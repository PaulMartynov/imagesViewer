import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import PhotoCard from "./photoCard";

describe("testing PhotoCard component", () => {
  test("render PhotoCard", () => {
    const click = jest.fn();
    render(
      <PhotoCard
        photo={{
          albumId: 1,
          id: 2,
          title: "",
          url: "",
          thumbnailUrl: "test-url",
        }}
        onClick={click}
      />
    );

    expect(screen.queryByTestId("photo-card-img")).toBeInTheDocument();
    expect(screen.queryByTestId("photo-card")).toBeInTheDocument();

    expect(
      (screen.queryByTestId("photo-card-img") as HTMLImageElement).src
    ).toContain("test-url");

    userEvent.click(screen.queryByTestId("photo-card")!);
    expect(click).toBeCalled();
  });
});
