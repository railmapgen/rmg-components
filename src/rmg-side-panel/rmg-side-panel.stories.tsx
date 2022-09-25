import { RmgSidePanel, RmgSidePanelBody, RmgSidePanelFooter, RmgSidePanelHeader } from './rmg-side-panel';
import { useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export default {
    title: 'RmgSidePanel',
    component: RmgSidePanel,
};

export const Basic = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Flex w="100%" h={400} position="relative">
            <Box flex={1}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus
                    fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh
                    vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada
                    ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula
                    sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis
                    urna nec rutrum posuere.
                </Text>
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

export const AlwaysOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Flex w="100%" h={400} position="relative">
            <Box flex={1}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus
                    fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh
                    vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada
                    ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula
                    sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis
                    urna nec rutrum posuere.
                </Text>
                <Button onClick={() => setIsOpen(true)}>Open side panel</Button>
            </Box>
            <RmgSidePanel isOpen={isOpen} header="Side panel title" width={240} alwaysOverlay>
                <RmgSidePanelHeader onClose={() => setIsOpen(false)}>Side panel title</RmgSidePanelHeader>

                <RmgSidePanelBody>Side panel content goes here</RmgSidePanelBody>

                <RmgSidePanelFooter>
                    <Button>Action 1</Button>
                </RmgSidePanelFooter>
            </RmgSidePanel>
        </Flex>
    );
};
