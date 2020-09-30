const replaceByProp = (prop, source, destination) => ({ ...source, [prop]: destination });

export default replaceByProp;