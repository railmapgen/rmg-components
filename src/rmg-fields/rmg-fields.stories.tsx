import { RmgFields, RmgFieldsField } from './rmg-fields';
import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default {
    title: 'RmgFields',
    component: RmgFields,
};

export const Basic = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('opt1');
    const [intSliderValue, setIntSliderValue] = useState(5);
    const [sliderValue, setSliderValue] = useState(5);
    const [textareaValue, setTextareaValue] = useState('');

    const fields: RmgFieldsField[] = [
        {
            type: 'input',
            label: 'Debounced input field',
            placeholder: 'Enter text',
            value: inputValue,
            onChange: setInputValue,
        },
        {
            type: 'select',
            label: 'Select field',
            options: {
                opt1: 'Option 1',
                opt2: 'Option 2',
            },
            value: selectValue,
            onChange: setSelectValue,
        },
        {
            type: 'slider',
            label: 'Integer slider field',
            value: intSliderValue,
            min: 0,
            max: 10,
            onChange: setIntSliderValue,
        },
        {
            type: 'slider',
            label: 'Slider field',
            value: sliderValue,
            min: 0,
            max: 10,
            step: 0.1,
            onChange: setSliderValue,
        },
        {
            type: 'textarea',
            label: 'Multiline field',
            placeholder: 'Please enter multiline text...',
            value: textareaValue,
            onChange: setTextareaValue,
        },
    ];

    return (
        <Box w={320}>
            <RmgFields fields={fields} />

            <Text>Debounced input field: {inputValue}</Text>
            <Text>Select field: {selectValue}</Text>
            <Text>Integer slider field: {intSliderValue}</Text>
            <Text>Slider field: {sliderValue}</Text>
            <Text>Debounced multiline field: {JSON.stringify(textareaValue)}</Text>
        </Box>
    );
};
