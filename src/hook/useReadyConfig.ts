import rmgRuntime from '@railmapgen/rmg-runtime';
import { useUpdatingGetter } from './useUpdatingGetter';

export const useReadyConfig = <T>(configGetter: () => T) => {
    return useUpdatingGetter(rmgRuntime.ready(), configGetter);
};
