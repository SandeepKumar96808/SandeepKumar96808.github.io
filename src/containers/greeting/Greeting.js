import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Link } from "react-router-dom";
import "../../components/button/Button.css";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import heroIllustration from "../../assets/images/sandeep_illustration.png";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Link
                  to="/publications"
                  className="main-button hero-btn"
                  style={{
                    color: theme.body,
                    backgroundColor: theme.text,
                    border: `solid 1px ${theme.text}`,
                  }}
                >
                  Publications
                </Link>
                <Link
                  to="/resume"
                  className="main-button hero-btn hero-btn-outline"
                  style={{
                    color: theme.text,
                    backgroundColor: "transparent",
                    border: `solid 1px ${theme.text}`,
                  }}
                >
                  Resume
                </Link>
                <a
                  className="main-button hero-btn hero-btn-outline"
                  href={greeting.portfolio_repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.text,
                    backgroundColor: "transparent",
                    border: `solid 1px ${theme.text}`,
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              className="greeting-illustration"
              src={heroIllustration}
              alt="Illustration of Sandeep Kumar sitting at a desk"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
