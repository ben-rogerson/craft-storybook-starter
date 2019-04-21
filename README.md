<p><img width="100%"  src="https://i.imgur.com/79NC4st.png" alt="Craft CMS"></p>

# Craft Storybook Starter

[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation.<br>
It makes building stunning UIs organized and efficient.

This starter sets up everything for you to be productive in Storybook and Craft and makes it easy to produce a living styleguide for your site or app.

🎉 Storybook runs in JavaScript outside Craft and doesn't require a Craft plugin.

## Storybook Features

This starter has many modern features including:

👍 Hot module reloading<br>
👍 Automatic accessibility tests<br>
👍 Color accessibility tests<br>
👍 Fake data generator (Faker)<br>
👍 Sass support<br>
👍 Device previews<br>
👍 Extendable Webpack config<br>
👍 Static site generator

**[View the static site demo](https://craft-storybook-starter.netlify.com)** 👉

## Getting Started

### Create a new project

1. In your terminal, cd into your projects directory then run:<br>
    ```
    git clone https://github.com/ben-rogerson/craft-storybook-starter.git && cd craft-storybook-starter && npm install
    ```
2. Run Storybook with `npm run storybook`

To setup Craft CMS, run this command and follow the instructions:
```
composer install && ./craft setup
```

### Bring into an existing project

Adding Storybook into your project is a quick process:

1. Copy `.storybook/*` into your project
2. Copy `stories/*` into your project
3. Copy `templates/components/*` into your project
4. Install the `devDependencies` listed in package.json:<br>
    ```shell
    npm i -D @babel/core @babel/preset-env @storybook/addon-a11y @storybook/addon-knobs @storybook/addon-viewport @storybook/html faker babel-loader css-loader node-sass sass-loader style-loader twig twig-loader webpack-cli
    ```
5. Add the following scripts into your `package.json`:
    ```js
    "scripts": {
        "storybook": "start-storybook",
        "build-storybook": "build-storybook -c .storybook -o build"
    },
    ```
6. To start Storybook, run `npm run storybook`

## Working with Storybook

1. Create a normal Twig file somewhere in your templates folder:<br>
Eg: `/templates/components/[component].twig`
2. Add a matching story in the stories folder:<br>
Eg: `/stories/[component].stories.js`
3. Start Storybook with `npm run storybook`

## Hosting your styleguide

Storybook builds static file previews for your components. This means you can leverage easy (and free) hosting services like Netlify.

Configure it to run `npm run build-storybook` and serve from the `/build` folder.

You could also use [Github pages](https://github.com/storybooks/storybook-deployer) to host your storybook.

## Links

- [Writing Storybook Stories](https://storybook.js.org/docs/basics/writing-stories/#writing-stories)
- [Another Storybook demo](https://storybooks-html.netlify.com)
- [Storybook Docs](https://storybook.js.org/docs/basics/introduction/)
- [Craft CMS Docs](https://docs.craftcms.com)
