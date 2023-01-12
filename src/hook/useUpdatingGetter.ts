import { useEffect, useState } from 'react';

export const useUpdatingGetter = <T>(updater: Promise<any>, getter: () => T, defaultValue?: T) => {
    const [value, setValue] = useState<T>(defaultValue ?? getter());

    useEffect(() => {
        updater.then(() => {
            console.debug('[rmg-components] Getter updates finished');
            setValue(getter());
        });
    }, []);

    return value;
};
