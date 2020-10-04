import mergeByPath from './mergeByPath';
import data from './data.json';
import mergeIn from "./mergeIn";

test('mergeByPath test default', () => {
    expect(
        mergeByPath(
            ['entities', 'users'],
            { entities: { users: { 1: data.users["1"] } } },
            { 2: data.users["2"] }
        )
    ).toStrictEqual({ entities: { users: { 1: data.users["1"], 2: data.users["2"] } } });
});

test('mergeByPath test default', () => {
    expect(
        mergeIn(
            { result: data.usersList },
            { result: data.usersList2 },
            {
                arrayMerge: (source) => source
            }
        )
    ).toStrictEqual({result: data.usersList});
});