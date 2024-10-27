import { ReactElement } from 'react';
import { ColourHex, MonoColour, Name } from '../util/constants';
import { Badge, BadgeProps, useStyleConfig } from '@chakra-ui/react';

export interface RmgLineBadgeProps extends BadgeProps {
    name: Name | string;
    fg: MonoColour;
    bg: ColourHex;
    showShortName?: boolean;
    actions?: ReactElement;
}

export const RmgLineBadge = (props: RmgLineBadgeProps) => {
    const { name, fg, bg, showShortName, actions, ...others } = props;

    const styles = useStyleConfig('RmgLineBadge');

    const getShortName = (name: Name | string): string => {
        if (typeof name === 'object') {
            return name[0].match(/^[\d\w]+/)?.[0] || name[0];
        } else {
            return name.match(/^[\d\w]+/)?.[0] || name;
        }
    };

    return (
        <Badge color={fg} bg={bg} sx={styles} {...others}>
            {showShortName ? getShortName(name) : typeof name === 'object' ? name[0] : name}

            {actions}
        </Badge>
    );
};
