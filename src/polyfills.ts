import ResizeObserverPolyfill from 'resize-observer-polyfill';

if (!window.ResizeObserver) {
    window.ResizeObserver = ResizeObserverPolyfill;
}
