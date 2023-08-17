import { BoxProps, chakra, ModalProps, Portal, useOutsideClick, useStyleConfig } from '@chakra-ui/react';
import { useRef } from 'react';

export interface RmgAppClipProps extends BoxProps {
    isOpen: boolean;
    onClose: () => void;
    size?: ModalProps['size'];
}

export const RmgAppClip = (props: RmgAppClipProps) => {
    const { isOpen, onClose, children, sx, size, zIndex, ...others } = props;
    const styles = useStyleConfig('RmgAppClip', { size, zIndex: zIndex ?? 1500 });

    const contentRef = useRef<HTMLDivElement>(null);

    useOutsideClick({ ref: contentRef, handler: onClose });

    return (
        <Portal>
            <chakra.div className={isOpen ? 'show-app-clip' : ''} sx={styles} {...others}>
                <div className="rmg-app-clip__overlay" />
                <div className="rmg-app-clip__container">
                    <chakra.section ref={contentRef} role="dialog" className="rmg-app-clip__content" sx={sx}>
                        {children}
                    </chakra.section>
                </div>
            </chakra.div>
        </Portal>
    );
};
