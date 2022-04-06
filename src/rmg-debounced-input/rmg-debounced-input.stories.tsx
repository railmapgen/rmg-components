import { RmgDebouncedInput } from './rmg-debounced-input';
import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RmgLabel } from '../rmg-label';

export default {
    title: 'RmgDebouncedInput',
    component: RmgDebouncedInput,
};

export const Basic = () => {
    const [value0, setValue0] = useState('');
    const [value500, setValue500] = useState('');

    return (
        <Box>
            <RmgLabel label="Delay=0ms">
                <RmgDebouncedInput
                    placeholder="Enter text in fast speed"
                    defaultValue={value0}
                    onDebouncedChange={setValue0}
                    delay={0}
                />
            </RmgLabel>

            <RmgLabel label="Delay=500ms">
                <RmgDebouncedInput
                    placeholder="Enter text in fast speed"
                    defaultValue={value500}
                    onDebouncedChange={setValue500}
                />
            </RmgLabel>

            <Text>Delay=0ms: {value0}</Text>
            <Text>Delay=500ms: {value500}</Text>
        </Box>
    );
};
