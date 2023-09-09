import { chakra, Flex, FlexProps, useStyleConfig } from '@chakra-ui/react';

export const RmgWindow = (props: FlexProps) => {
    const { sx, className, ...others } = props;
    const styles = useStyleConfig('RmgWindow');
    return <Flex className={`rmg-window ${className ?? ''}`} sx={{ ...styles, ...sx }} {...others} />;
};

export const RmgWindowHeader = (props: FlexProps) => {
    const { sx, className, ...others } = props;
    const styles = useStyleConfig('RmgWindowHeader');
    return <Flex className={`rmg-window__header ${className ?? ''}`} sx={{ ...styles, ...sx }} {...others} />;
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

export const RmgSectionHeader = (props: FlexProps) => {
    const { sx, className, ...others } = props;
    const styles = useStyleConfig('RmgSectionHeader');
    return <chakra.div className={`rmg-section__header ${className ?? ''}`} sx={{ ...styles, ...sx }} {...others} />;
};
