import React, { useEffect, useState } from 'react';
import { RmgLoader } from './rmg-loader';
import { Box } from '@chakra-ui/react';

export default {
    title: 'RmgLoader',
    component: RmgLoader,
};

export const RmgLoaderIndeterminate = () => {
    return (
        <Box w={400} h={300}>
            <RmgLoader isIndeterminate={true} />
        </Box>
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
        <Box w={400} h={300}>
            <RmgLoader value={value} />
        </Box>
    );
};
