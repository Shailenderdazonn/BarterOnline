import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductsDetail.module.css';
import { Link } from 'react-router-dom';

const ProductsDetail = () => {
  const [product, setProduct] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    fetchProductData(itemId);
  }, [itemId]);

  const fetchProductData = (itemId) => {
    fetch(`http://127.0.0.1/Barter%20online/src/API/productsdetail.php/${itemId}`) // Update with your PHP API endpoint
      .then(res => res.json())
      .then(data => {
       
        const foundProduct = data.find(prod => prod.id === itemId);
        setProduct(foundProduct);
      })
      .catch(error => console.error('Error fetching product data:', error));
  };
  
    return (
      <div className={styles.productsDetail}>
        {product && (
          <div className={styles.calloutSection} key={product.id}>
            <div className={styles.calloutImages}>
              <img
                className={styles.calloutImagesChild}
                alt=""
                src={`http://127.0.0.1/Barter%20online/src/API/${product.file}`} 
              />
            </div>
            <div className={styles.calloutCopywriting}>
              <b className={styles.iphone13Pro}>{product.title}</b>
              <div className={styles.mobilePhoneParent}>
                <div className={styles.mobilePhone}>{product.category}</div>
                <div className={styles.albertaWrapper}>
                  <div className={styles.alberta}>{product.location}</div>
                </div>
              </div>
              <b className={styles.b}>$ {product.price}/-</b>
              <div className={styles.calloutText}>{product.description}</div>
              <div className={styles.lineParent}>
                <div className={styles.frameChild} />
                <div className={styles.articleAuthor}>
                  {/* <img
                    className={styles.avatarIcon}
                    alt=""
                    src="../avatar@2x.png"
                  /> */}
                  <div className={styles.authorText}>
                    <div className={styles.annaRos}>{product.name}</div>
                    {/* <div className={styles.postedJustNow}>Posted just now</div> */}
                  </div>
                </div>
              </div>
              <a className={styles.chat}>
              {/* <a className={styles.chatWithSeller} href={`tel:${product.mobile}`}>Contact Seller</a> */}
        
              <a className={styles.chatWithSeller} href={`mailto:	contactus@barter.ca?&subject=BarterOnline%20Product%20Enquiry%20ID=${product.id}`}>Contact Seller</a>             
              {/* <Link to={`/contact-us/`}>fd dsa</Link> */}
              </a>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ProductsDetail;
  