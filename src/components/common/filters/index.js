import React from "react";
import "./filters.css";
import FilterItems from "./filteritem";

const Filters = ({filterList})=>{
    return(
        <div className="filters">
            {filterList && filterList.map((filter)=>{
              return  <FilterItems filter ={filter} key={filter.id}/>;
            })}
        </div>
    )
}

export default Filters;
