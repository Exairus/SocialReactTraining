import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

  return (
    <div>
      <img className={classes.contentBg} src="https://html5css.ru/css/img_lights.jpg" alt="" />
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  );
}

export default Profile;