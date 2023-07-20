import { RmgSelect } from './rmg-select';
import { render } from '../test-utils';
import { screen, within } from '@testing-library/react';
import { vi } from 'vitest';

const mockSelectProps = {
    defaultValue: 'opt1',
    options: {
        undefined: 'Please select...',
        opt1: 'Option 1',
        opt2: 'Option 2',
    },
    disabledOptions: ['undefined'],
    onChange: vi.fn(),
};

const mockSelectWithOptGroupProps = {
    defaultValue: 'en',
    options: {
        'Main languages': {
            en: 'English',
            zh: 'Chinese',
        },
        'Other languages': {
            ja: 'Japanese',
        },
    },
    disabledOptions: ['zh'],
    onChange: vi.fn(),
};

const setup = () => render(<RmgSelect {...mockSelectProps} />);

describe('RmgSelect', () => {
    describe('RmgSelect - no optgroup', () => {
        afterEach(() => {
            vi.clearAllMocks();
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

    describe('RmgSelect - with optgroup', () => {
        it('Can render with optgroups', () => {
            render(<RmgSelect {...mockSelectWithOptGroupProps} />);

            const mainGroup = screen.getByRole('group', { name: 'Main languages' });
            expect(mainGroup).toBeInTheDocument();
            expect(within(mainGroup).getByRole('option', { name: 'English' })).toBeInTheDocument();
            expect(within(mainGroup).getByRole('option', { name: 'Chinese' })).toBeInTheDocument();
            expect(within(mainGroup).getByRole('option', { name: 'Chinese' })).toBeDisabled();

            const otherGroup = screen.getByRole('group', { name: 'Other languages' });
            expect(otherGroup).toBeInTheDocument();
            expect(within(otherGroup).getByRole('option', { name: 'Japanese' })).toBeInTheDocument();
        });
    });
});
