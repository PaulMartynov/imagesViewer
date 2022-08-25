import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type PaginationProps = {
  nextPage: () => void;
  prevPage: () => void;
  toCurrentPage: (pageNum: number) => void;
  min: number;
  max: number;
  currentPage: number;
  isLoading: boolean;
};

export default function Pagination(props: PaginationProps): JSX.Element {
  return (
    <Stack direction="row">
      <Button
        data-testid={`pagination-prev`}
        disabled={props.isLoading}
        onClick={() => {
          props.prevPage();
        }}
        variant="contained"
      >
        Prev
      </Button>
      <input
        data-testid={`pagination-current`}
        value={props.currentPage}
        type={"number"}
        min={props.min}
        max={props.max}
        required={true}
        disabled={props.isLoading}
        onChange={(event) => {
          const page = Number(event.target.value);
          if (!Number.isNaN(page)) {
            props.toCurrentPage(page);
          }
        }}
      />
      <Button
        data-testid={`pagination-next`}
        disabled={props.isLoading}
        onClick={() => {
          props.nextPage();
        }}
        variant="contained"
      >
        Next
      </Button>
    </Stack>
  );
}
