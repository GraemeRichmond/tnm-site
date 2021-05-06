import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  message: {
    border: `2px solid ${theme.palette.common.red} `,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.extra,
    borderRadius: 50,
    height: 45,
    width: 200,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.gold,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));
