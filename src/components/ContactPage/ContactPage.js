import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";

import ContactForm from "./ContactForm";
import DialogBox from "./DialogBox";
import Alert from "./Alert";
import CallToAction from "../ui/CallToAction/CallToAction";

import { useTheme } from "@material-ui/styles";

import { useStyles } from "./useStyles";

const ContactPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (e) => {
    let valid;

    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setEmailHelper("Email address invalid");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(e.target.value);
        valid = /^(\+)?(\d|-){6,39}$/.test(e.target.value)
          ? !e.target.value.includes("--")
          : false;
        if (!valid) {
          setPhoneHelper("Phone number invalid");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <ContactForm
        theme={theme}
        name={name}
        setName={setName}
        email={email}
        emailHelper={emailHelper}
        phone={phone}
        phoneHelper={phoneHelper}
        message={message}
        setMessage={setMessage}
        setOpen={setOpen}
        onChange={onChange}
        classes={classes}
      />
      <Grid item container lg={8} xl={9}>
        <CallToAction value={props.value} setValue={props.setValue} />
      </Grid>
      <DialogBox
        theme={theme}
        open={open}
        setOpen={setOpen}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        emailHelper={emailHelper}
        phone={phone}
        setPhone={setPhone}
        phoneHelper={phoneHelper}
        message={message}
        setMessage={setMessage}
        setAlert={setAlert}
        classes={classes}
      />
      <Alert alert={alert} setAlert={setAlert} />
    </Grid>
  );
};

export default ContactPage;
