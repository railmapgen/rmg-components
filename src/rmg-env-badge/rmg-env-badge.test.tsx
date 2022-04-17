import React from 'react';
import { render } from '../test-utils';
import { Environments } from '../util/constants';
import { RmgEnvBadge } from './rmg-env-badge';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('RmgEnvBadge', () => {
    it('Can show DEV badge as expected', () => {
        render(
            <RmgEnvBadge
                environment={Environments.DEV}
                version="0.1.0"
                popoverHeader="You're on DEV environment!"
                popoverBody="Please visit PRD environment!"
            />
        );

        expect(screen.getByText('DEV')).toBeInTheDocument();
        expect(screen.queryByText('0.1.0')).not.toBeInTheDocument();
    });

    it('Can show UAT badge as expected', async () => {
        jest.useFakeTimers();
        render(
            <RmgEnvBadge
                environment={Environments.UAT}
                version="0.1.0"
                popoverHeader="You're on UAT environment!"
                popoverBody="Please visit PRD environment!"
            />
        );

        expect(screen.getByText('UAT')).toBeInTheDocument();
        expect(screen.queryByText('0.1.0')).not.toBeInTheDocument();

        expect(screen.getByText('UAT').getAttribute('aria-expanded')).toBe('false');

        await act(async () => {
            jest.advanceTimersByTime(2001);
        });

        // can show popover after 1 second
        expect(screen.getByText('UAT').getAttribute('aria-expanded')).toBe('true');
    });

    it('Can show PRD badge with version number as expected', () => {
        render(<RmgEnvBadge environment={Environments.PRD} version="0.1.0" />);

        expect(screen.queryByText('PRD')).not.toBeInTheDocument();
        expect(screen.getByText('0.1.0')).toBeInTheDocument();
    });
});
