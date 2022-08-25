import React from "react";
import { Alert, AlertColor, Snackbar } from "@mui/material";

type AlertWindowProps = {
  isOpen: boolean;
  setClose: () => void;
  message: string;
  type: AlertColor;
};

export default function AlertWindow(props: AlertWindowProps): JSX.Element {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    props.setClose();
  };

  return (
    <Snackbar open={props.isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        data-testid={`alert-window`}
        variant="filled"
        onClose={handleClose}
        severity={props.type}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}
