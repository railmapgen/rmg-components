import React, { ReactNode } from 'react';
import { FormControl, FormControlProps, FormLabel, useStyleConfig } from '@chakra-ui/react';

export interface RmgLabelProps extends FormControlProps {
    label: string;
    children: ReactNode;
    noLabel?: boolean;
}

export const RmgLabel = (props: RmgLabelProps) => {
    const { label, children, width, noLabel, ...others } = props;

    const styles = useStyleConfig('RmgLabel');

    return (
        <FormControl sx={styles} {...others}>
            {!noLabel && <FormLabel size="xs">{label}</FormLabel>}

            {children}
        </FormControl>
    );
};
