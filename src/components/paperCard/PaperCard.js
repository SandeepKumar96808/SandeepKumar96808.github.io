import React, { useState } from "react";
import "./PaperCard.css";

function toBibtex(pub) {
  const firstAuthor = pub.authors[0].split(",")[0].toLowerCase();
  const firstWord = pub.title.split(/[^A-Za-z]+/).find((w) => w.length > 3);
  const key = `${firstAuthor}${pub.year}${(firstWord || "").toLowerCase()}`;
  const isJournal = pub.type === "Journal";
  const lines = [
    `@${isJournal ? "article" : "inproceedings"}{${key},`,
    `  title     = {${pub.title}},`,
    `  author    = {${pub.authors.join(" and ")}},`,
    `  ${isJournal ? "journal  " : "booktitle"} = {${pub.venue}},`,
    `  year      = {${pub.year}}`,
    "}",
  ];
  return lines.join("\n");
}

function Authors({ authors, highlight, theme }) {
  return (
    <p className="paper-authors" style={{ color: theme.secondaryText }}>
      {authors.map((author, i) => (
        <span key={author + i}>
          {author === highlight ? (
            <strong style={{ color: theme.text }}>{author}</strong>
          ) : (
            author
          )}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

function LinkButton({ href, icon, label, theme }) {
  return (
    <a
      className="paper-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: theme.text, borderColor: theme.text }}
    >
      <i className={icon} aria-hidden="true"></i> {label}
    </a>
  );
}

export default function PaperCard({ pub, highlight, theme }) {
  const [showBib, setShowBib] = useState(false);
  const [copied, setCopied] = useState(false);
  const bibtex = toBibtex(pub);

  const copyBib = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <article className="paper-card" style={{ borderColor: theme.text + "1F" }}>
      <div className="paper-venue-col">
        {pub.logo ? (
          <div className="paper-venue-logo" style={{ borderColor: theme.text + "1A" }}>
            <img
              src={require(`../../assets/images/venues/${pub.logo}`)}
              alt={`${pub.venueShort} logo`}
            />
          </div>
        ) : (
          <span
            className="paper-venue-badge"
            style={{ backgroundColor: theme.text, color: theme.body }}
          >
            {pub.venueShort}
          </span>
        )}
        <div className="paper-venue-meta">
          <span className="paper-venue-short" style={{ color: theme.text }}>
            {pub.venueShort} {pub.year}
          </span>
          <span className="paper-type" style={{ color: theme.secondaryText }}>
            {pub.type}
          </span>
        </div>
      </div>

      <div className="paper-body">
        <h3 className="paper-title" style={{ color: theme.text }}>
          {pub.title}
        </h3>
        <Authors authors={pub.authors} highlight={highlight} theme={theme} />
        <p className="paper-venue" style={{ color: theme.secondaryText }}>
          <em>{pub.venue}</em>, {pub.year}
        </p>

        <div className="paper-actions">
          {pub.url && (
            <LinkButton
              href={pub.url}
              icon="fas fa-file-alt"
              label="Paper"
              theme={theme}
            />
          )}
          {pub.pdf && (
            <LinkButton
              href={pub.pdf}
              icon="fas fa-file-pdf"
              label="PDF"
              theme={theme}
            />
          )}
          {pub.code && (
            <LinkButton
              href={pub.code}
              icon="fab fa-github"
              label="Code"
              theme={theme}
            />
          )}
          <button
            type="button"
            className="paper-btn"
            onClick={() => setShowBib(!showBib)}
            aria-expanded={showBib}
            style={{
              color: showBib ? theme.body : theme.text,
              backgroundColor: showBib ? theme.text : "transparent",
              borderColor: theme.text,
            }}
          >
            <i className="fas fa-quote-right" aria-hidden="true"></i> BibTeX
          </button>
        </div>

        {showBib && (
          <div className="paper-bibtex" style={{ backgroundColor: theme.text + "0D" }}>
            <pre style={{ color: theme.text }}>{bibtex}</pre>
            <button
              type="button"
              className="paper-copy-btn"
              onClick={copyBib}
              style={{ color: theme.text, borderColor: theme.text + "55" }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
