<p><img width="100%"  src="https://i.imgur.com/79NC4st.png" alt="Craft CMS"></p>

# Craft Storybook Starter

[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation.<br>
It makes building stunning UIs organized and efficient.

🎉 Storybook runs outside Craft in JavaScript and doesn't require a Craft plugin<br>
🎉 Storybook works with the same Twig files from your project

This starter sets up everything for you to be productive in Storybook.<br>Use Storybook to create a living styleguide from of your existing site/app.<br>
Take advantage of the excellent Webpack dev server to create solid components with mock data.

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

**[View the Storybook demo](https://craft-storybook-starter.netlify.com)** 👉

## Getting Started

### Create a new project

1. In your terminal, cd into your projects directory then run:<br>
    `
    git clone https://github.com/ben-rogerson/craft-storybook-starter.git craft-storybook && cd $_ && npm install
    `
2. Start Storybook with:
   <br>`npm run storybook`

To setup Craft CMS, run this command and follow the instructions:<br>
`
composer install && ./craft setup
`

### Bring into an existing project

Adding Storybook into your project is a quick process:

1. Grab the repository:<br>`git clone https://github.com/ben-rogerson/craft-storybook-starter.git`
2. Copy these folders into your project:<br>
`.storybook`<br>
`stories`<br>
`templates/components`

1. Install the Storybook `devDependencies`:<br>
    ```shell
    npm i -D @babel/core @babel/preset-env @storybook/addon-a11y @storybook/addon-knobs @storybook/addon-viewport @storybook/html faker babel-loader css-loader node-sass sass-loader style-loader twig twig-loader webpack-cli
    ```
2. Add these script definitions into your `package.json`:
    ```js
    "scripts": {
        "storybook": "start-storybook",
        "build-storybook": "build-storybook -c .storybook -o build"
    },
    ```
3. Start Storybook with: `npm run storybook`

## Working with Storybook

1. Create a normal Twig file somewhere in your templates folder:<br>
Eg: `/templates/components/[component].twig`
2. Add a matching story in the stories folder:<br>
Eg: `/stories/[component].stories.js`
3. Start Storybook with: `npm run storybook`

## Hosting your Storybook

Storybook builds static file previews for your components. This means you can leverage easy (and free) hosting services like Netlify.

Configure it to run `npm run build-storybook` and serve from the `/build` folder.

You could also use [Github pages](https://github.com/storybooks/storybook-deployer) to host your storybook.

## A heads up: Storybook Twig != Craft Twig

Storybook uses a JavaScript implementation of Twig and you may come across some of its limitations.

Any Craft or Craft Plugin functions, or Twig tags or filters will throw an error.
Also, [String interpolation](https://twig.symfony.com/doc/2.x/templates.html#string-interpolation) isn’t supported.

While I agree that this isn’t ideal, there is an upside to it. It forces me to write small and basic components.
You see this same technique constantly in modern JavaScript apps and it’s a good thing! It’s a technique you can also bring to many of your Craft Components. If you’re interested in the concept check out [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/).

If you’re bringing components into Storybook and you’re having compatibility issues you may need to break it up into a presentational and logic component. The presentational component would have the basic component html and wouldn’t contain the incompatible Twig code. This would be the component you’d display in Storybook.

## Links

- [Writing Storybook Stories](https://storybook.js.org/docs/basics/writing-stories/#writing-stories)
- [Another Storybook demo](https://storybooks-html.netlify.com)
- [Storybook Docs](https://storybook.js.org/docs/basics/introduction/)
- [Craft CMS Docs](https://docs.craftcms.com)
