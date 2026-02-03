import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, useColorModeValue, useStyleConfig, useToken } from '@chakra-ui/react';

export interface RmgCircularSliderProps {
    /**
     * Current value of the slider
     */
    defaultValue?: number;
    /**
     * Minimum value (default: 0)
     */
    min?: number;
    /**
     * Maximum value (default: 359)
     */
    max?: number;
    /**
     * Step size for value changes (default: 1)
     */
    step?: number;
    /**
     * Snap alignment step (default: 45). Only snaps when within snapThreshold degrees.
     */
    snapStep?: number;
    /**
     * Threshold for snap alignment in degrees (default: 3)
     */
    snapThreshold?: number;
    /**
     * Array of disabled values
     */
    disabledValues?: number[];
    /**
     * Callback when value changes
     */
    onChange?: (value: number) => void;
    /**
     * Size of the circular slider in pixels (default: 100)
     */
    size?: number;
}

// Convert value to angle (0 at top, clockwise)
// 0 degrees = top (12 o'clock position)
const valueToAngle = (value: number, min: number, max: number): number => {
    const range = max - min + 1;
    const normalizedValue = (((value - min) % range) + range) % range;
    return (normalizedValue / range) * 360;
};

// Convert angle to value
const angleToValue = (angle: number, min: number, max: number, step: number): number => {
    const range = max - min + 1;
    // Normalize angle to 0-360
    const normalizedAngle = ((angle % 360) + 360) % 360;
    let value = (normalizedAngle / 360) * range + min;
    // Round to step
    value = Math.round(value / step) * step;
    // Clamp to range
    if (value > max) value = min;
    if (value < min) value = min;
    return value;
};

// Calculate angle from center to point (0 at top, clockwise)
const getAngleFromCenter = (centerX: number, centerY: number, x: number, y: number): number => {
    const dx = x - centerX;
    const dy = y - centerY;
    // atan2 gives angle from positive x-axis, counter-clockwise
    // We need angle from negative y-axis (top), clockwise
    let angle = Math.atan2(dx, -dy) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    return angle;
};

// Convert angle (0 at top, clockwise) to radians for SVG positioning
const angleToRadians = (angle: number): number => {
    // Convert to standard math angle (0 at right, counter-clockwise)
    // then convert to radians
    // angle 0 (top) -> -90 degrees in standard math
    // angle 90 (right) -> 0 degrees in standard math
    return ((angle - 90) * Math.PI) / 180;
};

// Check if value should snap to a step
const getSnappedValue = (value: number, min: number, max: number, snapStep: number, snapThreshold: number): number => {
    const range = max - min + 1;
    const valueAngle = valueToAngle(value, min, max);

    // Check each snap point
    for (let snapAngle = 0; snapAngle < 360; snapAngle += (snapStep / range) * 360) {
        let diff = Math.abs(valueAngle - snapAngle);
        // Handle wrap-around
        if (diff > 180) diff = 360 - diff;

        if (diff <= snapThreshold) {
            // Snap to this angle
            return angleToValue(snapAngle, min, max, 1);
        }
    }

    return value;
};

