import React, {useState} from 'react';
import classes from "./Modal.module.css";

const Modal = ({visible, setVisible}) => {
    const [name, setName] = useState('')
    const rootClasses = [classes.modal]

    if(visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
                <div className={classes.title}>
                    <h3>Отзыв</h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         onClick={() => setVisible(false)}
                    >
                        <g clipPath="url(#clip0_507_609)">
                            <path d="M12 11.5561L17.7781 5.77807L18.7613 6.76129L12.9832 12.5394L18.7613 18.3174L17.7781
                             19.3006L12 13.5226L6.22193 19.3006L5.23871 18.3174L11.0168 12.5394L5.23871 6.76129L6.22193
                             5.77807L12 11.5561Z" fill="#8A8A8A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_507_609">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={classes.bodyName}>
                    <p>Как вас зовут?</p>
                    <input
                        type="text"
                        placeholder={'Имя Фамилия'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <button>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.12857 6.1286V3.05176e-05H8.17143V6.1286H14.3V8.17146H8.17143V14.3H6.12857V8.17146H0V6.1286H6.12857Z"
                                fill="white"/>
                        </svg>
                        &nbsp;
                        Загрузить фото
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;