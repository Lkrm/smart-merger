import mergeIn from './mergeIn';
import data from './data.json';

test('mergeIn test default', () => {
    expect(
        mergeIn(
            { entities: { users: { 1: data.users["1"] } } },
        { entities: { users: { 2: data.users["2"] } } }
        )
    ).toStrictEqual({ entities: { users: { 1: data.users["1"], 2: data.users["2"] } } });
});

test('mergeIn test with options', () => {
    expect(
        mergeIn(
            { result: [1,2,3,4,5] },
            { result: [3,4,5] },
    {
        arrayMerge: (source, des) => des
    }
        )
    ).toStrictEqual({ result: [3,4,5] });
});