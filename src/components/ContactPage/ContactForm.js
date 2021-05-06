import React from "react";

import {
  Grid,
  Typography,
  Button,
  TextField,
  useMediaQuery,
} from "@material-ui/core";

import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import send from "../../assets/send.svg";

const ContactForm = (props) => {
  const matchesMD = useMediaQuery(props.theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(props.theme.breakpoints.down("sm"));

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        marginBottom: matchesSM ? "4em" : "3em",
        marginTop: matchesSM ? "1em" : "3em",
      }}
      lg={4}
      xl={3}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="h2"
              align={matchesMD ? "center" : undefined}
              style={{ lineHeight: 1 }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: props.theme.palette.common.red }}
            >
              We'd love to hear from you.
            </Typography>
          </Grid>
          <Grid item container style={{ marginTop: "2em" }}>
            <Grid item>
              <img
                src={phoneIcon}
                alt="phone"
                style={{ marginRight: "0.5em" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: props.theme.palette.common.red,
                  fontSize: "1rem",
                }}
              >
                <a
                  href="tel:0123456789"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  (012) 345-6789
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container style={{ marginBottom: "2em" }}>
            <Grid item>
              <img
                src={emailIcon}
                alt="mail"
                style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: props.theme.palette.common.red,
                  fontSize: "1rem",
                }}
              >
                <a
                  href="mailto:example@email.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  example@email.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column" style={{ maxWidth: "20em" }}>
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
                error={
                  props.emailHelper.length !== 0 && props.email.length !== 0
                }
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
                error={
                  props.phoneHelper.length !== 0 && props.phone.length !== 0
                }
                helperText={props.phone.length === 0 ? "" : props.phoneHelper}
                onChange={props.onChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: "20em" }}>
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
          <Grid item container justify="center" style={{ marginTop: "2em" }}>
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
              onClick={() => props.setOpen(true)}
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
      </Grid>
    </Grid>
  );
};

export default ContactForm;
