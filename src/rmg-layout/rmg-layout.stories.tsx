import { RmgPage, RmgPageHeader, RmgSection, RmgSectionHeader, RmgWindow, RmgWindowHeader } from './rmg-layout';
import { Box, Heading } from '@chakra-ui/react';
import { RmgDebouncedInput } from '../rmg-debounced-input';
import { RmgLabel } from '../rmg-label';

export default {
    title: 'RmgLayout',
};

export const Basic = () => {
    return (
        <Box h={400} w={700} background="var(--chakra-colors-chakra-body-bg)">
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

                    <Box overflowY="scroll" background="inherit">
                        <RmgSection>
                            <RmgSectionHeader>
                                <Heading as="h5" size="sm">
                                    Section 1
                                </Heading>
                            </RmgSectionHeader>
                            <Box>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Box>
                        </RmgSection>

                        <RmgSection>
                            <RmgSectionHeader>
                                <Heading as="h5" size="sm">
                                    Section 2
                                </Heading>
                            </RmgSectionHeader>
                            <Box>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porttitor
                                tincidunt. In vel dui non odio tempus luctus sed sit amet orci. Nam imperdiet euismod
                                tempor. Maecenas non imperdiet dui. Vestibulum iaculis ex arcu, ut rutrum leo aliquam
                                sit amet. Morbi porttitor dignissim nulla, vitae molestie ante efficitur non.
                                Pellentesque quis hendrerit metus, ac sagittis neque. Morbi ac odio quis velit venenatis
                                dictum in sit amet augue. Vestibulum ut metus urna. Etiam ex dui, volutpat non tortor
                                vitae, aliquet sodales augue. Pellentesque at orci mattis, interdum eros in, tempus
                                quam. Curabitur imperdiet sed dui id mollis. Praesent tincidunt orci ut venenatis
                                rutrum. Vivamus bibendum orci eu ante pretium, vel commodo odio accumsan. Duis magna
                                ante, finibus vel tincidunt et, dignissim a nisi. Maecenas congue lectus lorem, a
                                maximus mi pellentesque vel. Suspendisse lobortis eu leo et consequat. Ut lobortis
                                tellus erat, rutrum suscipit tellus posuere non. Vivamus malesuada faucibus vestibulum.
                                Mauris quis lectus at justo interdum interdum. Nullam imperdiet enim felis, at sagittis
                                est sagittis a. Nam sed gravida est, ac consectetur dolor. Sed vel neque vel turpis
                                condimentum eleifend. Quisque vitae consequat quam. Nullam egestas molestie dolor at
                                porta. Integer eget nulla sit amet odio commodo pharetra. Fusce vel iaculis nunc, at
                                pharetra erat.
                            </Box>
                        </RmgSection>
                    </Box>
                </RmgPage>
            </RmgWindow>
        </Box>
    );
};
