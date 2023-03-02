import { ColorMode, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { useCallback } from 'react';
import rmgRuntime from '@railmapgen/rmg-runtime';

export const useRmgColourMode = () => {
    const { colorMode, setColorMode } = useColorMode();
    const [isSystemDark] = useMediaQuery('(prefers-color-scheme: dark)');

    const setColourMode = useCallback(
        (mode: ColorMode | 'system') => {
            // broadcast to peer apps on colour mode change
            rmgRuntime.setColourMode(mode);

            if (mode === 'system') {
                setColorMode(isSystemDark ? 'dark' : 'light');
            } else {
                setColorMode(mode);
            }
        },
        [colorMode, setColorMode, isSystemDark]
    );

    return { colourMode: colorMode, setColourMode };
};
