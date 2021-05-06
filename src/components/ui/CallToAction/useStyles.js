import { makeStyles } from "@material-ui/core/styles";

import background from "../../../assets/cta-background.jpg";
import mobBackground from "../../../assets/cta-mob-background.jpg";
import contactBackground from "../../../assets/cta-contact-background.jpg";

export const useStyles = makeStyles((theme) => ({
  moreButton: {
    ...theme.typography.moreButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "40em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  contactBackground: {
    backgroundImage: `url(${contactBackground})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "40em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  extraButton: {
    ...theme.typography.extra,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.gold,
    fontSize: "1.5rem",
    marginLeft: "2em",
    marginRight: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));
