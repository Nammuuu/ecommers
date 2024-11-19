



"use client";

import React, { useEffect, useState } from 'react';
import styles from "../../../styles/InfoPages.module.css";
import Loader from "../../../components/Loader";


const Page = () => {

  const [isLoading, setIsLoading] = useState(true); // Initialize loading state to true

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Adjust the timeout as necessary

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className={styles.pageContainer}>
    {isLoading && <Loader />} 
    {!isLoading && (
      <>

        <h1> Cookies Policy</h1>
    
    

    <span>
    This Cookies Policy explains how Shop (“us”, “we” or “our”) collects, uses, stores, shares and uses cookies on its website. We provide information on how cookies and similar technologies work, their purpose, use, and duration, how We process and store them, and how you can control them. You can also find all the necessary information regarding your rights on the use of Cookies on this website and how you can exercise them.
    </span>
    
    
   <p> COOKIES AND SIMILAR TECHNOLOGIES </p>
    
    
    <span>
    Cookies are small files of data that are stored on a user’s device by the browser when visiting a website or application. Cookies are used for various reasons and can be very useful in many cases. They can be necessary for the proper functionality of the website and efficient page navigation, or they can be used to customize and enhance the user’s experience by remembering language preferences, login credentials, and many more. They can also be used to provide anonymous statistical data about the usage of the website or targeted advertisements to the visitor.
    </span>
    
    <span>
    Some sites might also use other similar technologies like web beacons, clear GIFs, page tags, and web bugs to understand how people are using them and to target advertising to them. They usually take the form of a small, transparent image that is embedded in a web page or email. They work with cookies and capture data like your IP address, when you viewed the page or email, what device you were using and where you were.
    </span>
    
    
    <p> TYPES OF COOKIES </p>
    
    
    <span>
    Cookies can be classified as First-party Cookies and Third-Party cookies.
    </span>
    
    <span>
    First-party Cookies refer to cookies that are set by a data controller (or any of its processors) operating the website visited by the user, as defined by the URL that is usually displayed in the browser address bar.
    </span>
    
    <span>
    Third-party Cookies are set by data controllers that do not operate the website currently visited by the user. For example, if a user visits a website and another entity sets a cookie on the user’s device, through that website, this would be a third-party cookie. For these types of cookies, we have no control over them.
    </span>
    
    
    
    
    <p>  COOKIES CATEGORIES </p>
    
    
    <span>
    Cookies are usually categorized into one of the following categories, depending on their purpose:
    </span>
    
    <span>
    Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies and for these cookies, consent is not required.
    </span>
    
    <span>
    Preference or Functionality cookies enable a website to remember information about the user’s choice in the past that changes the way the website behaves or looks, like the preferred language or the region.
    
    </span>
    
    <span>
    Statistics or Performance cookies help website owners to understand how visitors use and interact with their website by collecting and reporting information anonymously, such as which pages are visited most frequently, or which links are clicked on.
    </span>
    
    <span>
    Marketing cookies, also known as Advertising or Targeting cookies, are used to track visitors`&apos; online activity across websites. The intention is to display ads that are relevant and engaging for the individual user or limit the times an ad is displayed and thereby are more valuable for publishers and third-party advertisers.
    </span>
    
    
    
    
    
    
    <p>  HOW LONG DO COOKIES LAST? </p>
    
    
    <span>
    Depending on the duration that a cookie is stored on the user’s device, cookies can be classified as Session or Persistent.
    
    Session cookies are temporary cookies and are automatically deleted when the user closes his browser, while Persistent cookies are cookies that remain for a specific amount of time (their expiration date can vary from minutes to days or even years).
    </span>
    
    
    
    
    <p> HOW TO CONTROL COOKIES ON THIS WEBSITE </p>
    
    
    <span>
    FoodKing will only set cookies after you have provided your consent to the use of cookies through the cookies banner upon your visit to our website. For Necessary cookies, we do not need your consent.
    
    
    
    You have the right to withdraw your consent or change your preferences regarding the use of cookies at any time. You can do this by accessing our Cookies banner through the “Cookie Settings” button.
    </span>
    
    
    
    
    
    
    <p>  YOUR RIGHTS </p>
    
    <span>
    
    If you have a concern about the way we are collecting or using cookies, you should raise your concern with us in the first instance or directly to the office of the Commissioner for the Protection of Private Data.
    </span>
    

    </>
  )}
</div>
);
};

export default Page;    
