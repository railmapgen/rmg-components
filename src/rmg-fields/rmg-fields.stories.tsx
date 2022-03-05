import { RmgFields, RmgFieldsField } from './rmg-fields';

export default {
    title: 'RmgFields',
};

export const Basic = () => {
    const fields: RmgFieldsField[] = [
        {
            type: 'input',
            label: 'Example input',
            placeholder: 'Enter text',
            value: '',
        },
    ];

    return <RmgFields fields={fields} />;
};
