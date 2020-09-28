import merge from "./merge";
import data from './data.json';

test('merge test default', () => {
    expect(
        merge(
            { entities: { users: { 1: data.users["1"] } } },
        { entities: { users: { 2: data.users["2"] } } }
        )
    ).toStrictEqual({ entities: { users: { 1: data.users["1"], 2: data.users["2"] } } });
});

test('merge test with options', () => {
    expect(
        merge(
            { result: [1,2,3,4,5] },
            { result: [3,4,5] },
    {
        arrayMerge: (des, source) => source
    }
        )
    ).toStrictEqual({result: [3,4,5]});
});