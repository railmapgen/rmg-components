import React from 'react';
import { render } from '../test-utils';
import { RmgThrottledSlider } from './rmg-throttled-slider';
import { act, fireEvent, screen } from '@testing-library/react';

const mockCallbacks = {
    onThrottledChange: jest.fn(),
};

describe('RmgThrottledSlider', () => {
    beforeEach(() => {
        // @ts-ignore
        delete window.ResizeObserver;
        window.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    afterEach(() => {
        window.ResizeObserver = ResizeObserver;
        jest.restoreAllMocks();
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('Can throttle onChange event with timeout', async () => {
        render(<RmgThrottledSlider defaultValue={5} min={0} max={10} {...mockCallbacks} />);

        jest.useFakeTimers();

        // first change -> trigger callback
        fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
        expect(mockCallbacks.onThrottledChange).toBeCalledTimes(1);
        expect(mockCallbacks.onThrottledChange).toBeCalledWith(6);

        // second change -> do not trigger
        fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
        expect(mockCallbacks.onThrottledChange).toBeCalledTimes(1);

        // third change -> do not trigger
        fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
        expect(mockCallbacks.onThrottledChange).toBeCalledTimes(1);

        // wait 500ms -> return last callback
        await act(async () => {
            jest.advanceTimersByTime(501);
        });
        expect(mockCallbacks.onThrottledChange).toBeCalledTimes(2);
        expect(mockCallbacks.onThrottledChange).toBeCalledWith(8);
    });
});
