import mergeByProp from './mergeByProp';
import data from './data.json';

test('mergeByPropDefault test default', () => {
    expect(
        mergeByProp(
            'entities',
            { entities: { users: { 1: data.users["1"] } } },
            { users: { 2: data.users["2"] } }
        )
    ).toStrictEqual({ entities: { users: { 1: data.users["1"], 2: data.users["2"] } } });
});