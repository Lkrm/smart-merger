This is a package consist of helpers for merging js objects.
Also, you can import redux helpers for merging data in reducers.

# Base functionality: 

- `mergeIn(source, destination, options?)` - deep merge "destination" in "source"

- `mergeByProp(prop, source, destination)` - deep merge "destination" in "source" by property

- `mergeByPath(path<Array>, source, destination)` - deep merge "destination" in "source" by path

- `replaceIn(source, destination, options?)` - set "destination" in "source" ( Same as object assignee )

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
// Reducer
import { mergeByPath } from 'smart-merger/redux';
function addUser(state, action){
if (typeof action.state === 'SET_USER') {
    return mergeByPath(['entities', 'users'], ({ payload: user }, state) => (user), state, action)
  }
  return state
}
```
```
import { mergeByPath } from 'smart-merger/redux';
// handlerActions by redux-actions
handleActions({
   SET_USER: mergeByPath(['entities', 'users'], ({ payload: user }, state) => (user))
}, initialState);
```