import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import PaperCard from "../../components/paperCard/PaperCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import { greeting, publicationsHeader, publications } from "../../portfolio.js";
import "./Publications.css";

const FILTERS = ["All", "Conference", "Workshop", "Journal"];

class Publications extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "All" };
  }

  render() {
    const theme = this.props.theme;
    const { filter } = this.state;
    const papers = publications.data;
    const counts = FILTERS.reduce((acc, f) => {
      acc[f] =
        f === "All" ? papers.length : papers.filter((p) => p.type === f).length;
      return acc;
    }, {});
    const visible = papers
      .filter((p) => filter === "All" || p.type === filter)
      .sort((a, b) => b.year - a.year);

    return (
      <div className="publications-main">
        <Header theme={theme} />
        <div className="publications-container">
          <Fade bottom duration={1200} distance="30px">
            <div className="publications-header">
              <h1 className="publications-title" style={{ color: theme.text }}>
                {publicationsHeader.title}
              </h1>
              <p
                className="publications-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {publicationsHeader.description}
              </p>
              <p
                className="publications-note"
                style={{ color: theme.secondaryText }}
              >
                <strong style={{ color: theme.text }}>
                  {publicationsHeader.authorName}
                </strong>{" "}
                marks my name in the author lists.
              </p>
              <a
                className="publications-scholar-link"
                href={greeting.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.text, borderColor: theme.text }}
              >
                <i className="fas fa-graduation-cap" aria-hidden="true"></i>{" "}
                Google Scholar profile
              </a>
            </div>
          </Fade>

          <div className="publications-filters" role="tablist">
            {FILTERS.filter((f) => counts[f] > 0).map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className="publications-filter-btn"
                  onClick={() => this.setState({ filter: f })}
                  style={{
                    color: active ? theme.body : theme.text,
                    backgroundColor: active ? theme.text : "transparent",
                    borderColor: theme.text,
                  }}
                >
                  {f} <span className="publications-count">{counts[f]}</span>
                </button>
              );
            })}
          </div>

          <div className="publications-list">
            {visible.map((pub) => (
              <PaperCard
                key={pub.id}
                pub={pub}
                highlight={publicationsHeader.authorName}
                theme={theme}
              />
            ))}
          </div>

          <div className="publications-cta">
            <Button
              text="View Resume"
              href="/resume"
              theme={theme}
              className="publications-cta-btn"
            />
            <Button
              text="Google Scholar"
              href={greeting.googleScholar}
              newTab={true}
              theme={theme}
              className="publications-cta-btn"
            />
            <Button
              text="GitHub"
              href={greeting.githubProfile}
              newTab={true}
              theme={theme}
              className="publications-cta-btn"
            />
          </div>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Publications;
