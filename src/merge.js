import deepmerge from 'deepmerge';

const merge = (source, destination, options) => deepmerge(source, destination, options);

export default merge;