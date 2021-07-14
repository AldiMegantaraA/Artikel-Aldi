import {animateScroll as scroll} from 'react-scroll';
import {FaArrowCircleUp} from 'react-icons/fa'
import styles from '../styles/Layout.module.css'
import React, { useState, useEffect } from 'react'

function ScrolltoTop() {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    const [ScrolltoTop, setScroll] = useState(false)

    useEffect(function mount() {
        function changeBackgroundColor() {
        if(window.scrollY >= 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
        }

        window.addEventListener("scroll", changeBackgroundColor);

        return function unMount() {
        window.removeEventListener("scroll", changeBackgroundColor);
        };
    });


    return(
        <>
            <div className={ScrolltoTop ? `${styles.scrollActive}` : `${styles.scroll}`}>
                <FaArrowCircleUp onClick={toggleHome} className={styles.ScrolltoTop}/>
            </div>
        </>
    )
}

export default ScrolltoTop