import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgEnrichedButtonTheme: ComponentStyleConfig = {
    baseStyle: () => ({
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        h: 10,

        '& span': {
            maxW: '100%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        },

        '& span:last-of-type': {
            fontWeight: 'normal',
            fontSize: '2xs',
        },
    }),
};
