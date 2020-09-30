import {assocPath, curry, pathOr} from "./helpers";
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

test('curry test', () => {
    const user = { data: { name: { first_name: "Viktor", last_name: undefined } } };
    const getNameFromUser = pathOr('Unknown user', ['data', 'name', 'first_name']);

    expect(
        getNameFromUser(user)
    ).toBe('Viktor');

    const greaterByAge = curry((minAge, age) => minAge <= age ? 'You are welcome!' : 'Go away');
    const greaterAdultPeople = greaterByAge(18);

    expect(
        greaterAdultPeople(22)
    ).toBe('You are welcome!');

});