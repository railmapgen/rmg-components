import { RmgFields, RmgFieldsField } from './rmg-fields';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RmgMultiLineString } from '../rmg-multi-line-string';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { RmgButtonGroup } from '../rmg-button-group';

export default {
    title: 'RmgFields',
    component: RmgFields,
};

export const Basic = () => {
    const [inputValue, setInputValue] = useState('');
    const [numberValue, setNumberValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [selectWithGroupValue, setSelectWithGroupValue] = useState('en');
    const [intSliderValue, setIntSliderValue] = useState(5);
    const [sliderValue, setSliderValue] = useState(5);
    const [textareaValue, setTextareaValue] = useState('');
    const [switchValue, setSwitchValue] = useState(false);
    const [fg, setFg] = useState('black');
    const [bg, setBg] = useState('red');
    const [direction, setDirection] = useState('right');

    const fields: RmgFieldsField<string>[] = [
        {
            type: 'input',
            label: 'Debounced input field',
            placeholder: 'Enter text',
            value: inputValue,
            onChange: setInputValue,
        },
        {
            type: 'input',
            label: 'Debounced number field',
            placeholder: 'Enter number',
            value: inputValue,
            validator: value => !isNaN(Number(value)),
            onChange: setNumberValue,
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
            type: 'select',
            label: 'Select field with optgroup',
            options: {
                'Main languages': {
                    en: 'English',
                    zh: 'Chinese',
                },
                'Other languages': {
                    ja: 'Japanese',
                },
            },
            value: selectWithGroupValue,
            onChange: setSelectWithGroupValue,
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
            leftIcon: <ArrowBackIcon />,
            rightIcon: <ArrowForwardIcon />,
        },
        {
            type: 'textarea',
            label: 'Multiline field',
            placeholder: 'Please enter multiline text...',
            value: textareaValue,
            onChange: setTextareaValue,
            minW: 'full',
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
        {
            type: 'custom',
            label: 'Foreground colour',
            component: (
                <RmgButtonGroup
                    selections={[
                        { value: 'black', label: 'Black' },
                        { value: 'white', label: 'White' },
                    ]}
                    defaultValue={fg}
                    onChange={value => setFg(value)}
                />
            ),
        },
        {
            type: 'custom',
            label: 'Direction',
            component: (
                <RmgButtonGroup
                    selections={[
                        { value: 'left', label: 'Left' },
                        { value: 'right', label: 'Right' },
                    ]}
                    defaultValue={direction}
                    onChange={value => setDirection(value)}
                />
            ),
            oneLine: true,
        },
        {
            type: 'output',
            label: 'Output field',
            value: 'Some static value',
        },
        {
            type: 'output',
            label: 'Long output field',
            value: 'Some very long static value which overflows',
            noWrap: true,
        },
        {
            type: 'output',
            label: 'Wrapped output field',
            value: 'Some very very long static value with pretty word wrap',
        },
    ];

    const handleReset = () => {
        setInputValue('');
        setNumberValue('');
        setSelectValue('');
        setSelectWithGroupValue('en');
        setIntSliderValue(5);
        setSliderValue(5);
        setTextareaValue('');
        setSwitchValue(false);
        setFg('black');
        setBg('red');
        setDirection('right');
    };

    return (
        <Flex>
            <Box w={320}>
                <RmgFields fields={fields} minW={100} />
            </Box>

            <Box>
                <Text>Debounced input field: {inputValue}</Text>
                <Text>Debounced number field: {numberValue}</Text>
                <Text>Select field: {selectValue}</Text>
                <Text>Select with group field: {selectWithGroupValue}</Text>
                <Text>Integer slider field: {intSliderValue}</Text>
                <Text>Slider field: {sliderValue}</Text>
                <Text>Debounced multiline field: {<RmgMultiLineString text={textareaValue} delimiter={'\n'} />}</Text>
                <Text>Switch field: {switchValue.toString()}</Text>
                <Text>Disabled switch field: false</Text>
                <Text>Button group field: {fg}</Text>
                <Text>Button group field: {bg}</Text>
                <Text>Button group field: {direction}</Text>

                <Button onClick={() => handleReset()}>Reset all</Button>
            </Box>
        </Flex>
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
