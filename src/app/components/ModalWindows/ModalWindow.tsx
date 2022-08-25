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
  photo: IPhoto | undefined;
  deletePhoto: () => void;
};

export default function ModalWindow(props: ModalWindowProps): JSX.Element {
  const handleClose = () => {
    props.setClose();
  };

  const deleteFn = () => {
    if (props.photo) {
      props.deletePhoto();
    }
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      data-testid={`modal-window`}
      maxWidth={"lg"}
    >
      <DialogTitle id="alert-dialog-title" data-testid={`modal-window-id`}>{`#${
        props.photo?.id ?? ""
      }`}</DialogTitle>
      <DialogContent>
        <img
          data-testid={`modal-window-img`}
          className={"photo-image"}
          width={"100%"}
          src={props.photo?.url ?? ""}
          alt={`photo #${props.photo?.id ?? ""}`}
        />
        <DialogContentText
          data-testid={`modal-window-title`}
          id="alert-dialog-description"
        >
          {props.photo?.title ?? ""}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          data-testid={`modal-window-del`}
          color="error"
          onClick={deleteFn}
        >
          Delete
        </Button>
        <Button
          data-testid={`modal-window-close`}
          onClick={handleClose}
          autoFocus
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
