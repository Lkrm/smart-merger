This is a package consist of helpers for merging js objects.
Also, you can import redux helpers for merging data in reducers.
Link to the source code <a href="https://github.com/Lkrm/smart-merger"> https://github.com/Lkrm/smart-merger </a>

# Base functionality: 

- `mergeIn(source, destination, options?)` - deep merge "destination" in "source"

- `mergeByProp(prop, source, destination, options?)` - deep merge "destination" in "source" by property

- `mergeByPath(path<Array>, source, destination, options?)` - deep merge "destination" in "source" by path

- `replaceIn(source, destination)` - set "destination" in "source" ( Same as object assignee )

- `replaceByProp(prop, source, destination)` - set "destination" in "source" by property

- `replaceByPath(path<Array>, source, destination)` - set "destination" in "source" by path

- `replaceByFunc(source, fn(source, key, value, currentEnitity))` - set data by function. This function will call for each item in a data.
You can check currentEntity type and change `value` and `key` for an object.

# Base functionality example ( set post by path ): 
```
 const postsData = { 
  data: {
   entities: { 
     posts: [post1, post2]
    }
  }
};
const newPostsData = mergeByPath(['data', 'entities', 'posts'], postsData, newPost)
// For now newPostsData consits newPost
```

# I am recommend you use these helpers with <a href="https://redux-actions.js.org/api/handleaction">redux-actions</a>, see examples below:
```
import { mergeByPath, replaceByFunc } from 'smart-merger/redux';
// handlerActions by redux-actions
handleActions({
   SET_USER: mergeByPath(['entities', 'users'], ({ payload: user }, state) => (user))
   SET_FRUITS: replaceByFunc(({ payload: { from, to }}) => (source, key, value, currentEntity) => {
      if (value === from) {
             if (Array.isArray(currentEntity)) {
                return to;
              }
             return { [key]: to };
         }
      } 
    )
}, initialState);



```

# Redux functionality example (append user to store by path): 
```
// Reducer
import { mergeByPath } from 'smart-merger/redux';
function addUser(state, action){
if (typeof action.state === 'SET_USER') {
    return mergeByPath(['entities', 'users'], ({ payload: user }, state) => (user), state, action)
  }
  return state
}
```

#Helpers for merging have options
- `customMerge?: (key: string, options?: Options) => ((x: any, y: any) => any) | undefined;`  - You can change behavior for merging a specific part of your data.

- `arrayMerge?(target: any[], source: any[], options?: Options): any[];` - Change behavior for merging arrays in your data.

- `isMergeableObject?(value: object): boolean;` - You may not want this, if your objects are of special types, and you want to copy the whole object instead of just copying its properties.
 
- `clone?: boolean;` - Defaults to true. If clone is false then child objects will be copied directly instead of being cloned. This was the default behavior
           
You can find more information about this options here <a href="https://github.com/TehShrike/deepmerge">deepmerge</a> .


#You can import next common helpers from the package:
- `curry(fn)` - make this fn as curried
- `path(path<Array>, data)` - get data by path
- `pathOr(or, path<Array>, data)` - get data by path or return `or` value if path is not exist
- `accosPath(arrayPath<Array>, data, source)` - set data by path to an object
- `prop(prop, data)` - get prop
- `propOr(or, prop, data)` - get prop or return `or` value
- `dataAssigneeByType(firstData, secondData)` - merging two arrays or two objects

> You can import it from `smart-merger/helpers`. All helpers were curried.