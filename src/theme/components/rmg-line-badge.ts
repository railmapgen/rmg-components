import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgLineBadgeTheme: ComponentStyleConfig = {
    baseStyle: {
        display: 'inline-flex',
        alignItems: 'center',

        '& > button:first-of-type': {
            ml: 1,
        },
    },
};
