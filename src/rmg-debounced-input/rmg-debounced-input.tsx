import React, { ChangeEvent, forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { Input, InputProps, useMergeRefs } from '@chakra-ui/react';

export interface RmgDebouncedInputProps extends InputProps {
    validator?: (value: string) => boolean;
    onDebouncedChange?: (value: string) => void;
    delay?: number;
}

const RmgDebouncedInputInner = (props: RmgDebouncedInputProps, ref: Ref<HTMLInputElement>) => {
    const { validator, onDebouncedChange, delay, defaultValue, onChange, ...others } = props;

    const inputElRef = useRef<HTMLInputElement>(null);
    const refs = useMergeRefs(inputElRef, ref);

    const [isInvalid, setIsInvalid] = useState(false);
    const timeoutRef = useRef<number>();

    useEffect(() => {
        if (inputElRef.current) {
            inputElRef.current.value = defaultValue?.toString() || '';
        }
    }, [defaultValue]);

    const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        window.clearTimeout(timeoutRef.current);

        if (validator) {
            setIsInvalid(!validator(value));
        }

        timeoutRef.current = window.setTimeout(() => {
            onDebouncedChange?.(value);
        }, delay ?? 500);
    };

    return (
        <Input ref={refs} variant="flushed" size="sm" h={6} onChange={handleChange} isInvalid={isInvalid} {...others} />
    );
};

export const RmgDebouncedInput = forwardRef(RmgDebouncedInputInner);
