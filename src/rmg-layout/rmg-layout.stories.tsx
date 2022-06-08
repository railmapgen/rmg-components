import { RmgPage, RmgPageHeader, RmgWindow, RmgWindowHeader } from './rmg-layout';
import { Box, Heading } from '@chakra-ui/react';
import { RmgDebouncedInput } from '../rmg-debounced-input';
import { RmgLabel } from '../rmg-label';

export default {
    title: 'RmgLayout',
};

export const Basic = () => {
    return (
        <Box h={400} w={700}>
            <RmgWindow border="1px dashed">
                <RmgWindowHeader border="1px dashed">
                    <Heading as="h4" size="md">
                        RMG Components
                    </Heading>
                </RmgWindowHeader>

                <RmgPage border="1px dashed">
                    <RmgPageHeader border="1px dashed">
                        <RmgLabel label="Quick filter">
                            <RmgDebouncedInput placeholder="Filter anything" />
                        </RmgLabel>
                    </RmgPageHeader>

                    <Box>Page body goes here</Box>
                </RmgPage>
            </RmgWindow>
        </Box>
    );
};
