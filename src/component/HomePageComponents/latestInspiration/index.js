import React from "react";
import '../../../assets/style/home.css';
import '../../../assets/style/particles.css';
import '../../../assets/style/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SliderImage from "../../../assets/images/items/item-1.jpg"

const LatestInspiration = () => {
    return (
        <div className="bg-latestinspiration">
            <div className="container margin_90_90">
                <div className="main_title center">
                    <span><em></em></span>
                    <h2>Latest Inscriptions</h2>
                </div>
                <OwlCarousel className='owl-theme navText' dots={false} navElement slideBy={1}  loop margin={20} nav={true}>
               
                    <div className='item'>
                        <div className="strip">
                            <figure>
                                <img src={SliderImage} data-src="img/items/item-1.jpg" className="owl-lazy" alt="" width="533" height="400" style={{ opacity: '1' }} />
                                <a href="detail-page.html" className="strip_info">
                                    <div className="item_title">
                                        <h3>Amazing Art</h3>
                                        <small>1500 total supply</small>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="strip">
                            <figure>
                                <img src={SliderImage} data-src="img/items/item-3.jpg" className="owl-lazy" alt="" width="533" height="400" style={{ opacity: '1' }} />
                                <a href="detail-page.html" className="strip_info">
                                    <div className="item_title">
                                        <h3>Blue sea pain</h3>
                                        <small>12345 total supply</small>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="strip">
                            <figure>
                                <img src={SliderImage} data-src="img/items/item-4.jpg" className="owl-lazy" alt="" width="533" height="400" style={{ opacity: '1' }} />
                                <a href="detail-page.html" className="strip_info">
                                    <div className="item_title">
                                        <h3>Abstraction</h3>
                                        <small>6969 Supply</small>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="strip">
                            <figure>
                                <img src={SliderImage} data-src="img/items/item-1.jpg" className="owl-lazy" alt="" width="533" height="400" style={{ opacity: '1' }} />
                                <a href="detail-page.html" className="strip_info">
                                    <div className="item_title">
                                        <h3>Amazing Art</h3>
                                        <small>1500 total supply</small>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>

                    <div className='item'>
                        <div className="strip">
                            <figure>
                                <img src={SliderImage} data-src="img/items/item-5.jpg" className="owl-lazy" alt="" width="533" height="400" style={{ opacity: '1' }} />
                                <a href="author.html" className="author">
                                </a>
                                <a href="detail-page.html" className="strip_info">
                                    <div className="item_title">
                                        <h3>The Rain Forest</h3>
                                        <small>100 total supply</small>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="strip">
                            <figure>
                                <img src={SliderImage} data-src="img/items/item-6.jpg" className="owl-lazy" alt="" width="533" height="400" style={{ opacity: '1' }} />
                                <a href="detail-page.html" className="strip_info" >
                                    <div className="item_title">
                                        <h3>The King</h3>
                                        <small>1000 total supply</small>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                          <div className='item'>
                        <div className="strip">
                            <figure>
                                <img src={SliderImage} data-src="img/items/item-1.jpg" className="owl-lazy" alt="" width="533" height="400" style={{ opacity: '1' }} />
                                <a href="detail-page.html" className="strip_info">
                                    <div className="item_title">
                                        <h3>Amazing Art</h3>
                                        <small>1500 total supply</small>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="strip">
                            <figure>
                                <img src={SliderImage} data-src="img/items/item-6.jpg" className="owl-lazy" alt="" width="533" height="400" style={{ opacity: '1' }} />
                                <a href="detail-page.html" className="strip_info" >
                                    <div className="item_title">
                                        <h3>The King</h3>
                                        <small>1000 total supply</small>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="strip">
                            <figure>
                                <img src={SliderImage} data-src="img/items/item-7.gif" className="owl-lazy" alt="" width="598" height="400" style={{ opacity: '1' }} />
                                <a href="detail-page.html" className="strip_info" >
                                    <div className="item_title">
                                        <h3>Driving to center</h3>
                                        <small>4.60 ETH</small>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="owl-nav nav navContainer"><button type="button" role="presentation" className="owl-prev"><i className="bi bi-chevron-left"></i></button><button type="button" role="presentation" className="owl-next"><i className="bi bi-chevron-right"></i></button></div>
                </OwlCarousel>
              

               

            </div>
           

        </div>
    )
}

export default LatestInspiration;