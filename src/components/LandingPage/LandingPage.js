import React from "react";

import { Grid, useMediaQuery } from "@material-ui/core";

import HeroBlock from "./HeroBlock";
import ServicesBlock from "./ServicesBlock";
import BlogBlock from "./BlogBlock";
import InfoBlock from "./InfoBlock";
import CallToAction from "../ui/CallToAction/CallToAction";

import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./useStyles";

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <HeroBlock classes={classes} setValue={props.setValue} theme={theme} />
      </Grid>
      <Grid item>
        <ServicesBlock
          classes={classes}
          matchesSM={matchesSM}
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
          theme={theme}
        />
      </Grid>
      <Grid item>
        <BlogBlock classes={classes} setValue={props.setValue} theme={theme} />
      </Grid>
      <Grid item>
        <InfoBlock
          classes={classes}
          matchesXS={matchesXS}
          matchesSM={matchesSM}
          setValue={props.setValue}
        />
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
