import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgLoaderTheme: ComponentStyleConfig = {
    baseStyle: {
        w: '100%',
        h: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',

        '& .rmg-loader__backdrop': {
            position: 'absolute',
            w: '100%',
            h: '100%',
            zIndex: 1500,
            bg: 'blackAlpha.400',
        },

        '& .chakra-progress': {
            zIndex: 2000,
        },
    },
};
