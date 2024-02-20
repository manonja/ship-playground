// @ts-check
const { withBlitz } = require("@blitzjs/next");

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  blitz: { resolverPath: "root" },
};

module.exports = withBlitz(config);
