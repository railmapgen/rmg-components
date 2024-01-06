import RmgAutoComplete from './rmg-auto-complete';
import { useState } from 'react';

export default {
    title: 'RmgAutoComplete',
    component: RmgAutoComplete,
};

export const Basic = () => {
    const data = [
        { id: 'gz', flag: '🇨🇳', name: { en: 'Guangzhou', zh: '廣州' } },
        { id: 'hk', flag: '🇭🇰', name: { en: 'Hong Kong', zh: '香港' } },
        { id: 'london', flag: '🇬🇧', name: { en: 'London', zh: '倫敦' } },
    ];

    const [value, setValue] = useState(data[2]);

    return (
        <RmgAutoComplete
            data={data}
            displayValue={item => `${item.flag} ${item.name.en}`}
            filter={(query, item) =>
                item.id.toLowerCase().includes(query.toLowerCase()) ||
                Object.values(item.name).some(name => name.toLowerCase().includes(query.toLowerCase()))
            }
            value={value}
            onChange={item => {
                setValue(item);
                alert(JSON.stringify(item));
            }}
        />
    );
};
