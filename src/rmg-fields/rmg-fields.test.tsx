import React from 'react';
import { RmgFields, RmgFieldsField } from './rmg-fields';
import { mount } from 'enzyme';

const mockInputField: RmgFieldsField = {
    type: 'input',
    label: 'Mock input',
    value: 'mock value',
    placeholder: 'Mock placeholder',
    onChange: jest.fn(),
};

const mockSliderField: RmgFieldsField = {
    type: 'slider',
    label: 'Mock slider',
    value: 40,
    min: 30,
    max: 50,
    onChange: jest.fn(),
};

describe('Unit tests for RmgFields component', () => {
    it('Can render input field as expected', () => {
        const wrapper = mount(<RmgFields fields={[mockInputField]} />);

        const label = wrapper.find('label');
        expect(label.text()).toBe('Mock input');

        const inputEl = wrapper.find('input');
        jest.useFakeTimers();
        inputEl.simulate('change', { target: { value: 'test input' } });
        jest.advanceTimersByTime(1000);
        expect(mockInputField.onChange).toBeCalledTimes(1);
        expect(mockInputField.onChange).toBeCalledWith('test input');
    });

    it('Can render slider field as expected', () => {
        const wrapper = mount(<RmgFields fields={[mockSliderField]} />);

        const label = wrapper.find('label');
        expect(label.text()).toBe('Mock slider');

        const sliderTrack = wrapper.find('div.chakra-slider__thumb');
        expect(sliderTrack.props()['aria-valuemin']).toBe(30);
        expect(sliderTrack.props()['aria-valuemax']).toBe(50);
        expect(sliderTrack.props()['aria-valuenow']).toBe(40);
    });
});
