import React, { ReactNode } from 'react';
import {
    FormControl,
    FormControlProps,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    useStyleConfig,
} from '@chakra-ui/react';

export interface RmgLabelProps extends FormControlProps {
    label: string;
    children: ReactNode;
    helper?: string;
    errorMessage?: string;
    noLabel?: boolean;
    oneLine?: boolean;
}

export const RmgLabel = (props: RmgLabelProps) => {
    const { label, children, width, noLabel, oneLine, helper, errorMessage, className, ...others } = props;

    const styles = useStyleConfig('RmgLabel');

    return (
        <FormControl
            className={`${oneLine ? 'rmg-label__one-line' : ''} ${className ?? ''}`}
            aria-label={label}
            sx={styles}
            isInvalid={!!errorMessage}
            {...others}
        >
            {!noLabel && <FormLabel size="xs">{label}</FormLabel>}

            {children}

            {errorMessage ? (
                <FormErrorMessage>{errorMessage}</FormErrorMessage>
            ) : helper ? (
                <FormHelperText>{helper}</FormHelperText>
            ) : (
                <></>
            )}
        </FormControl>
    );
};
