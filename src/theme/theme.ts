import { extendTheme, theme, ThemeConfig } from '@chakra-ui/react';
import { Styles } from '@chakra-ui/theme-tools';
import { components } from './components';
import rmgRuntime from '@railmapgen/rmg-runtime';

const CHAKRA_COLOUR_MODE_KEY = 'chakra-ui-color-mode';

const getConfig = (): ThemeConfig => {
    const useSystemColorMode = rmgRuntime.getColourMode() === 'system';

    if (rmgRuntime.isStandaloneWindow()) {
        // only reset colour mode in standalone/parent window
        if (useSystemColorMode) {
            window.localStorage.removeItem(CHAKRA_COLOUR_MODE_KEY);
        } else {
            window.localStorage.setItem(CHAKRA_COLOUR_MODE_KEY, rmgRuntime.getColourMode());
        }
    }

    return {
        initialColorMode: 'system',
        useSystemColorMode,
    };
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

export const getRmgChakraTheme = () => extendTheme({ config: getConfig(), colors, styles, components });
