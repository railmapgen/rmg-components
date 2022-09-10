import React, { ReactElement } from 'react';
import {
    Flex,
    Slider,
    SliderFilledTrack,
    SliderProps,
    SliderThumb,
    SliderTrack,
    useStyleConfig,
} from '@chakra-ui/react';
import { useThrottle } from '../hook';

export interface RmgThrottledSliderProps extends SliderProps {
    onThrottledChange?: (value: number) => void;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
}

export function RmgThrottledSlider(props: RmgThrottledSliderProps) {
    const { defaultValue, min, max, step, onThrottledChange, leftIcon, rightIcon } = props;

    const handleChange = useThrottle(onThrottledChange ?? (() => {}), 500);
    const styles = useStyleConfig('RmgThrottledSlider');

    return (
        <Flex sx={styles}>
            {leftIcon}
            <Slider defaultValue={defaultValue} min={min} max={max} step={step ?? 1} onChange={handleChange}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
            {rightIcon}
        </Flex>
    );
}
