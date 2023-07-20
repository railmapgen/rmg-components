import { Box, Button, Text } from '@chakra-ui/react';
import { RmgSelect } from './rmg-select';
import { useState } from 'react';

export default {
    title: 'RmgSelect',
    component: RmgSelect,
};

export const Basic = () => {
    const [selection, setSelection] = useState('undefined');
    const [selectionWithGroup, setSelectionWithGroup] = useState('en');

    const options = {
        undefined: 'Please select...',
        opt1: 'Option 1',
        opt2: 'Option 2',
    };

    const optionsWithGroup: Record<string, Record<string, string>> = {
        'Main languages': {
            en: 'English',
            zh: 'Chinese',
        },
        'Other languages': {
            ja: 'Japanese',
        },
    };

    return (
        <Box>
            <RmgSelect
                defaultValue={selection}
                options={options}
                disabledOptions={['undefined']}
                onChange={({ target: { value } }) => setSelection(value)}
            />
            <Text>Your selection: {selection}</Text>

            <RmgSelect
                defaultValue={selectionWithGroup}
                options={optionsWithGroup}
                disabledOptions={['zh']}
                onChange={({ target: { value } }) => setSelectionWithGroup(value)}
            />
            <Text>Your selection: {selectionWithGroup}</Text>

            <Button
                onClick={() => {
                    setSelection('undefined');
                    setSelectionWithGroup('en');
                }}
            >
                Reset
            </Button>
        </Box>
    );
};
