import { RmgFields, RmgFieldsField } from './rmg-fields';
import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

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

    const fields: RmgFieldsField<string>[] = [
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

export const TwoWayControlledSelects = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        if (min && max && min > max) {
            setMax(0);
        }
    }, [min]);

    useEffect(() => {
        if (min && max && min > max) {
            setMin(0);
        }
    }, [max]);

    const options = Array(10)
        .fill(0)
        .reduce<Record<number, string>>(
            (acc, cur, idx) => ({
                ...acc,
                [idx + 1]: (idx + 1).toString(),
            }),
            { 0: 'Please select...' }
        );

    const fields: RmgFieldsField[] = [
        {
            type: 'select',
            label: 'Min',
            value: min,
            options: options,
            disabledOptions: [0],
            onChange: value => setMin(value as number),
        },
        {
            type: 'select',
            label: 'Max',
            value: max,
            options: options,
            disabledOptions: [0],
            onChange: value => setMax(value as number),
        },
    ];
    return (
        <Box w={320}>
            <Text>Please select a range</Text>
            <RmgFields fields={fields} />

            <Text>Your range: {min && max ? `from ${min} to ${max}` : 'invalid'}</Text>
        </Box>
    );
};
