import { Fragment, ReactElement } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, useStyleConfig } from '@chakra-ui/react';

type valueField<T> = {
    key: keyof T;
};

type customField<T> = {
    displayHandler: (d: T) => ReactElement | string | number;
};

export type RmgDataTableFieldType<T> = (valueField<T> | customField<T>) & { label: string; hidden?: boolean };
export type RmgDataTableDataType = { id: string } & Record<string, any>;

export interface RmgDataTableProps<T> {
    data: T[];
    fields: Array<RmgDataTableFieldType<T>>;
}

export function RmgDataTable<T extends RmgDataTableDataType>(props: RmgDataTableProps<T>) {
    const { data, fields } = props;

    const styles = useStyleConfig('RmgDataTable');

    const pageData = data.map(d => ({
        data: d,
        display: fields.reduce<{ [key: string]: { value: any } }>((acc, cur) => {
            if ((cur as any).key) {
                return { ...acc, [cur.label]: { value: (d[(cur as any).key] || '').toString() } };
            } else {
                return { ...acc, [cur.label]: { value: (cur as any).displayHandler(d) } };
            }
        }, {}),
    }));

    return (
        <Table size="sm" sx={styles}>
            <Thead>
                <Tr>
                    {fields.map((field, i) =>
                        field.hidden ? (
                            <Fragment key={i} />
                        ) : (
                            <Th key={i} p={1}>
                                {field.label}
                            </Th>
                        )
                    )}
                </Tr>
            </Thead>
            <Tbody>
                {pageData.map(item => (
                    <Tr key={item.data.id}>
                        {fields.map((field, i) =>
                            field.hidden ? (
                                <Fragment key={i} />
                            ) : (
                                <Td key={item.data.id + '-' + i} p={1}>
                                    {item.display[field.label].value}
                                </Td>
                            )
                        )}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
