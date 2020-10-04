import deepmerge from 'deepmerge';

const mergeByProp = (prop, source, destination, options) => deepmerge(source, { [prop]: destination }, options);

export default mergeByProp;