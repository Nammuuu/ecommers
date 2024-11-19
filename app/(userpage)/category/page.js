// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import styles from "../../../styles/product/categorys/Categories.module.css";
// import Loader from "../../../components/Loader";
// import SearchBarPage from "../search/page";

// import CartSidebar from "../../../components/Home/CartSidebar";
// import WishlistSidebar from "../../../components/Home/WishlistSidebar";

// import { 
//   FaTimes,
//   FaHeart,
//   FaEye,
//   FaShoppingCart,
//   FaStar,
// } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";



// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
 
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isWishlistOpen, setIsWishlistOpen] = useState(false);
//   const [cartUpdated, setCartUpdated] = useState(false);
//   const [wishlistUpdated, setWishlistUpdated] = useState(false);
 
//   const [quickViewProduct, setQuickViewProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedMaterial, setSelectedMaterial] = useState(null);


//   // Fetch all categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("/api/user/category/cate");
//         setCategories(response.data.categories);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         toast.error("Failed to fetch categories.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Fetch products when a category is selected
//   useEffect(() => {
//     if (selectedCategory) {
//       const fetchProducts = async () => {
//         try {
//           setLoading(true);
//           const response = await axios.get(`/api/user/category?category=${selectedCategory}`);
//           setProducts(response.data.products);
//         } catch (error) {
//           console.error("Error fetching products:", error);
//           toast.error("Failed to fetch products.");
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchProducts();
//     }
//   }, [selectedCategory]);
  
//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategory(categoryId);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get("/api/user/product/home");
//         setProducts(response.data.products);
//       } catch (error) {
//         console.error("Failed to fetch products", error);
//         toast.error("Failed to fetch products");
//       } finally {
//         setLoading(false); // Hide loader when fetch is done
//       }
//     };

//     fetchProducts();
//   }, []);
 
 
 
//   const addToCart = (product) => {
//     const newItem = {
//       ...product,
//       quantity: 1,
//       selectedSize,
//       selectedColor,
//       selectedMaterial,
//     };

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingItem = cart.find((item) => item._id === product._id);

//     if (existingItem) {
//       // Increase quantity if the item already exists in the cart
//       existingItem.quantity += 1;
//       cart = cart.map((item) =>
//         item._id === product._id ? existingItem : item
//       );
//       toast.success(
//         <div>
//           <img
//             src={product.media[0]}
//             alt={product.name}
//             style={{ width: "50px", height: "50px", objectFit: "cover" }}
//           />
//           <div>{product.name}</div>
//           <div>Quantity: {existingItem.quantity}</div>
//         </div>,
//         { autoClose: 3000 }
//       );
//     } else {
//       // Add new item with quantity 1
//       cart.push(newItem);
//       toast.success(
//         <div>
//           <img
//             src={product.media[0]}
//             alt={product.name}
//             style={{ width: "50px", height: "50px", objectFit: "cover" }}
//           />
//           <div>{product.name}</div>
//           <div>Quantity: 1</div>
//         </div>,
//         { autoClose: 3000 }
//       );
//     }
//   localStorage.setItem('cart', JSON.stringify(cart));
//   setCartUpdated(prev => !prev); // Trigger re-render
//   setIsCartOpen(true); // Open the cart sidebar to reflect the change
// };


//   const handleAddToCart = (product) => {
//     if (product.sizes.length > 0 && !selectedSize) {
//       openQuickView(product); // Trigger modal for option selection
//       toast.error("Please select a size.");
//       return;
//     }
//     if (product.colors.length > 0 && !selectedColor) {
//       openQuickView(product);
//       toast.error("Please select a color.");
//       return;
//     }
//     if (product.materials && product.materials.length > 0 && !selectedMaterial) {
//       openQuickView(product);
//       toast.error("Please select a material.");
//       return;
//     }

   
//     addToCart(product);


//   };



//   const handleAddToWishlist = (product) => {
//     if (product.sizes.length > 0 && !selectedSize) {
//       openQuickView(product); // Trigger modal for option selection
//       toast.error("Please select a size.");
//       return;
//     }
//     if (product.colors.length > 0 && !selectedColor) {
//       openQuickView(product);
//       toast.error("Please select a color.");
//       return;
//     }
//     if (product.materials && product.materials.length > 0 && !selectedMaterial) {
//       openQuickView(product);
//       toast.error("Please select a material.");
//       return;
//     }
  
