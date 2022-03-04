import { RmgDebouncedInput } from './rmg-debounced-input';
import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export default {
    title: 'RmgDebouncedInput',
    component: RmgDebouncedInput,
};

export const Basic = () => {
    const [value, setValue] = useState('');
    return (
        <Box>
            <RmgDebouncedInput
                placeholder="Enter text in fast speed"
                defaultValue={value}
                onDebouncedChange={setValue}
            />
            <Text>Your input: {value}</Text>
        </Box>
    );
};
