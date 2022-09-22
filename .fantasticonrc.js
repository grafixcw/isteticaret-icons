module.exports = {
  inputDir: "./icons",
  outputDir: "./public",
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
    css: "./public/css/isteticaret-icons.css",
    html: "./public/index.html",
    json: "./public/isteticaret-icons.json",
    scss: "./public/scss/isteticaret-icons.scss",
    woff: "./public/fonts/isteticaret.woff",
    woff2: "./public/fonts/isteticaret.woff2",
  },
};
