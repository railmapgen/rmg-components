import React from 'react';
import { mount } from 'enzyme';
import { RmgMultiLineString } from './rmg-multi-line-string';

const mockText = 'First line\nSecond line\nThird line';

describe('Unit tests for RmgMultiLineString component', () => {
    it('Can', () => {
        const wrapper = mount(<RmgMultiLineString text={mockText} delimiter={'\n'} />);
        expect(wrapper.find('span').children()).toHaveLength(5);
    });
});
