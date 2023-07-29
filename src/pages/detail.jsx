import React, { useState } from "react";
import '../assets/style/style.css';
import '../assets/style/detail-page.css';
import '../assets/style/bootstrap.min.css';
import Detailimage from "../assets/images/detail_2.jpg";

const Detail = () => {
    const [redMore, setReadMore] = useState(false);

    const [bids, setBids] = useState(true);
    const [owners, setOwners] = useState(false);
    const [info, setInfo] = useState(false);

    const bidsdHandler = () => {
        setBids(true);
        setOwners(false);
        setInfo(false);
    };
    const ownersHandler = () => {
        setBids(false);
        setOwners(true);
        setInfo(false);
    };
    const infoHandler = () => {
        setBids(false);
        setOwners(false);
        setInfo(true);
    };


    const datas = [
        {
            "image": Detailimage,
            "authorName": "@Franklin",
            "firstHeading": "0.005 ETH",
            "lastHeading": " at 12 Oct. 2:30PM"
        },
        {
            "image": Detailimage,
            "authorName": "@Monical_claus",
            "firstHeading": "0.005 ETH",
            "lastHeading": " at 12 Oct. 2:30PM"
        },
          {
            "image": Detailimage,
            "authorName": "@George_lucas",
            "firstHeading": "0.005 ETH",
            "lastHeading": " at 12 Oct. 2:30PM"
        },
 



    ];
    const datasowners = [
        {
            "image": Detailimage,
            "authorName": "@Goerge_lucas",
            "firstHeading": "Owner",
        },
        {
            "image": Detailimage,
            "authorName": "@Tomas_clue",
            "firstHeading": "Owner",
        },
        {
            "image": Detailimage,
            "authorName": "@Mark_schulz",
            "firstHeading": "Owner",
        },
 



    ];
    return (
        <>
            <main className="bg_detail-color detailPadding-top">
                <div className="border-top-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 margin_detail">

                                <div className="box_general">
                                    <img src={Detailimage} alt="" className="img-fluid" />
                                    <div className="main_info_wrapper">
                                        <div className="main_info">
                                            <div className="clearfix mb-3">
                                                <div className="item_desc">
                                                    <div className="mb-3">
                                                        <a href="author.html" className="author">
                                                            <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                                                <figure>
                                                                    <img src={Detailimage} alt="image" className="lazy loaded" width="100" height="100" data-was-processed="true" /></figure>
                                                            </div>
                                                            <h6 className="ms-1"><span>Creator</span>@Monica_Claus</h6>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="score_in">
                                                    123 Likes <a href="#0" className="wish_bt"><i className="bi bi-heart"></i></a>
                                                </div>
                                            </div>
                                            <h1 className="mb-md-2">Amazing Digital Art</h1>
                                            <p style={{ color: '#ccc' }}>Tincidunt intellegam mel ne, an eam menandri invenire euripidis. Ea quo utroque forensibus eloquentiam. Nam ad option iisque verterem, sed nemore menandri ex. Pri ei solet eripuit, et nam decore tacimates persequeris. Te nec duis corpora persequeris, vix ubique graece intellegat ea.</p>
                                            {redMore && (
                                                <div className="content_more">
                                                    <p style={{ color: '#ccc' }}>Lorem ipsum dolor sit amet, an sea eius elitr persius. Voluptaria inciderint qui in. No tollit aliquid reformidans mei, nec illum sensibus id, at has esse admodum adipisci. Et has maiestatis scriptorem. Et aeque iudico oblique ius.</p>
                                                </div>
                                            )}

                                            <a href="#0" style={{textDecoration: "none"}} onClick={() => setReadMore(!redMore)} className="show_hide">Read More</a>
                                        </div>
                                    </div>

                                </div>


                                <div className="tabs_detail">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item" onClick={bidsdHandler}>
                                            <a id="tab-A" href="#pane-A" className="nav-link" style={{ color: bids ? "white" : "gray", borderBottom: bids ? "1px solid white" : "1px solid transparent" }} data-bs-toggle="tab" role="tab">Bids</a>
                                        </li>
                                        <li className="nav-item" onClick={ownersHandler}>
                                            <a id="tab-B" className="nav-link" style={{ color: owners ? "white" : "gray", borderBottom: owners ? "1px solid white" : "1px solid transparent" }} data-bs-toggle="tab" role="tab">Owners</a>
                                        </li>
                                        <li className="nav-item" onClick={infoHandler}>
                                            <a className="nav-link" style={{ color: info ? "white" : "gray", borderBottom: info ? "1px solid white" : "1px solid transparent" }} data-bs-toggle="tab" role="tab">Additional info</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" role="tablist">
                                        {bids && (
                                            <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

                                                <div id="collapse-A" className="collapse" role="tabpanel" aria-labelledby="heading-A">
                                                    <div className="pt-4">
                                                        <div className="author_list">
                                                        {datas?.map((data,index) => (
                                                            <a key={index} href="author.html" className="author">
                                                                <div className="author_thumb veryfied">
                                                                    <i className="bi bi-check"></i>
                                                                    <figure>
                                                                        <img src={data.image} alt="image" className="lazy" width="100" height="100" />
                                                                    </figure>
                                                                </div>
                                                                <div>
                                                                    <h6>{data.firstHeading}</h6>
                                                                    <span>by <em>{data.authorName}</em>{data.lastHeading}</span>
                                                                </div>
                                                            </a>
                                                                ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {owners && (
                                            <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

                                                <div id="collapse-A" className="collapse" role="tabpanel" aria-labelledby="heading-A">
                                                    <div className="pt-4">
                                                        <div className="row author_list">
                                                            {datasowners?.map((data,index) => (
                                                       
                                                            <div key={index} className="col-lg-6">
                                                                <a href="author.html" className="author">
                                                                    <div className="author_thumb veryfied">
                                                                        <i className="bi bi-check"></i>
                                                                        <figure>
                                                                            <img src={data.image} alt="image" className="lazy loaded" width="100" height="100" data-was-processed="true" />
                                                                        </figure>
                                                                    </div>
                                                                    <div>
                                                                        <span>{data.firstHeading}</span>
                                                                        <h6>{data.authorName}</h6>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                               ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )}

                                        {info && (
                                            <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                                                <div className="pt-4">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <ul className="bullets" style={{ color: '#ccc' }}>
                                                                <li>Size <span>3000x2000px</span></li>
                                                                <li>Format <span>Tiff, Jpeg, Gif, Pdf</span></li>
                                                                <li>Token ID <span>002334</span></li>
                                                                <li>Blockchain <span>Ethereum</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>

                            </div>


                            <div className="col-xl-4 col-lg-5" id="sidebar_fixed">
                                <div className="box_bid">
                                    <h2>Bid Details</h2>
                                    <a href="#0" className="close_panel_mobile"><i className="icon_close"></i></a>
                                    <div className="item_meta">
                                        <h3>Current Bid <strong>1.31 ETH</strong><span>$2,505.36</span></h3>
                                        <p style={{color: "#ccc"}} class="countdown_in">Auctions ends in<br/><strong data-countdown="2022/03/15">00D 00:00:00</strong></p>
                                    </div>
                                    <hr style={{height: "1px" , marginTop: "30px" , marginBottom: "30px" , color: "#ccc"}} />
                                    <a href="#modal-dialog" className="btn_1 full-width mb-2 modal_popup">Place a bid</a>
                                    <a href="#" className="btn_1 full-width outline">Buy Now</a>
                                </div>

                                <ul className="share-buttons">
                                    <li><a href="#0"><i className="bi bi-instagram"></i></a></li>
                                    <li><a href="#0"><i className="bi bi-facebook"></i></a></li>
                                    <li><a href="#0"><i className="bi bi-twitter"></i></a></li>
                                    <li><a href="#0"><i className="bi bi-youtube"></i></a></li>
                                </ul>
                            </div>


                        </div>

                    </div>
                </div>
            </main>

        </>
    )
}

export default Detail;