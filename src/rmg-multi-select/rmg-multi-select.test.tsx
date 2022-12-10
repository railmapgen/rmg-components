import { render } from '../test-utils';
import { RmgMultiSelect } from './rmg-multi-select';
import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

const mockSelections = [
    {
        label: 'Local',
        value: 'local',
        disabled: true,
    },
    {
        label: 'Express',
        value: 'express',
    },
    {
        label: 'Direct',
        value: 'direct',
    },
];

const mockCallbacks = {
    onChange: vi.fn(),
};

describe('RmgMultiSelect', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('Can handle multi selection as expected', async () => {
        render(
            <RmgMultiSelect
                displayValue="Select services"
                selections={mockSelections}
                defaultValue={['local']}
                {...mockCallbacks}
            />
        );

        fireEvent.click(screen.getByRole('combobox', { name: 'Select services' }));
        await screen.findByRole('dialog');

        expect(screen.getByRole('checkbox', { name: 'Local' })).toBeDisabled();
        expect(screen.getByRole('checkbox', { name: 'Local' })).toBeChecked();
        expect(screen.getByRole('checkbox', { name: 'Express' })).not.toBeChecked();
        expect(screen.getByRole('checkbox', { name: 'Direct' })).not.toBeChecked();
        expect(screen.getByRole('status')).toHaveTextContent('1/3');

        fireEvent.click(screen.getByRole('checkbox', { name: 'Express' }));

        expect(screen.getByRole('checkbox', { name: 'Express' })).toBeChecked();
        expect(screen.getByRole('status')).toHaveTextContent('2/3');
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).lastCalledWith(['local', 'express']);
    });

    it('Can show correct number of selected as expected', () => {
        render(
            <RmgMultiSelect
                displayValue="Select services"
                selections={mockSelections}
                defaultValue={['local', 'special']}
                {...mockCallbacks}
            />
        );
        expect(screen.getByRole('status')).toHaveTextContent('1/3');
    });
});
