import React from "react";

import { Typography, Grid } from "@material-ui/core";

import TableContent from "./TableContent";

const BackdropContent = (props) => {
  return (
    <Grid item container direction="column" alignItems="center">
      <Grid
        item
        style={{
          backgroundColor: props.theme.palette.common.gold,
          borderRadius: "1em",
          padding: "1em",
          margin: "1em 0",
        }}
      >
        <Grid item container justify="center" style={{ margin: "1em 0 1em 0" }}>
          <Typography
            variant="h3"
            align="center"
            style={{
              color: props.theme.palette.common.grey,
              lineHeight: "1.5em",
            }}
          >
            Table of Countries
            <br />
            with Tooltips
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justify="center">
        <Grid item>
          <TableContent classes={props.classes} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BackdropContent;
