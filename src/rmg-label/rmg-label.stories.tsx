import { RmgLabel } from './rmg-label';
import { RmgDebouncedInput } from '../rmg-debounced-input';

export default {
    title: 'RmgLabel',
    component: RmgLabel,
};

export const Basic = () => {
    return (
        <RmgLabel label="Basic input">
            <RmgDebouncedInput />
        </RmgLabel>
    );
};
