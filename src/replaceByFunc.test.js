import replaceByFunc from './replaceByFunc';

test('replaceIn test default', () => {
    expect(
        replaceByFunc(
            { entities: { users: { 1: 'Apple', 2: 'Pear',  } }, result: [{ name: 'Apple'}, 'Apple'], other: true },
            (source, key, value, currentEntity) => {
                if (Array.isArray(currentEntity)) {
                    if (value === 'Apple') {
                        return 'Banana';
                    }
                } else {
                    if (value === 'Apple') {
                        return {
                            [key]: 'Peach',
                        }
                    }
                }
            }
        )
    ).toStrictEqual({ entities: { users: { 1: 'Peach', 2: 'Pear' } }, result: [{ name: 'Peach'}, 'Banana'], other: true });
});