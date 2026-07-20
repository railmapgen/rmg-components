import '../polyfills';
import { render } from '../test-utils';
import { RmgThrottledSlider } from './rmg-throttled-slider';
import { act, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

const mockCallbacks = {
    onThrottledChange: vi.fn(),
};

describe('RmgThrottledSlider', () => {
    describe('RmgThrottledSlider - actual implementation', () => {
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

        it('forwards Slider props and preserves the immediate onChange callback', () => {
            const onChange = vi.fn();
            const onChangeEnd = vi.fn();
            render(
                <RmgThrottledSlider
                    aria-label="Width scale"
                    defaultValue={5}
                    min={0}
                    max={10}
                    onChange={onChange}
                    onChangeEnd={onChangeEnd}
                    onThrottledChange={vi.fn()}
                />
            );

            const slider = screen.getByRole('slider', { name: 'Width scale' });
            const sliderRoot = slider.parentElement;
            expect(sliderRoot).not.toBeNull();
            vi.spyOn(sliderRoot!, 'getBoundingClientRect').mockReturnValue({
                bottom: 10,
                height: 10,
                left: 0,
                right: 100,
                top: 0,
                width: 100,
                x: 0,
                y: 0,
                toJSON: () => ({}),
            });

            fireEvent.pointerDown(sliderRoot!, { clientX: 60, clientY: 5, pointerId: 1 });
            fireEvent.pointerUp(window, { clientX: 60, clientY: 5, pointerId: 1 });

            expect(onChange).toHaveBeenCalledWith(0);
            expect(onChangeEnd).toHaveBeenCalledWith(0);
        });
    });

    describe.skip('RmgThrottledSlider - mock slider implementation', () => {
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
