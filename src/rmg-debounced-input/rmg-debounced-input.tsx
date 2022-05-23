import React, { ChangeEvent, forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { Input, InputProps, useMergeRefs } from '@chakra-ui/react';

export interface RmgDebouncedInputProps extends InputProps {
    validator?: (value: string) => boolean;
    onDebouncedChange?: (value: string) => void;
    delay?: number;
    optionList?: string[];
}

const RmgDebouncedInputInner = (props: RmgDebouncedInputProps, ref: Ref<HTMLInputElement>) => {
    const { validator, onDebouncedChange, delay, optionList, defaultValue, onChange, ...others } = props;

    const inputElRef = useRef<HTMLInputElement>(null);
    const refs = useMergeRefs(inputElRef, ref);

    const datalistRef = useRef('datalist-' + new Date().valueOf());

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
        <>
            <Input
                ref={refs}
                list={datalistRef.current}
                variant="flushed"
                size="sm"
                h={6}
                onChange={handleChange}
                isInvalid={isInvalid}
                {...others}
            />

            {optionList && (
                <datalist id={datalistRef.current}>
                    {optionList?.map((opt, i) => (
                        <option key={i}>{opt}</option>
                    ))}
                </datalist>
            )}
        </>
    );
};

export const RmgDebouncedInput = forwardRef(RmgDebouncedInputInner);
