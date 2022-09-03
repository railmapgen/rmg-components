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

    useEffect(() => {
        let timeoutId: number;
        if (environment === RmgEnv.UAT) {
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
            onOpen={() => environment !== RmgEnv.PRD && setIsOpen(true)}
            onClose={() => setIsOpen(false)}
        >
            <PopoverTrigger>
                <Badge ml={1} colorScheme={getBadgeColour(environment)}>
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
