import React from "react";

type FilterProps = {
  optionName: string;
  options: number[];
  onSelect: (optionId: number) => void;
  isLoading: boolean;
};

export default function Filter(props: FilterProps): JSX.Element {
  return (
    <div className={"filter"}>
      <select
        disabled={props.isLoading}
        onChange={(event) => {
          const album = Number(event.target.value);
          if (!Number.isNaN(album)) {
            props.onSelect(album);
          }
        }}
      >
        {props.options.map((option, index) => {
          if (index === 0) {
            return (
              <option key={`option-${option}`} value={option} selected>
                {"All"}
              </option>
            );
          }
          return (
            <option
              key={`option-${option}`}
              value={option}
            >{`${props.optionName} #${option}`}</option>
          );
        })}
      </select>
    </div>
  );
}
