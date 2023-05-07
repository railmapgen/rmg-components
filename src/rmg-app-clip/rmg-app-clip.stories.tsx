import { RmgAppClip } from './rmg-app-clip';
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

export default {
    title: 'RmgAppClip',
    component: RmgAppClip,
};

export const Basic = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Box>
            <Button onClick={() => setIsOpen(true)}>Open app clip</Button>
            <RmgAppClip isOpen={isOpen} onClose={() => setIsOpen(false)}>
                App clip content goes here
            </RmgAppClip>
        </Box>
    );
};
