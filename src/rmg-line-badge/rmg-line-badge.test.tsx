import React from 'react';
import { RmgLineBadge } from './rmg-line-badge';
import { MonoColour } from '../util/constants';
import { render } from '../test-utils';
import { screen } from '@testing-library/react';

describe('RmgLineBadge', () => {
    it('Can render badge with short name as expected', () => {
        render(<RmgLineBadge name={['18号线', 'Line 18']} fg={MonoColour.white} bg="#000000" showShortName />);

        expect(screen.getByText('18')).toBeInTheDocument();
        expect(screen.getByText('18')).toHaveStyle({ color: '#FFFFFF', background: '#000000' });
    });

    it('Can render badge with long name as expected', () => {
        render(<RmgLineBadge name="Tsuen Wan Line" fg={MonoColour.black} bg="#ffffff" />);

        expect(screen.getByText('Tsuen Wan Line')).toBeInTheDocument();
        expect(screen.getByText('Tsuen Wan Line')).toHaveStyle({ color: '#000000', background: '#FFFFFF' });
    });
});
