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

            '& .ag-cell, & .ag-header-cell': {
                padding: '8px 9px',
            },

            '& .ag-row, & .ag-header': {
                border: 'unset',
            },

            '&.ag-theme-alpine .ag-row .ag-cell, &.ag-theme-alpine .ag-header .ag-header-cell': {
                borderRight: '1px solid var(--ag-row-border-color, var(--ag-secondary-border-color, #dde2eb))',
                borderBottom: '1px solid var(--ag-row-border-color, var(--ag-secondary-border-color, #dde2eb))',
            },

            '&.ag-theme-alpine-dark .ag-row .ag-cell, &.ag-theme-alpine-dark .ag-header .ag-header-cell': {
                borderRight:
                    '1px solid var(--ag-row-border-color, var(--ag-secondary-border-color, rgba(88, 86, 82, 0.5)))',
                borderBottom:
                    '1px solid var(--ag-row-border-color, var(--ag-secondary-border-color, rgba(88, 86, 82, 0.5)))',
            },

            '& .ag-pinned-left-cols-container, & .ag-pinned-left-header': {
                boxShadow: 'var(--chakra-shadows-lg)',
                zIndex: 1,
            },

            '&.ag-theme-alpine': {
                '& .ag-row .rmg-ag-grid--spanned-cell': {
                    backgroundColor: 'var(--ag-background-color, #fff)',
                },
                '& .ag-row-odd .rmg-ag-grid--spanned-cell': {
                    backgroundColor: 'var(--ag-odd-row-background-color, #fcfcfc)',
                },
            },

            '&.ag-theme-alpine-dark': {
                '& .ag-row .rmg-ag-grid--spanned-cell': {
                    backgroundColor: 'var(--ag-background-color, #181d1f)',
                },
                '& .ag-row-odd .rmg-ag-grid--spanned-cell': {
                    backgroundColor: 'var(--ag-odd-row-background-color, #222628)',
                },
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

    RmgSidePanel: {
        baseStyle: {
            height: '100%',
            position: 'relative',
            boxShadow: 'lg',
            flexShrink: 0,
            flexDirection: 'column',
            transition: '0.3s',

            '& .rmg-side-panel__inner': {
                flexDirection: 'column',
                h: '100%',
            },

            '& .rmg-side-panel__header': {
                flexShrink: 0,
                pl: 3,
                pr: 1,
                py: 0,

                '& button': {
                    ml: 'auto',
                },
            },

            '& .rmg-side-panel__body': {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                overflowY: 'auto',
                p: 1,
            },

            '& .rmg-side-panel__footer': {
                display: 'flex',
                justifyContent: 'flex-end',
                p: 1,
            },
        },
    },
};

export const rmgChakraTheme = extendTheme({ config, components });
