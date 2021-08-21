const devPlugins = () => process.env.BABEL_ENV === "dev" ? [
  ["effector/babel-plugin", { "addLoc": true }],
  [
    "search-and-replace",
    {
      "rules": [
        {
          "search": "searchedString",
          "searchTemplateStrings": true,
          "replace": "replacement"
        },
        {
          "search": /(?<!.)effector(?!.)/,
          "replace": "effector-root"
        }
      ]
    }
  ]
] : []

module.exports = {
  "exclude": /node_modules/,
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": [
    ["emotion", { // emotion must be first in the array!
      "sourceMap": true,
      "autoLabel": "dev-only",
      "labelFormat": "[filename]-[local]",
      "cssPropOptimization": true
    }],
    ["@babel/proposal-class-properties"],
    ["@babel/proposal-object-rest-spread"],
    ["react-hot-loader/babel"],
    ["inline-react-svg"],
    ["module-resolver", {
      "root": ["."],
      "alias": {
        "@icons": "./src/assets/img"
      }
    }],
    ["@babel/plugin-transform-runtime"],
    ["babel-plugin-macros"],
    ...devPlugins(),
  ]
}
