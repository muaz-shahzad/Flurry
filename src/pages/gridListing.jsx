import React, {useState} from "react";
import '../assets/style/style.css';
import '../assets/style/listing.css';
import '../assets/style/bootstrap.min.css';
import itemPlaceholder from "../assets/images/items/item-7.gif";
import Select from "react-select";
import { Link } from "react-router-dom";
const GridListing = () => {
    const [selectedOptions, setSelectedOptions] = useState();
   const [menuOpen , setMenoOpen] = useState(false);

    const datas = [
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "1.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@Robert98",
            "firstHeading": "Amazing Art",
            "lastHeading": "2.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@Salazar",
            "firstHeading": "Amazing Art",
            "lastHeading": "3.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "3.0 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@Salazar",
            "firstHeading": "Amazing Art",
            "lastHeading": "1.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "0.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "0.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@Robert98",
            "firstHeading": "Amazing Art",
            "lastHeading": "0.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@Bennet_corp",
            "firstHeading": "Amazing Art",
            "lastHeading": "0.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@Robert98",
            "firstHeading": "Amazing Art",
            "lastHeading": "0.25 ETH"
        },

        {
            "image": itemPlaceholder,
            "authorName": "@Bennet_corp",
            "firstHeading": "Amazing Art",
            "lastHeading": "0.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "0.25 ETH"
        },




    ];
    const optionList = [
        { value: "Sort by Popularity", label: "Sort by Popularity" },
        { value: "Sort by Newness", label: "Sort by Newness" },
        { value: "Sort by Trending", label: "Sort by Trending" },
      ];
      function handleSelect(data) {
        setSelectedOptions(data);
      }
    return (
        <>
        
        <main className="bg_listing-color gridPadding-top">
        <div className="filters_full element_to_stick">
        <div className="container">
                <div className="add_bottom_20 d-flex justify-content-between">
                <div className="custom_select d-flex">
                <Select
  options={optionList}
  placeholder="Sort by Popularity"
  value={selectedOptions}
  onChange={handleSelect}
  isSearchable={true}
/>
<a style={{cursor: 'pointer'}} onClick={() => setMenoOpen(!menuOpen)} className="btn_filters collapsed" aria-expanded="false"><i className="bi bi-filter"></i><span>Filters</span></a>
    </div>
                   
                    
                    <div className="search_bar_list">
                        <input type="text" className="form-control" style={{backgroundColor: "transparent"}} placeholder="Search again..." />
                    </div>
                    <a className="btn_search_mobile btn_filters" data-bs-toggle="collapse" href="#collapseSearch"><i className="bi bi-search"></i></a>
                </div>
            </div>
            {menuOpen && (    
                <div className="filters_2 collapse show" id="collapseFilters" >
                <div className="container margin_detail" >
                    <div className="row" >
                        <div className="col-md-3">
                            <div className="filter_type">
                                <h6>Categories</h6>
                                <ul>
                                    <li>
                                        <label className="container_check">Art <small>112</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">Game <small>90</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">Photography <small>140</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">Music <small>43</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">Video <small>23</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="filter_type">
                                <h6>Colors</h6>
                                <ul>
                                    <li>
                                        <label className="container_check">Black <small>12</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">Green <small>25</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">Purple <small>56</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">Blue <small>87</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">White <small>43</small>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="filter_type">
                                <h6>Status</h6>
                                <ul>
                                    <li>
                                        <label className="container_radio">Buy Now<small>11</small>
                                            <input type="radio" name="filter_4" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_radio">On Auction<small>08</small>
                                            <input type="radio" name="filter_4" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_radio">Has Offers<small>05</small>
                                            <input type="radio" name="filter_4" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3" >
                            <div className="filter_type" >
                                <h6>Price</h6>
                                <div className="range_input">Price range from 0 to <span>4</span> ETH</div>
                                <div ><input type="range" min="1" max="5" step="0.2" value="4" data-orientation="horizontal" style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}} /><div className="rangeslider rangeslider--horizontal" id="js-rangeslider-0"><div className="rangeslider__fill" style={{width: '224.5px'}}></div><div className="rangeslider__handle" style={{left: '214.5px'}}></div></div></div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>       
         
            )}

    
            <div className="collapse" id="collapseSearch">
                <div className="search_bar_list">
                    <input type="text" className="form-control" placeholder="Search again..."/>
                </div>
            </div>
           
        </div>
     
        <div className="container margin_30_40">
            <div className="page_header">
                <div className="breadcrumbs">
                    <ul>
                        <li><a href="#" style={{textDecoration: "none"}}>Home</a></li>
                        <li><a href="#" style={{textDecoration: "none"}}>Category</a></li>
                        <li>Page active</li>
                    </ul>
                </div>
                <h1>All:</h1><span style={{color: "white"}}> 814 found</span>
            </div>
       
            <div className="row">
            {datas?.map((data,index) => (
                
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <Link to="/detail">
                    <div className="strip">
                        <figure>
                            <a className="btn_1 modal_popup">Place a bid</a>
                            <img src={data.image} data-src={data.image}  className="lazy" alt="" width="533" height="400"/>
                            <a href="detail-page.html" className="strip_info">
                                <div className="item_title">
                                    <h3>{data.firstHeading}</h3>
                                    <small>{data.lastHeading}</small>
                                </div>
                            </a>
                        </figure>
                        <ul>
                            <li>
                                <a href="author.html" className="author">
                                    <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                        <figure>
                                            <img src={data.image} alt="" className="lazy" width="100" height="100"/></figure>
                                    </div>
                                    <h6>{data.authorName}</h6>
                                </a>
                            </li>
                            <li style={{ color: 'rgb(181, 198, 204)' }}>
                                <a href="#0" className="wish_bt"><i className="bi bi-heart-fill"></i></a> 50
                            </li>
                        </ul>
                    </div>
                    </Link>
                </div>
                
          ))}
                
       
            </div>
    
            <div className="pagination_fg mb-4">
                <a href="#">«</a>
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">»</a>
            </div>
        </div>
  
    </main>
        
        </>
    )
}

export default GridListing;