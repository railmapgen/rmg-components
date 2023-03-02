import { ChakraProvider } from '@chakra-ui/react';
import { getRmgChakraTheme } from '../src';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    chakra: {
        theme: getRmgChakraTheme(),
    },
};

const withChakra = (StoryFn: Function) => {
    return (
        <ChakraProvider theme={getRmgChakraTheme()}>
            <div id="story-wrapper">
                <StoryFn />
            </div>
        </ChakraProvider>
    );
};

export const decorators = [withChakra];
