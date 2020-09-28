import replaceByProp from './replaceByProp';
import data from './data.json';

test('replaceIn test default', () => {
    expect(
        replaceByProp(
            'entities',
            { entities: { users: { 1: data.users["1"] } }, other: true },
            { users: { 3: data.users["3"] } }
        )
    ).toStrictEqual({ entities: { users: { 3: data.users["3"] } }, other: true });
});