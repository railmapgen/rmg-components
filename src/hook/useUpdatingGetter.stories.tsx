import { useRef } from 'react';
import { useUpdatingGetter } from './useUpdatingGetter';

export default {
    title: 'useUpdatingGetter',
    component: useUpdatingGetter,
};

const wait = (ms: number) =>
    new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });

export const Basic = () => {
    const renderedTimestamps = useRef<string[]>([]);
    const timestamp = useUpdatingGetter(wait(5000), () => new Date().toISOString());
    renderedTimestamps.current = renderedTimestamps.current.concat(timestamp);

    return (
        <div>
            <div>Timestamp renders: {renderedTimestamps.current.join(',')}</div>
        </div>
    );
};
