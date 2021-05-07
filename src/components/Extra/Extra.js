import React, { useState, useEffect } from "react";

import { Typography, Backdrop, Grid, useMediaQuery } from "@material-ui/core";

import DropdownMenu from "./DropdownMenu";
import BackdropContent from "./BackdropContent";
import CallToAction from "../ui/CallToAction/CallToAction";

import { useStyles } from "./useStyles";

import theme from "../ui/theme";

const Extra = (props) => {
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };
  const handleToggle = () => {
    setOpenBackdrop(!openBackdrop);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h3" style={{ marginTop: "2em" }}>
            Extra Stuff
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : "left"}
            style={{
              margin: matchesXS ? "4em 1em" : "4em",
              maxWidth: "25em",
            }}
          >
            Below is a collapsible{" "}
            <span className={classes.highlight}>Accordion</span> dropdown menu
            which contains a <span className={classes.highlight}>Button</span>{" "}
            leading to a <span className={classes.highlight}>Backdrop</span>{" "}
            that displays a <span className={classes.highlight}>Table</span>{" "}
            complete with <span className={classes.highlight}>Tooltips</span>.
          </Typography>
        </Grid>
        <Grid item>
          <DropdownMenu
            theme={theme}
            classes={classes}
            handleToggle={handleToggle}
          />
        </Grid>
        <Backdrop
          className={classes.backdrop}
          open={openBackdrop}
          onClick={handleCloseBackdrop}
        >
          <BackdropContent theme={theme} classes={classes} />
        </Backdrop>
      </Grid>
      <Grid item>
        <CallToAction value={props.value} setValue={props.setValue} />
      </Grid>
    </>
  );
};

export default Extra;
