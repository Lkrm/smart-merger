import replaceByPath from './replaceByPath';
import data from './data.json';

test('replaceIn test default', () => {
    expect(
        replaceByPath(
            ['entities', 'users'],
            { entities: { users: { 1: data.users["1"] } }, other: true },
            { 3: data.users["3"] }
        )
    ).toStrictEqual({ entities: { users: { 3: data.users["3"] } }, other: true });
});