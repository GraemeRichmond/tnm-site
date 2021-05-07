import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Grid, Button, Typography, useMediaQuery } from "@material-ui/core";

import ButtonArrow from "../ui/ButtonArrow";
import CallToAction from "../ui/CallToAction/CallToAction";

import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./useStyles";

import { services } from "../LandingPage/services";

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: "1em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      {services.map((service, index) => (
        <Grid container item key={service.title}>
          <Grid
            container
            direction="row"
            className={classes.servicesContainer}
            style={{
              marginTop: index === 0 ? (matchesSM ? "1em" : "5em") : "5em",
              marginBottom:
                index === services.length - 1
                  ? matchesSM
                    ? "2em"
                    : "4em"
                  : "inherit",
            }}
            justify={
              matchesSM ? "center" : index % 2 === 0 ? undefined : "flex-end"
            }
          >
            <Grid
              item
              style={{
                marginLeft: index % 2 !== 0 ? undefined : matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35em",
              }}
            >
              <Typography variant="h4">{service.title}</Typography>
              <Typography variant="subtitle1" className={classes.mb1}>
                {service.line1}
              </Typography>
              <Typography variant="subtitle1">{service.line2}</Typography>
              <Button
                variant="outlined"
                component={Link}
                to={service.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(index + 1);
                }}
                className={classes.moreButton}
              >
                <span style={{ marginRight: 10 }}>More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.red}
                />
              </Button>
            </Grid>
            <Grid
              item
              style={{
                marginRight:
                  index % 2 !== 0 ? (matchesSM ? 0 : "5em") : undefined,
              }}
            >
              <img
                className={classes.icon}
                alt={service.iconAlt}
                src={service.iconSrc}
                width="225em"
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Services;
