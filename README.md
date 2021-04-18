# A simple toggle svg element example

## Usage

Install the required dependencies

```bash
npm install
```

Start the development script

```bash
npm run dev
```

Go to <http://localhost:5000>. Change some code in `./src/onInit.ts`, `./src/onRender.ts`, and `./src/design/svgData.svg`, and the website will update.

When the code is ready to be uploaded to Grafana, start the build script

```bash
npm run build
```

Then go to `/dist` and copy the content of `panel-options.json` to the panels `Import/export` option.

## Dev site

`src/devSite` is a folder where most of the configuration for the dev website is.

To add custom series go to `src/devSite/data.ts` and add createSeries() in series.

Window has been used to get global variables like data, customProperties, ETC.

## Eslint

It's recommended to use the current eslint config, but as it's strongly opinionated it might be _easier_ to use a less opinionated config.

Replace the current .eslint.cjs with the below code.

```ts
module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
```
