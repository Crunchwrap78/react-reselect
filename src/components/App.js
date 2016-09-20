import React from 'react'
import PostContainer from '../containers/PostContainer'
import Selected from '../containers/SelectedContainer'

const App = () => {
  return (
    <div>
      <h4>Selected Posts</h4>
      <Selected />
      <hr />
      <h4>All Posts</h4>
      <PostContainer />
    </div>
  )
}

export default App
