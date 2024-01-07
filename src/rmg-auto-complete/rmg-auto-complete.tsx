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
    useAutoCompleteContext,
} from '@choc-ui/chakra-autocomplete';
import { ReactElement, useEffect } from 'react';

interface RmgAutoCompleteProps<T> extends Omit<AutoCompleteProps, 'children'> {
    data: T[];
    displayHandler?: (item: T) => ReactElement | string | number;
    filter?: (query: string, item: T) => boolean;
    value?: string;
    onChange?: (item: T) => void;
    InputProps?: AutoCompleteInputProps;
    ListProps?: AutoCompleteListProps;
    ItemProps?: AutoCompleteItemProps;
}

export default function RmgAutoComplete<T extends { id: string; value: string }>(props: RmgAutoCompleteProps<T>) {
    const { data, displayHandler, filter, value, onChange, InputProps, ListProps, ItemProps, ...others } = props;

    const handleFilter = (query: string, optionValue: string) => {
        if (!filter) return undefined;
        const item = data.find(item => item.id === optionValue);
        return item ? filter(query, item) : false;
    };

    return (
        <AutoComplete
            value={value}
            filter={handleFilter}
            onChange={(_: string, item: Item) => onChange?.(item.originalValue)}
            suggestWhenEmpty
            openOnFocus
            {...others}
        >
            <AutoCompleteInputWrapper
                variant="flushed"
                size="sm"
                h={6}
                autoComplete="off"
                value={value}
                {...InputProps}
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
