import { ReactNode } from 'react';
import { Box, useColorMode, useStyleConfig } from '@chakra-ui/react';

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
