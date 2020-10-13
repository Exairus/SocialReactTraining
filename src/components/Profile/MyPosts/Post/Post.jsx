import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://w7.pngwing.com/pngs/980/712/png-transparent-computer-icons-user-avatar-avatar-heroes-silhouette-50x50.png" alt="" />
      {props.message}
      <div>
        <span>{props.likesCount} likes</span>
      </div>

    </div>
  );
}

export default Post;