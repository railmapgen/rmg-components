import { ChakraProvider, useColorMode, useTheme } from '@chakra-ui/react';
import { PropsWithChildren, useEffect } from 'react';
import { getRmgChakraTheme } from '../theme';
import rmgRuntime from '@railmapgen/rmg-runtime';

export const RmgThemeProvider = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <ChakraProvider theme={getRmgChakraTheme()}>
            <RmgThemeProviderInner>{children}</RmgThemeProviderInner>
        </ChakraProvider>
    );
};

const RmgThemeProviderInner = (props: PropsWithChildren) => {
    const { children } = props;
    const { setColorMode } = useColorMode();
    const theme = useTheme();

    useEffect(() => {
        console.log('[rmg-components] RMG theme is initialised with', theme.config);

        // received colour mode update from peer apps
        rmgRuntime.onColourModeChange(mode => {
            if (mode === 'system') {
                const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setColorMode(isSystemDark ? 'dark' : 'light');
            } else {
                setColorMode(mode);
            }
        });
    }, [setColorMode]);

    return <>{children}</>;
};
