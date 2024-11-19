'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../../../styles/blog/BlogDetails.module.css'; 
import Image from 'next/image'; 
import Link from 'next/link';

const BlogDetails = ({ params }) => {
    const { id } = params;  // URL slug of the blog
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const { data } = await axios.get(`/api/user/userblog/${id}`);
                setBlog(data.blog);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError('Error fetching blog details');
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) return <p>Loading blog details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.container}>

        <div className={styles.metadata}>
        <p><strong className={styles.author}>Author:</strong>Shop Name</p>
        <p><strong>Published on:</strong> {new Date(blog.createdAt).toLocaleDateString()}</p>
      </div>
      
          <h1 className={styles.title}>{blog.title}</h1>
          <h2 className={styles.heading}>{blog.heading}</h2>
      
          <div className={styles.imageContainer}>
            {blog.images.map((image, index) => (
              <Image 
                key={index} 
                src={image} 
                alt={`Blog Image ${index + 1}`} 
                width={600} 
                height={400}
                className={styles.blogImage}
              />
            ))}
          </div>
      
         
      
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: blog.content }} />
      
          <div className={styles.tags}>
            {/* Display dynamic tags */}
            {blog.tags && blog.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
      
          <div className={styles.socialSharing}>
            <button className={styles.socialButton}>Share on Twitter</button>
            <button className={styles.socialButton}>Share on Facebook</button>
            <button className={styles.socialButton}> <Link href="/blog">Back to Blogs</Link> </button>
          </div>
        </div>
      );
      
      
};

export default BlogDetails;
 