import React from 'react';
import { mount } from 'enzyme';
import { RmgDataTable, RmgDataTableDataType, RmgDataTableFieldType } from './rmg-data-table';

const mockData: RmgDataTableDataType[] = [{ id: '001', field1: 'Value 1' }];

describe('Unit tests for DataTable component', () => {
    it('Can display column header and cell value as expected', () => {
        const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [{ label: 'Field 1', key: 'field1' }];

        const wrapper = mount(<RmgDataTable data={mockData} fields={fields} />);

        expect(wrapper.find('th').text()).toBe('Field 1');
        expect(wrapper.find('td').text()).toBe('Value 1');
    });

    it('Can display customised component in cell as expected', () => {
        const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [
            {
                label: 'Field 1',
                displayHandler: item => <button>{item.field1}</button>,
            },
        ];

        const wrapper = mount(<RmgDataTable data={mockData} fields={fields} />);

        expect(wrapper.find('button').text()).toBe('Value 1');
    });

    it('Can hide column if defined as hidden', () => {
        const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [
            { label: 'Field 1', key: 'field1', hidden: true },
        ];

        const wrapper = mount(<RmgDataTable data={mockData} fields={fields} />);

        expect(wrapper.find('thead tr').isEmptyRender()).toBeTruthy();
        expect(wrapper.find('tbody tr').isEmptyRender()).toBeTruthy();
    });
});
