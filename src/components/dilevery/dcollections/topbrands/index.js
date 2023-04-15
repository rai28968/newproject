import React from "react"
import Slider from "react-slick";
import NextArrow from "../../../common/carousl/nextArrow";
import PrevArrow from "../../../common/carousl/prevArrow";
import "./topBrands.css";
const topBrands = [
    {
        id:1,
        time:"38 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp",
    },

    {
        id:2,
        time:"21 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/a2531dc570196c0cd9322814eb010d94_1605102324.png?output-format=webp",
    },

    {
        id:3,
        time:"34 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png?output-format=webp",
    },

    {
        id:4,
        time:"39 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/94e8d80f54135ba39669774c68e9ecff_1567764102.png?output-format=webp",
    }, 

    {
        id:5,
        time:"39 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/acbdc3d44519ca1392d279c59d7fdc8d_1611320510.png?output-format=webp",
    }, 

    {
        id:6,
        time:"25 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/03ceb30dbebbf48efaf0ee5732b7773e_1629439318.png?output-format=webp",
    },
    {
        id:6,
        time:"28 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/aab4132c02435a45e102f972bd1fab13_1629442005.png?output-format=webp",
    },
]

const settings = {
  
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const TopBrands= ()=>{
    return (
        <div className="top-brands max-width">
            <div className="collection-title">Top brands for you</div>
            <Slider {...settings}>
                {topBrands.map((brand)=>{
                  return (  <div>
                        <div className="top-brands-cover">
                            <img src={brand.cover} className="top-brands-image" alt={brand.time} />
                        </div>
                        <div className="brand-time">{brand.time}</div>
                    </div>
                  )
                })}
            </Slider>
        </div>
    )
}

export default TopBrands;