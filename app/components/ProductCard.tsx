
// 'use client';
import React from 'react'
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css"
{/* <style className="card"></style> */}
function ProductCard() {
  return (
    <div className= 'py-4 mt-5 bg-sky-400 text-xl text-white hover: bg-sky-800'>
      {/* //{styles.card}> */}
<AddToCart />  
  </div>
  )
}

export default ProductCard