import React from 'react'
import './Category.css'
const Category = () => {
  return (
   
   <div>
    <h2 className="sidebar-title">Category</h2>
    <div>
        <label className="sidebar-label-container">
            <input type='radio' name='test'/>
            <span className="checkmark"></span>All
         </label>
         <label className="sidebar-label-container">
            <input type='radio' name='test'/>
            <span className="checkmark"></span>boots
         </label>
         <label className="sidebar-label-container">
            <input type='radio' name='test'/>
            <span className="checkmark"></span>Hills
         </label>
         <label className="sidebar-label-container">
            <input type='radio' name='test'/>
            <span className="checkmark"></span>flats
         </label>
    </div>
   </div>
  );
}

export default Category
