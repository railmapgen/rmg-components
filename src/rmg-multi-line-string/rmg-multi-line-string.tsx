import { Kbd } from '@chakra-ui/react';
import React from 'react';

export interface RmgMultiLineStringProps {
    text: string;
    delimiter?: string;
}

export const RmgMultiLineString = (props: RmgMultiLineStringProps) => {
    const { text, delimiter } = props;
    return <span>{text.split(delimiter || '\\').map((t, i) => (i ? [<Kbd key={i}>⏎</Kbd>, t] : t))}</span>;
};
