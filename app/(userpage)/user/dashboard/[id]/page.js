// new tast 
"use client";

import React, { useEffect, useState, useContext } from "react";
import { useRouter, useParams } from 'next/navigation';
import { FaChevronLeft, FaChevronRight, FaUser,  FaClipboardList, FaHeart, FaSignOutAlt, FaAddressCard, FaShoppingCart, FaHome, FaBell, FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../../../components/context/AuthContext";
import WishlistPage from "../../../../../components/product/wishlist";
import Profile from "../../../me/profile/page";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from "../../../../../styles/user/dashboard/Dashboard.module.css";
import { FiChevronDown } from "react-icons/fi";
import Cart from "../../../cart/page";
import Image from 'next/image';
import MyOrdersPage from "../../../me/myorder/page";
import Link from "next/link";

 
gsap.registerPlugin(ScrollTrigger);

// const UserDashboard = ({order }) => {
  const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const [activeSection, setActiveSection] = useState("profile");
  const { user } = useContext(AuthContext);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [reviews, setReviews] = useState([]);
  const router = useRouter();
  const { id } = useParams();
 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return;
        }
        const response = await fetch(`/api/user/dashboard/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          router.push("/login");
          return;
        }

        const data = await response.json();
        setUserData(data.user);
        setReviews(data.user?.reviews || []);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user, router, id]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Successfully logged out!", {
      position: toast.POSITION.TOP_RIGHT
    });
    router.push("/login");
  };

  // useEffect(() => {
  //   gsap.utils.toArray(".sidebarItem").forEach((element) => {
  //     gsap.fromTo(element, { opacity: 0, x: -100 }, {
  //       opacity: 1, x: 0, duration: 1, ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "top 80%",
  //         scrub: true,
  //       },
  //     });
  //   }); 
  // }, []);


  useEffect(() => {
    gsap.from(".mainContentt", {
      duration: 1.5,
      opacity: 0,
      y: 20,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(".mainContentt", {
          opacity: 1,
          y: 0,
        });
      },
    });
  }, [activeSection]);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);


  return (
    <div className={styles.container}>
    
      

      {/* Sidebar */}
      <div className={styles.dashboard}>


      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
    
      
                {!isSidebarOpen && (
                    <button className={styles.toggleSidebarBtn} onClick={toggleSidebar}>
                        <FaChevronRight /> {/* Open button */}
                    </button>
                )}
           

      <button className={styles.toggleSidebarBtn} onClick={toggleSidebar}>
          {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>


      <ul>
          <li className="sidebarItem" onClick={() => { setActiveSection("home"); toggleSidebar(); }}>
          <Link  className={styles.link} href='/'>  <FaHome /> <span>Home</span> </Link>
          </li>
          <li className="sidebarItem" onClick={() => { setActiveSection("profile"); toggleSidebar(); }}>
              <FaUser /> <span>Profile</span>
          </li>
          <li className="sidebarItem" onClick={() => { setActiveSection("orders"); toggleSidebar(); }}>
              <FaClipboardList /> <span>Orders</span>
          </li>

          <li className="sidebarItem" onClick={() => { setActiveSection("penddingorders"); toggleSidebar(); }}>
          <FaClipboardList /> <span>Pandding orders</span>
      </li>

          <li className="sidebarItem" onClick={() => { setActiveSection("Wishlist"); toggleSidebar(); }}>
              <FaHeart /> <span>Wishlist</span> 
          </li>
          <li className="sidebarItem" onClick={() => { setActiveSection("Addresses"); toggleSidebar(); }}>
              <FaAddressCard /> <span>Address</span>
          </li>
          <li className="sidebarItem" onClick={() => { setActiveSection("Reviews"); toggleSidebar(); }}>
              <FaClipboardList /> <span>My Reviews</span>
          </li>
          <li className="sidebarItem" onClick={() => { setActiveSection("cart"); toggleSidebar(); }}>
              <FaShoppingCart /> <span>Cart</span>
          </li>


          <li className="sidebarItem" onClick={() => { handleLogout(); toggleSidebar(); }}>
              <FaSignOutAlt /> <span>Logout</span>
          </li>
      </ul>
  </div>
  

        {/* Main Content */}
        <div  className={`${styles.mainContent} mainContentt`}>

        <div className={styles.topBar}>

        <button className={styles.toggleSidebarBtn} onClick={toggleSidebar}>
                            {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
            
        

      <div className={styles.searchBar}>
      <input type="text" placeholder="Search..." className={styles.searchInput} />
      <button className={styles.searchBtn}>
          <FaSearch />
      </button>
  </div>



        <div className={styles.iconsContainer}>
          <FaBell className={styles.notificationIcon} />
          <div className={styles.userProfile}>
          <Image
        src={userData?.profilePicture || "/default-profile.png"}
        alt="Profile"
        className={styles.topprofilepic}
        width={500}
        height={500}
      />
       
            <FiChevronDown className={styles.chevronIcon} />
            <div className={styles.dropdownMenu}>
              <p>{userData?.email}</p>
              <button onClick={() => setActiveSection("profile")}>My Profile</button>
              <button onClick={() => setActiveSection("orders")}>My Orders</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>

          {activeSection === "profile" && (
            <div className={styles.profileCard}>
            <div className={styles.containerprofileCard}>
            <Profile />
          </div> 
            </div>
          )}

          {activeSection === "orders" && (
            <div className={styles.MyOrdersPageorderCard}>
            <div className={styles.MyOrdersPagecontainerorder}>
            <MyOrdersPage />
            </div> 
            </div>
          ) }
{/*

          {activeSection === "orders" && (
            <div className={styles.orders}>
              <h2>Order History</h2>
              {userData?.orderHistory?.length ? (
                userData.orderHistory.map((order) => (
                  <div key={order._id} className={styles.orderCard}>
                    <div className={styles.orderHeader}>
                      <p><strong>Order ID:</strong> {order._id}</p>
                      <p><strong>Status:</strong> {order.orderStatus}</p>
                      <p><strong>Payment:</strong> {order.paymentMethod}</p>
                      {order.isPaid && (
                        <p><strong>Paid At:</strong> {new Date(order.paidAt).toLocaleString()}</p>
                      )}
                    </div>
          
                    <div className={styles.orderDetails}>
                      <h3>Products:</h3>
                      {order.orderItems.map((item, index) => (
                        <div key={item._id} className={styles.productCard}>            
                          {item.product.media && item.product.media.length > 0 && (
                            <Image 
                              src={item.product.media[0]} // Accessing the first image in the media array
                              alt={item.product.name} 
                              width={200} 
                              height={200} 
                            />
                          )}
          
                         

                          <div className={styles.productInfo}>
                            <h3>{item.product.name}</h3> 
                              <p> <strong>Price:</strong> ${item.product.price}</p>  
                            <p><strong>Quantity:</strong> {item.quantity}</p>
                          </div>


                        </div>
                      ))}
                    </div>

                    <div className={styles.orderHeader}> 
                    <div className={styles.couponDetails}>
                      {order.coupon ? (
                        <>
                          <p><strong>Coupon Applied:</strong> {order.coupon.code}</p>
                          <p><strong>Discount:</strong> ${order.coupon.discount}</p>
                        </>
                      ) : (
                        <p><strong>No Coupon Applied</strong></p>
                      )}
                    </div>  
                    <div className={styles.totalPrice}>
                      <h3>Total Price:</h3>
                      <p>${order.totalPrice}</p>
                    </div>
          
                    <button className={styles.viewDetailsButton}>View Details</button>

                    </div>
                  </div>
                ))
              ) : (
                <p className={styles.noOrders}>No orders found.</p>
              )}
            </div>
          )}
          
*/}

                    {activeSection === "penddingorders" && (
            <div className={styles.pendingOrdersContainer}>
              <h2 className={styles.pendingOrdersHeader}>Pending Orders</h2>
              {userData?.pendingOrders?.length ? (
                <ul className={styles.pendingOrdersList}>
                  {userData.pendingOrders.map((order) => (
                    <li key={order._id} className={styles.orderCard}>
                      <div className={styles.orderInfo}>
                        <p><strong>Order ID:</strong> {order._id}</p>
                        <p><strong>Status:</strong> {order.orderStatus}</p>
                        <p><strong>Total:</strong> ${order.totalPrice}</p>
                      </div>
           
                      <div className={styles.orderProductInfo}>
                        <h3>Product Details:</h3>
                        {order.orderItems.map((item) => (
                          <div key={item.product._id} className={styles.orderCardpendding}>
                          

<Image
         src={item.product.media[0]}
         alt={item.product.name}
         className={styles.productImage}
        width={500}
        height={500}
      />

                            <div>
                              <p>{item.product.name}</p>
                              <p>Price: ${item.product.price}</p>
                              <p>Quantity: {item.quantity}</p>
                            </div>

                            <button className={styles.viewDetailsButton}> <Link  className={styles.link} href="me/myorder">View Details</Link> </button>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.noOrders}>No pending orders.</p>
              )}
            </div>
          )}






          {activeSection === "Wishlist" && (
           <div className={styles.MyWishlistPage}>
            <div className={styles.MyOrdersPagecontainerorder}>
       <WishlistPage />
       </div>
      </div>
          )}



           {activeSection === "cart" && (
              <div className={styles.MyWishlistPage}>
            <div className={styles.MyOrdersPagecontainerorder}>
       <Cart />
      </div>
      </div>
          )}


           {activeSection === "Addresses" && (
<div>
        <h2>Saved Addresses</h2>
        {userData?.savedShippingAddresses?.length ? (
          userData.savedShippingAddresses.map((address, index) => (
            <div key={index}>
              <p>{address.addressLine1}, {address.city}</p>
            </div>
          ))
        ) : (
          <p>No saved addresses.</p>
        )}
      </div>

          )}



            {activeSection === "Reviews" && (
 <div>
        <h2>Product Reviews</h2>
        {reviews?.length ? (
          reviews.map((review, index) => (
            <div key={index}>
              <p>Review for Product: {review.product?.name || "Unnamed Product"}</p>
             <p>Rating: 
  {[...Array(review.rating)].map((_, i) => (
    <span key={i}>⭐</span> // You can replace this with any star icon
  ))}
</p>
              <p>Comment: {review.comment}</p>
              <p>Reviewed on: {new Date(review.createdAt).toLocaleDateString()}</p>
              {review.profilePictureImagePreview && (
              

                <Image
                src={review.profilePictureImagePreview} 
                alt="User Profile" 
                className="h-10 w-10 rounded-full" 
        width={500}
        height={500}
      />

              )}
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
          )}

        </div>
      </div>
    </div>
  );
}; 

export default UserDashboard;
