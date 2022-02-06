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
  deletePhoto: (id: number) => void;
};

export default function ModalWindow(props: ModalWindowProps): JSX.Element {
  const handleClose = () => {
    props.setClose();
  };

  const deleteFn = () => {
    if (props.photo) {
      props.deletePhoto(props.photo.id);
    }
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`#${
        props.photo?.id ?? ""
      }`}</DialogTitle>
      <DialogContent>
        <img
          width={"100%"}
          src={props.photo?.url ?? ""}
          alt={`photo #${props.photo?.id ?? ""}`}
        />
        <DialogContentText id="alert-dialog-description">
          {props.photo?.title ?? ""}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={deleteFn}>Delete</Button>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
