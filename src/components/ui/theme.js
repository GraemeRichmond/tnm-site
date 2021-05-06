import { createMuiTheme } from "@material-ui/core/styles";

const tnmRed = "#f1464e";
const tnmGold = "#ffd700";
const tnmGrey = "#868686";
const tnmError = "#ffcc00";

export default createMuiTheme({
  palette: {
    common: {
      red: `${tnmRed}`,
      gold: `${tnmGold}`,
      grey: `${tnmGrey}`,
    },
    primary: {
      main: `${tnmRed}`,
    },
    secondary: {
      main: `${tnmGold}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      color: "white",
      fontWeight: 700,
      fontSize: "1rem",
    },
    extra: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: tnmGrey,
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: tnmRed,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: tnmRed,
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.75rem",
      color: tnmRed,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: tnmGrey,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white",
    },
    body1: {
      fontSize: "1.25em",
      color: tnmGrey,
      fontWeight: 300,
    },
    moreButton: {
      borderColor: tnmRed,
      color: tnmRed,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: tnmRed,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: tnmGrey,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${tnmRed}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${tnmRed}`,
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&$error": {
          color: tnmError,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        "&$error": {
          color: tnmError,
        },
      },
    },
  },
});
