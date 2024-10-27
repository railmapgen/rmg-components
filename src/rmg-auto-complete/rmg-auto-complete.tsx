import {
    AutoComplete,
    AutoCompleteChildProps,
    AutoCompleteInput,
    AutoCompleteInputProps,
    AutoCompleteItem,
    AutoCompleteItemProps,
    AutoCompleteList,
    AutoCompleteListProps,
    AutoCompleteProps,
    Item,
    useAutoCompleteContext,
} from '@choc-ui/chakra-autocomplete';
import { ReactElement, useEffect } from 'react';

interface RmgAutoCompleteProps<T extends { id: string; value: string }> extends Omit<AutoCompleteProps, 'children'> {
    data: T[];
    displayHandler?: (item: T) => ReactElement | string | number;
    filter?: (query: string, item: T) => boolean;
    value?: T['value'];
    defaultValue?: T['value'];
    onChange?: (item: T) => void;
    InputProps?: AutoCompleteInputProps;
    InputPropsByState?: (isOpen: boolean) => AutoCompleteInputProps;
    ListProps?: AutoCompleteListProps;
    ItemProps?: AutoCompleteItemProps;
}

export default function RmgAutoComplete<T extends { id: string; value: string }>(props: RmgAutoCompleteProps<T>) {
    const {
        data,
        displayHandler,
        filter,
        value,
        onChange,
        InputProps,
        InputPropsByState,
        ListProps,
        ItemProps,
        ...others
    } = props;

    /**
     * @param query
     * @param optionValue - value (ID) of the option
     * @param optionLabel - label of the option
     * @description Original usage is to match query to option value or label,
     * but we map the value to the original item, so we have access to all internal details.
     */
    const handleFilter = (query: string, optionValue: string) => {
        if (!filter) return true;
        const item = data.find(item => item.id === optionValue);
        return item ? filter(query, item) : false;
    };

    const handleChange = (value: string, item: Item | Item[]) => {
        if (Array.isArray(item)) {
            onChange?.(item[0]?.originalValue);
        } else {
            onChange?.(item.originalValue);
        }
    };

    return (
        <AutoComplete
            value={value}
            filter={handleFilter}
            onChange={handleChange}
            suggestWhenEmpty
            openOnFocus
            {...others}
        >
            {({ isOpen }: AutoCompleteChildProps) => (
                <>
                    <AutoCompleteInputWrapper
                        variant="flushed"
                        size="sm"
                        h={6}
                        autoComplete="off"
                        value={value}
                        {...(InputPropsByState?.(isOpen) ?? InputProps)}
                    />
                    <AutoCompleteList role="menu" py={1} {...ListProps}>
                        {data.map(item => {
                            return (
                                <AutoCompleteItem
                                    key={item.id}
                                    value={item}
                                    label={item.value}
                                    role="menuitem"
                                    fontSize="sm"
                                    p={1}
                                    mx={1}
                                    {...ItemProps}
                                >
                                    {displayHandler ? displayHandler(item) : item.value}
                                </AutoCompleteItem>
                            );
                        })}
                    </AutoCompleteList>
                </>
            )}
        </AutoComplete>
    );
}

const AutoCompleteInputWrapper = ({ value, ...props }: AutoCompleteInputProps) => {
    const { setQuery } = useAutoCompleteContext();

    // override query to fix input field display value
    useEffect(() => {
        setQuery(value ?? '');
    }, [value]);

    return <AutoCompleteInput {...props} />;
};
