import React from 'react';
import { RmgMultiLineString } from './rmg-multi-line-string';
import { render } from '../test-utils';
import { screen } from '@testing-library/react';

const mockText = 'First line\nSecond line\nThird line';

describe('RmgMultiLineString', () => {
    it('Can separate lines of text by kbd element', () => {
        render(<RmgMultiLineString text={mockText} delimiter={'\n'} />);

        expect(screen.getAllByText('⏎')).toHaveLength(2);
        expect(document.body.textContent).toBe('First line⏎Second line⏎Third line');
    });
});
