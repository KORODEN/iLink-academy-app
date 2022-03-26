import React from 'react';
import classes from "./Slider.module.css";
import ReviewsList from "../ReviewsList/ReviewsList";

const Slider = (props) => {
    return (
        <div className={classes.slider}>
            <div className={classes.reviews}>
                <div className={classes.reviewsHeader}>
                    <h2>Отзывы</h2>
                    <button onClick={() => props.setVisible(true)}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.12857 6.1286V3.05176e-05H8.17143V6.1286H14.3V8.17146H8.17143V14.3H6.12857V8.17146H0V6.1286H6.12857Z"
                                fill="white"/>
                        </svg>
                        &nbsp;
                        Добавить отзыв
                    </button>
                </div>
                <ReviewsList/>
                <div className={classes.reviewsButtons}>
                    <svg width="80" height="4" viewBox="0 0 80 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="2" x2="32" y2="2" stroke="#585CC6" strokeWidth="4"/>
                        <line opacity="0.3" x1="40" y1="2" x2="56" y2="2" stroke="#585CC6" strokeWidth="4"/>
                        <line opacity="0.3" x1="64" y1="2" x2="80" y2="2" stroke="#585CC6" strokeWidth="4"/>
                    </svg>
                </div>
            </div>
            <div className={classes.arrows}>
                <button className="left" disabled={true}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.25 12.2744L19.25 12.2744" stroke="#333333" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="#333333"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="right">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.75 11.7256L4.75 11.7256" stroke="#333333" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="#333333"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Slider;