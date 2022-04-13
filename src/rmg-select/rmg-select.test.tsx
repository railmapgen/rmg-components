import React from 'react';
import { RmgSelect } from './rmg-select';
import { render } from '../test-utils';
import { screen } from '@testing-library/react';

const mockSelectProps = {
    defaultValue: 'opt1',
    options: {
        undefined: 'Please select...',
        opt1: 'Option 1',
        opt2: 'Option 2',
    },
    disabledOptions: ['undefined'],
    onChange: jest.fn(),
};

const setup = () => render(<RmgSelect {...mockSelectProps} />);

describe('Unit tests for RmgSelect component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Can render select with disabled options as expected', () => {
        setup();

        expect(screen.getAllByRole('option')).toHaveLength(3);
        expect(screen.getByText('Please select...')).toBeDisabled();
    });

    it('Can re-render input field with new defaultValue without firing onChange event', () => {
        const { rerender } = setup();
        expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument();
        expect(screen.queryByDisplayValue('Option 2')).not.toBeInTheDocument();

        rerender(<RmgSelect {...mockSelectProps} defaultValue="opt2" />);
        expect(screen.queryByDisplayValue('Option 1')).not.toBeInTheDocument();
        expect(screen.getByDisplayValue('Option 2')).toBeInTheDocument();
        expect(mockSelectProps.onChange).toBeCalledTimes(0);
    });
});
