import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button } from "@material-ui/core";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { ElevationScroll } from "./ElevationScroll";
import HeaderTabs from "./HeaderTabs";
import HeaderDrawer from "./HeaderDrawer";

import { useStyles } from "./useStyles";

import { menuOptions } from "./menuOptions";

import logo from "../../../assets/logo.svg";

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const routes = useMemo(
    () => [
      { name: "Home", link: "/", tabIndex: 0 },
      {
        name: "Services",
        link: "/services",
        tabIndex: 1,
        ariaControls: anchorEl ? "simple-menu" : undefined,
        ariaHasPopup: anchorEl ? "true" : undefined,
        onMouseOver: (e) => handleMouseOver(e),
      },
      { name: "Blog", link: "/blog", tabIndex: 2 },
      { name: "About Us", link: "/about", tabIndex: 3 },
      { name: "Contact Us", link: "/contact", tabIndex: 4 },
    ],
    [anchorEl]
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.tabIndex) {
            props.setValue(route.tabIndex);
            if (route.menuIndex && route.menuIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.menuIndex);
            }
          }
          break;
        case "/extra":
          props.setValue(false);
          break;
        default:
          break;
      }
    });
  }, [props.value, props.selectedIndex, routes, props]);

  const tabs = (
    <HeaderTabs
      value={props.value}
      setValue={props.setValue}
      selectedIndex={props.selectedIndex}
      setSelectedIndex={props.setSelectedIndex}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      classes={classes}
      routes={routes}
      theme={theme}
    />
  );

  const drawer = (
    <HeaderDrawer
      value={props.value}
      setValue={props.setValue}
      classes={classes}
      routes={routes}
    />
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <img alt="logo" src={logo} className={classes.logo} />
            </Button>
            {matchesMD ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};

export default Header;
