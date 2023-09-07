import { PropsWithChildren } from 'react';
import { chakra, useStyleConfig } from '@chakra-ui/react';

export interface RmgOutputProps extends PropsWithChildren {
    noWrap?: boolean;
}

export const RmgOutput = (props: RmgOutputProps) => {
    const { children, noWrap } = props;

    const styles = useStyleConfig('RmgOutput', { noWrap });

    return <chakra.output sx={styles}>{children}</chakra.output>;
};
