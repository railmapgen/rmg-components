import { RmgLineBadge } from './rmg-line-badge';
import { MonoColour } from '../util/constants';
import { HStack } from '@chakra-ui/react';

export default {
    title: 'RmgLineBadge',
};

export const Basic = () => {
    return (
        <HStack>
            <RmgLineBadge name="1号线" fg={MonoColour.black} bg="#F3D03E" fontSize="1em" showShortName />
            <RmgLineBadge name="1号线" fg={MonoColour.black} bg="#F3D03E" fontSize="1em" />
            <RmgLineBadge
                name="1号线"
                fg={MonoColour.black}
                bg="#F3D03E"
                fontSize="1em"
                onEdit={console.log}
                editLabel="Edit Line 1"
            />
            <RmgLineBadge
                name="1号线"
                fg={MonoColour.black}
                bg="#F3D03E"
                fontSize="1em"
                onRemove={console.log}
                removeLabel="Remove Line 1"
            />
            <RmgLineBadge
                name="1号线"
                fg={MonoColour.black}
                bg="#F3D03E"
                fontSize="1em"
                onEdit={console.log}
                editLabel="Edit Line 1"
                onRemove={console.log}
                removeLabel="Remove Line 1"
            />
        </HStack>
    );
};
