import { RmgFields, RmgFieldsField } from './rmg-fields';
import { Box, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RmgMultiLineString } from '../rmg-multi-line-string';

export default {
    title: 'RmgFields',
    component: RmgFields,
};

export const Basic = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [intSliderValue, setIntSliderValue] = useState(5);
    const [sliderValue, setSliderValue] = useState(5);
    const [textareaValue, setTextareaValue] = useState('');
    const [switchValue, setSwitchValue] = useState(false);

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
                '': 'Please select...',
                opt1: 'Option 1',
                opt2: 'Option 2',
            },
            disabledOptions: [''],
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
        {
            type: 'switch',
            label: 'Switch field',
            isChecked: switchValue,
            onChange: setSwitchValue,
            oneLine: true,
            minW: 'full',
        },
        {
            type: 'switch',
            label: 'Disabled switch field',
            isChecked: false,
            isDisabled: true,
            oneLine: true,
            minW: 'full',
        },
    ];

    const handleReset = () => {
        setInputValue('');
        setSelectValue('');
        setIntSliderValue(5);
        setSliderValue(5);
        setTextareaValue('');
        setSwitchValue(false);
    };

    return (
        <Box w={320}>
            <RmgFields fields={fields} minW={100} />

            <Text>Debounced input field: {inputValue}</Text>
            <Text>Select field: {selectValue}</Text>
            <Text>Integer slider field: {intSliderValue}</Text>
            <Text>Slider field: {sliderValue}</Text>
            <Text>Debounced multiline field: {<RmgMultiLineString text={textareaValue} delimiter={'\n'} />}</Text>
            <Text>Switch field: {switchValue.toString()}</Text>
            <Text>Disabled switch field: false</Text>

            <Button onClick={() => handleReset()}>Reset all</Button>
        </Box>
    );
};

export const TwoWayControlledSelects = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [minError, setMinError] = useState(false);
    const [maxError, setMaxError] = useState(false);

    useEffect(() => {
        setMinError(false);
        if (min && max && min > max) {
            setMaxError(true);
        }
    }, [min]);

    useEffect(() => {
        setMaxError(false);
        if (min && max && min > max) {
            setMinError(true);
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
            isInvalid: minError,
        },
        {
            type: 'select',
            label: 'Max',
            value: max,
            options: options,
            disabledOptions: [0],
            onChange: value => setMax(value as number),
            isInvalid: maxError,
        },
    ];
    return (
        <Box w={320}>
            <Text>Please select a range</Text>
            <RmgFields fields={fields} />

            <Text>Your range: {min && max && !minError && !maxError ? `from ${min} to ${max}` : 'invalid'}</Text>
        </Box>
    );
};
