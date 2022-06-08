import React from 'react';
import { ColourHex, MonoColour, Name } from '../util/constants';
import { Badge, BadgeProps, IconButton, useStyleConfig } from '@chakra-ui/react';
import { EditIcon, SmallCloseIcon } from '@chakra-ui/icons';

export interface RmgLineBadgeProps extends BadgeProps {
    name: Name | string;
    fg: MonoColour;
    bg: ColourHex;
    showShortName?: boolean;
    onEdit?: () => void;
    editLabel?: string;
    onRemove?: () => void;
    removeLabel?: string;
}

export const RmgLineBadge = (props: RmgLineBadgeProps) => {
    const { name, fg, bg, showShortName, onEdit, editLabel, onRemove, removeLabel, ...others } = props;

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
                    icon={<EditIcon />}
                    onClick={onEdit}
                />
            )}
            {onRemove && (
                <IconButton
                    size="xs"
                    variant="ghost"
                    color={fg}
                    aria-label={removeLabel ?? ''}
                    icon={<SmallCloseIcon />}
                    onClick={onRemove}
                />
            )}
        </Badge>
    );
};
