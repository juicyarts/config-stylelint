module.exports = {
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines"],
  ignoreFiles: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
  rules: {
    "no-descending-specificity": null,
    "selector-max-id": 1,
    "max-nesting-depth": 5,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-class-pattern": [
      "^[a-zA-Z0-9_-]+$",
      {
        message:
          "Selector should be written with letters, numbers and underscores (selector-class-pattern)",
      },
    ],
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "local"],
      },
    ],
  },
};
