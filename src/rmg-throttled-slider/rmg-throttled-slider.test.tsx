import '../polyfills';
import { render } from '../test-utils';
import { RmgThrottledSlider } from './rmg-throttled-slider';
import { act, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

const mockCallbacks = {
    onThrottledChange: vi.fn(),
};

describe.skip('RmgThrottledSlider', () => {
    afterEach(() => {
        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    it('Can throttle onChange event with timeout', async () => {
        render(<RmgThrottledSlider defaultValue={5} min={0} max={10} {...mockCallbacks} />);

        vi.useFakeTimers();

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
            vi.advanceTimersByTime(501);
        });
        expect(mockCallbacks.onThrottledChange).toBeCalledTimes(2);
        expect(mockCallbacks.onThrottledChange).toBeCalledWith(8);
    });
});
