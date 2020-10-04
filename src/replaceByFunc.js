import { dataAssigneeByType } from './helpers';

const replaceByFunc = (source, fn) => {
    const filter = (obj) => {
            const data = Array.isArray(obj) ? obj : Object.keys(obj);
            return data.reduce((accum, item, index) => {
                const value = obj[item] || item;
                if (typeof value === "object") {
                    const normalizedData = filter(value);
                    return dataAssigneeByType(accum, Array.isArray(obj) ? [normalizedData] : { [item]: normalizedData })
                } else {
                    if (Array.isArray(obj)) {
                        const itemData = fn(source, index, value, obj) || value;
                        return dataAssigneeByType(accum, [itemData]);
                    } else {
                        const itemData = fn(source, item, value, obj) || { [item]: value };
                        return dataAssigneeByType(accum, itemData);
                    }
                }
            }, Array.isArray(obj) ? [] : {});
    };

    return filter(source);
};

export default replaceByFunc;