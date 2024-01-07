import './polyfills';
import { TextEncoder } from 'util';

vi.stubGlobal('TextEncoder', TextEncoder);

global.window.matchMedia = query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
});

const originalFetch = global.fetch;
global.fetch = vi.fn().mockImplementation((...args: any[]) => {
    if (args[0].toString().includes('/info.json')) {
        return Promise.resolve({
            ok: true,
            status: 200,
            json: () => import('../info.json').then(module => module.default),
        }) as any;
    } else {
        return originalFetch(args[0], args[1]);
    }
});
Element.prototype.scrollIntoView = vi.fn();
