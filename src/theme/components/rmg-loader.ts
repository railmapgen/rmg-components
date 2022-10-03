import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgLoaderTheme: ComponentStyleConfig = {
    baseStyle: {
        w: '100%',
        h: '100%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',

        '& .rmg-loader__backdrop': {
            position: 'absolute',
            top: 0,
            left: 0,
            w: '100%',
            h: '100%',
            zIndex: 1400,
            bg: 'blackAlpha.400',
        },

        '& .chakra-progress': {
            zIndex: 2000,
        },
    },
};
