import '@testing-library/jest-dom';
import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { getRmgChakraTheme } from './theme';

interface TestingProviderProps {
    children?: ReactNode;
}

const TestingProvider = (props: TestingProviderProps) => {
    const { children } = props;
    return <ChakraProvider theme={getRmgChakraTheme()}>{children}</ChakraProvider>;
};

const initialOptions: Omit<RenderOptions, 'wrapper'> = {};

const customRender = (ui: ReactElement, renderOptions = initialOptions) => {
    return render(ui, { wrapper: TestingProvider, ...renderOptions });
};

export { customRender as render };
