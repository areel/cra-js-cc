import React from "react";
import { makeStyles } from "@material-ui/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { LandingPage } from "./components/LandingPage";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const useStyles = makeStyles({
  root: {
    [theme.breakpoints.down("xl")]: {
      maxWidth: "1900px"
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "1220px"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "900px"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "400px"
    },
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto"
  }
});

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <LandingPage />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
