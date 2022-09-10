import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgThrottledSliderTheme: ComponentStyleConfig = {
    baseStyle: {
        h: 6,
        alignItems: 'center',

        '& svg:first-of-type': {
            mr: 1,
        },

        '& svg:last-of-type': {
            ml: 1,
        },
    },
};
