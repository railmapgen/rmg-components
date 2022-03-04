import { ChakraProvider } from '@chakra-ui/react';
import { rmgTheme } from '../src';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    chakra: {
        theme: rmgTheme,
    },
};

const withChakra = (StoryFn: Function) => {
    return (
        <ChakraProvider theme={rmgTheme}>
            <div id="story-wrapper">
                <StoryFn />
            </div>
        </ChakraProvider>
    );
};

export const decorators = [withChakra];
