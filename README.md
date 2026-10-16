# Sandeep Kumar – Portfolio

Source code for **https://sandeepkumar96808.github.io**, the personal site of Sandeep Kumar, PhD researcher at CMInDS, IIT Bombay.

Built with React (Create React App), based on the [masterPortfolio](https://github.com/ashutosh1919/masterPortfolio) template.

## How this repository is organised

| Branch | What it holds |
|---|---|
| `source` | The editable code (this branch). Make all changes here. |
| `main` | The built website that GitHub Pages serves. Generated automatically — do not edit by hand. |

Every push to `source` runs the **Build and deploy** workflow (`.github/workflows/deploy.yml`), which builds the site and publishes it to `main`. The live site updates a minute or two later. You can follow progress in the repository's **Actions** tab.

## Editing content

Almost everything on the site comes from one file: **`src/portfolio.js`**.

| To change… | Edit |
|---|---|
| Name, intro text, social links, Google Scholar link | `greeting` and `socialMediaLinks` in `src/portfolio.js` |
| "What I Do" skills on the home page | `skills` |
| Education and certifications | `degrees`, `certifications` |
| Experience | `experience` |
| Publications | `publicationsHeader` and `publications` |
| Contact page | `contactPageData` |
| Project cards | `src/shared/opensource/projects.json` |

### Adding a publication

Add an entry to `publications.data` in `src/portfolio.js`:

```js
{
  id: "short-unique-id",
  title: "Paper title",
  authors: ["Author, A.", "Kumar, S.", "Author, B."],
  venue: "Full venue name",
  venueShort: "NeurIPS",
  logo: "neurips.png",      // file in src/assets/images/venues/, or "" for a text badge
  year: 2026,
  type: "Conference",       // "Conference" | "Workshop" | "Journal"
  url: "",                  // paper page — leave "" to hide the Paper button
  pdf: "",                  // PDF link — leave "" to hide the PDF button
  code: "",                 // code link — leave "" to hide the Code button
},
```

The name in `publicationsHeader.authorName` is shown in bold in every author list. BibTeX is generated automatically.

### Images and files

| File | Used for |
|---|---|
| `src/assets/images/sandeep_illustration.png` | Home page illustration |
| `src/assets/images/sandeep_profile.png` (and `public/images/`) | Profile photo (Contact page, search results) |
| `public/icons/profile-og.png` | Preview image when the link is shared (1200×630) |
| `src/assets/images/venues/` | Conference and journal logos on the Publications page |
| `src/assets/docs/Sandeep_Kumar_Resume.pdf` and `public/docs/Sandeep_Kumar_Resume.pdf` | Resume viewer and download — replace **both** when updating the resume |

Search-engine title, description and structured data live in `public/index.html` and `seo` in `src/portfolio.js`.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm start          # dev server at http://localhost:3000
```

## Build

```bash
npm run build
```

This writes the site to `build/`. After the React build, `scripts/postbuild.js` copies `index.html` into a folder for each page (`/publications`, `/resume`, …) so GitHub Pages serves those URLs directly instead of returning a 404. If you add a new page, add its path to the list in that script and to `public/sitemap.xml`.

## Deploy manually (only if the workflow is unavailable)

```bash
npm run build
```

Then copy the contents of `build/` to the root of the `main` branch and push.
