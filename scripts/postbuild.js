// Runs after `react-scripts build` and prepares the site for search engines.
//
// GitHub Pages returns HTTP 404 for client-side routes like /experience, so
// this writes build/<route>/index.html for every page. Each copy gets its own
// <title>, description, canonical URL and social tags (from src/seoRoutes.json)
// plus a plain-HTML summary of the page inside #root, so crawlers that do not
// run JavaScript still see real content. React replaces that summary when the
// app loads. It also writes build/sitemap.xml.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const build = path.join(root, "build");
const seo = require(path.join(root, "src", "seoRoutes.json"));
const projects = require(path.join(root, "src", "shared", "opensource", "projects.json")).data;

// src/portfolio.js is an ES module containing only data; evaluate it as CommonJS.
function loadPortfolio() {
  const source = fs
    .readFileSync(path.join(root, "src", "portfolio.js"), "utf8")
    .replace(/^export\s*\{([\s\S]*?)\};?\s*$/m, "module.exports = {$1};");
  const sandbox = { module: { exports: {} } };
  vm.runInNewContext(source, sandbox);
  return sandbox.module.exports;
}
const p = loadPortfolio();

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
const clean = (s) => String(s).replace(/^⚡\s*/, "");
const pageUrl = (route) => seo.siteUrl + (route === "/" ? "/" : `${route}/`);
const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

const navLinks = [
  ["/", "Home"],
  ["/publications/", "Publications"],
  ["/education/", "Education"],
  ["/experience/", "Experience"],
  ["/projects/", "Projects"],
  ["/resume/", "Resume"],
  ["/contact/", "Contact"],
];

const papers = [...p.publications.data].sort((a, b) => b.year - a.year);
const paperItem = (pub) =>
  `<strong>${esc(pub.title)}</strong>. ${esc(pub.authors.join(", "))}. <em>${esc(pub.venue)}</em>, ${pub.year}.`;

const intro = `<p><strong>Sandeep Kumar</strong> (also known as <strong>Sandeep Choudhary</strong>) is a PhD researcher at the Centre for Machine Intelligence and Data Science (CMInDS), IIT Bombay, Mumbai.</p><p>${esc(p.greeting.subTitle)}</p>`;

const bodies = {
  "/": () =>
    `<h1>Sandeep Kumar (Sandeep Choudhary)</h1>${intro}` +
    `<h2>Research</h2>${list(p.skills.data.map((s) => `<strong>${esc(s.title)}</strong>: ${esc(clean(s.skills[0]))}`))}` +
    `<h2>Publications</h2>${list(papers.map(paperItem))}`,
  "/publications": () =>
    `<h1>Publications – Sandeep Kumar</h1><p>${esc(p.publicationsHeader.description)}</p>` +
    list(papers.map(paperItem)) +
    `<p><a href="${esc(p.greeting.googleScholar)}">Google Scholar profile of Sandeep Kumar</a></p>`,
  "/education": () =>
    `<h1>Education – Sandeep Kumar</h1>` +
    list(p.degrees.degrees.map((d) => `<strong>${esc(d.title)}</strong> — ${esc(d.subtitle)} (${esc(d.duration)})`)) +
    `<h2>Certifications and awards</h2>` +
    list(p.certifications.certifications.map((c) => `${esc(c.title)} ${esc(c.subtitle)}`)),
  "/experience": () =>
    `<h1>Experience – Sandeep Kumar</h1><p>${esc(p.experience.description)}</p>` +
    p.experience.sections
      .map(
        (sec) =>
          `<h2>${esc(sec.title)}</h2>` +
          list(sec.experiences.map((e) => `<strong>${esc(e.title)}</strong>, ${esc(e.company)} (${esc(e.duration)}). ${esc(e.description)}`))
      )
      .join(""),
  "/projects": () =>
    `<h1>Projects – Sandeep Kumar</h1><p>${esc(p.projectsHeader.description)}</p>` +
    list(projects.map((pr) => `<strong>${esc(pr.name)}</strong>: ${esc(pr.description)}`)),
  "/resume": () =>
    `<h1>Resume – Sandeep Kumar</h1>${intro}<p><a href="/docs/Sandeep_Kumar_Resume.pdf">Download the resume of Sandeep Kumar (PDF)</a></p>`,
  "/contact": () =>
    `<h1>Contact Sandeep Kumar</h1><p>${esc(p.contactPageData.contactSection.description)}</p>` +
    `<p>Email: <a href="mailto:sandeepkumar96808@gmail.com">sandeepkumar96808@gmail.com</a></p>` +
    list(p.socialMediaLinks.filter((m) => m.link.startsWith("http")).map((m) => `<a href="${esc(m.link)}">${esc(m.name)}</a>`)),
};
bodies["/home"] = bodies["/"];

