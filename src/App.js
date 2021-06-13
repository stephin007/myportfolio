import React, { Fragment, useEffect, useState } from "react";
import ReactGa from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalstyles";

import { About, Home, Navbar, Project } from "./pages";

// import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    ReactGa.initialize("UA-174591512-1");

    // To record Page View
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Fragment>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Project} />
            {/* <Route exact path='/contact' component={Contact}/> */}
          </Switch>
        </Fragment>
      </Router>
    </ThemeProvider>
  );
}

export default App;
