import { assocPath, pathOr } from './helpers';
import data from './data.json';

test('assocPath test', () => {
    expect(
        assocPath(
            ['entities', 'users'],
            { 2: data.users["2"] },
    { entities: { users: { 1: data.users["1"] } } }
        )
    ).toStrictEqual({ entities: { users: { 2: data.users["2"] } } });
});

test('pathOr test', () => {
    const user = { data: { name: { first_name: "Viktor", last_name: undefined } } };

    expect(
        pathOr(
            'Oleh',
            ['data', 'name', 'first_name'],
            user
        )
    ).toStrictEqual('Viktor');

    expect(
        pathOr(
            'Oleh',
            ['data', 'name', 'last_name'],
            user
        )
    ).toStrictEqual(undefined);

    expect(
        pathOr(
            'Oleh',
            ['data', 'name', 'sure_name'],
            user
        )
    ).toStrictEqual('Oleh');

});
