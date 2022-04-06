import React, { ReactNode } from 'react';
import { FormControl, FormControlProps, FormLabel, useStyleConfig } from '@chakra-ui/react';

export interface RmgLabelProps extends FormControlProps {
    label: string;
    children: ReactNode;
    noLabel?: boolean;
    oneLine?: boolean;
}

export const RmgLabel = (props: RmgLabelProps) => {
    const { label, children, width, noLabel, oneLine, ...others } = props;

    const styles = useStyleConfig('RmgLabel');

    return (
        <FormControl className={oneLine ? 'rmg-label__one-line' : ''} sx={styles} {...others}>
            {!noLabel && (
                <FormLabel size="xs" marginRight={oneLine ? 'auto !important' : 'unset'}>
                    {label}
                </FormLabel>
            )}

            {children}
        </FormControl>
    );
};
