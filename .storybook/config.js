import { configure, addParameters, addDecorator } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

// Config
addParameters({
    options: {
        panelPosition: 'bottom',
    },
})
addDecorator(withKnobs)
addDecorator(withA11y)

// Import all files in the stories directory ending in *.stories.js
configure(require.context('../stories', true, /.stories.js$/), module)
