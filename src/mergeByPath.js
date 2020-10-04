import deepmerge from 'deepmerge';
import { assocPath } from './helpers';

const mergeByPath = (path, source, destination, options) => deepmerge(source, assocPath(path, destination,{} ), options );

export default mergeByPath;