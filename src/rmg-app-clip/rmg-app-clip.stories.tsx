import { RmgAppClip } from './rmg-app-clip';
import { Box, Button, CloseButton } from '@chakra-ui/react';
import { useState } from 'react';

export default {
    title: 'RmgAppClip',
    component: RmgAppClip,
};

export const Basic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState('md');

    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];

    return (
        <Box>
            {sizes.map(s => (
                <Button
                    key={s}
                    m={4}
                    onClick={() => {
                        setSize(s);
                        setIsOpen(true);
                    }}
                >
                    Open {s} app clip
                </Button>
            ))}

            <RmgAppClip size={size} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <CloseButton onClick={() => setIsOpen(false)} />
                App clip content goes here
            </RmgAppClip>
        </Box>
    );
};
