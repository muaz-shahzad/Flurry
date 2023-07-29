import { useEffect, useState } from "react";
import '../../assets/style/home.css';
import '../../assets/style/particles.css';
import '../../assets/style/bootstrap.min.css';
import Twitter from "../../assets/images/twitter_icon.svg";
import Facebook from "../../assets/images/facebook_icon.svg";
import Instagram from "../../assets/images/instagram_icon.svg";
import Youtube from "../../assets/images/youtube_icon.svg";

const Footer = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
		  if (window.pageYOffset > 300) {
			setShowButton(true);
		  } else {
			setShowButton(false);
		  }
		});
	  }, []);
	
	  // This function will scroll the window to the top 
	  const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  behavior: 'smooth' // for smoothly scrolling
		});
	  };
    return (
        <>

       <footer>
	  
	   {showButton && (
	   <div onClick={scrollToTop} id="toTop" className="visible"></div>
	      )}
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6 col-sm-6">
					<h3>Marketplace</h3>
					<div className="links">
						<ul>
							<li><a href="#" className="text-decoration-none">Home</a></li>
							<li><a href="#" className="text-decoration-none">Explore</a></li>
							<li><a href="#" className="text-decoration-none">Login</a></li>
							<li><a href="#" className="text-decoration-none">Register</a></li>
							<li><a href="#" className="text-decoration-none">Contacts</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<h3>Useful Links</h3>
					<div className="links">
						<ul>
							<li><a href="#" className="text-decoration-none">Help Center</a></li>
							<li><a href="#" className="text-decoration-none">Connect Wallet</a></li>
							<li><a href="#" className="text-decoration-none">Faq</a></li>
							<li><a href="#" className="text-decoration-none">Become an Author</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<h3>Resources</h3>
					<div className="links">
						<ul>
							<li><a href="#" className="text-decoration-none">Blog</a></li>
							<li><a href="#" className="text-decoration-none">Community</a></li>
							<li><a href="#" className="text-decoration-none">Best Price</a></li>
							<li><a href="#" className="text-decoration-none">Latest Submissions</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<h3>Keep in touch</h3>
					<div id="newsletter">
						<div id="message-newsletter"></div>
						<form method="post" name="newsletter_form" id="newsletter_form">
							<div className="form-group">
								<input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email"/>
								<button type="submit" id="submit-newsletter"><i className="bi bi-chevron-right"></i></button>
							</div>
						</form>
					</div>
					<div className="follow_us">
						<ul>
							<li>
								<a href="#0"><img src={Twitter} data-src={Twitter} alt="" className="lazy error" data-was-processed="true" /></a>
							</li>
							<li>
								<a href="#0"><img src={Facebook} data-src={Facebook} alt="" className="lazy error" data-was-processed="true" /></a>
							</li>
							<li>
								<a href="#0"><img src={Instagram} data-src={Instagram} alt="" className="lazy error" data-was-processed="true" /></a>
							</li>
							<li>
								<a href="#0"><img src={Youtube} data-src={Youtube} alt="" className="lazy error" data-was-processed="true" /></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
	
			<hr />
			<div className="row add_bottom_25">
				<div className="col-md-6">
					<ul className="footer-selector clearfix">
						<li>
							<div className="styled-select lang-selector">
								<select>
									<option value="English" selected="">English</option>
									<option value="French">French</option>
									<option value="Spanish">Spanish</option>
									<option value="Russian">Russian</option>
								</select>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-md-6">
					<ul className="additional_links">
						<li><a href="#" className="text-decoration-none">Terms and conditions</a></li>
						<li>© 2022 Magellano</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
        </>
    )
}

export default Footer;