//     addToWishlist(product); // If all selections are made, proceed to add to wishlist
//   };
  
//   const addToWishlist = (product) => {
//     const newItem = {
//       ...product,
//       selectedSize,
//       selectedColor,
//       selectedMaterial,
//     };
  
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const existingItem = wishlist.find((item) => item._id === product._id);
    
//     if (!existingItem) {
//       wishlist.push(newItem);
//       localStorage.setItem("wishlist", JSON.stringify(wishlist));
//       toast.success(`${product.name} added to wishlist`);
//       setWishlistUpdated((prev) => !prev); // Trigger re-render
//     } else {
//       setWishlistUpdated(prev => !prev);
//       toast.info(`${product.name} is already in your wishlist`);
//     }
//     setWishlistUpdated(prev => !prev);
//     setIsWishlistOpen(true);
//   };

  

//   const renderRating = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStars = rating % 1 !== 0;
//     const stars = Array.from({ length: 5 }, (_, i) => (
//       <FaStar key={i} color={i < fullStars ? "#ffc107" : "#e4e5e9"} />
//     ));
//     if (halfStars)
//       stars.push(
//         <FaStar
//           key="half"
//           color="#ffc107"
//           style={{ clipPath: "inset(0 50% 0 0)" }}
//         />
//       );
//     return stars;
//   };



//     const isInCart = (productId) => {
//       const cart = JSON.parse(localStorage.getItem('cart')) || [];
//       return cart.some(item => item._id === productId);
//     };
  
//     // Check if the product is already in the wishlist
//     const isInWishlist = (productId) => {
//       const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//       return wishlist.some(item => item._id === productId);
//     };

//     const openQuickView = (product) => {
//         setQuickViewProduct(product); // Set the product to view in the Quick View modal
//       };
    
//       const closeQuickView = () => {
//         setQuickViewProduct(null); // Close Quick View modal
//     };


//   return (
//     <div className={styles.container}>
//       <h1>Categories</h1>
//       {loading && <Loader />}

//       <div className={styles.categoryList}>
    
//         {categories.map((category) => (
//           <div
//             key={category._id}
//             className={`${styles.categoryButton} ${
//               selectedCategory === category._id ? styles.active : ""
//             }`}
//             onClick={() => handleCategoryClick(category._id)}
//           >
//           <Image
//                 src={category.categoryImage || "/path/to/default-image.jpg"} // Use default image if categoryImage is not available
//                 alt={category.name}
//                 className={styles.previewImage}
//                 width={400}
//                 height={400}
//                 priority
//               />

//             {category.name}
//           </div>
//         ))}

//       </div>

//       <div className={styles.productsContainer}>
//         {products.length > 0 ? (
          
            
//             <div className={styles.product_list}>
//             {products.map((product) => (
//               <div key={product._id} className={styles.product_container}>
//                 <div className={styles.product_iconsto}>
//                   <FaEye onClick={() => openQuickView(product)} />
//                 </div>
    
//                 <Link href={`/product/details/${product._id}`}>
//                   <div className={styles.mainproduct_images}>
//                     <Image
//                       className={styles.product_list_images}
//                       src={product.media[0] || ""}
//                       alt={product.name}
//                       width={100}
//                       height={100}
//                     />
//                   </div>
//                 </Link>
    
//                 <div className={styles.product_list_containet}>
//                   <h4>
//                     {product.name.length > 20
//                       ? product.name.slice(0, 20) + "..."
//                       : product.name}
//                   </h4>
//                   <p className={styles.conmmanClassname}>
//                     {renderRating(product.averageRating)}
//                   </p>

//                   <div className={styles.price_containet}>
//                     <p className={styles.price}>₹{product.price}.00</p>
//                     <p className={styles.discountPrice}>₹{product.discountPrice}</p>
//                   </div>
    
//                   <p className={styles.conmmanClassname}>
//                     Sales: {product.salesCount} | Views: {product.viewsCount}
//                   </p>
    
