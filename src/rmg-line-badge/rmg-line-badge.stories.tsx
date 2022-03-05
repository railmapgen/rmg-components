import { RmgLineBadge } from './rmg-line-badge';
import { MonoColour } from '../util/constants';

export default {
    title: 'RmgLineBadge',
};

export const Basic = () => {
    return <RmgLineBadge name="1号线" fg={MonoColour.black} bg="#F3D03E" />;
};
