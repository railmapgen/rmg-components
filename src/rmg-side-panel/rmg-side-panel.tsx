import { Alert, AlertIcon, CloseButton, Flex, useStyleConfig } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface RmgSidePanelProps {
    isOpen: boolean;
    header: ReactNode;
    // by default 320px
    width?: number;
    children?: ReactNode;
}

export const RmgSidePanel = (props: RmgSidePanelProps) => {
    const { isOpen, children } = props;
    const width = props.width ?? 320;

    const styles = useStyleConfig('RmgSidePanel', { width });

    return (
        <Flex as="section" className={isOpen ? 'show-side-panel' : ''} sx={styles} data-testid="side-panel-root">
            <Flex className="rmg-side-panel__inner">{children}</Flex>
        </Flex>
    );
};

export interface RmgSidePanelHeaderProps {
    onClose: () => void;
    children: ReactNode;
}

export const RmgSidePanelHeader = (props: RmgSidePanelHeaderProps) => {
    const { onClose, children } = props;

    return (
        <Alert className="rmg-side-panel__header" status="info" variant="solid" size="xs">
            <AlertIcon />
            {children}
            <CloseButton onClick={onClose} />
        </Alert>
    );
};

export interface RmgSidePanelBodyProps {
    children: ReactNode;
}

export const RmgSidePanelBody = (props: RmgSidePanelBodyProps) => {
    const { children } = props;

    return <div className="rmg-side-panel__body">{children}</div>;
};

export interface RmgSidePanelFooterProps {
    children: ReactNode;
}

export const RmgSidePanelFooter = (props: RmgSidePanelFooterProps) => {
    const { children } = props;

    return <div className="rmg-side-panel__footer">{children}</div>;
};
