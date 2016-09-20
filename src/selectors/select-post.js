//Reselect selector
//Take a list of posts and posts Ids, and picks out the selected post

//Create select functions to pick off the pieces of state we care about for this calculation
import { createSelector } from 'reselect'
import _ from 'lodash'


const postSelector = state => state.posts
const selectedPostsSelector = state => state.selectPosts

const getPosts = (posts, selectPosts) => {
  const selectedPosts = _.filter(
    posts,
    post => _.includes(selectPosts, post.id)
  )
  return selectedPosts
}


export default createSelector(
  postSelector, //picks off a piece of state from the posts state
  selectedPostsSelector, // pick a piece of state from the selected Posts
  getPosts // last argument is the function that has our selected knowledge
)