//                   <div className={styles.product_icons}>
//                     <FaHeart
//                       onClick={() => handleAddToWishlist(product)}
//                       style={{
//                         color: isInWishlist(product._id) ? "rgb(242, 62, 20)" : "inherit",
//                       }}
//                     />
//                     <FaShoppingCart
//                       onClick={() => handleAddToCart(product)}
//                       style={{
//                         color: isInCart(product._id) ? "rgb(242, 62, 20)" : "inherit",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>


          
//         ) : (
//           <p>No products found for this category.</p>
//         )}
//       </div>


//       {quickViewProduct && (
//         <div className={styles.quick_view_modal}>
//           <div className={styles.quick_view_content}>
//             <div className={styles.QuickView_images_ccontainer}>
//               <Image
//                 className={styles.quickViewProduct_images}
//                 src={quickViewProduct.media[0] || "/default-image.png"}
//                  alt={quickViewProduct.name}
//                 width={300}
//                 height={300}
//               />
//             </div>

//             <div className={styles.quickViewProduct_container}>
//               <button className={styles.close_btn} onClick={closeQuickView}>
//                 <FaTimes />
//               </button>

//               <h2 className={styles.product_name}>{quickViewProduct.name}</h2>
            
//               <p className={styles.product_des}>
//               {quickViewProduct.description.length > 200
//                 ? quickViewProduct.description.slice(0, 200) + "..."
//                 : quickViewProduct.description}
//             </p>
            

//               <div className={styles.price_containet}>
//                 <p className={styles.price_quick}>₹{quickViewProduct.price}</p>
//                 <p className={styles.discountPrice}>
//                   ₹{quickViewProduct.discountPrice}
//                 </p>
//               </div>

            

//               <div className={styles.option_selector}>
//                 {quickViewProduct.sizes && quickViewProduct.sizes.length > 0 && (
//                   <div className={styles.selector_container}>
//                     <label>Size:</label>
//                     <div className={styles.options}>
//                       {quickViewProduct.sizes.map((size) => (
//                         <button
//                           key={size}
//                           className={`${styles.option} ${
//                             selectedSize === size ? styles.selected : ""
//                           }`}
//                           onClick={() => setSelectedSize(size)}
//                         >
//                           {size}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
//                   <div className={styles.selector_container}>
//                     <label>Color:</label>
//                     <div className={styles.options}>
//                       {quickViewProduct.colors.map((color) => (
//                         <button
//                           key={color}
//                           className={`${styles.option} ${
//                             selectedColor === color ? styles.selected : ""
//                           }`}
//                           onClick={() => setSelectedColor(color)}
//                         >
//                           {color}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {quickViewProduct.materials &&
//                   quickViewProduct.materials.length > 0 && (
//                     <div className={styles.selector_container}>
//                       <label>Material:</label>
//                       <div className={styles.options}>
//                         {quickViewProduct.materials.map((material) => (
//                           <button
//                             key={material}
//                             className={`${styles.option} ${
//                               selectedMaterial === material ? styles.selected : ""
//                             }`}
//                             onClick={() => setSelectedMaterial(material)}
//                           >
//                             {material}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//               </div>

//               <div className={styles.modal_product_icons}>

//               <div  className={styles.modal_product_buttons}>
//               <button onClick={() => handleAddToWishlist(quickViewProduct)} 
//               className={styles.quickViewProduct_product_cart}
//               >
//               Add to Wishlist
//               </button>
 
//                <button
//                  className={styles.quickViewProduct_product_cart}
//                  onClick={() => handleAddToCart(quickViewProduct)}
//                >
//                  Add to Cart
//                </button>
//                </div>

//                <Link  href={`/product/details/${quickViewProduct._id}` }
//               className={styles.quickViewProduct_product_cart_link}
//               >
//               view details
//               </Link>

               

//               </div>


//             </div>
//           </div>
//         </div>
//       )}

    
//       <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartUpdated={cartUpdated} />
    

//       <WishlistSidebar isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} wishlistUpdated={wishlistUpdated} />

//     </div>
//   );
// };

// export default Categories;

"use client";

import React from 'react'
import SearchBarPage from "../search/page"

const Categories = () => {
  return (
    <div>
    <SearchBarPage />
    </div>
  )
}

export default Categories