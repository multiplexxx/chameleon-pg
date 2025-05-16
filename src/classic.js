

import React, { Fragment, useState, useEffect } from "react";
import App from "./App";
import { createPortal } from "react-dom";
import Preloader from "./Preloader/Preloader";

export const Classic = ()=>{

    const [d, setD] = useState(false);

    useEffect(()=>{
        setD(true)
        setTimeout(() => {
            setD(false);
        }, 500);
    }, []);

    const swap = createPortal(<> <App /> </>, document.querySelector('.oiHGFDRTYuoiuytyUIOUytrdtyuiojhg'));


    return(<Fragment>
                <main>
            {
                d ?
                    <Preloader />
                :
                    swap
            }
        </main>
    </Fragment>)
};