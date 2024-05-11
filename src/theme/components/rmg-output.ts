import { ComponentStyleConfig } from '@chakra-ui/theme';
import { SystemStyleObject } from '@chakra-ui/react';

const noWrapStyles: SystemStyleObject = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
};

export const rmgOutputTheme: ComponentStyleConfig = {
    baseStyle: ({ noWrap }) => ({
        minH: 6,
        fontSize: 'sm',

        ...(noWrap ? noWrapStyles : { textWrap: 'pretty' }),
    }),
};
