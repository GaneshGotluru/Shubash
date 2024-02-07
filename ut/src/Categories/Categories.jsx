import React from 'react'
import "../styles/categories.css";
const Categories = () => {
    let links =[
        {Category:"All"},
        {Category:"Mixes"},
        {Category:"U1 songs"},
        {Category:"Live"},
        {Category:"Enterinment"},
        {Category:"Sports"},
        {Category:"Vlogs"},
        {Category:"Kids"},
        {Category:"Music"},
        {Category:"Comedy"},
    ]
  return (
    <div className="categories">
            <div className="categories_links">
                {links.map((data)=>(
                    <a href="">{data.Category}</a>
                ))}
            </div>
        </div>
     );
}

export default Categories