import { mergeConfig } from 'vite';
import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../public'],

    addons: [
        // '@chakra-ui/storybook-addon',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    features: {},

    docs: {},

    viteFinal: async config => {
        return mergeConfig(config, {
            // Use the same "resolve" configuration as your app
            // resolve: (await import('../vite.config.ts')).default.resolve,
            base: '/rmg-components/',
        });
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};
export default config;
