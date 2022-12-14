var T=Object.defineProperty;var f=(e,r)=>T(e,"name",{value:r,configurable:!0});import{R as V}from"./rmg-fields.8558b873.js";import{r as n,a as t,j as a}from"./jsx-runtime.711b232c.js";import"./index.0330eb72.js";import{A as C,a as E}from"./index.esm.47a12445.js";import{F as I,B as b,T as i}from"./index.esm.57965a73.js";import{R as B}from"./rmg-multi-line-string.7e974c73.js";import{B as M}from"./index.esm.14cd0817.js";import"./rmg-label.f996063b.js";import"./index.esm.0bb6d3ad.js";import"./index.esm.63e18ebe.js";import"./iframe.addee52f.js";import"./index.esm.b2675e82.js";import"./rmg-debounced-input.bcba0963.js";import"./index.esm.1411880c.js";import"./rmg-select.0b7c5e50.js";import"./rmg-throttled-slider.11bf21b8.js";import"./index.esm.8b06c414.js";import"./index.esm.cb40f727.js";const K={parameters:{storySource:{source:`import { RmgFields, RmgFieldsField } from './rmg-fields';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RmgMultiLineString } from '../rmg-multi-line-string';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export default {
    title: 'RmgFields',
    component: RmgFields,
};

export const Basic = () => {
    const [inputValue, setInputValue] = useState('');
    const [numberValue, setNumberValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [intSliderValue, setIntSliderValue] = useState(5);
    const [sliderValue, setSliderValue] = useState(5);
    const [textareaValue, setTextareaValue] = useState('');
    const [switchValue, setSwitchValue] = useState(false);

    const fields: RmgFieldsField<string>[] = [
        {
            type: 'input',
            label: 'Debounced input field',
            placeholder: 'Enter text',
            value: inputValue,
            onChange: setInputValue,
        },
        {
            type: 'input',
            label: 'Debounced number field',
            placeholder: 'Enter number',
            value: inputValue,
            validator: value => !isNaN(Number(value)),
            onChange: setNumberValue,
        },
        {
            type: 'select',
            label: 'Select field',
            options: {
                '': 'Please select...',
                opt1: 'Option 1',
                opt2: 'Option 2',
            },
            disabledOptions: [''],
            value: selectValue,
            onChange: setSelectValue,
        },
        {
            type: 'slider',
            label: 'Integer slider field',
            value: intSliderValue,
            min: 0,
            max: 10,
            onChange: setIntSliderValue,
        },
        {
            type: 'slider',
            label: 'Slider field',
            value: sliderValue,
            min: 0,
            max: 10,
            step: 0.1,
            onChange: setSliderValue,
            leftIcon: <ArrowBackIcon />,
            rightIcon: <ArrowForwardIcon />,
        },
        {
            type: 'textarea',
            label: 'Multiline field',
            placeholder: 'Please enter multiline text...',
            value: textareaValue,
            onChange: setTextareaValue,
            minW: 'full',
        },
        {
            type: 'switch',
            label: 'Switch field',
            isChecked: switchValue,
            onChange: setSwitchValue,
            oneLine: true,
            minW: 'full',
        },
        {
            type: 'switch',
            label: 'Disabled switch field',
            isChecked: false,
            isDisabled: true,
            oneLine: true,
            minW: 'full',
        },
    ];

    const handleReset = () => {
        setInputValue('');
        setNumberValue('');
        setSelectValue('');
        setIntSliderValue(5);
        setSliderValue(5);
        setTextareaValue('');
        setSwitchValue(false);
    };

    return (
        <Flex>
            <Box w={320}>
                <RmgFields fields={fields} minW={100} />
            </Box>

            <Box>
                <Text>Debounced input field: {inputValue}</Text>
                <Text>Debounced number field: {numberValue}</Text>
                <Text>Select field: {selectValue}</Text>
                <Text>Integer slider field: {intSliderValue}</Text>
                <Text>Slider field: {sliderValue}</Text>
                <Text>Debounced multiline field: {<RmgMultiLineString text={textareaValue} delimiter={'\\n'} />}</Text>
                <Text>Switch field: {switchValue.toString()}</Text>
                <Text>Disabled switch field: false</Text>

                <Button onClick={() => handleReset()}>Reset all</Button>
            </Box>
        </Flex>
    );
};

export const TwoWayControlledSelects = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [minError, setMinError] = useState(false);
    const [maxError, setMaxError] = useState(false);

    useEffect(() => {
        setMinError(false);
        if (min && max && min > max) {
            setMaxError(true);
        }
    }, [min]);

    useEffect(() => {
        setMaxError(false);
        if (min && max && min > max) {
            setMinError(true);
        }
    }, [max]);

    const options = Array(10)
        .fill(0)
        .reduce<Record<number, string>>(
            (acc, cur, idx) => ({
                ...acc,
                [idx + 1]: (idx + 1).toString(),
            }),
            { 0: 'Please select...' }
        );

    const fields: RmgFieldsField[] = [
        {
            type: 'select',
            label: 'Min',
            value: min,
            options: options,
            disabledOptions: [0],
            onChange: value => setMin(value as number),
            isInvalid: minError,
        },
        {
            type: 'select',
            label: 'Max',
            value: max,
            options: options,
            disabledOptions: [0],
            onChange: value => setMax(value as number),
            isInvalid: maxError,
        },
    ];
    return (
        <Box w={320}>
            <Text>Please select a range</Text>
            <RmgFields fields={fields} />

            <Text>Your range: {min && max && !minError && !maxError ? \`from \${min} to \${max}\` : 'invalid'}</Text>
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:12},endLoc:{col:1,line:124},startBody:{col:21,line:12},endBody:{col:1,line:124}},"two-way-controlled-selects":{startLoc:{col:39,line:126},endLoc:{col:1,line:184},startBody:{col:39,line:126},endBody:{col:1,line:184}}}}},title:"RmgFields",component:V},Q=f(()=>{const[e,r]=n.exports.useState(""),[l,x]=n.exports.useState(""),[o,u]=n.exports.useState(""),[c,d]=n.exports.useState(5),[m,h]=n.exports.useState(5),[s,S]=n.exports.useState(""),[p,g]=n.exports.useState(!1),w=[{type:"input",label:"Debounced input field",placeholder:"Enter text",value:e,onChange:r},{type:"input",label:"Debounced number field",placeholder:"Enter number",value:e,validator:v=>!isNaN(Number(v)),onChange:x},{type:"select",label:"Select field",options:{"":"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:[""],value:o,onChange:u},{type:"slider",label:"Integer slider field",value:c,min:0,max:10,onChange:d},{type:"slider",label:"Slider field",value:m,min:0,max:10,step:.1,onChange:h,leftIcon:a(C,{}),rightIcon:a(E,{})},{type:"textarea",label:"Multiline field",placeholder:"Please enter multiline text...",value:s,onChange:S,minW:"full"},{type:"switch",label:"Switch field",isChecked:p,onChange:g,oneLine:!0,minW:"full"},{type:"switch",label:"Disabled switch field",isChecked:!1,isDisabled:!0,oneLine:!0,minW:"full"}],y=f(()=>{r(""),x(""),u(""),d(5),h(5),S(""),g(!1)},"handleReset");return t(I,{children:[a(b,{w:320,children:a(V,{fields:w,minW:100})}),t(b,{children:[t(i,{children:["Debounced input field: ",e]}),t(i,{children:["Debounced number field: ",l]}),t(i,{children:["Select field: ",o]}),t(i,{children:["Integer slider field: ",c]}),t(i,{children:["Slider field: ",m]}),t(i,{children:["Debounced multiline field: ",a(B,{text:s,delimiter:`
`})]}),t(i,{children:["Switch field: ",p.toString()]}),a(i,{children:"Disabled switch field: false"}),a(M,{onClick:()=>y(),children:"Reset all"})]})]})},"Basic"),U=f(()=>{const[e,r]=n.exports.useState(0),[l,x]=n.exports.useState(0),[o,u]=n.exports.useState(!1),[c,d]=n.exports.useState(!1);n.exports.useEffect(()=>{u(!1),e&&l&&e>l&&d(!0)},[e]),n.exports.useEffect(()=>{d(!1),e&&l&&e>l&&u(!0)},[l]);const m=Array(10).fill(0).reduce((s,S,p)=>({...s,[p+1]:(p+1).toString()}),{0:"Please select..."});return t(b,{w:320,children:[a(i,{children:"Please select a range"}),a(V,{fields:[{type:"select",label:"Min",value:e,options:m,disabledOptions:[0],onChange:s=>r(s),isInvalid:o},{type:"select",label:"Max",value:l,options:m,disabledOptions:[0],onChange:s=>x(s),isInvalid:c}]}),t(i,{children:["Your range: ",e&&l&&!o&&!c?`from ${e} to ${l}`:"invalid"]})]})},"TwoWayControlledSelects"),X=["Basic","TwoWayControlledSelects"];export{Q as Basic,U as TwoWayControlledSelects,X as __namedExportsOrder,K as default};
//# sourceMappingURL=rmg-fields.stories.88b34fe5.js.map
