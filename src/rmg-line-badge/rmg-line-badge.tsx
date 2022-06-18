import React, { ReactElement } from 'react';
import { ColourHex, MonoColour, Name } from '../util/constants';
import { Badge, BadgeProps, IconButton, useStyleConfig } from '@chakra-ui/react';

export interface RmgLineBadgeProps extends BadgeProps {
    name: Name | string;
    fg: MonoColour;
    bg: ColourHex;
    showShortName?: boolean;
    onEdit?: () => void;
    editLabel?: string;
    editIcon?: ReactElement;
    onRemove?: () => void;
    removeLabel?: string;
    removeIcon?: ReactElement;
}

export const RmgLineBadge = (props: RmgLineBadgeProps) => {
    const { name, fg, bg, showShortName, onEdit, editLabel, editIcon, onRemove, removeLabel, removeIcon, ...others } =
        props;

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

            {onEdit && (
                <IconButton
                    size="xs"
                    variant="ghost"
                    color={fg}
                    aria-label={editLabel ?? ''}
                    icon={editIcon}
                    onClick={onEdit}
                />
            )}
            {onRemove && (
                <IconButton
                    size="xs"
                    variant="ghost"
                    color={fg}
                    aria-label={removeLabel ?? ''}
                    icon={removeIcon}
                    onClick={onRemove}
                />
            )}
        </Badge>
    );
};
