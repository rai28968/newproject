import React from "react";
import "./fitlters.css";

const FilterItems = ({filter})=>{
    return(
        <div className="filter-item">
        {filter.icon && filter.icon}
        <div className="filter-name">{filter.title}</div>
        </div>
    )
}

export default FilterItems;