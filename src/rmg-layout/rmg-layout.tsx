import { Flex, FlexProps, useStyleConfig } from '@chakra-ui/react';

export const RmgWindow = (props: FlexProps) => {
    const styles = useStyleConfig('RmgWindow');
    return <Flex sx={styles} {...props} />;
};

export const RmgWindowHeader = (props: FlexProps) => {
    const styles = useStyleConfig('RmgWindowHeader');
    return <Flex sx={styles} {...props} />;
};

export const RmgPage = (props: FlexProps) => {
    const styles = useStyleConfig('RmgPage');
    return <Flex sx={styles} {...props} />;
};

export const RmgPageHeader = (props: FlexProps) => {
    const styles = useStyleConfig('RmgPageHeader');
    return <Flex sx={styles} {...props} />;
};
