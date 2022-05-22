import React from 'react';
import { RmgDebouncedInput } from './rmg-debounced-input';
import { render } from '../test-utils';
import { fireEvent, screen } from '@testing-library/react';

const mockCallbacks = {
    onDebouncedChange: jest.fn(),
};

describe('Unit tests for DebouncedInput component', () => {
    afterEach(() => {
        jest.clearAllTimers();
        jest.resetAllMocks();
    });

    it('Can debounce onChange event as expected', () => {
        render(<RmgDebouncedInput {...mockCallbacks} />);

        jest.useFakeTimers();

        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'te' } });
        jest.advanceTimersByTime(200);

        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'test' } });
        jest.advanceTimersByTime(1000);

        expect(mockCallbacks.onDebouncedChange).toBeCalledTimes(1);
        expect(mockCallbacks.onDebouncedChange).lastCalledWith('test');
    });

    it('Can re-render input field with new defaultValue without firing onChange event', () => {
        const { rerender } = render(<RmgDebouncedInput defaultValue="value-1" {...mockCallbacks} />);
        expect(screen.getByDisplayValue('value-1')).not.toBeNull();

        jest.useFakeTimers();

        rerender(<RmgDebouncedInput defaultValue="value-2" {...mockCallbacks} />);
        expect(screen.queryByDisplayValue('value-1')).toBeNull();
        expect(screen.getByDisplayValue('value-2')).not.toBeNull();

        jest.advanceTimersByTime(1000);
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

        jest.useFakeTimers();
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'value-1' } });
        jest.advanceTimersByTime(0);

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