export function RmgCircularSlider(props: RmgCircularSliderProps) {
    const {
        defaultValue = 0,
        min = 0,
        max = 359,
        step = 1,
        snapStep = 45,
        snapThreshold = 3,
        disabledValues = [],
        onChange,
        size = 100,
    } = props;

    const styles = useStyleConfig('RmgCircularSlider');
    const [value, setValue] = useState(defaultValue);
    const [isDragging, setIsDragging] = useState(false);
    const svgRef = useRef<SVGSVGElement>(null);

    // Get color tokens and resolve to actual values
    const trackColorToken = useColorModeValue('gray.200', 'gray.600');
    const pointerColorToken = useColorModeValue('blue.500', 'blue.300');
    const snapTickColorToken = useColorModeValue('red.400', 'red.300');
    const disabledTickColorToken = useColorModeValue('gray.400', 'gray.400');

    const [trackColor, pointerColor, snapTickColor, disabledTickColor] = useToken('colors', [
        trackColorToken,
        pointerColorToken,
        snapTickColorToken,
        disabledTickColorToken,
    ]);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 15; // Leave more margin for outer ticks
    const trackWidth = 8; // Wider track
    const innerRadius = radius / 2; // Pointer starts from r/2
    const tickOuterRadius = radius + 8; // Ticks only on outer ring
    const tickInnerRadius = radius + 2;

    useEffect(() => {
        if (defaultValue !== undefined && value !== defaultValue) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    const updateValue = useCallback(
        (clientX: number, clientY: number) => {
            if (!svgRef.current) return;

            const rect = svgRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            const angle = getAngleFromCenter(centerX, centerY, x, y);
            let newValue = angleToValue(angle, min, max, step);

            // Apply snap
            newValue = getSnappedValue(newValue, min, max, snapStep, snapThreshold);

            // Check if disabled
            if (disabledValues.includes(newValue)) {
                return;
            }

            setValue(newValue);
            onChange?.(newValue);
        },
        [centerX, centerY, min, max, step, snapStep, snapThreshold, disabledValues, onChange]
    );

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        updateValue(e.clientX, e.clientY);
    };

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (isDragging) {
                updateValue(e.clientX, e.clientY);
            }
        },
        [isDragging, updateValue]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        const touch = e.touches[0];
        updateValue(touch.clientX, touch.clientY);
    };

    const handleTouchMove = useCallback(
        (e: TouchEvent) => {
            if (isDragging) {
                const touch = e.touches[0];
                updateValue(touch.clientX, touch.clientY);
            }
        },
        [isDragging, updateValue]
    );

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
                window.removeEventListener('touchmove', handleTouchMove);
                window.removeEventListener('touchend', handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

    // Calculate pointer position (from r/2 to r)
    const pointerAngle = valueToAngle(value, min, max);
    const pointerRadians = angleToRadians(pointerAngle);
    const pointerOuterX = centerX + radius * Math.cos(pointerRadians);
    const pointerOuterY = centerY + radius * Math.sin(pointerRadians);
    const pointerInnerX = centerX + innerRadius * Math.cos(pointerRadians);
    const pointerInnerY = centerY + innerRadius * Math.sin(pointerRadians);

    // Generate tick marks (only on outer ring, light red color)
    const range = max - min + 1;
    const ticks = [];

    // Light tick color token
    const lightTickColorToken = useColorModeValue('red.200', 'red.700');
    const [lightTickColor] = useToken('colors', [lightTickColorToken]);

    // Add snap step ticks (major ticks) - only on outer ring
    for (let i = 0; i < range; i += snapStep) {
        const tickValue = min + i;
        const tickAngle = valueToAngle(tickValue, min, max);
        const tickRadians = angleToRadians(tickAngle);

        const outerX = centerX + tickOuterRadius * Math.cos(tickRadians);
        const outerY = centerY + tickOuterRadius * Math.sin(tickRadians);
        const innerX = centerX + tickInnerRadius * Math.cos(tickRadians);
        const innerY = centerY + tickInnerRadius * Math.sin(tickRadians);

        const isDisabled = disabledValues.includes(tickValue);

        ticks.push(
            <line
                key={`tick-${tickValue}`}
                x1={outerX}
                y1={outerY}
                x2={innerX}
                y2={innerY}
                stroke={isDisabled ? disabledTickColor : lightTickColor}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        );
    }

    // Check if current value is snapped
    const isSnappedToStep = value % snapStep === 0 && !disabledValues.includes(value);

    // Text color for center value
    const textColorToken = useColorModeValue('gray.600', 'gray.300');
    const [textColor] = useToken('colors', [textColorToken]);

    // Font size based on component size
    const fontSize = Math.max(10, size / 8);

    return (
        <Box sx={styles} display="inline-block">
            <svg
                ref={svgRef}
                width={size}
                height={size}
                style={{ cursor: 'pointer', touchAction: 'none' }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                tabIndex={0}
                onKeyDown={e => {
                    let newValue = value;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                        newValue = value + step;
                        if (newValue > max) newValue = min;
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                        newValue = value - step;
                        if (newValue < min) newValue = max;
                    }

                    // Apply snap
                    newValue = getSnappedValue(newValue, min, max, snapStep, snapThreshold);

                    // Check if disabled
                    if (!disabledValues.includes(newValue) && newValue !== value) {
                        setValue(newValue);
                        onChange?.(newValue);
                    }
                }}
            >
                {/* Track circle - wider stroke */}
                <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke={trackColor} strokeWidth={trackWidth} />

                {/* Tick marks - outer ring only */}
                {ticks}

                {/* Pointer line - from r/2 to r */}
                <line
                    x1={pointerInnerX}
                    y1={pointerInnerY}
                    x2={pointerOuterX}
                    y2={pointerOuterY}
                    stroke={isSnappedToStep ? snapTickColor : pointerColor}
                    strokeWidth={3}
                    strokeLinecap="round"
                />

                {/* Pointer circle (knob) at outer end */}
                <circle
                    cx={pointerOuterX}
                    cy={pointerOuterY}
                    r={5}
                    fill={isSnappedToStep ? snapTickColor : pointerColor}
                />

                {/* Center value text */}
                <text
                    x={centerX}
                    y={centerY}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={fontSize}
                    fill={textColor}
                    fontWeight="500"
                >
                    {value}
                </text>
            </svg>
        </Box>
    );
}
