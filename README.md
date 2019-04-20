<p><img width="100%"  src="https://i.imgur.com/79NC4st.png" alt="Craft CMS"></p>

# Craft Storybook Starter

[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.

This starter sets up everything for you to be productive in Storybook and Craft and makes it easy to produce a living styleguide for your site or app.

🎉 Storybook runs outside of Craft so you won't need to install any extra Craft plugins.

## Features

👍 Hot module reloading + Auto style updates<br>
👍 SCSS support by default<br>
👍 Automatic accessibility tests<br>
👍 Color accessibility previews<br>
👍 Device size previews<br>
👍 Component playground context controls

**Take a look at the [Storybook demo for this repo 👉](https://craft-storybook-starter.netlify.com)**

## Getting Started

**Setup Storybook**

1. In your terminal, cd into your projects directory then run:<br>
`composer create-project ben-rogerson/craft-storybook-starter`
2. CD into the project<br>`cd craft-storybook-starter`
3. Install and launch storybook:<br> `npm install && npm run start-storybook`

**Setup Craft**

Follow the instructions to install Craft CMS shown in your terminal after step 1.

## Working with Storybook

1. Create a normal Twig file somewhere in your templates folder:<br>
Eg: `/templates/components/COMPONENT.twig`
2. Add a matching story in the stories folder:<br>
Eg: `/stories/COMPONENT.stories.js`
3. Run `npm run start-storybook` to view the Storybook UI

## Hosting your styleguide

Storybook builds static file previews for your components. This means you can leverage easy (and free) hosting services like Netlify.

Configure it to run `npm run build-storybook` and serve from the `/build` folder.

You could also use [Github pages](https://github.com/storybooks/storybook-deployer) to host your storybook.

## Adding Storybook to an existing Craft project

Adding Storybook to your project is a quick process:

1. Copy `.storybook/*` into your project
2. Copy `stories/*` into your project
3. Copy `templates/components/*` into your project
4. Install the `devDependencies` listed in package.json:<br>
    ```shell
    npm i -D @babel/core @babel/preset-env @storybook/addon-a11y @storybook/addon-knobs @storybook/addon-viewport @storybook/html babel-loader css-loader node-sass sass-loader style-loader twig twig-loader webpack-cli
    ```
5. Add the following scripts into your `package.json`:
    ```js
    "scripts": {
        "start-storybook": "start-storybook",
        "build-storybook": "build-storybook -c .storybook -o build"
    },
    ```
6. To start Storybook, run `npm run start-storybook`

## Links

- [Writing Storybook Stories](https://storybook.js.org/docs/basics/writing-stories/#writing-stories)
- [Another Storybook demo](https://storybooks-html.netlify.com)
- [Storybook Docs](https://storybook.js.org/docs/basics/introduction/)
- [Craft CMS Docs](https://docs.craftcms.com)
