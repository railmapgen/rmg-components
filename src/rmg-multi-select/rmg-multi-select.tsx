import React, { ReactElement, useEffect, useRef, useState } from 'react';
import {
    Badge,
    Box,
    Checkbox,
    List,
    ListItem,
    Popover,
    PopoverAnchor,
    PopoverBody,
    PopoverContent,
    useOutsideClick,
    useStyleConfig,
} from '@chakra-ui/react';

type Selection = {
    label: string;
    value: string;
    disabled?: boolean;
};

export interface RmgMultiSelectProps {
    displayValue: string;
    selections: Selection[];
    defaultValue: string[];
    rightIcon?: ReactElement;
    onChange?: (value: string[]) => void;
}

export const RmgMultiSelect = (props: RmgMultiSelectProps) => {
    const { displayValue, selections, defaultValue, rightIcon, onChange } = props;

    const styles = useStyleConfig('RmgMultiSelect');

    const [value, setValue] = useState(defaultValue);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useOutsideClick({ ref: wrapperRef, handler: () => setIsDropdownOpen(false) });

    useEffect(() => {
        defaultValue.toString() && setValue(defaultValue);
    }, [defaultValue.toString()]);

    const handleCheck = (selection: Selection, checked: boolean) => {
        if (checked) {
            if (!value.includes(selection.value)) {
                const nextValue = [...value, selection.value];
                setValue(nextValue);
                onChange?.(nextValue);
            }
        } else {
            const nextValue = value.filter(val => val !== selection.value);
            setValue(nextValue);
            onChange?.(nextValue);
        }
    };

    return (
        <Box ref={wrapperRef} sx={styles}>
            <Popover placement="bottom-start" isOpen={isDropdownOpen} autoFocus={false}>
                <PopoverAnchor>
                    <Box
                        className={`rmg-multi-select__field ${isDropdownOpen ? 'active' : ''}`}
                        role="combobox"
                        aria-expanded={isDropdownOpen}
                        aria-label={displayValue}
                        onClick={() => setIsDropdownOpen(prevState => !prevState)}
                    >
                        <span>{displayValue}</span>
                        {value.length ? (
                            <Badge colorScheme="blue" role="status">
                                {value.length}/{selections.length}
                            </Badge>
                        ) : (
                            <></>
                        )}
                        {rightIcon}
                    </Box>
                </PopoverAnchor>

                <PopoverContent>
                    <PopoverBody>
                        <List>
                            {selections.map(selection => (
                                <ListItem key={selection.value.toString()}>
                                    <Checkbox
                                        isChecked={value.includes(selection.value)}
                                        isDisabled={selection.disabled}
                                        onChange={({ target: { checked } }) => handleCheck(selection, checked)}
                                    >
                                        {selection.label}
                                    </Checkbox>
                                </ListItem>
                            ))}
                        </List>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
};
