import { RmgMultiLineString } from './rmg-multi-line-string';

export default {
    title: 'RmgMultiLineString',
    component: RmgMultiLineString,
};

export const Basic = () => {
    const text = 'First line\nSecond line\nThird line';
    return <RmgMultiLineString text={text} delimiter={'\n'} />;
};
