import React from "react";

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
    <div className={"pagination"}>
      <button
        disabled={props.isLoading}
        onClick={() => {
          props.prevPage();
        }}
      >
        {"Prev"}
      </button>
      <input
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
      <span>{`/ ${props.max}`}</span>
      <button
        disabled={props.isLoading}
        onClick={() => {
          props.nextPage();
        }}
      >
        {"Next"}
      </button>
    </div>
  );
}