function staticBody(route) {
  const nav = navLinks.map(([href, label]) => `<a href="${href}">${label}</a>`).join(" · ");
  return (
    `<div class="seo-static">` +
    `<style>.seo-static{max-width:860px;margin:0 auto;padding:32px 20px;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:#0E1B2C;line-height:1.6}.seo-static a{color:#0E7C8C}.seo-static h1{font-size:2rem;line-height:1.2}.seo-static li{margin:6px 0}</style>` +
    `<nav>${nav}</nav>${bodies[route]()}` +
    `</div>`
  );
}

function publicationsJsonLd() {
  const graph = papers.map((pub) => ({
    "@type": "ScholarlyArticle",
    headline: pub.title,
    name: pub.title,
    author: pub.authors.map((a) =>
      a === p.publicationsHeader.authorName
        ? { "@id": `${seo.siteUrl}/#person` }
        : { "@type": "Person", name: a }
    ),
    datePublished: String(pub.year),
    isPartOf: { "@type": pub.type === "Journal" ? "Periodical" : "Event", name: pub.venue },
    ...(pub.url ? { url: pub.url } : {}),
  }));
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`;
}

function headTags(route) {
  const page = seo.routes[route];
  const url = pageUrl(page.canonical || route);
  const h = 'data-react-helmet="true"';
  return [
    `<meta ${h} name="description" content="${esc(page.description)}">`,
    `<link ${h} rel="canonical" href="${url}">`,
    `<meta ${h} property="og:title" content="${esc(page.title)}">`,
    `<meta ${h} property="og:description" content="${esc(page.description)}">`,
    `<meta ${h} property="og:url" content="${url}">`,
    `<meta ${h} name="twitter:title" content="${esc(page.title)}">`,
    `<meta ${h} name="twitter:description" content="${esc(page.description)}">`,
    route === "/publications" ? publicationsJsonLd() : "",
  ].join("");
}

const template = fs.readFileSync(path.join(build, "index.html"), "utf8");
const placeholder = /<meta name="seo-placeholder" content=""\s*\/?>/;
if (!placeholder.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error("postbuild: placeholders not found in build/index.html");
}

function renderPage(route) {
  const page = seo.routes[route];
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(placeholder, headTags(route))
    .replace('<div id="root"></div>', `<div id="root">${staticBody(route)}</div>`);
}

const routes = Object.keys(seo.routes);
routes.forEach((route) => {
  const dir = route === "/" ? build : path.join(build, route.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(route));
});

// Sitemap: every page with its own canonical URL (so /home, a duplicate of /, is left out).
const today = new Date().toISOString().slice(0, 10);
const sitemapRoutes = routes.filter((r) => !seo.routes[r].canonical);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemapRoutes
    .map((r) => `  <url><loc>${pageUrl(r)}</loc><lastmod>${today}</lastmod><priority>${r === "/" ? "1.0" : r === "/publications" ? "0.9" : "0.8"}</priority></url>`)
    .join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(build, "sitemap.xml"), sitemap);

console.log(`postbuild: wrote ${routes.length} pages and a sitemap with ${sitemapRoutes.length} URLs`);
