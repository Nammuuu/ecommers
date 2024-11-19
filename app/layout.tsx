

"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import React, { ReactNode } from 'react';
import { AuthProvider } from '../components/context/AuthContext';
import Navbar from '../components/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google';
import ToastProvider from '../components/ToastProvider';
import Script from 'next/script';
import Footer from "../components/Footer"

const inter = Inter({ subsets: ['latin'] });

type RootLayoutProps = {
  children: ReactNode;
};


export default function RootLayout({ children }: RootLayoutProps) {

  const [formData, setFormData] = useState({
   
    themeColor: "#ffffff", 
    shopName: "",
    website: "",
    font: "Poppins", 
  });
  
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get("/api/admin/setting");
        if (res?.data) {
          setFormData(res.data);  // Ensure you update the formData with the correct settings
        
         
        }
      } catch (error) {
        console.error("Failed to load settings:", error);
      }
    };
  
    fetchSettings();
  }, []);

  return (
    <html lang="en">

<head>
      <title>{formData?.shopName}</title> 
        <meta name="description" content={formData?.shopName} />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
       
      </head>

     

      <body 
      className={inter.className}>
        <AuthProvider>
          <Navbar />
          <ToastProvider />
          <ToastContainer />
          {children}
          {/* <Footer /> */}
        </AuthProvider>
      </body>

      <Script
          src="https://www.paypal.com/sdk/js?client-id=AbpKOZ6IipVjef9TSUHMmAs4hBaRt4LFNr69dcJRSsFnK_EOlY-uCY3a3yQvuVvYajTm6Dd9hCyDKi4k"
          strategy="lazyOnload" 
        />
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />

    </html>
  );
}

