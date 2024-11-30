import RmgAutoComplete from './rmg-auto-complete';
import { useState } from 'react';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';

export default {
    title: 'RmgAutoComplete',
    component: RmgAutoComplete,
};

export const Basic = () => {
    const data = [
        { id: 'gz', flag: '🇨🇳', name: { en: 'Guangzhou', zh: '廣州' } },
        { id: 'hk', flag: '🇭🇰', name: { en: 'Hong Kong', zh: '香港' } },
        { id: 'london', flag: '🇬🇧', name: { en: 'London', zh: '倫敦' } },
    ].map(item => ({ ...item, value: item.name.en }));

    const [selectedItem, setSelectedItem] = useState(data[2]);

    return (
        <VStack>
            <HStack>
                <RmgAutoComplete
                    data={data}
                    displayHandler={item => `${item.flag} ${item.name.en}`}
                    filter={(query, item) =>
                        item.id.toLowerCase().includes(query.toLowerCase()) ||
                        Object.values(item.name).some(name => name.toLowerCase().includes(query.toLowerCase()))
                    }
                    value={selectedItem.value}
                    onChange={setSelectedItem}
                />
                <Button onClick={() => setSelectedItem(data[0])}>set</Button>
            </HStack>
            <Text>{JSON.stringify(selectedItem)}</Text>
        </VStack>
    );
};
