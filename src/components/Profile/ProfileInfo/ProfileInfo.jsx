import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <div>
                Ava + description
            </div>
            <div>
                <img className={classes.contentLogo} src="https://uploads.turbologo.com/uploads/design/hq_preview_image/32884/draw_svg20200913-14821-1lkbppq.svg.png" alt="" />
            </div>
        </div>
    )
}

export default ProfileInfo;