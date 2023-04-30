import { mergeConfig } from 'vite';

const config = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
    features: {
        storyStoreV7: true,
        emotionAlias: false,
    },
    docs: {
        autodocs: true,
    },
    viteFinal: async config => {
        return mergeConfig(config, {
            // Use the same "resolve" configuration as your app
            // resolve: (await import('../vite.config.ts')).default.resolve,
            base: '/rmg-components/',
        });
    },
};
export default config;
