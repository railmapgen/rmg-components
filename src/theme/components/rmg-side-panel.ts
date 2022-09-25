import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgSidePanelTheme: ComponentStyleConfig = {
    baseStyle: ({ colorMode, width, alwaysOverlay }) => ({
        height: '100%',
        position: alwaysOverlay ? 'absolute' : { base: 'absolute', lg: 'relative' },
        right: alwaysOverlay ? 0 : { base: 0, lg: 'unset' },
        background: colorMode === 'light' ? 'white' : 'gray.800',
        boxShadow: 'lg',
        flexShrink: 0,
        flexDirection: 'column',
        transition: '0.3s ease-in-out',
        maxW: 0,
        visibility: 'hidden',
        zIndex: 5,

        '&.show-side-panel': {
            maxW: { base: '100%', sm: width },
            w: { base: '100%', sm: 'unset' },
            visibility: 'initial',
        },

        '& .rmg-side-panel__inner': {
            flexDirection: 'column',
            h: '100%',
            w: { base: '100vw', sm: width },
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
    }),
};
