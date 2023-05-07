import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgAppClipTheme: ComponentStyleConfig = {
    baseStyle: ({ colorMode }) => ({
        display: 'none',

        '&.show-app-clip': {
            display: 'block',
        },

        '& .rmg-app-clip__overlay': {
            position: 'fixed',
            top: 0,
            left: 0,
            w: '100vw',
            h: '100vh',
            zIndex: 1400,
            bg: 'blackAlpha.600',
        },

        '& .rmg-app-clip__container': {
            position: 'fixed',
            top: 0,
            left: 0,
            w: '100vw',
            h: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            zIndex: 1400,
        },

        '& .rmg-app-clip__content': {
            display: 'flex',
            w: '100%',
            maxW: 'sm',
            my: 16,
            bg: colorMode === 'light' ? 'white' : 'gray.700',
            boxShadow: 'lg',
        },
    }),
};
