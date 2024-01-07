import React from 'react';
import { CircularProgress, CircularProgressProps, Flex, useColorModeValue, useStyleConfig } from '@chakra-ui/react';

export type RmgLoaderProps = CircularProgressProps;

export default function RmgLoader(props: RmgLoaderProps) {
    const { isIndeterminate, value, sx, ...others } = props;

    const loaderColour = useColorModeValue('primary.500', 'primary.300');
    const styles = useStyleConfig('RmgLoader');

    return (
        <Flex sx={{ ...styles, ...sx }}>
            <div className="rmg-loader__backdrop" />
            <CircularProgress isIndeterminate={isIndeterminate} value={value} color={loaderColour} {...others} />
        </Flex>
    );
}
