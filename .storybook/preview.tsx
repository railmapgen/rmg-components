import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from '../src/theme/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    chakra: {
        theme: chakraTheme,
    },
};

const withChakra = (StoryFn: Function) => {
    return (
        <ChakraProvider theme={chakraTheme}>
            <div id="story-wrapper">
                <StoryFn />
            </div>
        </ChakraProvider>
    );
};

export const decorators = [withChakra];
