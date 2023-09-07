import { ComponentStyleConfig } from '@chakra-ui/theme';
import { SystemStyleObject } from '@chakra-ui/react';

const noWrapStyles: SystemStyleObject = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
};

export const rmgOutputTheme: ComponentStyleConfig = {
    baseStyle: ({ noWrap }) => ({
        h: 6,
        fontSize: 'sm',

        ...(noWrap ? noWrapStyles : {}),
    }),
};
