


// import React from 'react'

// // import styles from "../../../styles/InfoPages.module.css";

// import styles from "../../../styles/pages/ContactPages.module.css";
// import {
//   FaBars,
//   FaTimes,
//   FaTachometerAlt,
//   FaBoxOpen,
//   FaShoppingCart,
//   FaChartLine,
//   FaCog,
// } from "react-icons/fa";

// const page = () => {
//   return (
//     <div className={styles.contactpageContainer}>
//       <h1> Contact Us </h1>

//       <p >
//         Questions, Concerns, Comments? You talk, we listen.
//       </p>

//       <span>
//         If you have any additional questions or comments, we would love to hear from you!
//       </span>

//       <p>
//         Submit your query using any of the methods below.
//       </p>

//       <div className={styles.ContcatpageContainerp}>
//         <p>  Email:  <span> amityadavqg@gmail.com </span> </p>

//         <p> Toll-free number: </p>
//         <span> +91 8770783084, 7 days a week </span>
//       </div>




//       <div className={styles.ContcatpageContainer}>
//         <div>
//           <p>
//             indore 1
//           </p>

//           <span >
//             House :31, Road: 9,
//             <br />
//             Block: A, inodre 1
//             <br />
//             inodre,mhow,1216
//             <br />
//             +91 8770783084
//           </span>
//         </div>

//         <div>
//           <p> indore 27 </p>
//           <span>


//             House :20, Road: 19, Block: B, inodre 32
//             <br />
//             indore,mhow,1209
//             <br />
//             +91 8770783084
//           </span>
//         </div>

//       </div>

//       <p>
//         Support
//       </p>
//       <span>
//         info@inilabs.net
//         <br />
//         +88013333846282 </span>



//     </div>
//   )
// }

// export default page





"use client";

import React, { useEffect, useState } from 'react';
import styles from "../../../styles/pages/ContactPages.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Loader from "../../../components/Loader";


const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state to true

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Adjust the timeout as necessary

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);


  return (
    <div className={styles.contactpageContainer}>
    {isLoading && <Loader />} 

    {!isLoading && (
      <>

      <h1>Contact Us</h1>
      <p>Questions, Concerns, Comments? You talk, we listen.</p>
      <span>If you have any additional questions or comments, we would love to hear from you!</span>
      <p>Submit your query using any of the methods below.</p>

      <div className={styles.ContcatpageContainerp}>
        <p><FaEnvelope /> Email: <span>amityadavqg@gmail.com</span></p>
        <p><FaPhoneAlt /> Toll-free number: <span>+91 8770783084, 7 days a week</span></p>
      </div>

      <div className={styles.ContcatpageContainer}>
        <div>
          <p><FaMapMarkerAlt /> Indore 1</p>
          <span>
            House: 31, Road: 9, Block: A<br />
            Indore, Mhow, 1216<br />
            +91 8770783084
          </span>
        </div>

        <div>
          <p><FaMapMarkerAlt /> Indore 27</p>
          <span>
            House: 20, Road: 19, Block: B<br />
            Indore, Mhow, 1209<br />
            +91 8770783084
          </span>
        </div>
      </div>

      <p>Support</p>
      <span>
        amityadavqg@gmail.com<br />
        +91 8770783084
      </span>
      </>
    )}
  </div>
);
};

export default ContactPage;
