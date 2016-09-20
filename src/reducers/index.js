import { combineReducers } from 'redux'
import posts from './posts'
import selectPosts from './select'
const rootReducer = combineReducers({
  posts,
  selectPosts
})

export default rootReducer
