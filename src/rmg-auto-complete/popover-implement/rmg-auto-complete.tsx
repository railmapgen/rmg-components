import {
    Box,
    Button,
    List,
    ListItem,
    Popover,
    PopoverAnchor,
    PopoverBody,
    PopoverContent,
    useOutsideClick,
} from '@chakra-ui/react';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { RmgDebouncedInput } from '../../rmg-debounced-input';

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
            <Popover placement="bottom-start" isOpen={isDropdownOpen} autoFocus={false}>
                <PopoverAnchor>
                    <RmgDebouncedInput
                        defaultValue={inputValue}
                        onDebouncedChange={val => setInputValue(val)}
                        onFocus={() => setIsDropdownOpen(true)}
                        isInvalid={isInvalid}
                    />
                </PopoverAnchor>

                <PopoverContent w="unset" minW={200}>
                    <PopoverBody p={0}>
                        <List role="menu" maxH={270} overflowY="auto">
                            {data
                                .filter(item => predicate(item, inputValue))
                                .map(item => (
                                    <ListItem key={item.id} role="none">
                                        <Button
                                            role="menuitem"
                                            size="sm"
                                            variant="ghost"
                                            justifyContent="flex-start"
                                            flexShrink={0}
                                            borderRadius={0}
                                            w="100%"
                                            onClick={() => handleSelect(item)}
                                        >
                                            {displayHandler ? displayHandler(item) : displayValue(item)}
                                        </Button>
                                    </ListItem>
                                ))}
                        </List>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
}
