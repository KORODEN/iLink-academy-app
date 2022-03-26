import React from 'react';
import classes from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div
                className={classes.profileImg}
                style={
                    {
                        backgroundImage: `url(${ props.person.imageUrl 
                            ? props.person.imageUrl 
                            : '/profilesImages/avatar.png'})`
                    }
                }
            />
            <div className={props.type !== 'review' ? classes.profileInfo : classes.profileReviewInfo}>
                {props.person.name} {props.person.lastName}
            </div>
        </div>
    );
};

export default Profile;