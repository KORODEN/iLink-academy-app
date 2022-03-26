import React from 'react';
import classes from "./Main.module.css";
import backImage from "../../assets/images/backImg.png";
import InfoBlock from "../InfoBlock/InfoBlock";
import Slider from "../Slider/Slider";

const Main = (props) => {
    return (
        <main style={{backgroundImage: `url(${backImage})`}}>
            <div className={classes.helloText}>
                <h1>Добро пожаловать в академию!</h1>
            </div>

            <InfoBlock/>

            <Slider setVisible={props.setVisible}/>
        </main>
    );
};

export default Main;