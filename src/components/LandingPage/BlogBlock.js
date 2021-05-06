import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, Grid, Button, Typography } from "@material-ui/core";

import ButtonArrow from "../ui/ButtonArrow";

const BlogBlock = (props) => {
  return (
    <Grid container item>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: "60em", marginTop: "6em" }}
      >
        <Card className={props.classes.blogCard}>
          <CardContent>
            <Grid container direction="column" style={{ textAlign: "center" }}>
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  Our Blog
                </Typography>
              </Grid>
              <Grid item style={{ textAlign: "center" }}>
                <Typography variant="subtitle1">
                  Keep up-to-date with our latest insights and newest
                  technologies.
                </Typography>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/blog"
                  onClick={() => props.setValue(2)}
                  className={props.classes.moreButtonHero}
                >
                  <span style={{ marginRight: 10 }}>More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={props.theme.palette.common.red}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={props.classes.blogBackground} />
      </Grid>
    </Grid>
  );
};

export default BlogBlock;
