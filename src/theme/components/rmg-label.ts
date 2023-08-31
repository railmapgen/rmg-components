import { ComponentStyleConfig } from '@chakra-ui/theme';

export const rmgLabelTheme: ComponentStyleConfig = {
    baseStyle: {
        display: 'flex',
        flexDirection: 'column',
        m: 1,
        w: 'unset',

        '& label': {
            overflow: 'hidden',
            fontSize: 12,
            mr: 0,
            mb: -0.5,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },

        '&.rmg-label__one-line': {
            flexDirection: 'row',
            alignItems: 'center',

            '& label:first-of-type': {
                mr: 'auto',
            },
        },
    },
};
