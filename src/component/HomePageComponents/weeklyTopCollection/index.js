import React from "react";
import '../../../assets/style/home.css';
import '../../../assets/style/particles.css';
import '../../../assets/style/bootstrap.min.css';
import CardImage from "../../../assets/images/items/item-1.jpg"

const WeeklyTopCollection = () => {

    const datas = [
        {
            "image": CardImage,
            "cardNumber": "1",
            "firstHeading": "Ordinal Punks",
            "lastHeading": "100 total supply"
        },
        {
            "image": CardImage,
            "cardNumber": "2",
            "firstHeading": "Bitcoin Rocks",
            "lastHeading": "100 total supply"
        },
        {
            "image": CardImage,
            "cardNumber": "3",
            "firstHeading": "Planatary Ordinals",
            "lastHeading": "69 total supply"
        },
        {
            "image": CardImage,
            "cardNumber": "4",
            "firstHeading": "Oridinal Shards",
            "lastHeading": "100 total supply"
        },
        {
            "image": CardImage,
            "cardNumber": "5",
            "firstHeading": "Ordinal Penguins",
            "lastHeading": "100 total supply"
        },
        {
            "image": CardImage,
            "cardNumber": "6",
            "firstHeading": "Based Apes",
            "lastHeading": "100 total supply"
        },
        {
            "image": CardImage,
            "cardNumber": "7",
            "firstHeading": "Bitcoin Punks",
            "lastHeading": "1000 total supply"
        },
        {
            "image": CardImage,
            "cardNumber": "8",
            "firstHeading": "Ordinal Penguins",
            "lastHeading": "100 total supply"
        },
        {
            "image": CardImage,
            "cardNumber": "9",
            "firstHeading": "Ordinal Penguins",
            "lastHeading": "100 total supply"
        },
    
    
    ];

    return (
        <>
        <div className="bg_gray">
			<div className="container margin_120_90">
				<div className="main_title version_2">
					<span><em></em></span>
					<h2>Weekly Top Collections</h2>
					<p style={{color: 'rgb(181, 198, 204)'}}>Showing the top-rated collections.</p>
					<a href="#0" className="text-decoration-none">View All <i className="bi bi-arrow-right"></i></a>
				</div>
	

				<div className="row author_list">
                {datas?.map((data,index) => (
                <div key={index} className="col-lg-4 col-md-6" data-cue="slideInUp" data-show="true" style={{ animationName: 'slideInUp', animationDuration: '300ms', animationTimingFunction: 'ease', animationDelay: '0m', animationDirection: 'normal', animationFillMode: 'both' }}>
						<a href="author.html" className="text-decoration-none author">
							<strong>{data.cardNumber}</strong>
							<div className="author_thumb veryfied">
								<i className="bi bi-check"></i>
								<figure>
									<img src={data.image} data-src={data.image} alt="" className="lazy loaded" width="100" height="100" data-was-processed="true" />
								</figure>
							</div>
							<div>
								<h6 >{data.firstHeading}</h6>
								<span>{data.lastHeading}</span>
							</div>
						</a>
					</div>
                         ))}

				</div>
	

				<div className="banner mt-5 lazy" data-bg="url(img/banner_bg.jpg)">
					<div className="d-flex align-items-center opacity-mask justify-content-between p-5"
						data-opacity-mask="rgba(0, 0, 0, 0.2)">
						<div>
							<small>Add your collection</small>
							<h3>Get Verified on Flurry</h3>
							<p>List your collection and get verified your Ordinals NFT collections on Flurry!</p>
						</div>
						<div><a href="become-author.html" className="btn_1 medium pulse_bt">Get Verified</a></div>
					</div>
		
				</div>
	

			</div>
	
		</div>
        </>
    )
}

export default WeeklyTopCollection;