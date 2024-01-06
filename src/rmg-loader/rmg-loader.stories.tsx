import { useEffect, useState } from 'react';
import RmgLoader from './rmg-loader';
import { RmgPage } from '../rmg-layout';

export default {
    title: 'RmgLoader',
    component: RmgLoader,
};

export const RmgLoaderIndeterminate = () => {
    return (
        <RmgPage w={400} h={300} border="1px">
            <RmgLoader isIndeterminate={true} />
        </RmgPage>
    );
};

export const RmgLoaderDeterminate = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue(prevState => {
                if (prevState === 100) {
                    return 0;
                } else {
                    return prevState + 20;
                }
            });
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <RmgPage w={400} h={300} border="1px">
            <RmgLoader value={value} />
        </RmgPage>
    );
};
