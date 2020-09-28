import { assocPath } from './helpers';

const replaceByPath = (path, source, destination) => assocPath(path, destination, source);

export default replaceByPath;