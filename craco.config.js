const {
  when,
  whenDev,
  whenProd,
  whenCI,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES
} = require("@craco/craco");

// todo
module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  webpack: {
    alias: {},
    plugins: [],
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /serviceWorker.js/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
            plugins: ["istanbul"]
          }
        }
      });
      return webpackConfig;
    }
  }
};
