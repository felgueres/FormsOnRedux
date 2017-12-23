import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL='http://reduxblog.herokuapp.com/api';
const API_KEY ='?key=PAPERCLIP1234';

export function fetchPosts(){
  // Make the request with axios
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  // After the request, make sure you add it to the payload of the action you are returning.
  return{
    type: FETCH_POSTS,
    payload: request
  };
}
