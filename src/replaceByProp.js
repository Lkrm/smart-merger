const replaceByProp = (prop, source, destination) => ({ ...source, [prop]: { ...source[prop], ...destination} });

export default replaceByProp;