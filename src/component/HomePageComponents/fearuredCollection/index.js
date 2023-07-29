import React from "react";
import '../../../assets/style/home.css';
import '../../../assets/style/particles.css';
import '../../../assets/style/bootstrap.min.css';
import Itemfirst from "../../../assets/images/items/item-1.png";
import Itemscnd from "../../../assets/images/items/item-2.png";
import Itemsthird from "../../../assets/images/items/item-3.png";
import Itemsfour from "../../../assets/images/items/item-4.png";
import Itemsfive from "../../../assets/images/items/item-5.png";
import Itemssix from "../../../assets/images/items/item-6.png";
import Itemsseven from "../../../assets/images/items/item-7.png";
import Itemseight from "../../../assets/images/items/item-8.png";

const FeaturedCollection = () => {
    const datas = [
        {
            "image": Itemfirst,
            "firstHeading": "Ordinal Punks",
            "lastHeading": "100 total supply"
        },
        {
            "image": Itemscnd,
            "firstHeading": "Bitcoin Rocks",
            "lastHeading": "100 total supply"
        },
        {
            "image": Itemsthird,
            "firstHeading": "Planatary Ordinals",
            "lastHeading": "69 total supply"
        },
        {
            "image": Itemsfour,
            "firstHeading": "Oridinal Shards",
            "lastHeading": "100 total supply"
        },
        {
            "image": Itemsfive,
            "firstHeading": "Ordinal Penguins",
            "lastHeading": "100 total supply"
        },
        {
            "image": Itemssix,
            "firstHeading": "Based Apes",
            "lastHeading": "100 total supply"
        },
        {
            "image": Itemsseven,
            "firstHeading": "Bitcoin Punks",
            "lastHeading": "1000 total supply"
        },
        {
            "image": Itemseight,
            "firstHeading": "Ordinal Penguins",
            "lastHeading": "100 total supply"
        },
    
    
    ];
    return (
        <>
           <div className="bg-second-section-homepage">
                <div className="container margin_120_90">
                    <div className="main_title version_2">
                        <span><em></em></span>
                        <h2>Featured Collections</h2>
                        <p style={{ color: '#b5c6cc' }}>Popular collections verified on Flurry</p>
                        <a href="#0" className="text-decoration-none">View All <i className="bi bi-arrow-right"></i></a>
                    </div>


                    <div className="row justify-content-center">
                        {datas?.map((data,index) => (
                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-cue="slideInUp" data-show="true" style={{ animationName: 'slideInUp', animationDuration: '300ms', animationTimingFunction: 'ease', animationDelay: '0m', animationDirection: 'normal', animationFillMode: 'both' }}>
                            <div className="strip">
                                <figure>
                                    <img src={data.image} data-src={Itemfirst} className="lazy loaded" alt="" width="533" height="400" data-was-processed="true" />
                                    <a href="author.html" className="strip_info text-decoration-none" >
                                        <div className="item_title">
                                            <h3>{data.firstHeading}</h3>
                                            <small>{data.lastHeading}</small>
                                        </div>
                                    </a>
                                </figure>
                            </div>
                        </div>
                     ))}
                    </div>

                    <p className="text-center mt-4" data-cue="slideInUp" data-show="true" style={{ animationName: 'slideInUp', animationDuration: '300ms', animationTimingFunction: 'ease', animationDelay: '0m', animationDirection: 'normal', animationFillMode: 'both' }}><a href="grid-listing-1.html" className="btn_1 gradient pulse_bt">View New Items</a></p>
                </div>
            </div>
        </>
    )
}

export default FeaturedCollection;