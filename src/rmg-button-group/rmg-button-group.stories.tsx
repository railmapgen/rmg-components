import React, { useState } from 'react';
import { RmgButtonGroup } from './rmg-button-group';
import { Box, Flex, Text } from '@chakra-ui/react';

export default {
    title: 'RmgButtonGroup',
    component: RmgButtonGroup,
};

export const Basic = () => {
    const [singleSelect, setSingleSelect] = useState('gzmtr');
    const [multiSelect, setMultiSelect] = useState(['gzmtr']);

    const selections = [
        { label: 'MTR', value: 'mtr', disabled: true },
        { label: 'GZMTR', value: 'gzmtr' },
        { label: 'SHMetro', value: 'shmetro' },
    ];

    return (
        <Flex>
            <Box w={200} mr={2}>
                <RmgButtonGroup selections={selections} defaultValue={singleSelect} onChange={setSingleSelect} />
                <RmgButtonGroup
                    selections={selections}
                    defaultValue={multiSelect}
                    onChange={setMultiSelect}
                    multiSelect
                />
            </Box>

            <Box>
                <Text>Single select: {singleSelect}</Text>
                <Text>Multi select: {multiSelect.join(',')}</Text>
            </Box>
        </Flex>
    );
};
