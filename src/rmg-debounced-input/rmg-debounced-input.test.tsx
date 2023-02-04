import { RmgDebouncedInput } from './rmg-debounced-input';
import { render } from '../test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

const mockCallbacks = {
    onDebouncedChange: vi.fn(),
};

describe('Unit tests for DebouncedInput component', () => {
    afterEach(() => {
        vi.clearAllTimers();
        vi.resetAllMocks();
    });

    it('Can debounce onChange event as expected', () => {
        render(<RmgDebouncedInput {...mockCallbacks} />);

        vi.useFakeTimers();

        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'te' } });
        vi.advanceTimersByTime(200);

        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'test' } });
        vi.advanceTimersByTime(1000);

        expect(mockCallbacks.onDebouncedChange).toBeCalledTimes(1);
        expect(mockCallbacks.onDebouncedChange).lastCalledWith('test');
    });

    it('Can fire onChange event when field is blurred', () => {
        render(<RmgDebouncedInput {...mockCallbacks} />);

        vi.useFakeTimers();
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'test' } });
        fireEvent.blur(screen.getByRole('combobox'));

        expect(mockCallbacks.onDebouncedChange).toBeCalledTimes(1);
        expect(mockCallbacks.onDebouncedChange).lastCalledWith('test');
    });

    it('Can re-render input field with new defaultValue without firing onChange event', () => {
        const { rerender } = render(<RmgDebouncedInput defaultValue="value-1" {...mockCallbacks} />);
        expect(screen.getByDisplayValue('value-1')).not.toBeNull();

        vi.useFakeTimers();

        rerender(<RmgDebouncedInput defaultValue="value-2" {...mockCallbacks} />);
        expect(screen.queryByDisplayValue('value-1')).toBeNull();
        expect(screen.getByDisplayValue('value-2')).not.toBeNull();

        vi.advanceTimersByTime(1000);
        expect(mockCallbacks.onDebouncedChange).toBeCalledTimes(0);
    });

    it('Can clear input field when defaultValue is changed to undefined', () => {
        const { rerender } = render(<RmgDebouncedInput defaultValue="value-1" {...mockCallbacks} />);
        expect(screen.getByDisplayValue('value-1')).not.toBeNull();

        rerender(<RmgDebouncedInput {...mockCallbacks} />);
        expect(screen.queryByDisplayValue('value-1')).toBeNull();
    });

    it('Can set debounce delay to 0 as expected', async () => {
        render(<RmgDebouncedInput delay={0} {...mockCallbacks} />);

        vi.useFakeTimers();
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'value-1' } });
        vi.advanceTimersByTime(0);

        expect(mockCallbacks.onDebouncedChange).toBeCalledTimes(1);
        expect(mockCallbacks.onDebouncedChange).toBeCalledWith('value-1');
    });

    it('Can set input field as invalid as expected with validator', () => {
        // accept number only
        render(<RmgDebouncedInput validator={value => !isNaN(Number(value))} {...mockCallbacks} />);
        expect(screen.getByRole('combobox')).toBeValid();

        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'abc' } });
        expect(screen.getByRole('combobox')).not.toBeValid();

        fireEvent.change(screen.getByRole('combobox'), { target: { value: '123' } });
        expect(screen.getByRole('combobox')).toBeValid();
    });
});
