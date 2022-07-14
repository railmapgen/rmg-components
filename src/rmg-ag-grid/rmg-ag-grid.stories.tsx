import { RmgAgGrid } from './rmg-ag-grid';
import { AgGridReact } from 'ag-grid-react';
import { Badge, Box } from '@chakra-ui/react';
import { ColDef } from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

export default {
    title: 'RmgAgGrid',
    component: RmgAgGrid,
};

interface RowDataType {
    id: string;
    name: string;
    age: number;
    nationality: string;
}

export const Basic = () => {
    const rowData: RowDataType[] = [
        { id: '001', name: 'Alice', age: 18, nationality: 'Great Britain' },
        { id: '002', name: 'Benjamin', age: 20, nationality: 'United States' },
        { id: '003', name: 'Charlie', age: 19, nationality: 'Australia' },
        { id: '004', name: 'David', age: 23, nationality: 'New Zealand' },
    ];

    const columnDefs: ColDef<RowDataType>[] = [
        {
            headerName: ' ',
            checkboxSelection: true,
            pinned: 'left',
            width: 36,
        },
        {
            headerName: 'ID',
            field: 'id',
            pinned: 'left',
            width: 60,
            cellRenderer: ({ value }: { value: string }) => <Badge>{value}</Badge>,
        },
        { field: 'name' },
        { field: 'age' },
        { field: 'nationality' },
        {
            headerName: 'Row span 1',
            field: 'id',
            rowSpan: ({ data }) => (data?.id === '001' ? 3 : 0),
            cellClassRules: {
                'rmg-ag-grid--spanned-cell': ({ value }) => value === '001',
            },
        },
        {
            headerName: 'Row span 2',
            field: 'id',
            rowSpan: ({ data }) => (data?.id === '002' ? 3 : 0),
            cellClassRules: {
                'rmg-ag-grid--spanned-cell': ({ value }) => value === '002',
            },
        },
    ];

    return (
        <Box h={400} maxW={700}>
            <RmgAgGrid>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    headerHeight={36}
                    rowHeight={36}
                    suppressCellFocus={true}
                    suppressRowTransform={true}
                    debug={true}
                />
            </RmgAgGrid>
        </Box>
    );
};
