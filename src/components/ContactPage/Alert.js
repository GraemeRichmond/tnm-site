import React from "react";

import { Snackbar, IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const Alert = (props) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={props.alert}
      autoHideDuration={3000}
      ContentProps={{
        style: {
          backgroundColor: "#40B041",
        },
      }}
      onClose={(e, reason) => {
        if (reason === "clickaway") {
          return;
        }
        props.setAlert(false);
      }}
      message="Message sent"
      action={
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={(e, reason) => {
              if (reason === "clickaway") {
                return;
              }
              props.setAlert(false);
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};

export default Alert;
