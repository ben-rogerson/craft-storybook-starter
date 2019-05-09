import { storiesOf } from '@storybook/html';
// Learn more about the knobs addon:
// https://github.com/storybooks/storybook/blob/master/addons/knobs/README.md
import { text, boolean, number } from '@storybook/addon-knobs';
// Faker creates random data for your components
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

// Twig component
import component from 'components/input.twig';

// Component styles
// You'll probably import the component style file from your src folder
// eg: `import './../src/scss/input.demo.scss';`
import './input.demo.scss';

const container = children => {
    // Font-size slider for component resizing
    // (Use ems in your component styles)
    const scale = number('scale', 1, {
        range: true,
        min: 1,
        max: 2.5,
        step: 0.25,
    });
    return `<div style="font-size:${scale}em">${children}</div>`
};

// Generate data with Faker
// https://github.com/marak/Faker.js/#api-methods
const fullName = Faker.name.findName();
const fullNameEg = Faker.name.findName();

// Set the Group name
storiesOf('Input', module)
.add('filled', () => container(

    component({
        label: text('label', 'Full name'),
        value: text('value', fullName),
        error: text('error', ''),
        isDisabled: boolean('isDisabled', false),
        isRequired: boolean('isRequired', false),
        placeholder: text('placeholder', `Eg: ${fullNameEg}`),
    })

))
.add('empty', () => container(

    component({
        label: text('label', 'Full name'),
        value: text('value', ''),
        error: text('error', ''),
        isDisabled: boolean('isDisabled', false),
        isRequired: boolean('isRequired', false),
        placeholder: text('placeholder', `Eg: ${fullNameEg}`),
    })

))
.add('disabled', () => container(

    component({
        label: text('label', 'Full name'),
        value: text('value', fullName),
        error: text('error', ''),
        isDisabled: boolean('isDisabled', true),
        isRequired: boolean('isRequired', false),
        placeholder: text('placeholder', `Eg: ${fullNameEg}`),
    })

))
.add('required', () => container(

    component({
        label: text('label', 'Full name'),
        value: text('value', fullName),
        error: text('error', ''),
        isDisabled: boolean('isDisabled', false),
        isRequired: boolean('isRequired', true),
        placeholder: text('placeholder', `Eg: ${fullNameEg}`),
    })

))
.add('error', () => container(

    component({
        label: text('label', 'Full name'),
        value: text('value', fullName),
        error: text('error', 'Sorry, that’s a poor name. Try another.'),
        isDisabled: boolean('isDisabled', false),
        isRequired: boolean('isRequired', false),
        placeholder: text('placeholder', `Eg: ${fullNameEg}`),
    })

));
