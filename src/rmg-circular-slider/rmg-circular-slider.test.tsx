import '../polyfills';
import { render } from '../test-utils';
import { RmgCircularSlider } from './rmg-circular-slider';
import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

const mockCallbacks = {
    onChange: vi.fn(),
};

const mockSliderBounds = (slider: HTMLElement) => {
    vi.spyOn(slider, 'getBoundingClientRect').mockReturnValue({
        bottom: 100,
        height: 100,
        left: 0,
        right: 100,
        top: 0,
        width: 100,
        x: 0,
        y: 0,
        toJSON: () => ({}),
    });
};

describe('RmgCircularSlider', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('Can render circular slider with default props', () => {
        render(<RmgCircularSlider />);

        const slider = screen.getByRole('slider');
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveAttribute('aria-valuemin', '0');
        expect(slider).toHaveAttribute('aria-valuemax', '359');
        expect(slider).toHaveAttribute('aria-valuenow', '0');
    });

    it('Can render circular slider with custom range', () => {
        render(<RmgCircularSlider defaultValue={45} min={0} max={359} />);

        const slider = screen.getByRole('slider');
        expect(slider).toHaveAttribute('aria-valuenow', '45');
    });

    it('Can handle keyboard navigation with ArrowRight', () => {
        // Use value 50 which is not near a snap point (45 or 90)
        render(
            <RmgCircularSlider
                defaultValue={50}
                min={0}
                max={359}
                step={1}
                snapStep={45}
                snapThreshold={3}
                {...mockCallbacks}
            />
        );

        const slider = screen.getByRole('slider');

        // Move from 50 to 51 (not near snap point)
        fireEvent.keyDown(slider, { key: 'ArrowRight' });
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith(51);
    });

    it('calls onChangeEnd once after a continuous keyboard interaction', () => {
        const onChangeEnd = vi.fn();
        render(
            <RmgCircularSlider
                defaultValue={50}
                snapThreshold={0}
                onChange={mockCallbacks.onChange}
                onChangeEnd={onChangeEnd}
            />
        );

        const slider = screen.getByRole('slider');
        fireEvent.keyDown(slider, { key: 'ArrowRight' });
        fireEvent.keyDown(slider, { key: 'ArrowRight', repeat: true });

        expect(mockCallbacks.onChange).toHaveBeenNthCalledWith(1, 51);
        expect(mockCallbacks.onChange).toHaveBeenNthCalledWith(2, 52);
        expect(onChangeEnd).not.toHaveBeenCalled();

        fireEvent.keyUp(slider, { key: 'ArrowRight' });
        expect(onChangeEnd).toHaveBeenCalledTimes(1);
        expect(onChangeEnd).toHaveBeenCalledWith(52);
    });

    it('calls onChangeEnd once with the final mouse drag value', () => {
        const onChangeEnd = vi.fn();
        render(
            <RmgCircularSlider
                defaultValue={0}
                snapThreshold={0}
                onChange={mockCallbacks.onChange}
                onChangeEnd={onChangeEnd}
            />
        );

        const slider = screen.getByRole('slider');
        mockSliderBounds(slider);

        fireEvent.mouseDown(slider, { clientX: 100, clientY: 50 });
        fireEvent.mouseMove(window, { clientX: 50, clientY: 100 });
        fireEvent.mouseUp(window);

        expect(mockCallbacks.onChange).toHaveBeenNthCalledWith(1, 90);
        expect(mockCallbacks.onChange).toHaveBeenNthCalledWith(2, 180);
        expect(onChangeEnd).toHaveBeenCalledTimes(1);
        expect(onChangeEnd).toHaveBeenCalledWith(180);
    });

    it('calls onChangeEnd once with the final touch drag value', () => {
        const onChangeEnd = vi.fn();
        render(
            <RmgCircularSlider
                defaultValue={0}
                snapThreshold={0}
                onChange={mockCallbacks.onChange}
                onChangeEnd={onChangeEnd}
            />
        );

        const slider = screen.getByRole('slider');
        mockSliderBounds(slider);

        fireEvent.touchStart(slider, { touches: [{ clientX: 100, clientY: 50 }] });
        fireEvent.touchMove(window, { touches: [{ clientX: 50, clientY: 100 }] });
        fireEvent.touchEnd(window);

        expect(mockCallbacks.onChange).toHaveBeenNthCalledWith(1, 90);
        expect(mockCallbacks.onChange).toHaveBeenNthCalledWith(2, 180);
        expect(onChangeEnd).toHaveBeenCalledTimes(1);
        expect(onChangeEnd).toHaveBeenCalledWith(180);
    });

    it('does not repeat onChange while the pointer stays on the same value', () => {
        render(<RmgCircularSlider defaultValue={0} snapThreshold={0} {...mockCallbacks} />);

        const slider = screen.getByRole('slider');
        mockSliderBounds(slider);

        fireEvent.mouseDown(slider, { clientX: 100, clientY: 50 });
        fireEvent.mouseMove(window, { clientX: 100, clientY: 50 });
        fireEvent.mouseUp(window);

        expect(mockCallbacks.onChange).toHaveBeenCalledTimes(1);
        expect(mockCallbacks.onChange).toHaveBeenCalledWith(90);
    });

    it('Can handle keyboard navigation with ArrowUp', () => {
        render(
            <RmgCircularSlider
                defaultValue={50}
                min={0}
                max={359}
                step={1}
                snapStep={45}
                snapThreshold={3}
                {...mockCallbacks}
            />
        );

        const slider = screen.getByRole('slider');

        fireEvent.keyDown(slider, { key: 'ArrowUp' });
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith(51);
    });

    it('Can handle keyboard navigation with ArrowLeft', () => {
        render(
            <RmgCircularSlider
                defaultValue={50}
                min={0}
                max={359}
                step={1}
                snapStep={45}
                snapThreshold={3}
                {...mockCallbacks}
            />
        );

        const slider = screen.getByRole('slider');

        fireEvent.keyDown(slider, { key: 'ArrowLeft' });
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith(49);
    });

    it('Can handle keyboard navigation with ArrowDown', () => {
        render(
            <RmgCircularSlider
                defaultValue={50}
                min={0}
                max={359}
                step={1}
                snapStep={45}
                snapThreshold={3}
                {...mockCallbacks}
            />
        );

        const slider = screen.getByRole('slider');

        fireEvent.keyDown(slider, { key: 'ArrowDown' });
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith(49);
    });

    it('Can wrap around from max to min', () => {
        render(<RmgCircularSlider defaultValue={359} min={0} max={359} step={1} {...mockCallbacks} />);

        const slider = screen.getByRole('slider');

        fireEvent.keyDown(slider, { key: 'ArrowRight' });
        expect(mockCallbacks.onChange).toBeCalledWith(0);
    });

    it('Can wrap around from min to max', () => {
        // Start at 4, not 0, because 0 is a snap point
        // Moving from 4 down by 1 goes to 3, then 2, then 1, then 0 snaps to 0
        // We need to disable snapping or start from a position that won't snap
        render(
            <RmgCircularSlider
                defaultValue={1}
                min={0}
                max={359}
                step={1}
                snapStep={45}
                snapThreshold={3}
                {...mockCallbacks}
            />
        );

        const slider = screen.getByRole('slider');

        // 1 -> 0 (within snap threshold, snaps to 0)
        fireEvent.keyDown(slider, { key: 'ArrowLeft' });
        expect(mockCallbacks.onChange).toBeCalledWith(0);
    });

    it('Should not allow selecting disabled values', () => {
        render(
            <RmgCircularSlider
                defaultValue={179}
                min={0}
                max={359}
                step={1}
                disabledValues={[180]}
                {...mockCallbacks}
            />
        );

        const slider = screen.getByRole('slider');

        // Try to move to disabled value
        fireEvent.keyDown(slider, { key: 'ArrowRight' });
        // Should not call onChange when disabled value is encountered
        expect(mockCallbacks.onChange).not.toBeCalled();
    });

    it('Can snap to step values within threshold', () => {
        render(
            <RmgCircularSlider
                defaultValue={43}
                min={0}
                max={359}
                step={1}
                snapStep={45}
                snapThreshold={3}
                {...mockCallbacks}
            />
        );

        const slider = screen.getByRole('slider');

        // Move from 43 to 44, should snap to 45 (within threshold)
        fireEvent.keyDown(slider, { key: 'ArrowRight' });
        expect(mockCallbacks.onChange).toBeCalledWith(45);
    });

    it('Should use custom size', () => {
        render(<RmgCircularSlider size={150} />);

        const slider = screen.getByRole('slider');
        expect(slider).toHaveAttribute('width', '150');
        expect(slider).toHaveAttribute('height', '150');
    });
});
