import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

type FilterProps = {
  optionName: string;
  options: number[];
  onSelect: (optionId: number) => void;
  isLoading: boolean;
};

export default function Filter(props: FilterProps): JSX.Element {
  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {props.optionName}
        </InputLabel>
        <NativeSelect
          disabled={props.isLoading}
          onChange={(event) => {
            const album = Number(event.target.value);
            if (!Number.isNaN(album)) {
              props.onSelect(album);
            }
          }}
          defaultValue={props.options[0]}
          inputProps={{
            name: props.optionName,
            id: "uncontrolled-native",
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
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
