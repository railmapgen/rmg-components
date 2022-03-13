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

const mockSelectField: RmgFieldsField = {
    type: 'select',
    label: 'Mock select',
    value: 'opt1',
    options: {
        opt1: 'Option 1',
        opt2: 'Option 2',
    },
    onChange: jest.fn(),
};

const mockNumberSelectField: RmgFieldsField = {
    type: 'select',
    label: 'Mock number select',
    value: 0,
    options: {
        0: 'Please select...',
        1: 'One',
        2: 'Two',
    },
    disabledOptions: [0],
    onChange: jest.fn(),
};

const mockIntSliderField: RmgFieldsField = {
    type: 'slider',
    label: 'Mock integer slider',
    value: 40,
    min: 30,
    max: 50,
    onChange: jest.fn(),
};

const mockSliderField: RmgFieldsField = {
    type: 'slider',
    label: 'Mock slider',
    value: 5,
    min: 0,
    max: 10,
    step: 0.1,
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

    it('Can render select field as expected', () => {
        const wrapper = mount(<RmgFields fields={[mockSelectField]} />);

        const label = wrapper.find('label');
        expect(label.text()).toBe('Mock select');

        const selectEl = wrapper.find('select');
        selectEl.simulate('change', { target: { value: 'opt2' } });
        expect(mockSelectField.onChange).toBeCalledTimes(1);
        expect(mockSelectField.onChange).toBeCalledWith('opt2');
    });

    it('Can render number select field as expected', () => {
        const wrapper = mount(<RmgFields fields={[mockNumberSelectField]} />);

        const selectEl = wrapper.find('select');
        expect(selectEl.props().value).toBe(0);

        const options = selectEl.find('option');
        expect(options).toHaveLength(3);
        expect(options.at(0).text()).toBe('Please select...');
        expect(options.at(0).props().disabled).toBeTruthy();

        selectEl.simulate('change', { target: { value: '1' } });
        expect(mockNumberSelectField.onChange).toBeCalledTimes(1);
        expect(mockNumberSelectField.onChange).toBeCalledWith(1);
    });

    it('Can render integer slider field as expected', () => {
        const wrapper = mount(<RmgFields fields={[mockIntSliderField]} />);

        const label = wrapper.find('label');
        expect(label.text()).toBe('Mock integer slider');

        const sliderThumb = wrapper.find('div.chakra-slider__thumb');
        expect(sliderThumb.props()['aria-valuemin']).toBe(30);
        expect(sliderThumb.props()['aria-valuemax']).toBe(50);
        expect(sliderThumb.props()['aria-valuenow']).toBe(40);

        sliderThumb.simulate('keydown', { key: 'ArrowRight' });
        expect(mockIntSliderField.onChange).toBeCalledTimes(1);
        expect(mockIntSliderField.onChange).toBeCalledWith(41);
    });

    it('Can render slider field as expected', () => {
        const wrapper = mount(<RmgFields fields={[mockSliderField]} />);

        const label = wrapper.find('label');
        expect(label.text()).toBe('Mock slider');

        const sliderThumb = wrapper.find('div.chakra-slider__thumb');
        sliderThumb.simulate('keydown', { key: 'ArrowRight' });

        expect(mockSliderField.onChange).toBeCalledTimes(1);
        expect(mockSliderField.onChange).toBeCalledWith(5.1);
    });
});
