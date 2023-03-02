import { extendTheme, theme, ThemeConfig } from '@chakra-ui/react';
import { Styles } from '@chakra-ui/theme-tools';
import { components } from './components';
import rmgRuntime from '@railmapgen/rmg-runtime';

const getConfig = (): ThemeConfig => ({
    initialColorMode: 'system',
    useSystemColorMode: rmgRuntime.getColourMode() === 'system',
});

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

export const getRmgChakraTheme = () => extendTheme({ config: getConfig(), colors, styles, components });
