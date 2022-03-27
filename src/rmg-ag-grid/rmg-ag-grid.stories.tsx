import { RmgAgGrid, RmgAgGridColDef } from './rmg-ag-grid';
import { AgGridReact } from 'ag-grid-react';
import { Badge, Box } from '@chakra-ui/react';

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
    ];

    const columnDefs: RmgAgGridColDef<RowDataType>[] = [
        {
            headerName: 'ID',
            field: 'id',
            pinned: 'left',
            cellRenderer: ({ value }: { value: string }) => <Badge>{value}</Badge>,
        },
        { field: 'name' },
        { field: 'age' },
        { field: 'nationality' },
    ];

    return (
        <Box h={400} maxW={500}>
            <RmgAgGrid>
                <AgGridReact rowData={rowData} columnDefs={columnDefs} suppressCellFocus={true} debug={true} />
            </RmgAgGrid>
        </Box>
    );
};
