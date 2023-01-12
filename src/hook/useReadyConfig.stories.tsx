import { useReadyConfig } from './useReadyConfig';
import { useRef } from 'react';
import rmgRuntime from '@railmapgen/rmg-runtime';

export default {
    title: 'useReadyConfig',
    component: useReadyConfig,
};

export const Basic = () => {
    const appNameRenders = useRef<string[]>([]);
    const appVersionRenders = useRef<string[]>([]);

    const appName = useReadyConfig(rmgRuntime.getAppName);
    const appVersion = useReadyConfig(rmgRuntime.getAppVersion);

    appNameRenders.current = appNameRenders.current.concat(appName);
    appVersionRenders.current = appVersionRenders.current.concat(appVersion);

    return (
        <div>
            <div>App name renders: {appNameRenders.current}</div>
            <div>App version renders: {appVersionRenders.current}</div>
        </div>
    );
};
