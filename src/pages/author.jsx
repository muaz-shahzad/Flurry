import React, {useState} from "react";
import '../assets/style/author.css';
import '../assets/style/style.css';
import '../assets/style/bootstrap.min.css';
import herobg from "../assets/images/hero_general.jpg";
import Aavator from "../assets/images/avatar2.jpg";
import itemPlaceholder from "../assets/images/items/item-7.gif";

const Author = () => {
    const [created, setCreated] = useState(true);
    const [onsite, setOnsite] = useState(false);
    const [following, setFollowing] = useState(false);
    const [followers, setFollowers] = useState(false);

    const createdHandler = () => {
        setCreated(true);
        setOnsite(false);
        setFollowing(false);
        setFollowers(false);
      };
      const onsiteHandler = () => {
       setCreated(false);
        setOnsite(true);
        setFollowing(false);
        setFollowers(false);
      };
      const followingHandler = () => {
        setCreated(false);
         setOnsite(false);
         setFollowing(true);
         setFollowers(false);
       };
        const followersHandler = () => {
        setCreated(false);
         setOnsite(false);
         setFollowing(false);
         setFollowers(true);
       };


    const datas = [
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "3.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "3.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "3.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "3.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "3.25 ETH"
        },
        {
            "image": itemPlaceholder,
            "authorName": "@George_lucas",
            "firstHeading": "Amazing Art",
            "lastHeading": "3.25 ETH"
        },



    ];
    return (
        <>
            <main className="author-bg">
                <div className="author-top-bg"></div>
                <div className="hero_single inner_pages author_page jarallax" data-jarallax>
                    <img className="jarallax-img" src={herobg} alt="" />
                    <div className="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.4)"></div>
                    <div className="wave hero"></div>
                </div>


                <div className="container margin_30_40 ">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="main_profile">
                                <div className="author">
                                    <div className="author_thumb veryfied">
                                        <i className="bi bi-check"></i>
                                        <figure>
                                            <img src={Aavator} data-src={Aavator} alt="" className="lazy" width="100" height="100" />
                                        </figure>
                                    </div>
                                </div>
                                <h1>@George_lucas</h1>
                                <p className="author_number">Ox465d53...9df5 <a href="#0"><i className="bi bi-clipboard"></i></a></p>
                                <p style={{ color: 'rgb(181, 198, 204)' }}>Pri ei solet eripuit, et nam decore tacimates persequeris. Te nec duis corpora persequeris.</p>
                                <p>
                                    <a href="#0" className="btn_1 full-width mb-2">Follow</a>
                                    <a href="#0" className="btn_1 full-width outline">Send a message</a>
                                </p>
                                <ul style={{ color: 'rgb(181, 198, 204)' }}>
                                    <li>Followers <span>120</span></li>
                                    <li>Following <span>56</span></li>
                                    <li>Likes Received <span>450</span></li>
                                    <li>Created <span>36</span></li>
                                </ul>
                                <small style={{ color: 'rgb(181, 198, 204)' }}>Member since July 25 2021</small>
                                <div className="follow_buttons">
                                    <ul>
                                        <li><a href="#0"><i className="bi bi-instagram"></i></a></li>
                                        <li><a href="#0"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="#0"><i className="bi bi-twitter"></i></a></li>
                                        <li><a href="#0"><i className="bi bi-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 ps-lg-5">
                           
                       
                            <div className="tabs_detail">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" onClick={createdHandler}>
                                        <a  className="nav-link"  style={{ color: created ? "white" : "gray" , borderBottom: created ? "1px solid white" : "1px solid transparent" }} >Created</a>
                                    </li>
                                    <li className="nav-item" onClick={onsiteHandler}>
                                        <a  className="nav-link"  style={{ color: onsite ? "white" : "gray" , borderBottom: onsite ? "1px solid white" : "1px solid transparent"}} >On Sale</a>
                                    </li>
                                    <li className="nav-item" onClick={followingHandler}>
                                        <a  className="nav-link"  style={{ color: following ? "white" : "gray" , borderBottom: following ? "1px solid white" : "1px solid transparent"}} >Following</a>
                                    </li>
                                    <li className="nav-item" onClick={followersHandler}>
                                        <a  className="nav-link"  style={{ color: followers ? "white" : "gray" , borderBottom: followers ? "1px solid white" : "1px solid transparent"}} >Followers</a>
                                    </li>
                                </ul>
                                <div className="tab-content" role="tablist">
                                    <div id="pane-A" className="card tab-pane fade show active" role="tabpanel">
                                        <div className="card-header" role="tab" id="heading-A">
                                            <h5>
                                                <a className="collapsed" data-bs-toggle="collapse" href="#collapse-A">
                                                    Created
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-A" className="collapse" role="tabpanel">
                                        {created && (
                                            <div className="row mt-lg-5 mt-3">

                                                {datas?.map((data,index) => (
                                                    <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                                        <div className="strip">
                                                            <figure>
                                                                <a href="#modal-dialog" className="btn_1 modal_popup">Place a bid</a>
                                                                <img src={data.image} data-src={data.image} className="lazy" alt="" width="533" height="400" />
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
                                                                                <img src={data.image} data-src={data.image} alt="" className="lazy" width="100%" height="100%" /></figure>
                                                                        </div>
                                                                        <h6 className="text-decoration-none">{data.authorName}</h6>
                                                                    </a>
                                                                </li>
                                                                <li style={{ color: 'rgb(181, 198, 204)' }}>
                                                                    <a href="#0" className="wish_bt" ><i className="bi bi-heart-fill"></i></a> 50
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}


                                            {onsite && (
                                            <div className="row mt-lg-5 mt-3">

                                                {datas?.map((data,index) => (
                                                    <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                                        <div className="strip">
                                                            <figure>
                                                                <a href="#modal-dialog" className="btn_1 modal_popup">Place a bid</a>
                                                                <img src={data.image} data-src={data.image} className="lazy" alt="" width="533" height="400" />
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
                                                                                <img src={data.image} data-src={data.image} alt="" className="lazy" width="100%" height="100%" /></figure>
                                                                        </div>
                                                                        <h6 className="text-decoration-none">{data.authorName}</h6>
                                                                    </a>
                                                                </li>
                                                                <li style={{ color: 'rgb(181, 198, 204)' }}>
                                                                    <a href="#0" className="wish_bt" ><i className="bi bi-heart-fill"></i></a> 50
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                            {following && (
                               <div id="collapse-C" className="collapse" role="tabpanel">
                               <div className="follow_list mt-lg-3">
                                   <ul>
                                       <li>
                                           <div className="author">
                                               <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                                   <figure>
                                                       <img src={itemPlaceholder} data-src="img/avatar1.jpg" alt="" className="lazy loaded" width="100" height="100" data-was-processed="true" /></figure>
                                               </div>
                                               <div>
                                                   <h6>@George_lucas</h6>
                                                   <a href="#0">Unfollow</a>
                                               </div>
                                           </div>
                                           <div className="thumbs_artwork">
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_1.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_2.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_3.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_4.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                           </div>
                                       </li>
                                       <li>
                                           <div className="author">
                                               <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                                   <figure>
                                                       <img src={itemPlaceholder} data-src="img/avatar1.jpg" alt="" className="lazy loaded" width="100" height="100" data-was-processed="true" /></figure>
                                               </div>
                                               <div>
                                                   <h6>@George_lucas</h6>
                                                   <a href="#0">Unfollow</a>
                                               </div>
                                           </div>
                                           <div className="thumbs_artwork">
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_1.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_2.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_3.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_4.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                           </div>
                                       </li>
                                       <li>
                                           <div className="author">
                                               <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                                   <figure>
                                                       <img src={itemPlaceholder} data-src="img/avatar1.jpg" alt="" className="lazy loaded" width="100" height="100" data-was-processed="true" /></figure>
                                               </div>
                                               <div>
                                                   <h6>@George_lucas</h6>
                                                   <a href="#0">Unfollow</a>
                                               </div>
                                           </div>
                                           <div className="thumbs_artwork">
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_1.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_2.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_3.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_4.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                           </div>
                                       </li>
                                   </ul>
                               </div>
                             
                           </div>
                                             )}



                            {followers && (
                               <div id="collapse-C" className="collapse" role="tabpanel">
                               <div className="follow_list mt-lg-3">
                                   <ul>
                                       <li>
                                           <div className="author">
                                               <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                                   <figure>
                                                       <img src={itemPlaceholder} data-src="img/avatar1.jpg" alt="" className="lazy loaded" width="100" height="100" data-was-processed="true" /></figure>
                                               </div>
                                               <div>
                                                   <h6>@George_lucas</h6>
                                                   <a href="#0">Unfollow</a>
                                               </div>
                                           </div>
                                           <div className="thumbs_artwork">
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_1.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_2.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_3.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_4.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                           </div>
                                       </li>
                                       <li>
                                           <div className="author">
                                               <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                                   <figure>
                                                       <img src={itemPlaceholder} data-src="img/avatar1.jpg" alt="" className="lazy loaded" width="100" height="100" data-was-processed="true" /></figure>
                                               </div>
                                               <div>
                                                   <h6>@George_lucas</h6>
                                                   <a href="#0">Unfollow</a>
                                               </div>
                                           </div>
                                           <div className="thumbs_artwork">
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_1.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_2.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_3.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_4.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                           </div>
                                       </li>
                                       <li>
                                           <div className="author">
                                               <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                                   <figure>
                                                       <img src={itemPlaceholder} data-src="img/avatar1.jpg" alt="" className="lazy loaded" width="100" height="100" data-was-processed="true" /></figure>
                                               </div>
                                               <div>
                                                   <h6>@George_lucas</h6>
                                                   <a href="#0">Unfollow</a>
                                               </div>
                                           </div>
                                           <div className="thumbs_artwork">
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_1.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_2.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_3.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                               <figure>
                                                   <img src={itemPlaceholder} data-src="img/follow_list_pic_4.jpg" alt="" className="lazy img-fluid loaded" width="220" height="170" data-was-processed="true"/>
                                               </figure>
                                           </div>
                                       </li>
                                   </ul>
                               </div>
                             
                           </div>
                                             )}
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}

export default Author;