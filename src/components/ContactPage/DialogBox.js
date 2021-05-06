import React from "react";

import {
  Grid,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogContent,
  useMediaQuery,
} from "@material-ui/core";

import send from "../../assets/send.svg";

const DialogBox = (props) => {
  const matchesSM = useMediaQuery(props.theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(props.theme.breakpoints.down("xs"));

  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      fullScreen={matchesXS}
      style={{ zIndex: props.theme.zIndex.modal + 3 }}
      PaperProps={{
        style: {
          padding: matchesXS ? "1em 0" : matchesSM ? "3em 5em" : "3em 10em",
        },
      }}
    >
      <DialogContent>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Confrimation
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              label="Name"
              id="name"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              label="Email"
              id="email"
              value={props.email}
              error={props.emailHelper.length !== 0 && props.email.length !== 0}
              helperText={props.email.length === 0 ? "" : props.emailHelper}
              onChange={props.onChange}
              fullWidth
            />
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              label="Phone"
              id="phone"
              value={props.phone}
              error={props.phoneHelper.length !== 0 && props.phone.length !== 0}
              helperText={props.phone.length === 0 ? "" : props.phoneHelper}
              onChange={props.onChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
          <TextField
            id="message"
            value={props.message}
            className={props.classes.message}
            InputProps={{ disableUnderline: true }}
            multiline
            fullWidth
            rows={10}
            onChange={(e) => props.setMessage(e.target.value)}
          />
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          style={{ marginTop: "2em" }}
        >
          <Grid item>
            <Button
              color="primary"
              style={{
                fontWeight: 400,
                marginBottom: matchesSM ? "1em" : undefined,
              }}
              onClick={() => props.setOpen(false)}
            >
              Go Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              disabled={
                props.name.length === 0 ||
                props.email.length === 0 ||
                props.emailHelper.length !== 0 ||
                props.phone.length === 0 ||
                props.phoneHelper.length !== 0 ||
                props.message.length === 0
              }
              className={props.classes.sendButton}
              onClick={() => {
                props.setOpen(false);
                props.setName("");
                props.setEmail("");
                props.setPhone("");
                props.setMessage("");
                props.setAlert(true);
              }}
            >
              Send
              <img
                src={send}
                alt="paper aeroplane"
                style={{ marginLeft: "1em" }}
              />
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
