import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteInputProps,
    AutoCompleteItem,
    AutoCompleteItemProps,
    AutoCompleteList,
    AutoCompleteListProps,
    AutoCompleteProps,
    Item,
} from '@choc-ui/chakra-autocomplete';
import { ReactElement } from 'react';

interface RmgAutoCompleteProps<T> extends Omit<AutoCompleteProps, 'children'> {
    data: T[];
    displayValue: (item: T) => string;
    displayHandler?: (item: T) => ReactElement | string | number;
    filter?: (query: string, item: T) => boolean;
    value?: T;
    onChange?: (item: T) => void;
    InputProps?: AutoCompleteInputProps;
    ListProps?: AutoCompleteListProps;
    ItemProps?: AutoCompleteItemProps;
}

export default function RmgAutoComplete<T extends { id: string }>(props: RmgAutoCompleteProps<T>) {
    const { data, displayValue, displayHandler, filter, value, onChange, InputProps, ListProps, ItemProps, ...others } =
        props;

    const handleFilter = (query: string, optionValue: string) => {
        if (!filter) return undefined;
        const item = data.find(item => item.id === optionValue);
        return item ? filter(query, item) : false;
    };

    return (
        <AutoComplete
            defaultValue={value && displayValue(value)}
            filter={handleFilter}
            onChange={(_: string, item: Item) => onChange?.(item.originalValue)}
            suggestWhenEmpty
            openOnFocus
            {...others}
        >
            <AutoCompleteInput variant="flushed" size="sm" h={6} autoComplete="off" {...InputProps} />
            <AutoCompleteList role="menu" py={1} {...ListProps}>
                {data.map(item => {
                    const label = displayValue(item);
                    return (
                        <AutoCompleteItem
                            key={item.id}
                            value={item}
                            label={label}
                            role="menuitem"
                            fontSize="sm"
                            p={1}
                            mx={1}
                            {...ItemProps}
                        >
                            {displayHandler ? displayHandler(item) : label}
                        </AutoCompleteItem>
                    );
                })}
            </AutoCompleteList>
        </AutoComplete>
    );
}
