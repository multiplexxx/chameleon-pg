
import React, { useEffect, useState } from "react";
import styles from './Preloader.module.css';

const Preloader = ()=>{

    const [connecting, setConnecting] = useState(false);
    const [wait, setWait] = useState(false);

    useEffect(()=>{
        setWait(true);
        setConnecting(false);
        setTimeout(() => {
            setWait(false);
            setConnecting(true);
        }, 1200);
    }, []);


    return(<div className={styles.SpinningPreloader_comp}>

        <div className={styles.Loading}>
            <div className={styles.circle}></div>
        </div>


        { wait ? <p className={styles.text_loader_pejdrt76tfghj}>Please wait...</p> : undefined }

        { connecting ? <p className={styles.text_loader_pejdrt76tfghj}>Connecting User Device...</p> : undefined }

    </div>)
};

export default Preloader;