import React, { ReactNode } from 'react';
import { FormControl, FormControlProps, FormLabel, useStyleConfig } from '@chakra-ui/react';

export interface RmgLabelProps extends FormControlProps {
    label: string;
    children: ReactNode;
    noLabel?: boolean;
    oneLine?: boolean;
}

export const RmgLabel = (props: RmgLabelProps) => {
    const { label, children, width, noLabel, oneLine, className, ...others } = props;

    const styles = useStyleConfig('RmgLabel');

    return (
        <FormControl
            className={`${oneLine ? 'rmg-label__one-line' : ''} ${className ?? ''}`}
            aria-label={label}
            sx={styles}
            {...others}
        >
            {!noLabel && <FormLabel size="xs">{label}</FormLabel>}

            {children}
        </FormControl>
    );
};
