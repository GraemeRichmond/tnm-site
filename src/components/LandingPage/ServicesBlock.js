import React from "react";
import { Link } from "react-router-dom";

import { Grid, Button, Typography } from "@material-ui/core";

import ButtonArrow from "../ui/ButtonArrow";

import { services } from "./services";

const ServicesBlock = (props) => {
  return (
    <>
      {services.map((service, index) => (
        <Grid container item key={service.title}>
          <Grid
            container
            direction="row"
            className={props.classes.servicesContainer}
            justify={
              props.matchesSM
                ? "center"
                : index % 2 === 0
                ? undefined
                : "flex-end"
            }
          >
            <Grid
              item
              style={{
                marginLeft:
                  index % 2 !== 0 ? undefined : props.matchesSM ? 0 : "5em",
                textAlign: props.matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">{service.title}</Typography>
              <Typography variant="subtitle1" className={props.classes.mb1}>
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
                className={props.classes.moreButton}
              >
                <span style={{ marginRight: 10 }}>More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={props.theme.palette.common.red}
                />
              </Button>
            </Grid>
            <Grid
              item
              style={{
                marginRight:
                  index % 2 !== 0 ? (props.matchesSM ? 0 : "5em") : undefined,
              }}
            >
              <img
                className={props.classes.icon}
                alt={service.iconAlt}
                src={service.iconSrc}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default ServicesBlock;
