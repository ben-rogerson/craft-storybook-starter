<p><img width="100%"  src="https://i.imgur.com/shkS8aW.png" alt="Craft CMS"></p>

# Craft Storybook Starter

[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.

This starter sets up everything for you to be productive in Storybook and Craft and makes it easy to produce a living styleguide for your site or app.

Storybook runs alongside Craft so you won't need to install any extra Craft plugins.

It supports Webpack's hot module reloading so you can develop components quickly and in isolation.

## Getting Started

`cd` into your project directory then:

**Download the starter and setup composer**<br>
`composer create-project ben-rogerson/craft-storybook-starter`

**Install and run Storybook**<br>
`npm install && npm run start-storybook`

## Working with Storybook

1. Create a normal Twig file somewhere in your templates folder:<br>
Eg: `/templates/components/COMPONENT.twig`
2. Add a matching story in the stories folder:<br>
Eg: `/stories/COMPONENT.stories.js`
3. Run `npm run start-storybook` to view the Storybook UI

**Take a look at the [Storybook demo for this repo 👉](https://craft-storybook-starter.netlify.com)**

## Hosting your styleguide

Storybook builds static file previews for your components. This means you leverage use free and easy hosting services like Netlify.

Configure it to run `npm run build-storybook` and serve from the `/build` folder.

You could also use [Github pages](https://github.com/storybooks/storybook-deployer) to host your storybook.

## Links

- [Craft CMS Docs](https://docs.craftcms.com)
- [Storybook Docs](https://storybook.js.org/docs/basics/introduction/)