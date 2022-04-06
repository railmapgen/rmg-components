import React from 'react';
import { RmgLabel } from './rmg-label';
import { render } from '../test-utils';
import { screen } from '@testing-library/react';

describe('Unit tests for RmgLabel component', () => {
    it('Can hide label when noLabel prop is passed', () => {
        const { rerender } = render(
            <RmgLabel label="Test label">
                <input />
            </RmgLabel>
        );
        expect(screen.getByText('Test label')).not.toBeNull();

        rerender(
            <RmgLabel label="Test label" noLabel>
                <input />
            </RmgLabel>
        );
        expect(screen.queryByText('Test label')).toBeNull();
    });

    it('Can render one line field with expected class', () => {
        const { rerender } = render(
            <RmgLabel label="Test label">
                <input />
            </RmgLabel>
        );
        expect(screen.getByRole('group')).not.toHaveClass('rmg-label__one-line');

        rerender(
            <RmgLabel label="Test label" oneLine>
                <input />
            </RmgLabel>
        );
        expect(screen.getByRole('group')).toHaveClass('rmg-label__one-line');
    });
});
