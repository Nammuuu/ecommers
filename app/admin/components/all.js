


// "use client";
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Sidebar from "./Sidebar";
// import DashboardOverview from "./DashboardOverview";
// import TableWithPagination from "./TableWithPagination";
// import Graph from "./Graph";
// import Product from "../product/product";
// import Settings from "../settings/page";
// import Orders from "../orders/page";
// import Categories from "../Categories";
// // import Users from "../product/users";
// import styles from "../../../styles/admin/AdminAll.module.css";

// const AdminDashboard = () => {
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [currentSection, setCurrentSection] = useState('Dashboard'); // State to track the current section

//   const [dashboardData, setDashboardData] = useState({
//     totalOrders: 0,
//     totalProducts: 0,
//     totalCategories: 0,
//     totalSales: 0,
//     totalCustomers: 0,
//     totalUsers: 0,
//   });

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`/api/admin/dashboard/dashboardData?page=${currentPage}&limit=10`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setDashboardData(response.data);
//         setTotalPages(response.data.users.totalPages);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderSection = () => {
//     switch (currentSection) {
//       case 'Dashboard':
//         return (
//           <>
//             <DashboardOverview {...dashboardData} />
//             <Graph chartData={[dashboardData.totalUsers, dashboardData.totalProducts, dashboardData.totalOrders, dashboardData.totalCategories]} />
//             <TableWithPagination
//               data={dashboardData.users.data}
//               totalPages={totalPages}
//               currentPage={currentPage}
//               onPageChange={handlePageChange}
//             />
//           </>
//         );
//       case 'Products':
//         return <Product />;
//       case 'Orders':
//         return <Orders />;
//       case 'Categories':
//         return <Categories />;
//       case 'Settings':
//         return <Settings />;
//       default:
//         return <DashboardOverview {...dashboardData} />;
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className={`${styles.dashboardContainer} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} setCurrentSection={setCurrentSection} />
//       <main className={`${styles.mainContent} ${isSidebarOpen ? styles.contentShiftRight : styles.contentShiftLeft}`}>
//         <h1 className={styles.pageTitle}>Admin Dashboard</h1>
//         {renderSection()}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;





// "use client";
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Sidebar from "./Sidebar";
// import DashboardOverview from "./DashboardOverview";
// import TableWithPagination from "./TableWithPagination";
// import Graph from "./Graph";
// import Product from "../product/product";
// import Settings from "../settings/page";
// import Orders from "../orders/page";
// import Categories from "../Categories";
// import styles from "../../../styles/admin/AdminAll.module.css";

// const AdminDashboard = () => {
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [currentSection, setCurrentSection] = useState('Dashboard'); 

//   const [dashboardData, setDashboardData] = useState({
//     totalOrders: 0,
//     totalProducts: 0,
//     totalCategories: 0,
//     totalSales: 0,
//    totalViewsCount: 0,
//     totalSalesCount: 0,
//   });

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`/api/admin/dashboard/dashboardData?page=${currentPage}&limit=10`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
        
//         setDashboardData(response.data);
//         setTotalPages(response.data.users.totalPages); // Example: Total Pages for Users
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderSection = () => {
//     switch (currentSection) {
//       case 'Dashboard':
//         return (
//           <>
//             <DashboardOverview
//             totalViewsCount={dashboardData.totalViewsCount}  // Passing totalViewsCount
//             totalSalesCount={dashboardData.totalSalesCount}
           
//             {...dashboardData} />
//             <Graph chartData={[dashboardData.totalUsers, dashboardData.totalProducts, dashboardData.totalOrders, dashboardData.totalCategories]} />
//             <TableWithPagination
//               data={dashboardData.users.data}
//               totalPages={totalPages}
//               currentPage={currentPage}
//               onPageChange={handlePageChange}
//             />
//           </>
//         );
//       case 'Products':
//         return <Product />;
//       case 'Orders':
//         return <Orders />;
//       case 'Categories':
//         return <Categories />;
//       case 'Settings':
//         return <Settings />;
//       default:
//         return <DashboardOverview {...dashboardData} />;
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className={`${styles.dashboardContainer} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} setCurrentSection={setCurrentSection} />
//       <main className={`${styles.mainContent} ${isSidebarOpen ? styles.contentShiftRight : styles.contentShiftLeft}`}>
//         <h1 className={styles.pageTitle}>Admin Dashboard</h1>
//         {renderSection()}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;


