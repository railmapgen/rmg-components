import { ComponentSingleStyleConfig, extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

const components: Record<string, ComponentSingleStyleConfig> = {
    RmgCard: {
        baseStyle: ({ colorMode }) => ({
            p: 1,
            my: 1,
            w: '100%',
            borderRadius: 2,
            bg: colorMode === 'dark' ? 'gray.700' : 'gray.50',
            boxShadow: 'lg',
        }),
    },

    RmgLabel: {
        baseStyle: {
            m: 1,
            w: 'unset',

            '& label': {
                overflow: 'hidden',
                fontSize: 12,
                mr: 0,
                mb: -0.5,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
        },
    },
};

export const rmgChakraTheme = extendTheme({ config, components });
