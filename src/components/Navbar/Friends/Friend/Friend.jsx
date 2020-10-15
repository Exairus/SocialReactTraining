import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <div className={classes.imgWrapper}>
                <img src="https://w7.pngwing.com/pngs/980/712/png-transparent-computer-icons-user-avatar-avatar-heroes-silhouette-50x50.png" alt="" />
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
        </div>
    );
}

export default Friend;