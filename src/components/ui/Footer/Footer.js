import React from "react";
import { Link } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";

import footerLogo from "../../../assets/footerLogo.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";

import { useStyles } from "./useStyles";

import { pages } from "./pages";

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          {pages.map((routes, index) => (
            <Grid item key={routes[0].link} className={classes.gridItem}>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ margin: 0 }}
              >
                {routes.map((route, i) => (
                  <Grid
                    item
                    key={i}
                    component={Link}
                    to={route.link}
                    onClick={() => {
                      props.setValue(index);
                      if (index === 1) props.setSelectedIndex(i);
                      else props.setSelectedIndex(0);
                    }}
                    className={classes.link}
                  >
                    {route.name}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <img alt="site logo" src={footerLogo} className={classes.logo} />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
