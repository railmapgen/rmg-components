import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useUpdatingGetter } from './useUpdatingGetter';

const wait = (ms: number) =>
    new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });

const mockGetter = () => Date.now();

describe('useUpdatingGetter', () => {
    it('Can get updated value after updater resolved', async () => {
        vi.useFakeTimers();
        const { result } = renderHook(() => useUpdatingGetter(wait(5000), mockGetter));

        // original value
        const value1 = result.current;

        // value after 2 seconds
        await act(async () => {
            vi.advanceTimersByTime(2000);
        });
        const value2 = result.current;
        expect(value1).toEqual(value2);

        // value after 5 seconds
        await act(async () => {
            vi.advanceTimersByTime(3001);
        });
        const value3 = result.current;
        expect(value3 - value1).toBeGreaterThan(5000);
    });
});
