import mergeByPath from './mergeByPath';
import data from './data.json';

test('mergeByPath test default', () => {
    expect(
        mergeByPath(
            ['entities', 'users'],
            { entities: { users: { 1: data.users["1"] } } },
            { 2: data.users["2"] }
        )
    ).toStrictEqual({ entities: { users: { 1: data.users["1"], 2: data.users["2"] } } });
});
