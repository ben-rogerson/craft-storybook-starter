import { addParameters, configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

// Config
addParameters({
    options: {
        panelPosition: 'right',
    }
});
addDecorator(withKnobs);

// Import all files in the stories directory ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

// Add global decorators
const loadStories = () => {
    req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
