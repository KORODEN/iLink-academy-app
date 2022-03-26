import React from 'react';
import classes from "./Review.module.css";
import Profile from "../Profile/Profile";

const Review = (props) => {
    return (
        <div className={classes.review}>
            <div className={classes.reviewInfo}>
                <Profile person={props.review.person} type={'review'}/>
                <div className={classes.reviewDate}>
                    {props.review.commentDate}
                </div>
            </div>
            <div className={classes.reviewText}>
                {props.review.comment}
            </div>
        </div>
    );
};

export default Review;