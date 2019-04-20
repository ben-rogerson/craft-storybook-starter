import { storiesOf } from '@storybook/html';
// Learn more about the knobs addon:
// https://github.com/storybooks/storybook/blob/master/addons/knobs/README.md
import { text, boolean, number } from '@storybook/addon-knobs';

// Twig component
import component from './../templates/components/input.twig';

// Component styles
// Using .scss? https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode
import './input.demo.css';

// Font-size slider for component resizing
// (Use ems in your component styles)
const scaleSlider = contents => {
    const scale = number('scale', 1, {
        range: true,
        min: 1,
        max: 2.5,
        step: 0.25,
    });
    return `<div style="font-size:${scale}em">${contents}</div>`
};

// The default context for your Twig component
const defaultConfig = {
    label: 'Enter your greeting',
    error: '',
    value: 'Welcome to componentville',
    isDisabled: false,
    isRequired: false,
}

// Set the Group name
storiesOf('Input', module)

// Context playground with the knobs plugin
// If you want the playground on every item, move this into defaultConfig
.add('context playground', () => scaleSlider(`

    ${component({...defaultConfig, ...{
        label: text('label', 'Enter your greeting'),
        error: text('error', ''),
        value: text('value', 'Welcome to componentville'),
        isDisabled: boolean('isDisabled', false),
        isRequired: boolean('isRequired', false),
    }})}

`))
.add('with disabled', () => `

    ${component({
        ...defaultConfig,
        ...{ isDisabled: true }
    })}

`)
.add('with required', () => `

    ${component({
        ...defaultConfig,
        ...{ isRequired: true }
    })}

`)
.add('with error', () => `

    ${component({
        ...defaultConfig,
        ...{
            value: 'What up',
            error: 'Sorry, that\'s a poor greeting',
        }
    })}

`);
