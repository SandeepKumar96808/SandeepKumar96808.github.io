import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import seoRoutes from "../../seoRoutes.json";

// Per-page title, description and canonical URL. The same values are written
// into the static HTML of each page by scripts/postbuild.js, with
// data-react-helmet="true" so Helmet takes them over instead of duplicating.
// The Person structured data lives in public/index.html.
function SeoHeader() {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  const page = seoRoutes.routes[path] || seoRoutes.routes["/"];
  const canonicalPath = page.canonical || path;
  const url =
    seoRoutes.siteUrl + (canonicalPath === "/" ? "/" : `${canonicalPath}/`);

  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
    </Helmet>
  );
}

export default SeoHeader;
