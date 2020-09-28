import replaceIn from './replaceIn';
import data from './data.json';

test('replaceIn test default', () => {
    expect(
        replaceIn(
            { entities: { users: { 1: data.users["1"] } }, other: true },
        { entities: { users: { 2: data.users["2"] } } }
        )
    ).toStrictEqual({ entities: { users: { 2: data.users["2"] } }, other: true });
});