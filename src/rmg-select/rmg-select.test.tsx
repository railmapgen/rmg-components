import React from 'react';
import { mount } from 'enzyme';
import { RmgSelect } from './rmg-select';

const mockSelectProps = {
    value: 'opt1',
    options: {
        undefined: 'Please select...',
        opt1: 'Option 1',
        opt2: 'Option 2',
    },
    disabledOptions: ['undefined'],
    onChange: jest.fn(),
};

describe('Unit tests for RmgSelect component', () => {
    it('Can render select with disabled options as expected', () => {
        const wrapper = mount(<RmgSelect {...mockSelectProps} />);

        const options = wrapper.find('select option');
        expect(options).toHaveLength(3);
        expect(options.at(0).text()).toBe('Please select...');
        expect(options.at(0).props().disabled).toBeTruthy();
    });
});
