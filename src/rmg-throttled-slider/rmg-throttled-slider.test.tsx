import '../polyfills';
import { render } from '../test-utils';
import { RmgThrottledSlider } from './rmg-throttled-slider';
import { act, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

const mockCallbacks = {
    onThrottledChange: vi.fn(),
};

describe('RmgThrottledSlider', () => {
    describe.skip('RmgThrottledSlider - actual implementation', () => {
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

    describe('RmgThrottledSlider - mock slider implementation', () => {
        it('Can throttle slider event with timeout and handle button event', async () => {
            render(
                <RmgThrottledSlider
                    defaultValue={50}
                    min={0}
                    max={100}
                    step={1}
                    leftIcon={<svg />}
                    rightIcon={<svg />}
                    {...mockCallbacks}
                />
            );

            // use button to decrease: 50 -> 40
            fireEvent.click(screen.getByRole('button', { name: 'Drag left' }));
            expect(mockCallbacks.onThrottledChange).toBeCalledTimes(1);
            expect(mockCallbacks.onThrottledChange).lastCalledWith(40);
            expect(screen.getByRole('slider')).toHaveValue(40);

            vi.useFakeTimers();

            // first change -> trigger callback: 40 -> 41
            fireEvent.change(screen.getByRole('slider'), { target: { value: 41 } });
            expect(mockCallbacks.onThrottledChange).toBeCalledTimes(2);
            expect(mockCallbacks.onThrottledChange).lastCalledWith(41);

            // second change -> do not trigger: 41 -> 42
            fireEvent.change(screen.getByRole('slider'), { target: { value: 42 } });
            expect(mockCallbacks.onThrottledChange).toBeCalledTimes(2);

            // third change -> do not trigger: 42 -> 43
            fireEvent.change(screen.getByRole('slider'), { target: { value: 43 } });
            expect(mockCallbacks.onThrottledChange).toBeCalledTimes(2);

            // wait 500ms -> return last callback
            await act(async () => {
                vi.advanceTimersByTime(501);
            });
            expect(mockCallbacks.onThrottledChange).toBeCalledTimes(3);
            expect(mockCallbacks.onThrottledChange).lastCalledWith(43);

            // use button to increase
            fireEvent.click(screen.getByRole('button', { name: 'Drag right' }));
            expect(mockCallbacks.onThrottledChange).toBeCalledTimes(4);
            expect(mockCallbacks.onThrottledChange).lastCalledWith(53);
            expect(screen.getByRole('slider')).toHaveValue(53);
        });
    });
});
