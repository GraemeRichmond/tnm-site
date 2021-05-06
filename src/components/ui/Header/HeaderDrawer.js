import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const HeaderDrawer = (props) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: props.classes.drawer }}
      >
        <div className={props.classes.toolbarMargin} />
        <List disablePadding>
          {props.routes.map((route) => (
            <ListItem
              key={route.link}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.tabIndex);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.tabIndex}
            >
              <ListItemText
                className={props.classes.drawerItem}
                style={
                  props.value === route.tabIndex ? { opacity: 1 } : undefined
                }
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(false);
            }}
            divider
            button
            component={Link}
            to="/extra"
            selected={props.value === false}
            className={props.classes.drawerItemExtra}
          >
            <ListItemText
              className={props.classes.drawerItemExtraText}
              disableTypography
              style={props.value === false ? { color: "#fff" } : undefined}
            >
              Extra
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={props.classes.drawerIconContainer}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
      >
        <MenuIcon className={props.classes.drawerIcon} />
      </IconButton>
    </>
  );
};

export default HeaderDrawer;
