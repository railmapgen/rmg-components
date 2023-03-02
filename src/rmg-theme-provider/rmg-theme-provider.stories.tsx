import { RmgThemeProvider } from './rmg-theme-provider';
import { useRmgColourMode } from '../hook/useRmgColourMode';
import { RmgButtonGroup, RmgButtonGroupSelection } from '../rmg-button-group';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { ColorMode } from '@chakra-ui/react';

export default {
    title: 'RmgThemeProvider',
    component: RmgThemeProvider,
    decorators: [],
};

const Inner = () => {
    const { setColourMode } = useRmgColourMode();

    const selections: RmgButtonGroupSelection<ColorMode | 'system'>[] = [
        { label: 'System', value: 'system' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
    ];

    return (
        <RmgButtonGroup selections={selections} defaultValue={rmgRuntime.getColourMode()} onChange={setColourMode} />
    );
};

export const Basic = () => {
    return (
        <RmgThemeProvider>
            <Inner />
        </RmgThemeProvider>
    );
};
