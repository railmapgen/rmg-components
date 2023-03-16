import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { RmgThemeProvider } from './rmg-theme-provider';
import { vi } from 'vitest';

const originalMatchQuery = global.window.matchMedia;
const mockMatchQuery = vi.fn();

describe('RmgThemeProvider', () => {
    afterEach(() => {
        window.localStorage.clear();
        global.window.matchMedia = originalMatchQuery;
    });

    it('Can initiate colour mode as system default (dark)', () => {
        window.localStorage.setItem('chakra-ui-color-mode', 'light'); // this is ignored

        global.window.matchMedia = mockMatchQuery.mockImplementation(query => ({
            matches: query === '(prefers-color-scheme: dark)',
            media: query,
            onchange: null,
            addListener: vi.fn(), // deprecated
            removeListener: vi.fn(), // deprecated
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        }));
        render(<RmgThemeProvider />);

        expect(document.body).toHaveClass('chakra-ui-dark');
        expect(window.localStorage.getItem('chakra-ui-color-mode')).toBe('dark');
    });

    it('Can initiate colour mode based on rmgRuntime value', () => {
        window.localStorage.setItem('rmg-runtime__colourMode', 'dark');
        window.localStorage.setItem('chakra-ui-color-mode', 'light'); // this is ignored
        render(<RmgThemeProvider />);

        expect(document.body).toHaveClass('chakra-ui-dark');
        expect(window.localStorage.getItem('chakra-ui-color-mode')).toBe('dark');
    });
});
