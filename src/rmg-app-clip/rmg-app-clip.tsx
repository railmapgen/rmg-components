import { Box, BoxProps, ModalProps, Portal, useOutsideClick, useStyleConfig } from '@chakra-ui/react';
import { useRef } from 'react';

export interface RmgAppClipProps extends BoxProps {
    isOpen: boolean;
    onClose: () => void;
    size?: ModalProps['size'];
}

export const RmgAppClip = (props: RmgAppClipProps) => {
    const { isOpen, onClose, children, sx, size, ...others } = props;
    const styles = useStyleConfig('RmgAppClip', { size });

    const contentRef = useRef<HTMLDivElement>(null);

    useOutsideClick({ ref: contentRef, handler: onClose });

    return (
        <Portal>
            <Box className={isOpen ? 'show-app-clip' : ''} sx={styles} {...others}>
                <div className="rmg-app-clip__overlay" />
                <div className="rmg-app-clip__container">
                    <Box ref={contentRef} as="section" role="dialog" className="rmg-app-clip__content" sx={sx}>
                        {children}
                    </Box>
                </div>
            </Box>
        </Portal>
    );
};
