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
import React, { ReactNode, useEffect, useState } from 'react';
import { Environments } from '../util/constants';

const getBadgeColour = (env: Environments) => {
    switch (env) {
        case Environments.DEV:
            return 'red';
        case Environments.UAT:
            return 'orange';
        case Environments.PRD:
            return 'green';
    }
};

export interface RmgEnvBadgeProps {
    environment: Environments;
    version: string;
    popoverHeader?: ReactNode;
    popoverBody?: ReactNode;
}

export function RmgEnvBadge(props: RmgEnvBadgeProps) {
    const { environment, version, popoverHeader, popoverBody } = props;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let timeoutId: number;
        if (environment === Environments.UAT) {
            timeoutId = window.setTimeout(() => {
                setIsOpen(true);
            }, 1000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <Popover
            isOpen={isOpen}
            onOpen={() => environment !== Environments.PRD && setIsOpen(true)}
            onClose={() => setIsOpen(false)}
        >
            <PopoverTrigger>
                <Badge ml={1} colorScheme={getBadgeColour(environment)}>
                    {environment === Environments.PRD ? version : environment}
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
