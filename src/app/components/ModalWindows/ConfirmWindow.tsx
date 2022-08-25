import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type ModalWindowProps = {
  isOpen: boolean;
  setClose: () => void;
  confirmedAction: () => void;
  message: string;
};

export default function ConfirmWindow(props: ModalWindowProps): JSX.Element {
  const handleClose = () => {
    props.setClose();
  };

  const deleteFn = () => {
    props.confirmedAction();
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      data-testid={`confirm-window`}
    >
      <DialogTitle id="alert-dialog-title">{`Confirm Action`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <span data-testid={`confirm-window-message`}>{props.message}</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button data-testid={`confirm-window-yes`} onClick={deleteFn}>
          Yes
        </Button>
        <Button
          data-testid={`confirm-window-no`}
          onClick={handleClose}
          autoFocus
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
