import { Box } from '@chakra-ui/react';
import { RmgAutoComplete } from '.';

export default {
    title: 'RmgAutoComplete',
    component: RmgAutoComplete,
};

export const Basic = () => {
    const data = [
        { id: 'gz', value: 'Guangzhou', additionalValue: '廣州' },
        { id: 'hk', value: 'Hong Kong', additionalValue: '香港' },
        { id: 'sh', value: 'Shanghai', additionalValue: '上海' },
    ];

    return (
        <Box>
            <RmgAutoComplete
                data={data}
                displayValue={item => item.value + ' (' + item.value[0] + ')'} // Guangzhou (G)
                predicate={(item, input) =>
                    item.value.toLowerCase().includes(input.toLowerCase()) ||
                    item.additionalValue.toLowerCase().includes(input.toLowerCase())
                }
            />
        </Box>
    );
};
