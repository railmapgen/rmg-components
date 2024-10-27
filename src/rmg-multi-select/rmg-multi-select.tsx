import { useEffect, useRef, useState } from 'react';
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
    onChange?: (value: string[]) => void;
}

export const RmgMultiSelect = (props: RmgMultiSelectProps) => {
    const { displayValue, selections, defaultValue, onChange } = props;

    const styles = useStyleConfig('RmgMultiSelect');

    const [value, setValue] = useState(defaultValue);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOutsideClick({ ref: wrapperRef, handler: () => setIsDropdownOpen(false) });

    useEffect(() => {
        if (defaultValue.toString()) setValue(defaultValue);
    }, [defaultValue.toString()]);

    const selectedCount = value.filter(val => selections.some(selection => selection.value === val)).length;

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
                    <div
                        className="rmg-multi-select__wrapper"
                        role="combobox"
                        aria-expanded={isDropdownOpen}
                        aria-controls={dropdownRef.current?.id}
                        aria-label={displayValue}
                        onClick={() => setIsDropdownOpen(prevState => !prevState)}
                    >
                        <div className={`rmg-multi-select__field ${isDropdownOpen ? 'active' : ''}`}>
                            <span>{displayValue}</span>
                            <Badge colorScheme={selectedCount ? 'blue' : undefined} role="status">
                                {selectedCount}/{selections.length}
                            </Badge>
                        </div>
                        <div className="rmg-multi-select__icon-wrapper">
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                            </svg>
                        </div>
                    </div>
                </PopoverAnchor>

                <PopoverContent ref={dropdownRef}>
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
