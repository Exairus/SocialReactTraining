import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likes} /> )
  
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;

    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div>
      My posts
      <div>
        <div>
          <textarea ref={ newPostElement } onChange={ onPostChange } value={ props.newPostText }></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
        <div className="Posts">
          {
            postsElements
          }
        </div>
    </div>
  );
}

export default MyPosts;