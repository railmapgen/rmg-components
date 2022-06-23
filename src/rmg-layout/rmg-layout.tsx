import { Flex, FlexProps, useStyleConfig } from '@chakra-ui/react';

export const RmgWindow = (props: FlexProps) => {
    const { sx, ...others } = props;
    const styles = useStyleConfig('RmgWindow');
    return <Flex sx={{ ...styles, ...sx }} {...others} />;
};

export const RmgWindowHeader = (props: FlexProps) => {
    const { sx, ...others } = props;
    const styles = useStyleConfig('RmgWindowHeader');
    return <Flex sx={{ ...styles, ...sx }} {...others} />;
};

export const RmgPage = (props: FlexProps) => {
    const { sx, ...others } = props;
    const styles = useStyleConfig('RmgPage');
    return <Flex sx={{ ...styles, ...sx }} {...others} />;
};

export const RmgPageHeader = (props: FlexProps) => {
    const { sx, ...others } = props;
    const styles = useStyleConfig('RmgPageHeader');
    return <Flex sx={{ ...styles, ...sx }} {...others} />;
};
