import React, { Fragment, ReactNode } from 'react';
import { RmgLabel } from '../rmg-label';
import { RmgDebouncedInput } from '../rmg-debounced-input';
import { Flex, InputProps, Switch } from '@chakra-ui/react';
import { RmgDebouncedTextarea } from '../rmg-debounced-textarea';
import { RmgSelect } from '../rmg-select';
import { RmgThrottledSlider } from '../rmg-throttled-slider';

type inputField = {
    type: 'input';
    value: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    variant?: InputProps['type'];
    validator?: (value: string) => boolean;
    debouncedDelay?: number;
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

type switchField = {
    type: 'switch';
    isChecked: boolean;
    isDisabled?: boolean;
    onChange?: (value: boolean) => void;
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
    | switchField
    | customField
) & {
    label: string;
    minW?: `${number}px` | number | 'full';
    hidden?: boolean;
    oneLine?: boolean;
};

export interface RmgFieldsProps<T extends string | number> {
    fields: RmgFieldsField<T>[];
    noLabel?: boolean;
    minW?: `${number}px` | number | 'full';
}

export function RmgFields<T extends string | number>(props: RmgFieldsProps<T>) {
    const { fields, noLabel, minW } = props;

    return (
        <Flex wrap="wrap">
            {fields.map((field, i) => {
                if (field.hidden) {
                    return <Fragment key={i} />;
                }
                const actualMinW = field.minW || minW;
                const isMwFull = actualMinW === 'full';

                return (
                    <RmgLabel
                        key={i}
                        className={isMwFull ? 'mw-full' : ''}
                        label={field.label}
                        flex={isMwFull ? undefined : 1}
                        minW={isMwFull ? undefined : actualMinW}
                        noLabel={noLabel}
                        oneLine={field.oneLine}
                    >
                        {(field => {
                            switch (field.type) {
                                case 'input':
                                    return (
                                        <RmgDebouncedInput
                                            placeholder={field.placeholder}
                                            defaultValue={field.value}
                                            type={field.variant}
                                            validator={field.validator}
                                            onDebouncedChange={field.onChange}
                                            delay={field.debouncedDelay}
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
                                        <RmgThrottledSlider
                                            defaultValue={field.value}
                                            min={field.min}
                                            max={field.max}
                                            step={field.step}
                                            onThrottledChange={field.onChange}
                                        />
                                    );
                                case 'select':
                                    return (
                                        <RmgSelect
                                            defaultValue={field.value}
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
                                case 'switch':
                                    return (
                                        <Switch
                                            isChecked={field.isChecked}
                                            isDisabled={field.isDisabled}
                                            onChange={({ target: { checked } }) => field.onChange?.(checked)}
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
