import deepmerge from 'deepmerge';
import { assocPath } from './helpers';

const mergeByPath = (path, source, destination) => deepmerge(source, assocPath(path, destination,{} ));

export default mergeByPath;