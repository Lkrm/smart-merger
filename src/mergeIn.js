import deepmerge from 'deepmerge';

const mergeIn = (source, destination, options) => deepmerge(source, destination, options);

export default mergeIn;