import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const DropdownMenu = (props) => {
  return (
    <Accordion
      style={{
        border: `5px solid ${props.theme.palette.common.red}`,
        borderRadius: "20px",
        margin: "2em 0 9em 0",
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            style={{
              color: props.theme.palette.common.red,
              margin: "2em 0",
            }}
          />
        }
        aria-controls="accordion-content"
        id="accordion-header"
      >
        <Typography className={props.classes.accordianHeading}>
          Reveal Backdrop Button
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item>
            <Button
              variant="outlined"
              className={props.classes.backdropButton}
              onClick={props.handleToggle}
            >
              Display Table
              <br />
              using Backdrop
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default DropdownMenu;
