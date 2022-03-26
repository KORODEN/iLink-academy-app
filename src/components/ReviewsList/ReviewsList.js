import React, {useContext} from 'react';
import classes from "./ReviewsList.module.css";
import Review from "../Review/Review";
import {ReviewsInfo} from "../../context/ReviewsInfo";

const ReviewsList = () => {
    const {reviews} = useContext(ReviewsInfo)
    return (
        <div className={classes.reviewsList}>
            <Review review={reviews[0]}/>
            <Review review={reviews[1]}/>
        </div>
    );
};

export default ReviewsList;