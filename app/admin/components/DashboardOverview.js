



"use client";

import React from "react";
import styles from "../../../styles/admin/DashboardOverview.module.css";
import { FaShoppingCart, FaBoxOpen, FaTags, FaDollarSign, FaUsers, FaEye, FaExclamationTriangle } from "react-icons/fa";


const DashboardOverview = ({ 
  // totalOrders, totalProducts, totalCategories,
  //  totalSales, totalUsers,  totalViewsCount

  totalOrders, 
  totalProducts, 
  totalCategories, 
  totalSales, 
  totalUsers, 
  totalViewsCount, 
  totalSalesCount, // Accept totalSalesCount
  stockAlerts // Accept stockAlerts
}) => {
  const stats = [
    { title: "Total Orders", value: totalOrders, icon: <FaShoppingCart />, color: "#673AB7", description: "Number of orders placed" },
    { title: "Total Products", value: totalProducts, icon: <FaBoxOpen />, color: "#4CAF50", description: "Products currently available" },
    { title: "Total Categories", value: totalCategories, icon: <FaTags />, color: "#9C27B0", description: "Product categories listed" },
    { title: "Total Sales", value: `$${totalSales}`, icon: <FaDollarSign />, color: "#FFC107", description: "Total sales revenue" },
    { title: "Customers", value: totalUsers, icon: <FaUsers />, color: "#2196F3", description: "Registered customers" },
    { title: "Total Views Count", value: totalViewsCount, icon: <FaEye />, color: "#009688", description: "Total product views" }, // Use totalViewsCount

  ];

  const [selectedProduct, setSelectedProduct] = React.useState(null);

const handleDetailsClick = (product) => {
  setSelectedProduct(product);
};

const handleClosePopup = () => {
  setSelectedProduct(null);
};





return (
  <div className={styles.dashboardContainer}>
    {stats.map((stat, index) => (
      <div key={index} className={styles.card} style={{ borderLeft: `5px solid ${stat.color}` }}>
        <div className={styles.iconContainer} style={{ backgroundColor: stat.color }}>
          {stat.icon}
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{stat.title}</h3>
          <p className={styles.cardValue}>{stat.value}</p>
          <p className={styles.cardDescription}>{stat.description}</p>
        </div>
      </div>
    ))}

    {/* Stock Alerts Section */}
    <div className={styles.stockAlertsContainer}>
     
      {stockAlerts?.map((product, index) => (
        <div 
          key={index} 
          className={styles.stockAlert} 
          style={{ borderLeft: `5px solid ${product.alertType === 'Out of Stock' ? '#FF5252' : '#FFEB3B'}` }}
        >
          <div className={styles.iconContainer} style={{ backgroundColor: product.alertType === 'Out of Stock' ? '#FF5252' : '#FFEB3B' }}>
            <FaExclamationTriangle />
          </div>
          <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Stock Alerts</h3>
            <p className={styles.cardValue}>{product.name}</p>
            <p className={styles.cardDescription}>{product.alertType}</p>
            <button onClick={() => handleDetailsClick(product)}>Details</button>
          </div>
        </div>
      ))}
    </div>

    {/* Popup */}
    {selectedProduct && (
      <div className={styles.popupOverlay} onClick={handleClosePopup}>
        <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
          <h2>Product Details</h2>
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Stock:</strong> {selectedProduct.stock}</p>
          <p><strong>Alert Type:</strong> {selectedProduct.alertType}</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      </div>
    )}
  </div>
);

};

export default DashboardOverview;