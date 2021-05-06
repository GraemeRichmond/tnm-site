import React from "react";

import { Grid, Typography, useMediaQuery, Avatar } from "@material-ui/core";

import CallToAction from "../ui/CallToAction/CallToAction";

import { useTheme } from "@material-ui/styles";

import { useStyles } from "./useStyles";

import history from "../../assets/history.svg";
import avatar from "../../assets/avatar.jpg";

const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" align="center">
          About Us
        </Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Phasellus in vehicula leo. Curabitur aliquet augue sit amet metus
          placerat malesuada. Vivamus ut vestibulum sapien, id laoreet odio. Sed
          feugiat massa metus, vel euismod risus faucibus at. Ut imperdiet id ex
          et blandit. Ut aliquet sagittis lacus id imperdiet. Cras mollis dui
          quis ex interdum, sit amet cursus nulla.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="space-evenly"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            style={{ maxWidth: "35em" }}
            lg
          >
            <Grid item>
              <Typography variant="h2" gutterBottom>
                Our History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                In consequat rutrum varius. In molestie sit amet magna ut.
              </Typography>
              <Typography variant="body1" paragraph>
                Morbi hendrerit sem sed consequat mattis. Proin sit amet
                volutpat neque. Duis ultrices felis placerat.
              </Typography>
              <Typography variant="body1" paragraph>
                Suspendisse id finibus orci. Donec lectus lorem, mattis in
                ligula non, dapibus volutpat nibh. Etiam condimentum mi leo, sed
                tristique risus facilisis in. Mauris rutrum justo urna, non
                sagittis turpis bibendum eget. Pellentesque mi justo, vestibulum
                et blandit nec, interdum.
              </Typography>
              <Typography variant="body1" paragraph>
                Phasellus condimentum sem nisi, eget finibus elit placerat
                consectetur. In sed tincidunt justo. Aenean rhoncus fringilla
                massa in faucibus. Sed dapibus tellus massa, mattis dignissim
                nisl convallis id. Donec eu aliquam erat. Duis id massa
                tincidunt velit mattis gravida at hendrerit mauris. Sed
                tincidunt pretium lacus, quis imperdiet nulla bibendum at.
                Suspendisse id varius lacus. Vivamus eu sapien nibh. Phasellus
                blandit purus et arcu finibus, eget venenatis purus luctus.
                Quisque.
              </Typography>
              <Typography variant="body1" paragraph>
                Etiam euismod, nunc in maximus eleifend, urna magna lacinia mi,
                sed finibus mauris sapien venenatis.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={history}
              alt="book and quill"
              style={{ maxHeight: matchesXS ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ margin: "5em 0" }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Our Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Julius
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Front-end Developer
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="engineer" src={avatar} className={classes.avatar} />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default About;
