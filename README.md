This is a package consist of helpers for merging js objects.
Also, you can import redux helpers for merging data in reducers.

# Base functionality: 

- `mergeIn(source, destination, options?)` - deep merge "destination" in "source"

- `mergeByProp(prop, source, destination, options?)` - deep merge "destination" in "source" by property

- `mergeByPath(path<Array>, source, destination, options?)` - deep merge "destination" in "source" by path

- `replaceIn(source, destination)` - set "destination" in "source" ( Same as object assignee )

- `replaceByProp(prop, source, destination)` - set "destination" in "source" by property

- `replaceByPath(path<Array>, source, destination)` - set "destination" in "source" by path

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
# Redux functionality example (append user to store by path): 
```
import { mergeByPath } from 'smart-merger/redux';
// handlerActions by redux-actions
handleActions({
   SET_USER: mergeByPath(['entities', 'users'], ({ payload: user }, state) => (user))
}, initialState);
```

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