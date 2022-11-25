import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgAgGridTheme: ComponentStyleConfig = {
    baseStyle: {
        w: '100%',
        h: '100%',

        // added since ag-grid-community@28.2.1
        '& .ag-header-cell:not(.ag-header-cell-auto-height) .ag-header-cell-comp-wrapper': {
            height: 'unset',
        },

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
};
