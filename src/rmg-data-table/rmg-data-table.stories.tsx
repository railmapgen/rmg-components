import { RmgDataTable, RmgDataTableDataType, RmgDataTableFieldType } from './rmg-data-table';
import { Badge } from '@chakra-ui/react';

export default {
    title: 'RmgDataTable',
    component: RmgDataTable,
};

export const Basic = () => {
    const data: RmgDataTableDataType[] = [
        { id: '001', name: 'Alice', age: 18 },
        { id: '002', name: 'Benjamin', age: 20 },
        { id: '003', name: 'Charlie', age: 19 },
    ];

    const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [
        { label: 'ID', displayHandler: item => <Badge>{item.id}</Badge> },
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
    ];

    return <RmgDataTable data={data} fields={fields} />;
};
