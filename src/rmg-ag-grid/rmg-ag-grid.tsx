import React, { ReactNode } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

export interface RmgAgGridProps {
    children: ReactNode;
}

export const RmgAgGrid = (props: RmgAgGridProps) => {
    const { children } = props;

    const { colorMode } = useColorMode();

    return (
        <Box className={colorMode === 'light' ? 'ag-theme-alpine' : 'ag-theme-alpine-dark'} w="100%" h="100%">
            {children}
        </Box>
    );
};
