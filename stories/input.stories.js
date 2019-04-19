import { storiesOf } from '@storybook/html';
import { text, boolean, number } from '@storybook/addon-knobs';

import component from './../templates/components/input.twig';

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

const defaultConfig = {
    label: 'Enter your greeting',
    error: '',
    value: 'Welcome to componentville',
    isDisabled: false,
    isRequired: false,
}

storiesOf('Input', module)

// This example lets you play with the context through the knobs plugin
.add('playground', () => scaleSlider(`

    ${component({ ...defaultConfig, ...{
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
