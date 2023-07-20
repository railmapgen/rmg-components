import React, { useEffect, useRef } from 'react';
import { Select, SelectProps } from '@chakra-ui/react';

export interface RmgSelectProps<T extends string | number> extends SelectProps {
    options: Record<T, string> | Record<string, Record<T, string>>;
    disabledOptions?: T[];
}

export function RmgSelect<T extends string | number>(props: RmgSelectProps<T>) {
    const { defaultValue, options, disabledOptions, ...others } = props;

    const selectElRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if (selectElRef.current) {
            selectElRef.current.value = defaultValue?.toString() || '';
        }
    }, [defaultValue]);

    const getOptionEl = (value: string, displayText: string) => (
        <option
            key={value}
            value={value}
            disabled={disabledOptions?.find(opt => opt.toString() === value) !== undefined}
        >
            {displayText as any}
        </option>
    );

    return (
        <Select ref={selectElRef} variant="flushed" size="sm" h={6} {...others}>
            {Object.entries(options).map(([key, val]) => {
                if (typeof val === 'object') {
                    return (
                        <optgroup key={key} label={key}>
                            {Object.entries(val).map(([v, t]) => getOptionEl(v, t as string))}
                        </optgroup>
                    );
                } else {
                    return getOptionEl(key, val);
                }
            })}
        </Select>
    );
}
