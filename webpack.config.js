const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [
    new Dotenv({
      path: "./.env",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
