import { ReactElement, useEffect, useState } from 'react';
import { Flex, IconButton, useStyleConfig } from '@chakra-ui/react';
import { Slider, SliderFilledTrack, SliderProps, SliderThumb, SliderTrack } from '@chakra-ui/slider';
import { useThrottle } from '../hook';

export interface RmgThrottledSliderProps extends SliderProps {
    onThrottledChange?: (value: number) => void;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
}

export function RmgThrottledSlider(props: RmgThrottledSliderProps) {
    const { defaultValue, min, max, step, onThrottledChange, leftIcon, rightIcon } = props;

    const styles = useStyleConfig('RmgThrottledSlider');
    const [value, setValue] = useState(defaultValue ?? 0);

    useEffect(() => {
        if (defaultValue !== undefined && value !== defaultValue) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    const handleThrottledChange = useThrottle(
        onThrottledChange ??
            (() => {
                // do nothing
            }),
        500
    );

    const handleIncrement = () => {
        const nextValue = Math.min(value + (step ?? 1) * 10, max ?? 100);
        onThrottledChange?.(nextValue);
        setValue(nextValue);
    };

    const handleDecrement = () => {
        const nextValue = Math.max(value - (step ?? 1) * 10, min ?? 0);
        onThrottledChange?.(nextValue);
        setValue(nextValue);
    };

    return (
        <Flex sx={styles}>
            {leftIcon && (
                <IconButton
                    size="xs"
                    variant="ghost"
                    aria-label="Drag left"
                    icon={leftIcon}
                    onClick={handleDecrement}
                />
            )}

            <Slider
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={val => {
                    handleThrottledChange(val);
                    setValue(val);
                }}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>

            {rightIcon && (
                <IconButton
                    size="xs"
                    variant="ghost"
                    aria-label="Drag right"
                    icon={rightIcon}
                    onClick={handleIncrement}
                />
            )}
        </Flex>
    );
}
