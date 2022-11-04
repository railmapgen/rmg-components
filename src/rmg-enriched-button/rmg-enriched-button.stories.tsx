import React from 'react';
import { RmgEnrichedButton } from './rmg-enriched-button';
import { HStack } from '@chakra-ui/react';

export default {
    title: 'RmgEnrichedButton',
    component: RmgEnrichedButton,
};

export const Basic = () => {
    return (
        <HStack>
            <RmgEnrichedButton
                variant="solid"
                colorScheme="primary"
                primaryText="Project 123"
                secondaryText="Last modified: 10 mins ago"
            />
            <RmgEnrichedButton primaryText="Kwun Tong Line" secondaryText="by: wongchito" />
        </HStack>
    );
};
