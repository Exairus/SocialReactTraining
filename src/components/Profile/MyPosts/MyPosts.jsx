import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likes} /> )

  return (
    <div>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
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