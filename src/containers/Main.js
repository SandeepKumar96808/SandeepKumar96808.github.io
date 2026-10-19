import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import ResumePage from "../pages/resume/Resume.js";
import Publications from "../pages/publications/Publications";

// Play the splash once per browser session, and never for search engine
// crawlers, so the home page content is always what gets indexed.
function shouldShowSplash() {
  if (!settings.isSplash) return false;
  if (/bot|crawl|spider|slurp|lighthouse|headless/i.test(navigator.userAgent)) {
    return false;
  }
  try {
    if (sessionStorage.getItem("splashShown")) return false;
    sessionStorage.setItem("splashShown", "1");
  } catch (e) {
    // Storage unavailable: show the splash.
  }
  return true;
}

export default class Main extends Component {
  showSplash = shouldShowSplash();

  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <Home {...props} theme={this.props.theme} />
                {this.showSplash && (
                  <Splash {...props} theme={this.props.theme} overlay />
                )}
              </>
            )}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/opensource"
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="/publications"
            render={(props) => (
              <Publications {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/resume"
            render={(props) => <ResumePage {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
