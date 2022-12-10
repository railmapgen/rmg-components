import { TextEncoder } from 'util';
import ResizeObserver from 'resize-observer-polyfill';
import { vi } from 'vitest';

vi.stubGlobal('ResizeObserver', ResizeObserver);

// global.window.ResizeObserver = ResizeObserver;
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

class BroadcastChannel {
    postMessage() {}

    onmessage() {}
}

global.BroadcastChannel = BroadcastChannel as any;

const originalFetch = global.fetch;
global.fetch = (...args) => {
    if (args[0].toString().includes('/info.json')) {
        return Promise.resolve({
            ok: true,
            status: 200,
            json: () =>
                Promise.resolve({
                    component: 'rmg-components',
                    version: '9.9.9',
                    environment: 'DEV',
                    instance: 'localhost',
                }),
        }) as any;
    } else {
        return originalFetch(...args);
    }
};

global.TextEncoder = TextEncoder;
