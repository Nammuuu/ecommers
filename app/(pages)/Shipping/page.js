



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

        <h1> Shipping</h1>


  
    <span>
    During checkout, well provide an estimated delivery date based on the delivery service and delivery address. We offer the following delivery options:
    </span>
    
    
    <p>   Standard Delivery (2-4 business days) </p>   
    <span>
    £4.50 for guest orders, free for orders more than £99
    </span>
    
    
    
    <p>  Customized Products </p>   
    <span>
    Customized shirts (2-5 business days)
    shop By You shoes (2-5 weeks)
    </span>
    
    
    
    <p>   Additional Information </p>   
    <span>
    Gift cards are sent via standard delivery.
    Please note, that standard delivery may take longer for remote locations.
    shop does not deliver to all areas. The following postcodes are ineligible for delivery: Falkland Islands (FIQQ 1ZZ), Channel Islands (GY1-GY9, JE1-JE 4), and Gibraltar (GX11 1AA).
    </span>
    
    
    
 <p>Store Pick-up </p>   
    <span>
    Free for all eligible orders. Just tap or click PICK UP during checkout to see if the items in your bag are eligible for pick-up at a shop store near you.
    </span>
    
    </>
  )}
</div>
);
};

export default Page;