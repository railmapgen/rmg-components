import { Button, ButtonProps, useStyleConfig } from '@chakra-ui/react';

export interface RmgEnrichedButtonProps extends ButtonProps {
    primaryText: string;
    secondaryText: string;
}

export const RmgEnrichedButton = (props: RmgEnrichedButtonProps) => {
    const { primaryText, secondaryText, sx, ...others } = props;

    const styles = useStyleConfig('RmgEnrichedButton');

    return (
        <Button sx={{ ...styles, ...sx }} {...others}>
            <span>{primaryText}</span>
            <span>{secondaryText}</span>
        </Button>
    );
};
