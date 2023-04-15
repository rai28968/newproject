import React from "react";
import "./dinningOut.css";
import Filters from "../common/filters";
import Collection from "../common/collection";
import { dinningOut } from "../../data/dinningOut";
import ExploreSection from "../common/exploreSecton";

const dinningFilters = [
    {
        id:1,
        icon: <i class="fi fi-rr-settings-sliders"></i>,
        title: "Filters",
    },
    {
        id: 2,
        title: "Rating: 4.0+",

    },
    {
        id: 3,
        title: "Safe and Hygienic",

    },
    {
        id: 4,
        title: "Pure Veg",

    },
    {
        id: 5,
        title: "Delivery Time",
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,

    },
    {
        id: 6,
        title: "Great Offers",

    },
];

const collectionList = [
  {
    id: "1",
    title: "15 Thrilling Live Cricket Screenings",
    cover: "https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160632.png" ,
    places: "15 places",
  },
  {
    id: "2",
    title: "10 Newly Opened Restaurants",
    cover: "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1675231247.jpg" ,
    places: "10 places",
  },
  {
    id: "3",
    title: "10 Great Buffets",
    cover: "https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675231457.jpg" ,
    places: "10 places",
  },
  {
    id: "4",
    title: "9 Best Insta-worthy Places",
    cover: "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252730.jpg" ,
    places: "9 places",
  },
  {
    id: "5",
    title: "18 Best Bars & Pubs",
    cover: "https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675232844.jpg" ,
    places: "18 places",
  },
  {
    id: "6",
    title: "11 Serene Rooftop Places",
    cover: "https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675233639.jpg?output-format=webp" ,
    places: "11 places",
  },

];

const dinningList = dinningOut;
const DinningOut = ()=>{
    return (
        <div><Collection list={collectionList}/>
         <div className="max-width">
            <Filters filterList={dinningFilters}/>
         </div>
         <ExploreSection list={dinningList} collectionName={"Best Dining Restaurants near you in banglore"}/> 
        </div>
        
    )
}

export default DinningOut;