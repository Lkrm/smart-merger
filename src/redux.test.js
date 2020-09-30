import { mergeIn, mergeByPath, mergeByProp, replaceIn, replaceByPath, replaceByProp } from './redux';
import data from './data.json';


test('Redux mergeIn test', () => {
    const store = { entities: { users: { 1: data.users["1"] , 2: data.users["2"]} }, other: true };
    const reducer = (fn) => fn({ payload: { 3: data.users["3"] } }, store);

    expect(
        reducer(mergeIn(({ payload }) => ({ entities: { users: { ...payload } } })))
    ).toStrictEqual( { entities: { users: { 1: data.users["1"] , 2: data.users["2"],  3: data.users["3"]} }, other: true });
});

test('Redux mergeByPath test', () => {
    const store = { entities: { users: { 1: data.users["1"] , 2: data.users["2"]} }, other: true };
    const reducer = (fn) => fn({ payload: { 3: data.users["3"] } }, store);

    expect(
        reducer(mergeByPath(['entities', 'users'], ({ payload } ) => ({ ...payload })))
    ).toStrictEqual( { entities: { users: { 1: data.users["1"] , 2: data.users["2"],  3: data.users["3"]} }, other: true });
});

test('Redux mergeByProp test', () => {
    const store = { entities: { users: { 1: data.users["1"] , 2: data.users["2"]} }, other: true };
    const reducer = (fn) => fn({ payload: { 3: data.users["3"] } }, store);

    expect(
        reducer(mergeByProp('entities', () => (null)))
    ).toStrictEqual( { entities: null, other: true });
});

test('Redux replaceIn test', () => {
    const store = { entities: { users: { 1: data.users["1"] , 2: data.users["2"]} }, other: true };
    const reducer = (fn) => fn({ payload: { 3: data.users["3"] } }, store);

    expect(
        reducer(replaceIn(({ payload }) => ({ entities: { users: { ...payload } } })))
    ).toStrictEqual( { entities: { users: { 3: data.users["3"] } }, other: true });
});

test('Redux replaceByPath test', () => {
    const store = { entities: { users: { 1: data.users["1"] , 2: data.users["2"]} }, other: true };
    const reducer = (fn) => fn({ payload: { 3: data.users["3"] } }, store);

    expect(
        reducer(replaceByPath(['entities', 'users'], ({ payload } ) => ({ ...payload })))
    ).toStrictEqual( { entities: { users: { 3: data.users["3"] } }, other: true });
});

test('Redux replaceByProp test', () => {
    const store = { entities: { users: { 1: data.users["1"] , 2: data.users["2"]} }, other: true };
    const reducer = (fn) => fn({ payload: { 3: data.users["3"] } }, store);

    expect(
        reducer(replaceByProp('entities', () => ('WAS RESETED')))
    ).toStrictEqual( { entities: 'WAS RESETED', other: true });
});