import React from 'react';
import { RmgFields, RmgFieldsField } from './rmg-fields';
import { render } from '../test-utils';
import { fireEvent, screen } from '@testing-library/react';

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

const mockSwitchField: RmgFieldsField = {
    type: 'switch',
    label: 'Mock switch',
    isChecked: false,
    onChange: jest.fn(),
};

const mockDisabledSwitchField: RmgFieldsField = {
    type: 'switch',
    label: 'Mock disabled switch',
    isChecked: false,
    isDisabled: true,
    onChange: jest.fn(),
};

const mockFullWidthTextField: RmgFieldsField = {
    type: 'input',
    label: 'Mock full width text field',
    value: '',
    minW: 'full',
};

describe('RmgFields', () => {
    it('Can render input field as expected', () => {
        render(<RmgFields fields={[mockInputField]} />);

        const inputEl = screen.getByRole('combobox', { name: 'Mock input' });
        expect(inputEl).toBeInTheDocument();

        jest.useFakeTimers();
        fireEvent.change(inputEl, { target: { value: 'test input' } });
        jest.advanceTimersByTime(1000);

        expect(mockInputField.onChange).toBeCalledTimes(1);
        expect(mockInputField.onChange).toBeCalledWith('test input');
    });

    it('Can render select field as expected', () => {
        render(<RmgFields fields={[mockSelectField]} />);

        const selectEl = screen.getByRole('combobox', { name: 'Mock select' });
        expect(selectEl).toBeInTheDocument();

        fireEvent.change(selectEl, { target: { value: 'opt2' } });

        expect(mockSelectField.onChange).toBeCalledTimes(1);
        expect(mockSelectField.onChange).toBeCalledWith('opt2');
    });

    it('Can render number select field as expected', () => {
        render(<RmgFields fields={[mockNumberSelectField]} />);

        expect(screen.getByDisplayValue('Please select...')).toBeInTheDocument();

        expect(screen.getAllByRole('option')).toHaveLength(3);
        expect(screen.getByRole('option', { name: 'Please select...' })).toBeDisabled();

        fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });

        expect(mockNumberSelectField.onChange).toBeCalledTimes(1);
        expect(mockNumberSelectField.onChange).toBeCalledWith(1);
    });

    it('Can render integer slider field as expected', () => {
        render(<RmgFields fields={[mockIntSliderField]} />);

        const sliderEl = screen.getByRole('slider');
        expect(sliderEl.getAttribute('aria-valuemin')).toBe('30');
        expect(sliderEl.getAttribute('aria-valuemax')).toBe('50');
        expect(sliderEl.getAttribute('aria-valuenow')).toBe('40');

        fireEvent.keyDown(sliderEl, { key: 'ArrowRight' });

        expect(mockIntSliderField.onChange).toBeCalledTimes(1);
        expect(mockIntSliderField.onChange).toBeCalledWith(41);
    });

    it('Can render slider field as expected', () => {
        render(<RmgFields fields={[mockSliderField]} />);

        fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });

        expect(mockSliderField.onChange).toBeCalledTimes(1);
        expect(mockSliderField.onChange).toBeCalledWith(5.1);
    });

    it('Can render switch field as expected', () => {
        render(<RmgFields fields={[mockSwitchField]} />);

        const switchEl = screen.getByRole('checkbox', { name: 'Mock switch' });
        expect(switchEl).toBeInTheDocument();

        fireEvent.click(switchEl);

        expect(mockSwitchField.onChange).toBeCalledTimes(1);
        expect(mockSwitchField.onChange).toBeCalledWith(true);
    });

    it('Can render disabled switch field as expected', () => {
        render(<RmgFields fields={[mockDisabledSwitchField]} />);

        fireEvent.click(screen.getByRole('checkbox'));

        expect(mockSwitchField.onChange).toBeCalledTimes(0);
    });

    it('Can set full width for specific field as expected', () => {
        // global minW to be 100
        render(<RmgFields fields={[mockFullWidthTextField, mockInputField]} minW={100} />);

        expect(screen.getAllByRole('group')[0]).toHaveClass('mw-full');
        expect(screen.getAllByRole('group')[0]).not.toHaveStyle({ minWidth: '100px' });

        expect(screen.getAllByRole('group')[1]).not.toHaveClass('mw-full');
        expect(screen.getAllByRole('group')[1]).toHaveStyle({ minWidth: '100px' });
    });
});
