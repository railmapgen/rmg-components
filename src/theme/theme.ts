import { extendTheme, theme, ThemeConfig } from '@chakra-ui/react';
import { Styles } from '@chakra-ui/theme-tools';
import { components } from './components';

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
};

const colors = {
    primary: {
        ...theme.colors.teal,
    },
};

const styles: Styles = {
    global: {
        '.mw-full': {
            w: '100%',
            flexBasis: '100%',
        },
    },
};

export const rmgChakraTheme = extendTheme({ config, colors, styles, components });
