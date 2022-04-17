import { RmgEnvBadge } from './rmg-env-badge';
import { Box } from '@chakra-ui/react';
import { Environments } from '../util/constants';

export default {
    title: 'RmgEnvBadge',
    component: RmgEnvBadge,
};

export const Basic = () => {
    return (
        <Box>
            <RmgEnvBadge
                environment={Environments.DEV}
                version="0.1.0"
                popoverHeader="You're on DEV environment!"
                popoverBody="Please visit PRD environment!"
            />
            <RmgEnvBadge
                environment={Environments.UAT}
                version="0.1.0"
                popoverHeader="You're on UAT environment!"
                popoverBody="Please visit PRD environment!"
            />
            <RmgEnvBadge environment={Environments.PRD} version="0.1.0" />
        </Box>
    );
};
