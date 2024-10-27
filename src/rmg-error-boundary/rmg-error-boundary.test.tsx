import { render } from '../test-utils';
import { RmgErrorBoundary } from './rmg-error-boundary';
import { BuggyCounter } from './buggy-counter';
import { fireEvent, screen } from '@testing-library/react';

describe('RmgErrorBoundary', () => {
    it('Can show alert when children component throws error', () => {
        render(
            <RmgErrorBoundary>
                <BuggyCounter />
            </RmgErrorBoundary>
        );

        expect(screen.getByRole('heading')).toHaveTextContent(/Click me/);

        fireEvent.click(screen.getByRole('heading'));
        fireEvent.click(screen.getByRole('heading'));
        fireEvent.click(screen.getByRole('heading'));
        fireEvent.click(screen.getByRole('heading'));
        fireEvent.click(screen.getByRole('heading'));

        expect(screen.getByRole('alert')).toHaveTextContent(/Something went wrong/);
        expect(screen.queryByRole('button', { name: 'reset this app' })).not.toBeInTheDocument();
    });

    it('Can show reset app dialog as expected', async () => {
        render(
            <RmgErrorBoundary allowReset>
                <BuggyCounter />
            </RmgErrorBoundary>
        );

        fireEvent.click(screen.getByRole('heading'));
        fireEvent.click(screen.getByRole('heading'));
        fireEvent.click(screen.getByRole('heading'));
        fireEvent.click(screen.getByRole('heading'));
        fireEvent.click(screen.getByRole('heading'));

        expect(screen.getByRole('button', { name: 'reset this app' })).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'reset this app' }));
        await screen.findByRole('alertdialog', { name: 'Warning 警告' });
    });
});
