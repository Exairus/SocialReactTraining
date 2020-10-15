import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friendsElements = props.state.friendsData.map(friend => <Friend name={friend.name} />);
    return (
        <div>
            <div className={classes.title}>Friends</div>
            <div className={classes.friends}>
            
                {
                friendsElements
                }
            </div>
        </div>  
    );
}

export default Friends;