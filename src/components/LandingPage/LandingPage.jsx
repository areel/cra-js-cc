import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const styles = theme =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    header: {
      display: "flex",
      justifyContent: "center"
    }
  });

const LandingPageBase = props => {
  const { classes, className } = props;
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(prev => "Not Implemented Yet");
  }, []);

  return (
    <Paper className={clsx(classes.root, className)}>
      <h1 className={classes.header} data-testid="landing-page">
        {title}
      </h1>
    </Paper>
  );
};

export const LandingPage = withStyles(styles)(LandingPageBase);
