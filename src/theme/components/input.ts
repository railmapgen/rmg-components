import { ComponentStyleConfig } from '@chakra-ui/theme';
import { getColor, StyleFunctionProps } from '@chakra-ui/theme-tools';

const getFocusBorderColor = (colorMode: StyleFunctionProps['colorMode']) =>
    colorMode === 'dark' ? 'primary.300' : 'primary.500';

const theme: ComponentStyleConfig = {
    variants: {
        flushed: ({ theme, colorMode }) => ({
            field: {
                _focusVisible: {
                    borderColor: getFocusBorderColor(colorMode),
                    boxShadow: `0px 1px 0px 0px ${getColor(theme, getFocusBorderColor(colorMode))}`,
                },
            },
        }),
    },
};

export default theme;
