

// "use client"; 
// import React, { useState } from "react";
// import Link from "next/link";
// import {
//   FaBars,
//   FaTimes,
//   FaTachometerAlt,
//   FaBoxOpen,
//   FaShoppingCart,
//   FaChartLine,
//   FaCog,
// } from "react-icons/fa";
// import styles from "../../../styles/admin/Adminsidebar.module.css"; 

// const Sidebar = ({ isOpen, toggleSidebar }) => {

//   return (
//     <div className={`${styles.sidebarContainer} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
//       <div className={styles.header}>
//         <h1 className={`${styles.title} ${!isOpen && styles.hidden}`}>
//           Admin
//         </h1> 
//         <button onClick={toggleSidebar} className={styles.toggleButton}>
//           {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//         </button>
//       </div>
//       <nav className={styles.nav}>
//         <Link href="/admin/dashboard" className={styles.navItem}>
//           <FaTachometerAlt size={20} />
//           <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
//             Dashboard
//           </span>
//         </Link>
//         <Link href="/admin/product" className={styles.navItem}>
//           <FaBoxOpen size={20} />
//           <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
//             Products
//           </span>
//         </Link>
//         <Link href="/admin/orders" className={styles.navItem}>
//           <FaShoppingCart size={20} />
//           <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
//             Orders
//           </span>
//         </Link>
//         <Link href="/admin/categories" className={styles.navItem}>
//           <FaChartLine size={20} />
//           <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
//             Categories
//           </span>
//         </Link>
//         <Link href="/admin/settings" className={styles.navItem}>
//           <FaCog size={20} />
//           <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
//             Settings
//           </span>
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


"use client"; 
import React from "react";
import { FaBars, FaTimes, FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaChartLine, FaCog } from "react-icons/fa";
import styles from "../../../styles/admin/Adminsidebar.module.css"; 

const Sidebar = ({ isOpen, toggleSidebar, setCurrentSection }) => {
  return (
    <div className={`${styles.sidebarContainer} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
      <div className={styles.header}>
        <h1 className={`${styles.title} ${!isOpen && styles.hidden}`}>
          Admin
        </h1> 
        <button onClick={toggleSidebar} className={styles.toggleButton}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <nav className={styles.nav}>
        <div onClick={() => setCurrentSection('Dashboard')} className={styles.navItem}>
          <FaTachometerAlt size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Dashboard
          </span>
        </div>
        <div onClick={() => setCurrentSection('Products')} className={styles.navItem}>
          <FaBoxOpen size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Products
          </span>
        </div>
        <div onClick={() => setCurrentSection('Orders')} className={styles.navItem}>
          <FaShoppingCart size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Orders
          </span>
        </div>
        <div onClick={() => setCurrentSection('Categories')} className={styles.navItem}>
          <FaChartLine size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Categories
          </span>
        </div>

        <div onClick={() => setCurrentSection('Settings')} className={styles.navItem}>
          <FaCog size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Settings
          </span>
        </div>

        <div onClick={() => setCurrentSection('Users')} className={styles.navItem}>
          <FaCog size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Users
          </span>
        </div>

        <div onClick={() => setCurrentSection('Blog')} className={styles.navItem}>
          <FaCog size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            blog
          </span>
        </div>

       

      <div onClick={() => setCurrentSection('Chat')} className={styles.navItem}>
      <FaCog size={20} />
      <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
     Chats
      </span>
    </div>


    <div onClick={() => setCurrentSection('Components')} className={styles.navItem}>
    <FaCog size={20} />
    <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
    Notifications
    </span>
  </div>

  <div onClick={() => setCurrentSection('Reviews')} className={styles.navItem}>
    <FaCog size={20} />
    <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
    Reviews
    </span>
  </div>


    <div onClick={() => setCurrentSection('Page')} className={styles.navItem}>
      <FaCog size={20} />
      <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
     Page Settings 
      </span>
    </div>



    


      </nav>
    </div>
  );
};

export default Sidebar;


