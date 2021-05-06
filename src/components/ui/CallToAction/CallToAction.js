import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";

import ButtonArrow from "../ButtonArrow";

import { useTheme } from "@material-ui/styles";

import { useStyles } from "./useStyles";

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      className={
        props.value === 4 ? classes.contactBackground : classes.background
      }
      justify={matchesSM ? "space-evenly" : "space-between"}
      direction={matchesSM ? "column" : "row"}
      style={props.value === 4 && !matchesMD ? { height: "100%" } : undefined}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : props.value === 4 ? "3em" : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        {props.value !== 2 && (
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Solutions.
                <br />
                Real Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                Explore the future.
              </Typography>
              <Grid container item justify={matchesSM ? "center" : undefined}>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/blog"
                  onClick={() => props.setValue(2)}
                  className={classes.moreButton}
                >
                  <span style={{ marginRight: 5 }}>More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.red}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item>
        {props.value !== false && (
          <Button
            variant="contained"
            component={Link}
            to="/extra"
            onClick={() => props.setValue(false)}
            className={classes.extraButton}
          >
            Extra
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default CallToAction;
