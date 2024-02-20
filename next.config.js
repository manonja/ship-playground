// @ts-check
const { withBlitz } = require("@blitzjs/next");

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  blitz: { resolverPath: "root" },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = withBlitz(config);
