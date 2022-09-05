import { useEffect, useState } from 'react';
import rmgRuntime, { RmgEnv } from '@railmapgen/rmg-runtime';

export const useEnvironment = () => {
    const [environment, setEnvironment] = useState(RmgEnv.PRD);

    useEffect(() => {
        rmgRuntime.getEnv().then(env => setEnvironment(env));
    }, []);

    return environment;
};
