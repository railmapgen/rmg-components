import { ComponentStyleConfig } from '@chakra-ui/theme';
import { getColor, StyleFunctionProps } from '@chakra-ui/theme-tools';

const getFocusBorderColor = (colorMode: StyleFunctionProps['colorMode']) =>
    colorMode === 'dark' ? 'primary.300' : 'primary.500';

export const rmgMultiSelectTheme: ComponentStyleConfig = {
    baseStyle: ({ theme, colorMode }) => ({
        '& .rmg-multi-select__field': {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            minWidth: 0,
            outline: 0,
            position: 'relative',
            appearance: 'none',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            fontSize: 'sm',
            h: '6',
            borderBottom: '1px solid',
            borderColor: 'inherit',
            borderRadius: '0',
            px: '0',
            bg: 'transparent',
            _active: {
                borderColor: getFocusBorderColor(colorMode),
                boxShadow: `0px 1px 0px 0px ${getColor(theme, getFocusBorderColor(colorMode))}`,
            },
            _focus: {
                borderColor: getFocusBorderColor(colorMode),
                boxShadow: `0px 1px 0px 0px ${getColor(theme, getFocusBorderColor(colorMode))}`,
            },
            _focusVisible: {
                borderColor: getFocusBorderColor(colorMode),
                boxShadow: `0px 1px 0px 0px ${getColor(theme, getFocusBorderColor(colorMode))}`,
            },

            '&.active': {
                borderColor: getFocusBorderColor(colorMode),
                boxShadow: `0px 1px 0px 0px ${getColor(theme, getFocusBorderColor(colorMode))}`,
            },

            '& > span:first-of-type': {
                flex: 1,
            },
        },

        '& .chakra-popover__content': {
            w: 'unset',
            minW: 200,
        },

        '& .chakra-popover__body': {
            p: 0,

            'li label': {
                p: 2,
                w: '100%',
                _hover: {
                    bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100',
                },
                _active: {
                    bg: colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.200',
                },
            },
        },
    }),
};
