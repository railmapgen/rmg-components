import { render } from '../test-utils';
import { RmgSidePanel } from './rmg-side-panel';
import { screen } from '@testing-library/react';

describe('RmgSidePanel', () => {
    it('Side panel show and close', () => {
        const { rerender } = render(<RmgSidePanel isOpen={false} header="Test side panel" />);
        expect(screen.getByTestId('side-panel-root')).toHaveStyle({ maxWidth: '0px', visibility: 'hidden' });

        rerender(<RmgSidePanel isOpen={true} header="Test side panel" />);
        expect(screen.getByTestId('side-panel-root')).toHaveStyle({ visibility: 'initial' });
        expect(screen.getByTestId('side-panel-root')).toHaveClass('show-side-panel');
    });
});
