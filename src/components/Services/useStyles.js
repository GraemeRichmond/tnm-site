import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  mb1: {
    marginBottom: "1em",
  },
  moreButton: {
    ...theme.typography.moreButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginTop: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));
