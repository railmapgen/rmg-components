import { RmgSidePanel, RmgSidePanelBody, RmgSidePanelFooter, RmgSidePanelHeader } from './rmg-side-panel';
import { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

export default {
    title: 'RmgSidePanel',
    component: RmgSidePanel,
};

export const Basic = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Flex w="100%" h={400}>
            <Box flex={1}>
                <Button onClick={() => setIsOpen(true)}>Open side panel</Button>
            </Box>
            <RmgSidePanel isOpen={isOpen} header="Side panel title">
                <RmgSidePanelHeader onClose={() => setIsOpen(false)}>Side panel title</RmgSidePanelHeader>

                <RmgSidePanelBody>Side panel content goes here</RmgSidePanelBody>

                <RmgSidePanelFooter>
                    <Button>Action 1</Button>
                </RmgSidePanelFooter>
            </RmgSidePanel>
        </Flex>
    );
};
