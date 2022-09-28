import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgErrorBoundaryTheme: ComponentStyleConfig = {
    baseStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        maxH: '100%',
        overflowY: 'auto',

        '& .chakra-alert__icon': {
            w: '40px',
            h: '40px',
            mr: 0,
        },

        '& .chakra-alert__title': {
            mt: 4,
            mb: 1,
            fontSize: 'lg',
        },

        '& details': {
            whiteSpace: 'pre-wrap',
        },
    },
};
