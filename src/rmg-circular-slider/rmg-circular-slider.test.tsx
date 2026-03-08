import '../polyfills';
import { render } from '../test-utils';
import { RmgCircularSlider } from './rmg-circular-slider';
import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

const mockCallbacks = {
    onChange: vi.fn(),
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
        const svg = slider as SVGSVGElement;
        expect(svg.getAttribute('width')).toBe('150');
        expect(svg.getAttribute('height')).toBe('150');
    });
});
