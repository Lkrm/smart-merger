import deepmerge from 'deepmerge';

const mergeByProp = (prop, source, destination) => deepmerge(source, { [prop]: destination });

export default mergeByProp;