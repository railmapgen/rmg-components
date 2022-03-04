import React, { ReactNode } from 'react';
import { Flex, FlexProps, useStyleConfig } from '@chakra-ui/react';

export interface RmgCardProps extends FlexProps {
    children: ReactNode;
}

export const RmgCard = (props: RmgCardProps) => {
    const { children, ...others } = props;

    const styles = useStyleConfig('RmgCard');

    return (
        <Flex sx={styles} {...others}>
            {children}
        </Flex>
    );
};
