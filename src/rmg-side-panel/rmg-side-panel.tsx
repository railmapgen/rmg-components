import { Alert, AlertIcon, CloseButton, Flex, FlexProps, useStyleConfig } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface RmgSidePanelProps extends FlexProps {
    isOpen: boolean;
    header: ReactNode;
    width?: number; // default 320px
    alwaysOverlay?: boolean;
}

export const RmgSidePanel = (props: RmgSidePanelProps) => {
    const { isOpen, alwaysOverlay, width, sx, children, ...others } = props;

    const styles = useStyleConfig('RmgSidePanel', { width: width ?? 320, alwaysOverlay });

    return (
        <Flex
            as="section"
            className={isOpen ? 'show-side-panel' : ''}
            sx={{ ...styles, ...sx }}
            data-testid="side-panel-root"
            {...others}
        >
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
