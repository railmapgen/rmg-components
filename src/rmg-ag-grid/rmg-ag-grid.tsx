import React, { ReactNode } from 'react';
import { Box, useColorMode, useStyleConfig } from '@chakra-ui/react';
import { ColDef } from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

export interface RmgAgGridColDef<T> extends ColDef {
    field?: Extract<keyof T, string>;
}

export interface RmgAgGridProps {
    children: ReactNode;
}

export const RmgAgGrid = (props: RmgAgGridProps) => {
    const { children } = props;

    const { colorMode } = useColorMode();
    const styles = useStyleConfig('RmgAgGrid');

    return (
        <Box className={colorMode === 'light' ? 'ag-theme-alpine' : 'ag-theme-alpine-dark'} sx={styles}>
            {children}
        </Box>
    );
};
