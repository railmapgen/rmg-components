import { Box, Text } from '@chakra-ui/react';
import { RmgSelect } from './rmg-select';
import { useState } from 'react';

export default {
    title: 'RmgSelect',
    component: RmgSelect,
};

export const Basic = () => {
    const [selection, setSelection] = useState('undefined');

    const options = {
        undefined: 'Please select...',
        opt1: 'Option 1',
        opt2: 'Option 2',
    };

    return (
        <Box>
            <RmgSelect
                value={selection}
                options={options}
                disabledOptions={['undefined']}
                onChange={({ target: { value } }) => setSelection(value)}
            />

            <Text>Your selection: {selection}</Text>
        </Box>
    );
};
