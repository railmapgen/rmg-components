import { BoxProps, chakra, Flex, FlexProps, useStyleConfig } from '@chakra-ui/react';

export const RmgWindow = (props: FlexProps) => {
    const { sx, className, ...others } = props;
    const styles = useStyleConfig('RmgWindow');
    return <Flex className={`rmg-window ${className ?? ''}`} sx={{ ...styles, ...sx }} {...others} />;
};

export const RmgWindowHeader = (props: { isAppClipHeader?: boolean } & FlexProps) => {
    const { isAppClipHeader, sx, className, ...others } = props;
    const styles = useStyleConfig('RmgWindowHeader');
    return (
        <Flex
            className={`rmg-window__header ${isAppClipHeader ? 'rmg-window__app-clip-header' : ''} ${className ?? ''}`}
            sx={{ ...styles, ...sx }}
            {...others}
        />
    );
};

export const RmgPage = (props: FlexProps) => {
    const { sx, className, ...others } = props;
    const styles = useStyleConfig('RmgPage');
    return <Flex className={`rmg-page ${className ?? ''}`} sx={{ ...styles, ...sx }} {...others} />;
};

export const RmgPageHeader = (props: FlexProps) => {
    const { sx, className, ...others } = props;
    const styles = useStyleConfig('RmgPageHeader');
    return <Flex className={`rmg-page__header ${className ?? ''}`} sx={{ ...styles, ...sx }} {...others} />;
};

export const RmgSection = (props: BoxProps) => {
    const { sx, className, ...others } = props;
    const styles = useStyleConfig('RmgSection');
    return <chakra.section className={`rmg-section ${className ?? ''}`} sx={{ ...styles, ...sx }} {...others} />;
};

export const RmgSectionHeader = (props: FlexProps) => {
    const { sx, className, ...others } = props;
    const styles = useStyleConfig('RmgSectionHeader');
    return <chakra.div className={`rmg-section__header ${className ?? ''}`} sx={{ ...styles, ...sx }} {...others} />;
};
