import { useEffect, useState } from 'react';
import rmgRuntime from '@railmapgen/rmg-runtime';

export default function useAppVersion() {
    const [appVersion, setAppVersion] = useState('unknown');

    useEffect(() => {
        rmgRuntime.getAppVersion().then(ver => setAppVersion(ver));
    }, []);

    return appVersion;
}
