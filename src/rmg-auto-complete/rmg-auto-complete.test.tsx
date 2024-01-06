import { render } from '../test-utils';
import RmgAutoComplete from './rmg-auto-complete';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

const mockData = [
    { id: 'gz', value: 'Guangzhou', additionalValue: '廣州' },
    { id: 'hk', value: 'Hong Kong', additionalValue: '香港' },
    { id: 'sh', value: 'Shanghai', additionalValue: '上海' },
];

const mockCallbacks = {
    onChange: vi.fn(),
};
Element.prototype.scrollIntoView = vi.fn();

const setup = () =>
    render(
        <RmgAutoComplete
            data={mockData}
            displayValue={item => item.value + ' (' + item.value[0] + ')'} // Guangzhou (G)
            filter={(input, item) =>
                item.value.toLowerCase().includes(input.toLowerCase()) ||
                item.additionalValue.toLowerCase().includes(input.toLowerCase())
            }
            {...mockCallbacks}
        />
    );

describe('RmgAutoComplete', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('Can render list of items as expected', async () => {
        const user = userEvent.setup();
        setup();

        await user.click(screen.getByRole('textbox'));
        expect(screen.getByRole('menuitem', { name: 'Guangzhou (G)' })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: 'Hong Kong (H)' })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: 'Shanghai (S)' })).toBeInTheDocument();
    });

    it('Can filter item as expected', async () => {
        const user = userEvent.setup();
        setup();

        await user.type(screen.getByRole('textbox'), 'hong');

        expect(screen.queryByText('Guangzhou (G)')).not.toBeInTheDocument();
        expect(screen.getByText('Hong Kong (H)')).toBeInTheDocument();
        expect(screen.queryByText('Shanghai (S)')).not.toBeInTheDocument();
    });

    it('Can filter item by additional value as expected', async () => {
        const user = userEvent.setup();
        setup();

        await user.type(screen.getByRole('textbox'), '廣');

        expect(screen.getByText('Guangzhou (G)')).toBeInTheDocument();
        expect(screen.queryByText('Hong Kong (H)')).not.toBeInTheDocument();
        expect(screen.queryByText('Shanghai (S)')).not.toBeInTheDocument();
    });

    it('Can handle selecting item action as expected', async () => {
        const user = userEvent.setup();
        setup();

        await user.click(screen.getByRole('textbox'));
        await user.click(screen.getByRole('menuitem', { name: 'Guangzhou (G)' }));

        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith(expect.objectContaining({ id: 'gz' }));
    });
});
