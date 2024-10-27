import '@testing-library/jest-dom';
import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { RmgThemeProvider } from './rmg-theme-provider';

interface TestingProviderProps {
    children?: ReactNode;
}

const TestingProvider = (props: TestingProviderProps) => {
    const { children } = props;
    return <RmgThemeProvider>{children}</RmgThemeProvider>;
};

const initialOptions: Omit<RenderOptions, 'wrapper'> = {};

const customRender = (ui: ReactElement, renderOptions = initialOptions) => {
    return render(ui, { wrapper: TestingProvider, ...renderOptions });
};

export { customRender as render };
