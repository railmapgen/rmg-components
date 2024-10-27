import {
    Badge,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { RmgEnv } from '@railmapgen/rmg-runtime';

const getBadgeColour = (env: RmgEnv) => {
    switch (env) {
        case RmgEnv.DEV:
            return 'red';
        case RmgEnv.UAT:
            return 'orange';
        case RmgEnv.PRD:
            return 'green';
    }
};

export interface RmgEnvBadgeProps {
    environment: RmgEnv;
    version: string;
    popoverHeader?: ReactNode;
    popoverBody?: ReactNode;
}

export function RmgEnvBadge(props: RmgEnvBadgeProps) {
    const { environment, version, popoverHeader, popoverBody } = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover isOpen={isOpen} onOpen={() => popoverHeader && setIsOpen(true)} onClose={() => setIsOpen(false)}>
            <PopoverTrigger>
                <Badge
                    ml={1}
                    colorScheme={getBadgeColour(environment)}
                    title={`${environment}: ${version}`}
                    cursor={popoverHeader ? 'pointer' : 'help'}
                >
                    {environment === RmgEnv.PRD ? version : environment}
                </Badge>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{popoverHeader}</PopoverHeader>
                <PopoverBody>{popoverBody}</PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
