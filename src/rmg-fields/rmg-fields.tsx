import React, { Fragment, ReactNode } from 'react';
import { RmgLabel } from '../rmg-label';
import { RmgDebouncedInput } from '../rmg-debounced-input';
import { Flex, InputProps, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { RmgDebouncedTextarea } from '../rmg-debounced-textarea';
import { RmgSelect } from '../rmg-select';

type inputField = {
    type: 'input';
    value: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    variant?: InputProps['type'];
};

type textareaField = {
    type: 'textarea';
    value: string;
    placeholder?: string;
    onChange?: (value: string) => void;
};

type sliderField = {
    type: 'slider';
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange?: (value: number) => void;
};

type selectField<T extends string | number> = {
    type: 'select';
    value?: T;
    options: Record<T, string>; // { value: displayText }
    onChange?: (value: T) => void;
    disabledOptions?: T[];
    isInvalid?: boolean;
};

type customField = {
    type: 'custom';
    component: ReactNode;
};

export type RmgFieldsField<T extends string | number = string | number> = (
    | inputField
    | textareaField
    | sliderField
    | selectField<T>
    | customField
) & {
    label: string;
    minW?: `${number}px` | number | 'full';
    hidden?: boolean;
};

export interface RmgFieldsProps<T extends string | number> {
    fields: RmgFieldsField<T>[];
    noLabel?: boolean;
}

export function RmgFields<T extends string | number>(props: RmgFieldsProps<T>) {
    const { fields, noLabel } = props;

    return (
        <Flex wrap="wrap">
            {fields.map((field, i) => {
                if (field.hidden) {
                    return <Fragment key={i} />;
                }
                return (
                    <RmgLabel
                        key={i}
                        label={field.label}
                        flex={1}
                        minW={field.minW === 'full' ? undefined : field.minW || 100}
                        w={field.minW === 'full' ? '100%' : undefined}
                        flexBasis={field.minW === 'full' ? '100%' : undefined}
                        noLabel={noLabel}
                    >
                        {(field => {
                            switch (field.type) {
                                case 'input':
                                    return (
                                        <RmgDebouncedInput
                                            placeholder={field.placeholder}
                                            defaultValue={field.value}
                                            type={field.variant}
                                            onDebouncedChange={field.onChange}
                                        />
                                    );
                                case 'textarea':
                                    return (
                                        <RmgDebouncedTextarea
                                            placeholder={field.placeholder}
                                            defaultValue={field.value}
                                            onDebouncedChange={field.onChange}
                                        />
                                    );
                                case 'slider':
                                    return (
                                        <Slider
                                            defaultValue={field.value}
                                            min={field.min}
                                            max={field.max}
                                            step={field.step ?? 1}
                                            onChangeEnd={field.onChange}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack />
                                            </SliderTrack>
                                            <SliderThumb />
                                        </Slider>
                                    );
                                case 'select':
                                    return (
                                        <RmgSelect
                                            value={field.value}
                                            onChange={({ target: { value } }) =>
                                                field.onChange?.(
                                                    (typeof field.value === 'number'
                                                        ? Number(value)
                                                        : value.toString()) as T
                                                )
                                            }
                                            options={field.options}
                                            disabledOptions={field.disabledOptions}
                                            isInvalid={field.isInvalid}
                                        />
                                    );
                                case 'custom':
                                    return field.component;
                                default:
                                    return <div />;
                            }
                        })(field)}
                    </RmgLabel>
                );
            })}
        </Flex>
    );
}
