import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import { Grid, Button, Typography, useMediaQuery } from "@material-ui/core";

import ButtonArrow from "../ui/ButtonArrow";

import otherServicesAnimation from "../../animations/integrationAnimation/data.json";

const HeroBlock = (props) => {
  const matchesSM = useMediaQuery(props.theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: otherServicesAnimation,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container item>
      <Grid
        container
        justify={matchesSM ? "center" : "flex-end"}
        alignItems="center"
        direction="row"
      >
        <Grid sm item className={props.classes.heroTextContainer}>
          <Typography variant="h2" align="center">
            Delivering the latest TNM
            <br />
            tech directly to you
          </Typography>
          <Grid
            container
            justify="center"
            className={props.classes.buttonContainer}
          >
            <Grid item>
              <Button
                variant="contained"
                component={Link}
                to="/extra"
                onClick={() => props.setValue(false)}
                className={props.classes.extraButton}
              >
                Extra
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                component={Link}
                to="/blog"
                onClick={() => props.setValue(2)}
                className={props.classes.moreButtonHero}
              >
                <span style={{ marginRight: 10 }}>More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={props.theme.palette.common.red}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item container>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroBlock;
