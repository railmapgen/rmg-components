import React, { ReactNode } from 'react';
import { Flex, FlexProps, useStyleConfig } from '@chakra-ui/react';

export interface RmgCardProps extends FlexProps {
    children: ReactNode;
}

export const RmgCard = (props: RmgCardProps) => {
    const { children, sx, ...others } = props;

    const styles = useStyleConfig('RmgCard');

    return (
        <Flex sx={{ ...styles, ...sx }} {...others}>
            {children}
        </Flex>
    );
};
