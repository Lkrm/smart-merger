import mergeByProp from './mergeByProp';
import data from './data.json';

test('mergeByProp test default', () => {
    expect(
        mergeByProp(
            'entities',
            { entities: { users: { 1: data.users["1"] } } },
            { users: { 2: data.users["2"] } }
        )
    ).toStrictEqual({ entities: { users: { 1: data.users["1"], 2: data.users["2"] } } });
});

test('mergeByProp test options', () => {
    expect(
        mergeByProp(
            'result',
            { result: [1,2,3,4,5] },
            [3,4,5],
            {
                arrayMerge: (source, des) => des
            }
        )
    ).toStrictEqual({ result: [3,4,5] });
});