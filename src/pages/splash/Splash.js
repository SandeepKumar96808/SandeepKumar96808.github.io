import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className={`logo_wrapper${props.overlay ? " logo_wrapper-overlay" : ""}`}>
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 2800);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    // As an overlay (on the home page) the splash simply disappears when done;
    // the standalone /splash route redirects to /home as before.
    if (this.state.redirect) {
      return this.props.overlay ? null : <Redirect to="/home" />;
    }
    return (
      <AnimatedSplash theme={this.props.theme} overlay={this.props.overlay} />
    );
  }
}

export default Splash;
