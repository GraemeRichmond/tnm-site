import React from "react";
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

import { services } from "./services";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";

const MoreServices = (props) => {
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
              to="/otherservices"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img src={backArrow} alt="Other Services" />
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
            <Typography variant="h2">More Services</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Nullam molestie cursus quam quis tincidunt. Fusce diam justo,
              condimentum at ligula at, sagittis finibus mauris. Suspendisse
              porttitor elementum scelerisque. Proin tempus est est. Phasellus
              accumsan urna ac ex cursus, a varius nisl consequat. Vestibulum.
            </Typography>
            <Typography variant="body1" paragraph>
              Fusce eget justo imperdiet, iaculis nunc blandit, dapibus tellus.
              In facilisis aliquet purus sit amet consectetur. Maecenas gravida
              scelerisque tortor, et semper mi suscipit quis. Aliquam eu eros
              pharetra, semper orci ut, molestie sem. Maecenas nec dignissim
              libero, eget fringilla.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/customservices"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img src={forwardArrow} alt="Custom Services" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      {services.map((service, index) => (
        <Grid
          key={service.title}
          item
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          justify={index % 2 === 0 ? undefined : "flex-end"}
          className={classes.rowContainer}
          style={
            index === 0
              ? { marginTop: "10em", marginBottom: "10em" }
              : { marginBottom: "10em" }
          }
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="h4"
                  align={
                    matchesSM
                      ? "center"
                      : index % 2 === 0
                      ? undefined
                      : "center"
                  }
                  gutterBottom
                >
                  {service.title}
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={service.iconSrc}
                  alt={service.iconAlt}
                  style={service.iconStyle}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={matchesSM ? undefined : service.paragraphStyle}
            className={classes.paragraphContainer}
          >
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              {service.paragraph1}
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              {service.paragraph2}
            </Typography>
          </Grid>
        </Grid>
      ))}

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default MoreServices;
