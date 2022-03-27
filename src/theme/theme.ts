import { ComponentSingleStyleConfig, extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

const components: Record<string, ComponentSingleStyleConfig> = {
    RmgAgGrid: {
        baseStyle: {
            w: '100%',
            h: '100%',

            '& .ag-cell': {
                display: 'flex',
                lineHeight: 'unset',
                alignItems: 'center',
            },
        },
    },

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

    RmgDataTable: {
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
