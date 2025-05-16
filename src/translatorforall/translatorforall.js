
import React, { useState } from "react";
import './translatorforall.css';
import { AiFillLock, AiOutlineClose } from 'react-icons/ai';
// import { BsArrowDownShort } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';


const Translator = ({ top, toggleTop })=>{

    const [btnTxt, setBtnTxt] = useState(false);
    const swapBtnTxt = ()=>{
        setBtnTxt(btnTxt=> !btnTxt);
    };

    // const [top, setTop] = useState(false);

    // const hideTop =(){}

    return(<div>

        <article className="top_nav_barr_">
            <ul className="first_ul_">
                <li>
                    <img 
                        alt="Google Translator" 
                        src="data:image/png;base64,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" 
                    />
                </li>
                <li>
                    <AiFillLock />
                </li>
                <li>
                    Translated to:
                </li>
                <li className="transl_val_" style={{color:'#00C'}}>
                    English
                    <IoMdArrowDropdown 
                    style={{}}
                    />
                </li>
                <li>
                    <button onClick={swapBtnTxt} style={{
                        outline: '0',
                        cursor:'pointer'
                    }}>
                        
                        { !btnTxt ? "Show original" : <span style={{fontWeight: 'bold'}}>Translate</span> }

                    </button>
                </li>
            </ul>

            {/* AiOutlineClose */}

            <ul className="second_ul_">
                <li>
                <select name="options" style={{
                    background:'buttonface',
                    width:'6em',
                    outline:'none'
                }}>
                    <option value="Options">Options</option>
                    <option value="Turn off translation for this site">Turn off translation for this site</option>
                    <option value="Learn more">Learn more</option>
                </select>
                </li>
                <li>
                    <AiOutlineClose 
                        style={{
                            border:'1px solid #999',
                            padding:'1px',
                            fontSize:'14px'
                        }} 
                        onClick={toggleTop}
                    />
                </li>
            </ul>
        </article>

    </div>)
};

export default Translator;