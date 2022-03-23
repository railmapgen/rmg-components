import React from 'react';
import { mount } from 'enzyme';
import { RmgSelect } from './rmg-select';

const mockSelectProps = {
    defaultValue: 'opt1',
    options: {
        undefined: 'Please select...',
        opt1: 'Option 1',
        opt2: 'Option 2',
    },
    disabledOptions: ['undefined'],
    onChange: jest.fn(),
};

const wrapper = mount(<RmgSelect {...mockSelectProps} />);

describe('Unit tests for RmgSelect component', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('Can render select with disabled options as expected', () => {
        const options = wrapper.find('select option');
        expect(options).toHaveLength(3);
        expect(options.at(0).text()).toBe('Please select...');
        expect(options.at(0).props().disabled).toBeTruthy();
    });

    it('Can re-render input field with new defaultValue without firing onChange event', () => {
        expect(wrapper.find('select').getDOMNode<HTMLSelectElement>().value).toBe('opt1');

        wrapper.setProps({ defaultValue: 'opt2' });

        expect(wrapper.find('select').getDOMNode<HTMLSelectElement>().value).toBe('opt2');
        expect(mockSelectProps.onChange).toBeCalledTimes(0);
    });
});
