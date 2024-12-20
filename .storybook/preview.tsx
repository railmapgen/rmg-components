import { ChakraProvider } from '@chakra-ui/react';
import { getRmgChakraTheme } from '../src';
import { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        actions: {},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        chakra: {
            theme: getRmgChakraTheme(),
        },
    },

    decorators: [
        Story => (
            <ChakraProvider theme={getRmgChakraTheme()}>
                <div id="story-wrapper">
                    <Story />
                </div>
            </ChakraProvider>
        ),
    ],

    tags: ['autodocs']
};

export default preview;
