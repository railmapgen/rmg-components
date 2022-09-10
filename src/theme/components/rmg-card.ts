import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgCardTheme: ComponentStyleConfig = {
    baseStyle: ({ colorMode }) => ({
        p: 1,
        my: 1,
        w: '100%',
        borderRadius: 2,
        bg: colorMode === 'dark' ? 'gray.700' : 'gray.50',
        boxShadow: 'lg',
    }),
};
