import axios from 'axios'
import { FETCH_POST, SELECT_POST, DESELECT_POST } from './types'

const request = axios.get('http://jsonplaceholder.typicode.com/posts');

//with thunk
// export function fetchPost() {
//   return(dispatch) => {
//     request.then(({data}) => {
//       dispatch({type: FETCH_POST, payload: data})
//     })
//   }
// }

export function fetchPost() {
  const request = axios.get('http://jsonplaceholder.typicode.com/posts');
  return {
    type: FETCH_POST,
    payload: request
  }
}


export function selectPost(id) {
  return {
   type: SELECT_POST,
   payload: id
 }
}

export function deselectPost(id) {
  return {
    type: DESELECT_POST,
    payload: id
  }
}
