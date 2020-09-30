import mergeInN from './mergeIn';
import mergeByPathN from './mergeByPath';
import mergeByPropN from './mergeByProp';
import replaceInN from './replaceIn';
import replaceByPropN from './replaceByProp';
import replaceByPathN from './replaceByPath';

export const mergeIn = (fn, options) => (payload, state) => mergeInN(state, fn(payload), options);
export const mergeByPath = (path, fn, options) => (payload, state) => mergeByPathN(path, state, fn(payload));
export const mergeByProp = (prop, fn, options) => (payload, state) => mergeByPropN(prop, state, fn(payload));
export const replaceIn = (fn, options) => (payload, state) => replaceInN(state, fn(payload), options);
export const replaceByProp = (prop, fn) => (payload, state) => replaceByPropN(prop, state, fn(payload));
export const replaceByPath = (path, fn) => (payload, state) => replaceByPathN(path, state, fn(payload));
