import { RmgDataTable, RmgDataTableDataType, RmgDataTableFieldType } from './rmg-data-table';
import { render } from '../test-utils';
import { screen, within } from '@testing-library/react';

const mockData: RmgDataTableDataType[] = [{ id: '001', field1: 'Value 1' }];

describe('RmgDataTable', () => {
    it('Can display column header and cell value as expected', () => {
        const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [{ label: 'Field 1', key: 'field1' }];
        render(<RmgDataTable data={mockData} fields={fields} />);

        expect(screen.getByRole('columnheader', { name: 'Field 1' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: 'Value 1' })).toBeInTheDocument();
    });

    it('Can display customised component in cell as expected', () => {
        const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [
            {
                label: 'Field 1',
                displayHandler: item => <button>{item.field1}</button>,
            },
        ];
        render(<RmgDataTable data={mockData} fields={fields} />);

        expect(within(screen.getByRole('cell')).getByRole('button', { name: 'Value 1' })).toBeInTheDocument();
    });

    it('Can hide column if defined as hidden', () => {
        const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [
            { label: 'Field 1', key: 'field1', hidden: true },
        ];
        render(<RmgDataTable data={mockData} fields={fields} />);

        expect(screen.queryByRole('columnheader')).not.toBeInTheDocument();
        expect(screen.queryByRole('cell')).not.toBeInTheDocument();
    });
});
