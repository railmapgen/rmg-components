import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgThrottledSliderTheme: ComponentStyleConfig = {
    baseStyle: {
        h: 6,
        alignItems: 'center',

        '& .chakra-button:first-of-type': {
            mr: 1,
        },

        '& .chakra-button:last-of-type': {
            ml: 1,
        },
    },
};
