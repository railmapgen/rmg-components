import { render } from '../../test-utils';
import { RmgAutoComplete } from './rmg-auto-complete';
import { act, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

const mockData = [
    { id: 'gz', value: 'Guangzhou', additionalValue: '廣州' },
    { id: 'hk', value: 'Hong Kong', additionalValue: '香港' },
    { id: 'sh', value: 'Shanghai', additionalValue: '上海' },
];

const mockCallbacks = {
    onChange: vi.fn(),
};

const setup = () =>
    render(
        <RmgAutoComplete
            data={mockData}
            displayValue={item => item.value + ' (' + item.value[0] + ')'} // Guangzhou (G)
            predicate={(item, input) =>
                item.value.toLowerCase().includes(input.toLowerCase()) ||
                item.additionalValue.toLowerCase().includes(input.toLowerCase())
            }
            {...mockCallbacks}
        />
    );

describe('RmgAutoComplete - popover implementation', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('Can render list of items as expected', async () => {
        setup();

        fireEvent.focus(screen.getByRole('combobox'));
        await screen.findByRole('dialog');

        expect(screen.getByRole('menuitem', { name: 'Guangzhou (G)' })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: 'Hong Kong (H)' })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: 'Shanghai (S)' })).toBeInTheDocument();
    });

    it('Can filter item as expected', async () => {
        setup();

        vi.useFakeTimers();
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'hong' } });
        await act(async () => {
            vi.advanceTimersByTime(501);
        });

        expect(screen.queryByText('Guangzhou (G)')).not.toBeInTheDocument();
        expect(screen.getByText('Hong Kong (H)')).toBeInTheDocument();
        expect(screen.queryByText('Shanghai (S)')).not.toBeInTheDocument();
    });

    it('Can filter item by additional value as expected', async () => {
        setup();

        vi.useFakeTimers();
        fireEvent.change(screen.getByRole('combobox'), { target: { value: '廣' } });
        await act(async () => {
            vi.advanceTimersByTime(501);
        });

        expect(screen.getByText('Guangzhou (G)')).toBeInTheDocument();
        expect(screen.queryByText('Hong Kong (H)')).not.toBeInTheDocument();
        expect(screen.queryByText('Shanghai (S)')).not.toBeInTheDocument();
    });

    it('Can handle selecting item action as expected', () => {
        setup();

        fireEvent.click(screen.getByText('Guangzhou (G)'));

        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith(expect.objectContaining({ id: 'gz' }));
    });
});