import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgDataTableTheme: ComponentStyleConfig = {
    baseStyle: ({ colorMode }) => ({
        '& thead': {
            position: 'sticky',
            top: 0,
            zIndex: 10,
        },

        '& td, th': {
            borderRight: '1px solid',
            borderColor: colorMode === 'dark' ? 'whiteAlpha.400' : 'blackAlpha.200',
            backgroundColor: colorMode === 'dark' ? 'gray.700' : 'gray.50',
            whiteSpace: 'nowrap',

            '&:first-of-type': {
                position: 'sticky',
                left: 0,
                zIndex: 1,
            },

            '&:last-of-type': {
                borderRight: 'none',
                position: 'sticky',
                right: 0,
                zIndex: 1,
            },
        },
    }),
};
