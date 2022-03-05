import { RmgDebouncedTextarea } from './rmg-debounced-textarea';
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

export default {
    title: 'RmgDebouncedTextarea',
};

export const Basic = () => {
    const [value, setValue] = useState('');

    return (
        <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input (escaped): {JSON.stringify(value)}</Text>
        </Box>
    );
};
