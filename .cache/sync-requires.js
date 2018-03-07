// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/src/pages/page-2.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/src/pages/404.js"))
}

exports.json = {
  "layout-index.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/layout-index.json"),
  "index.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/index.json"),
  "layout-index.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/layout-index.json"),
  "404.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/404.json"),
  "layout-index.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/carlossampol/Proyectos/gatsby-starter-callisto/.cache/json/404-html.json")
}