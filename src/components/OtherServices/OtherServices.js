import React from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
  Card,
  CardMedia,
} from "@material-ui/core";

import CallToAction from "../ui/CallToAction/CallToAction";

import { useTheme } from "@material-ui/styles";

import { useStyles } from "./useStyles";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";

const OtherServices = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

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
              to="/customservices"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img src={backArrow} alt="Custom Services" />
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
            <Typography variant="h2">Other Services</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Straightforward Connectivity.
            </Typography>
            <Typography variant="body1" paragraph>
              Vestibulum et euismod ante. Nunc tristique ac odio nec posuere.
              Mauris ultricies nulla ac magna gravida dictum. Aliquam in lacus
              augue. Sed auctor aliquet tellus, et vulputate arcu auctor quis.
              Cras vitae lectus eget tellus malesuada facilisis at in dui.
              Suspendisse vel blandit sapien. Quisque.
            </Typography>
            <Typography variant="body1" paragraph>
              Fusce aliquam, nisl in porta pharetra, velit ante volutpat massa,
              nec porta erat mauris eu nibh. Pellentesque porta posuere ligula
              et mattis. Pellentesque lacus ligula, molestie ac imperdiet et,
              aliquet vitae nibh. Vivamus gravida gravida mi aliquam
              scelerisque. Etiam consequat enim id nunc tincidunt, ultrices.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/moreservices"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img src={forwardArrow} alt="More Services" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container>
        <Card className={classes.card}>
          <CardMedia
            component="video"
            autoPlay={true}
            loop={true}
            muted={true}
            alt="Triple Axis Tourbillon"
            src="https://cdn2.myminifactory.com/assets/images/general/Tourbillon_1x_4xCOMPRESSED.mp4"
            title="Triple Axis Tourbillon"
          />
        </Card>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default OtherServices;
