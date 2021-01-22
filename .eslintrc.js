module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
    "prettier/@typescript-eslint", // Prettier plugin
    "plugin:prettier/recommended", // Prettier recommended rules
    "prettier/flowtype",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/forbid-prop-types": "off",
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }], // should add ".ts" if typescript project
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/jsx-props-no-spreading": "off",
  },
  globals: {
    React: "writable",
  },
};