"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar";
import DashboardOverview from "./DashboardOverview";
import TableWithPagination from "./TableWithPagination";
import Graph from "./Graph";
import Product from "../product/product";
import Settings from "../settings/page";
import Orders from "../orders/page";
import Categories from "../Categories";
import styles from "../../../styles/admin/AdminAll.module.css";
import UserListPage from "../users/page"
import Blog from '../blog/page';
import BlogList from "../blog/get/page"
// import Banner from "./banner/page"
import Chat from "../components/components/Chat"
import Pagesettings from "../pagesetting/page"
import Components from "../components/components/Components"

import ReviewsAdminPanel from "../components/components/Review"

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('Dashboard'); 
  const [stockAlerts, setStockAlerts] = useState([]);

  const [dashboardData, setDashboardData] = useState({
    totalOrders: 0,
    totalProducts: 0,
    totalCategories: 0,
    totalSales: 0,
    totalUsers: 0,
    totalViewsCount: 0,
    totalSalesCount: 0,
    stockAlerts: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/api/admin/dashboard/dashboardData?page=${currentPage}&limit=10`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const data = response.data;
        // Find stock alerts
      const alerts = data.products.data.map(product => {
        if (product.stock === 0) return { ...product, alertType: 'Out of Stock' };
        if (product.stock <= 10) return { ...product, alertType: 'Low Stock' };
        return null;
      }).filter(alert => alert !== null);

        const allViewsCount = data.products.data.reduce((acc, product) => acc + (product.viewsCount || 0), 0); // Calculate total views
        
        setDashboardData({
          ...data,
          totalViewsCount: allViewsCount,  // Set the calculated total views
        });
        setStockAlerts(alerts);
        setTotalPages(data.users.totalPages); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'Dashboard':
        return (
          <>
            <DashboardOverview
              totalSales={dashboardData.totalSales}
              totalUsers={dashboardData.totalUsers}
              totalViewsCount={dashboardData.totalViewsCount}  // Passing calculated totalViewsCount
              totalSalesCount={dashboardData.totalSalesCount}
              totalOrders={dashboardData.totalOrders}
              totalProducts={dashboardData.totalProducts}
              totalCategories={dashboardData.totalCategories}
              stockAlerts={stockAlerts} 
              

            />
            <Graph chartData={[dashboardData.totalUsers, dashboardData.totalProducts, dashboardData.totalOrders, dashboardData.totalCategories, dashboardData.totalViewsCount]} />
            
          </>
        );
      case 'Products':
        return <Product />;
      case 'Orders':
        return <Orders />;
      case 'Categories':
        return <Categories />;
        case 'Blog':
          return <> 
          <Blog />
          <BlogList /> 
          </>;
      case 'Settings':
        return <Settings />;

        case 'Chat':
          return <Chat />;
  

        case 'Users':
          return <> 
         <UserListPage />
        </>;

      

       

        case 'Components':
          return <Components />;

          case 'Reviews':
          return  <ReviewsAdminPanel />;

         
       

        case 'Page':
          return <Pagesettings />;

        

      default:


        return <DashboardOverview {...dashboardData} />;
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={`${styles.dashboardContainer} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} setCurrentSection={setCurrentSection} />
      <main className={`${styles.mainContent} ${isSidebarOpen ? styles.contentShiftRight : styles.contentShiftLeft}`}>
       
        {renderSection()}
      </main>
    </div>
  );
};

export default AdminDashboard;
