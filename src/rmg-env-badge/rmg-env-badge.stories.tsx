import { RmgEnvBadge } from './rmg-env-badge';
import { Box } from '@chakra-ui/react';
import { RmgEnv } from '@railmapgen/rmg-runtime';
import { useEnvironment } from '../hook/useEnvironment';
import { useAppVersion } from '../hook/useAppVersion';

export default {
    title: 'RmgEnvBadge',
    component: RmgEnvBadge,
};

export const Basic = () => {
    const environment = useEnvironment();
    const appVersion = useAppVersion();

    return (
        <Box>
            <RmgEnvBadge
                environment={RmgEnv.DEV}
                version="0.1.0"
                popoverHeader="You're on DEV environment!"
                popoverBody="Please visit PRD environment!"
            />
            <RmgEnvBadge
                environment={RmgEnv.UAT}
                version="0.1.0"
                popoverHeader="You're on UAT environment!"
                popoverBody="Please visit PRD environment!"
            />
            <RmgEnvBadge environment={RmgEnv.PRD} version="0.1.0" />
            <RmgEnvBadge environment={environment} version={appVersion} />
        </Box>
    );
};
