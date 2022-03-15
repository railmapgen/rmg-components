import React from 'react';
import { Select, SelectProps } from '@chakra-ui/react';

export interface RmgSelectProps<T extends string | number> extends SelectProps {
    options: Record<T, string>;
    disabledOptions?: T[];
}

export function RmgSelect<T extends string | number>(props: RmgSelectProps<T>) {
    const { options, disabledOptions, ...others } = props;

    return (
        <Select variant="flushed" size="sm" h={6} {...others}>
            {Object.entries(options).map(([value, displayText]) => (
                <option
                    key={value}
                    value={value}
                    disabled={disabledOptions?.find(opt => opt.toString() === value) !== undefined}
                >
                    {displayText as any}
                </option>
            ))}
        </Select>
    );
}
