import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/theme";

import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";
import LandingPage from "./LandingPage/LandingPage";
import Services from "./Services/Services";
import CustomServices from "./CustomServices/CustomServices";
import OtherServices from "./OtherServices/OtherServices";
import MoreServices from "./MoreServices/MoreServices";
import Blog from "./Blog/Blog";
import About from "./About/About";
import ContactPage from "./ContactPage/ContactPage";
import Extra from "./Extra/Extra";

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/customservices"
            render={(props) => (
              <CustomServices
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/otherservices"
            render={(props) => (
              <OtherServices
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/moreservices"
            render={(props) => (
              <MoreServices
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/blog"
            render={(props) => (
              <Blog {...props} value={value} setValue={setValue} />
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => <About {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <ContactPage {...props} value={value} setValue={setValue} />
            )}
          />
          <Route
            exact
            path="/extra"
            render={(props) => (
              <Extra {...props} value={value} setValue={setValue} />
            )}
          />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
