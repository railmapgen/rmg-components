import { render } from '../test-utils';
import RmgAutoComplete from './rmg-auto-complete';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

type DataType = {
    id: string;
    value: string;
    additionalValue: string;
};
const mockData: DataType[] = [
    { id: 'gz', value: 'Guangzhou', additionalValue: '廣州' },
    { id: 'hk', value: 'Hong Kong', additionalValue: '香港' },
    { id: 'sh', value: 'Shanghai', additionalValue: '上海' },
];

const mockCallbacks = {
    onChange: vi.fn(),
};

const filter = (input: string, item: DataType) =>
    item.value.toLowerCase().includes(input.toLowerCase()) ||
    item.additionalValue.toLowerCase().includes(input.toLowerCase());

const setup = () =>
    render(
        <RmgAutoComplete
            data={mockData}
            displayHandler={item => item.value + ' (' + item.value[0] + ')'} // Guangzhou (G)
            filter={filter}
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
        expect(screen.getByText('Guangzhou (G)')).toBeInTheDocument();
        expect(screen.getByText('Hong Kong (H)')).toBeInTheDocument();
        expect(screen.getByText('Shanghai (S)')).toBeInTheDocument();
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

    it('Both autocomplete and input elements are controlled', async () => {
        const user = userEvent.setup();
        const { rerender } = render(<RmgAutoComplete data={mockData} filter={filter} {...mockCallbacks} />);

        // initial state
        const inputEl = screen.getByRole('textbox');
        expect(inputEl).toHaveDisplayValue('');

        // select Hong Kong
        await user.type(inputEl, 'hong');
        await user.click(screen.getByRole('menuitem', { name: 'Hong Kong' }));
        expect(inputEl).toHaveDisplayValue('Hong Kong');
        expect(mockCallbacks.onChange).toBeCalledTimes(1);

        // set state Guangzhou
        rerender(<RmgAutoComplete data={mockData} filter={filter} value="Guangzhou" {...mockCallbacks} />);
        expect(inputEl).toHaveDisplayValue('Guangzhou');
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
    });

    it('Can capture dropdown open state in callbacks', async () => {
        const mockHandleKeyDown = vi.fn();
        const user = userEvent.setup();
        render(
            <RmgAutoComplete
                data={mockData}
                filter={filter}
                InputPropsByState={isOpen => ({ onKeyDown: e => mockHandleKeyDown(isOpen, e.key) })}
                {...mockCallbacks}
            />
        );

        await user.tab();
        await user.keyboard('[ArrowDown]');

        // select
        await user.keyboard('[Enter]');
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockHandleKeyDown).lastCalledWith(true, 'Enter');

        // enter after select
        await user.keyboard('[Enter]');
        expect(mockHandleKeyDown).lastCalledWith(false, 'Enter');
    });
});
