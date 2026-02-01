import { RmgCircularSlider } from './rmg-circular-slider';
import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { useState } from 'react';

export default {
    title: 'RmgCircularSlider',
    component: RmgCircularSlider,
};

export const Basic = () => {
    const [value, setValue] = useState(0);

    return (
        <Box>
            <RmgCircularSlider defaultValue={value} onChange={setValue} />
            <Text mt={2}>Current value: {value}°</Text>
        </Box>
    );
};

export const CustomRange = () => {
    const [value, setValue] = useState(0);

    return (
        <Box>
            <RmgCircularSlider defaultValue={value} min={0} max={100} onChange={setValue} />
            <Text mt={2}>Current value: {value} (range: 0-100)</Text>
        </Box>
    );
};

export const CustomSnapStep = () => {
    const [value, setValue] = useState(0);

    return (
        <Box>
            <VStack align="start" spacing={4}>
                <Text>Snap step: 30° (every 30 degrees)</Text>
                <RmgCircularSlider defaultValue={value} snapStep={30} snapThreshold={3} onChange={setValue} />
                <Text>Current value: {value}°</Text>
            </VStack>
        </Box>
    );
};

export const DisabledValues = () => {
    const [value, setValue] = useState(0);
    const disabledValues = [90, 180, 270];

    return (
        <Box>
            <VStack align="start" spacing={4}>
                <Text>Disabled values: 90°, 180°, 270°</Text>
                <RmgCircularSlider defaultValue={value} disabledValues={disabledValues} onChange={setValue} />
                <Text>Current value: {value}°</Text>
            </VStack>
        </Box>
    );
};

export const CustomSize = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(45);
    const [value3, setValue3] = useState(90);

    return (
        <HStack spacing={8}>
            <VStack>
                <RmgCircularSlider defaultValue={value1} size={80} onChange={setValue1} />
                <Text>Size: 80px ({value1}°)</Text>
            </VStack>
            <VStack>
                <RmgCircularSlider defaultValue={value2} size={120} onChange={setValue2} />
                <Text>Size: 120px ({value2}°)</Text>
            </VStack>
            <VStack>
                <RmgCircularSlider defaultValue={value3} size={160} onChange={setValue3} />
                <Text>Size: 160px ({value3}°)</Text>
            </VStack>
        </HStack>
    );
};

export const CustomStep = () => {
    const [value, setValue] = useState(0);

    return (
        <Box>
            <VStack align="start" spacing={4}>
                <Text>Step: 5 (moves 5 degrees at a time with keyboard)</Text>
                <RmgCircularSlider defaultValue={value} step={5} onChange={setValue} />
                <Text>Current value: {value}°</Text>
            </VStack>
        </Box>
    );
};

export const LargeWithAllFeatures = () => {
    const [value, setValue] = useState(45);
    const disabledValues = [180];

    return (
        <Box>
            <VStack align="start" spacing={4}>
                <Text>Large slider with 180° disabled</Text>
                <RmgCircularSlider
                    defaultValue={value}
                    size={200}
                    disabledValues={disabledValues}
                    snapStep={45}
                    snapThreshold={3}
                    onChange={setValue}
                />
                <Text>
                    Current value: {value}° {value % 45 === 0 ? '(snapped to 45° mark)' : ''}
                </Text>
            </VStack>
        </Box>
    );
};
