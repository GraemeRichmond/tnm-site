import React from "react";
import { Link } from "react-router-dom";

import { Grid, Button, Typography } from "@material-ui/core";

import ButtonArrow from "../ui/ButtonArrow";

const InfoBlock = (props) => {
  return (
    <Grid
      container
      item
      direction="row"
      alignItems="center"
      className={props.classes.infoBackground}
    >
      <Grid
        item
        container
        style={{
          textAlign: props.matchesXS ? "center" : "inherit",
        }}
        direction={props.matchesXS ? "column" : "row"}
      >
        <Grid
          item
          sm
          style={{
            marginLeft: props.matchesXS ? 0 : props.matchesSM ? "2em" : "5em",
          }}
        >
          <Grid
            container
            direction="column"
            style={{ marginBottom: props.matchesXS ? "10em" : 0 }}
          >
            <Typography variant="h2" style={{ color: "white" }}>
              About Us
            </Typography>
            <Typography variant="subtitle2">Who we are.</Typography>
            <Grid item>
              <Button
                variant="outlined"
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
                className={props.classes.moreButton}
                style={{ color: "white", borderColor: "white" }}
              >
                <span style={{ marginRight: 10 }}>More</span>
                <ButtonArrow width={10} height={10} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm
          style={{
            marginRight: props.matchesXS ? 0 : props.matchesSM ? "2em" : "5em",
            textAlign: props.matchesXS ? "center" : "right",
          }}
        >
          <Grid container direction="column">
            <Typography variant="h2" style={{ color: "white" }}>
              Contact Us
            </Typography>
            <Typography variant="subtitle2">Get in touch.</Typography>
            <Grid item>
              <Button
                variant="outlined"
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
                className={props.classes.moreButton}
                style={{ color: "white", borderColor: "white" }}
              >
                <span style={{ marginRight: 10 }}>More</span>
                <ButtonArrow width={10} height={10} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoBlock;
