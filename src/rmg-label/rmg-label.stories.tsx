import { RmgLabel } from './rmg-label';
import { RmgDebouncedInput } from '../rmg-debounced-input';
import { VStack } from '@chakra-ui/react';

export default {
    title: 'RmgLabel',
    component: RmgLabel,
};

export const Basic = () => {
    return (
        <VStack>
            <RmgLabel label="Basic input">
                <RmgDebouncedInput />
            </RmgLabel>

            <RmgLabel label="Basic input" helper="Input with helper text">
                <RmgDebouncedInput />
            </RmgLabel>

            <RmgLabel label="Basic input" errorMessage="Input with error message">
                <RmgDebouncedInput isInvalid={true} />
            </RmgLabel>
        </VStack>
    );
};
