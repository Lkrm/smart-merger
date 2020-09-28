export const path  = function (arrayPath, data) {
    let result = data;
    for (const prop of arrayPath) {
        if (!result.hasOwnProperty(prop)) return this.or;
        result = result[prop];
    }
    return result;
}

export const assocPath = function (arrayPath, data, source) {
    return {
        ...source,
        ...arrayPath.reverse().reduce((accum, prop, index) => {
            return { [prop]: index === 0 ? data : accum };
        }, {})
    }
}

export const prop = (prop, data) => data[prop];

export const propOr = (or, prop, data) => data.hasOwnProperty(prop) ? data[prop] : or;

export const pathOr  = (or, arrayPath, data) => path.bind({ or })(arrayPath, data);