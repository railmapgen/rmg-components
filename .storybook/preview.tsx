import { ChakraProvider } from '@chakra-ui/react';
import { rmgChakraTheme } from '../src';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    chakra: {
        theme: rmgChakraTheme,
    },
};

const withChakra = (StoryFn: Function) => {
    return (
        <ChakraProvider theme={rmgChakraTheme}>
            <div id="story-wrapper">
                <StoryFn />
            </div>
        </ChakraProvider>
    );
};

export const decorators = [withChakra];
