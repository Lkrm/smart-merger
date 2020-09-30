export const curry = function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}
export const path = curry(function (arrayPath, data) {
    let result = data;
    for (const prop of arrayPath) {
        if (!result.hasOwnProperty(prop)) return this.or;
        result = result[prop];
    }
    return result;
});

export const assocPath = curry((arrayPath, data, source) => {
    return {
        ...source,
        ...arrayPath.reverse().reduce((accum, prop, index) => {
            return { [prop]: index === 0 ? data : accum };
        }, {})
    }
});

export const prop = curry((prop, data) => data[prop]);

export const propOr = curry((or, prop, data) => data.hasOwnProperty(prop) ? data[prop] : or);

export const pathOr  = curry((or, arrayPath, data) => path.bind({ or })(arrayPath, data));
