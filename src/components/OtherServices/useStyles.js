import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  card: {
    maxWidth: "58em",
    minWidth: "21em",
    margin: "2em auto 4em auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
}));
