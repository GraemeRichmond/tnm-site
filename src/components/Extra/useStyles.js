import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  highlight: {
    color: theme.palette.common.red,
    fontWeight: "bold",
  },
  accordianHeading: {
    fontSize: "1.5em",
    fontFamily: "Raleway",
    color: theme.palette.common.red,
    fontWeight: "bold",
  },
  backdrop: {
    zIndex: theme.zIndex.modal + 3,
    color: "#fff",
  },
  backdropButton: {
    ...theme.typography.moreButton,
    backgroundColor: theme.palette.common.red,
    fontSize: "1.5rem",
    color: "#fff",
    height: 100,
    padding: 75,
    margin: "3em 5em 5em 5em",
    [theme.breakpoints.down("sm")]: {
      margin: "1em 0 2em 0",
    },
    "&:hover": {
      color: theme.palette.common.red,
    },
  },
  table: {
    width: "80em",
    [theme.breakpoints.down("md")]: {
      width: "55em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "20em",
    },
  },
}));
