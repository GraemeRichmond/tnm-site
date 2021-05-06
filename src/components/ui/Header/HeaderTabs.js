import { Link } from "react-router-dom";

import { Tab, Tabs, Menu, MenuItem, Button } from "@material-ui/core";

import { menuOptions } from "./menuOptions";

const HeaderTabs = (props) => {
  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleMenuItemClick = (e, index) => {
    props.setSelectedIndex(index);
    props.setAnchorEl(null);
    props.setOpenMenu(false);
  };

  const handleClose = () => {
    props.setAnchorEl(null);
    props.setOpenMenu(false);
  };

  return (
    <>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={props.classes.tabContainer}
      >
        {props.routes.map((route) => (
          <Tab
            key={route.link}
            className={props.classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-controls={route.ariaControls}
            aria-haspopup={route.ariaHasPopup}
            onMouseOver={route.onMouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        button="true"
        component={Link}
        to="/extra"
        onClick={() => props.setValue(false)}
        className={props.classes.button}
      >
        Extra
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={props.openMenu}
        onClose={handleClose}
        classes={{ paper: props.classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: props.theme.zIndex.modal + 2 }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.link}
            component={Link}
            to={option.link}
            classes={{ root: props.classes.menuItem }}
            selected={index === props.selectedIndex && props.value === 1}
            onClick={(e) => {
              handleMenuItemClick(e, index);
              props.setValue(1);
              handleClose();
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HeaderTabs;
