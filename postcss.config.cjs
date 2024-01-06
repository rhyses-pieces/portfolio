const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({ minimumVendorImplementations: 2 })
  ]
}