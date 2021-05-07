import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import CallToAction from "../ui/CallToAction/CallToAction";

import { useTheme } from "@material-ui/styles";

import { useStyles } from "./useStyles";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import stopwatch from "../../assets/stopwatch.svg";
import money from "../../assets/cash.svg";
import lightbulb from "../../assets/bulb.svg";

const CustomServices = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/moreservices"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img src={backArrow} alt="More Services" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          direction="row"
          className={classes.heading}
          align={matchesSM ? "center" : undefined}
        >
          <Grid item style={{ minWidth: "100%" }}>
            <Typography variant="h2">Custom Services</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Quisque vulputate vehicula venenatis. In hac habitasse platea
              dictumst. Mauris interdum posuere justo, vel consectetur nunc
              auctor ac. Nullam congue.
            </Typography>
            <Typography variant="body1" paragraph>
              Cras sollicitudin turpis dui, id interdum nibh porta id. Duis erat
              ipsum, finibus et tortor ac, suscipit iaculis turpis. Nunc dictum
              eu erat sit amet rhoncus. Vivamus pretium enim ut dolor pulvinar
              sollicitudin. Phasellus nec eros sed odio mollis consectetur.
              Quisque ut pretium sapien, vitae.
            </Typography>
            <Typography variant="body1" paragraph>
              Vestibulum et euismod ante. Nunc tristique ac odio nec posuere.
              Mauris ultricies nulla ac magna gravida dictum. Aliquam in lacus
              augue. Sed auctor aliquet tellus, et vulputate arcu auctor quis.
              Cras vitae lectus eget tellus malesuada facilisis at in dui.
              Suspendisse vel blandit sapien. Quisque.
            </Typography>
            <Typography variant="body1" paragraph>
              Maecenas quis aliquet justo. Morbi a venenatis dui. Pellentesque
              mi nulla, aliquam eu tortor sed.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/otherservices"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img src={forwardArrow} alt="Other Services" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify="center"
        style={{
          marginTop: "10em",
          marginBottom: "10em",
        }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4" style={{ marginBottom: "1em" }}>
              Saving Time
            </Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" style={{ marginBottom: "1em" }}>
              Saving Money
            </Typography>
          </Grid>
          <Grid item>
            <img src={money} alt="money" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4" style={{ marginBottom: "1em" }}>
              Saving Energy
            </Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginBottom: "5em" }}
        align={matchesSM ? "center" : undefined}
      >
        <Grid item container className={classes.itemContainer}>
          <Grid item style={{ minWidth: "100%" }}>
            <Typography variant="h4">Digital Data Documentation</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Low cost. No waste. Fewer Errors.
            </Typography>
            <Typography variant="body1" paragraph>
              Praesent blandit tempor bibendum. Phasellus fermentum posuere
              nisi, at commodo ex. Vestibulum ante ipsum primis in faucibus orci
              luctus et.
            </Typography>
            <Typography variant="body1" paragraph>
              Donec pharetra eget tortor quis imperdiet. Suspendisse massa diam,
              molestie at massa sit amet, mollis.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomServices;
