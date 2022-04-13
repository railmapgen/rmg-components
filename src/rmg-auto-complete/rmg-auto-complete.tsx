import { Box, Menu, MenuButton, MenuItem, MenuList, useOutsideClick } from '@chakra-ui/react';
import { RmgDebouncedInput } from '../rmg-debounced-input';
import React, { Fragment, ReactElement, useEffect, useRef, useState } from 'react';

export interface RmgAutoCompleteProps<T> {
    data: T[];
    displayValue: (item: T) => string;
    displayHandler?: (item: T) => ReactElement | string | number;
    predicate: (item: T, input: string) => boolean;
    defaultValue?: T;
    onChange?: (item: T) => void;
    isInvalid?: boolean; // inherit from chakra input
}

export function RmgAutoComplete<T extends { id: string }>(props: RmgAutoCompleteProps<T>) {
    const { data, displayValue, displayHandler, predicate, defaultValue, onChange, isInvalid } = props;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState(defaultValue ? displayValue(defaultValue) : '');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useOutsideClick({ ref: wrapperRef, handler: () => setIsDropdownOpen(false) });

    useEffect(
        () => {
            if (defaultValue) {
                setInputValue(displayValue(defaultValue));
            } else {
                setInputValue('');
            }
        },
        // force update input field when data is changed
        // to prevent last selected text remains on the field if defaultValue are undefined before and after
        [JSON.stringify(data), JSON.stringify(defaultValue)]
    );

    const handleSelect = (item: T) => {
        setInputValue(displayValue(item));
        setIsDropdownOpen(false);
        onChange?.(item);
    };

    return (
        <Box ref={wrapperRef}>
            <Menu isOpen={isDropdownOpen} onClose={() => {}} autoSelect={false}>
                <MenuButton />
                <RmgDebouncedInput
                    defaultValue={inputValue}
                    onDebouncedChange={val => setInputValue(val)}
                    onFocus={() => setIsDropdownOpen(true)}
                    isInvalid={isInvalid}
                />

                <MenuList>
                    {data.map(item => {
                        if (predicate(item, inputValue)) {
                            return (
                                <MenuItem key={item.id} onClick={() => handleSelect(item)}>
                                    {displayHandler ? displayHandler(item) : displayValue(item)}
                                </MenuItem>
                            );
                        } else {
                            return <Fragment key={item.id} />;
                        }
                    })}
                </MenuList>
            </Menu>
        </Box>
    );
}
