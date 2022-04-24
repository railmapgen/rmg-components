import React from 'react';
import { Slider, SliderFilledTrack, SliderProps, SliderThumb, SliderTrack } from '@chakra-ui/react';
import useThrottle from '../hook/useThrottle';

export interface RmgThrottledSliderProps extends SliderProps {
    onThrottledChange?: (value: number) => void;
}

export function RmgThrottledSlider(props: RmgThrottledSliderProps) {
    const { defaultValue, min, max, step, onThrottledChange } = props;

    const handleChange = useThrottle(onThrottledChange ?? (() => {}), 500);

    return (
        <Slider defaultValue={defaultValue} min={min} max={max} step={step ?? 1} onChange={handleChange}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    );
}
