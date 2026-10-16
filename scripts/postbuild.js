// GitHub Pages returns HTTP 404 for client-side routes like /experience.
// Copying index.html into a folder per route makes those URLs return 200,
// so search engines can index them.
const fs = require("fs");
const path = require("path");

const build = path.join(__dirname, "..", "build");
const routes = [
  "home",
  "education",
  "experience",
  "projects",
  "publications",
  "resume",
  "contact",
];
const index = fs.readFileSync(path.join(build, "index.html"));

routes.forEach((route) => {
  const dir = path.join(build, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), index);
});
console.log(`postbuild: wrote index.html for ${routes.length} routes`);
