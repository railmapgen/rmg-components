import { useCallback, useEffect, useRef, useState } from 'react';

export const useThrottle = (callback: Function, delay: number = 500) => {
    const [isReady, setIsReady] = useState(true); // ready for next invocation

    const waitingArgs = useRef<any[]>([]);
    const timeoutRef = useRef<number>();

    const throttledCallback = useCallback(
        (...args: any[]) => {
            if (!isReady) {
                waitingArgs.current = args;
                return;
            }

            setIsReady(false);
            waitingArgs.current = [];
            callback(...args);
        },
        [isReady, callback]
    );

    useEffect(() => {
        if (!isReady) {
            timeoutRef.current = window.setTimeout(() => {
                setIsReady(true);

                if (waitingArgs.current.length) {
                    callback(...waitingArgs.current);
                }
            }, delay);

            return () => {
                window.clearTimeout(timeoutRef.current);
            };
        }
    }, [isReady, delay]);

    return throttledCallback;
};
