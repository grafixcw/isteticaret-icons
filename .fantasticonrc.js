module.exports = {
  inputDir: "./icons",
  outputDir: "./docs",
  fontTypes: ["woff2", "woff"],
  assetTypes: ["css", "json", "html", "scss"],
  name: "isteticaret",
  prefix: "it",
  selector: ".it",
  fontsUrl: "../fonts",
  formatOptions: {
    json: {
      indent: 2,
    },
  },
  templates: {
    css: "./templates/css.hbs",
    html: "./templates/html.hbs",
    scss: "./templates/scss.hbs",
  },
  pathOptions: {
    css: "./docs/css/isteticaret-icons.css",
    html: "./docs/index.html",
    json: "./docs/isteticaret-icons.json",
    scss: "./docs/scss/isteticaret-icons.scss",
    woff: "./docs/fonts/isteticaret.woff",
    woff2: "./docs/fonts/isteticaret.woff2",
  },
};
