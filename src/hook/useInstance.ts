import { useEffect, useState } from 'react';
import rmgRuntime, { RmgInstance } from '@railmapgen/rmg-runtime';

export default function useInstance() {
    const [instance, setInstance] = useState(RmgInstance.UNKNOWN);

    useEffect(() => {
        rmgRuntime.getInstance().then(ins => setInstance(ins));
    }, []);

    return instance;
}
