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
            maxW: 'md',
            my: 16,
            bg: colorMode === 'light' ? 'white' : 'gray.700',
            boxShadow: 'lg',
            borderRadius: 'md',
            overflow: 'hidden',
        },
    }),
    sizes: {
        xs: {
            '& .rmg-app-clip__content': {
                maxW: 'xs',
            },
        },
        sm: {
            '& .rmg-app-clip__content': {
                maxW: 'sm',
            },
        },
        lg: {
            '& .rmg-app-clip__content': {
                maxW: 'lg',
            },
        },
        xl: {
            '& .rmg-app-clip__content': {
                maxW: 'xl',
            },
        },
        full: {
            '& .rmg-app-clip__content': {
                maxW: '100vw',
                minH: 'var(--chakra-vh)',
                my: 0,
                borderRadius: 0,
            },
        },
    },
};
