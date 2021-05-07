import React, { useEffect } from "react";

import { Grid, Typography, useMediaQuery } from "@material-ui/core";

import CallToAction from "../ui/CallToAction/CallToAction";

import { useTheme } from "@material-ui/styles";

import { useStyles } from "./useStyles";

import today from "../../assets/vision.svg";

const Blog = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography
          variant="h2"
          align={matchesMD ? "center" : undefined}
          style={{
            fontFamily: "Pacifico",
            marginBottom: matchesMD ? "1em" : 0,
          }}
        >
          Blog
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item lg>
          <img
            src="https://cdn2.myminifactory.com/assets/images/post/ddf4817d-blog-stw-gac-1_resize.jpg"
            alt="flowers growing from statue's head"
            style={{
              width: "100%",
              maxWidth: matchesSM ? "25em" : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "3em" : 0,
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          lg
          style={{ maxWidth: "40em", marginBottom: matchesMD ? "5em" : 0 }}
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Today
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="body1" paragraph>
              Mauris convallis justo eget augue faucibus, quis ultrices felis
              auctor. Praesent rutrum mi in ipsum sollicitudin, eget vestibulum
              metus sagittis. Etiam sit amet tortor in odio egestas tincidunt.
              Orci varius.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Sed dignissim convallis ullamcorper. Integer imperdiet gravida
              velit, eu molestie massa tristique eu. Sed iaculis purus non
              molestie semper. Vestibulum dapibus dolor id gravida luctus.
              Mauris congue rhoncus dolor sit.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Fusce commodo porta lorem, at ornare ex luctus ac. Curabitur
              maximus, nunc vitae vulputate fermentum, nulla urna mollis nisi,
              sed tincidunt magna dolor sit amet massa. Donec convallis, ligula
              quis interdum dignissim, libero libero lacinia lacus, eu egestas
              est erat.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Cras et ipsum sit amet magna pharetra porta sit amet ac tortor.
              Suspendisse potenti. Suspendisse sagittis convallis tempor. Duis
              et.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Morbi maximus sem sit amet rutrum vestibulum. Nunc a sollicitudin
              est. In quis facilisis urna, id aliquam nulla. Nullam tortor
              massa, facilisis ac lacus nec, pellentesque fringilla urna. Nullam
              a.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Yesterday
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="body1" paragraph>
              Aliquam at odio id erat convallis luctus et id quam. Proin dictum
              ante nisl, eu ornare lacus fermentum eu. In libero mauris, gravida
              a vestibulum.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Sed sit amet volutpat tellus, id ultrices diam. Nullam semper
              ipsum ultrices suscipit feugiat. Nulla facilisi. Vivamus in nibh a
              diam interdum pharetra in eget neque. Integer tempor felis at eros
              condimentum tincidunt. Curabitur ultricies.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Suspendisse potenti. Donec tempor dolor magna, nec aliquet ex
              aliquet eu. Donec sed dictum velit. Donec bibendum eros nec purus
              convallis bibendum. Duis ut dui nec mauris iaculis elementum. Ut
              orci ante, rutrum vel justo a, sollicitudin euismod mi. Vivamus
              sollicitudin et enim at aliquet.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Praesent ornare tincidunt diam in porta. Duis eget mauris ligula.
              Cras nec scelerisque sem. Curabitur nec ipsum at nisi pulvinar
              dapibus vitae eget ipsum. In.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Mauris vehicula diam porttitor hendrerit placerat. Fusce ut nunc
              congue, porttitor tellus ut, sollicitudin nisl. Cras feugiat eget
              mauris at.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Nulla dapibus mauris risus, ut sollicitudin erat interdum sit
              amet. Nullam suscipit sapien lectus, at mollis quam pharetra
              accumsan. Aliquam a ornare purus. Duis sed sem id sapien varius
              bibendum.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Phasellus varius sem ac auctor efficitur. Curabitur posuere urna
              tellus, non sollicitudin mauris tempus in.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
          <img
            src={today}
            alt="mountain"
            style={{
              maxWidth: matchesMD ? "25em" : "40em",
              marginBottom: matchesMD ? "2em" : 0,
            }}
          />
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction value={props.value} setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Blog;
