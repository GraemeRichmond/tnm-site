import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.red,
    width: "100%",
    zIndex: theme.zIndex.modal + 1,
    position: "relative",
    filter: "drop-shadow(0 0 4px black)",
  },
  logo: {
    width: "15em",
    [theme.breakpoints.down("md")]: {
      width: "12em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "9em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));
