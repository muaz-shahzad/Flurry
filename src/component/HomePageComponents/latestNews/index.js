import React from "react";
import '../../../assets/style/home.css';
import '../../../assets/style/particles.css';
import '../../../assets/style/bootstrap.min.css';
import BlogImage from "../../../assets/images/blog-5.jpg"


const LatestNews = () => {
    return (
        <div className="bg-latestinspiration">
     <div className="container margin_120_90">
			<div className="main_title version_2">
				<span><em></em></span>
				<h2>Latest News</h2>
				<p style={{color: 'rgb(181, 198, 204)'}}>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
				<a href="#0" className="text-decoration-none">View All <i className="bi bi-arrow-right"></i></a>
			</div>
			

			<div className="row">
				<div className="col-lg-4" data-cue="slideInUp" data-show="true" style={{ animationName: 'slideInUp', animationDuration: '300ms', animationTimingFunction: 'ease', animationDelay: '0m', animationDirection: 'normal', animationFillMode: 'both' }}>
					<article className="blog">
						<figure>
							<a href="blog-post.html"><img src={BlogImage} data-src="img/blog-5.jpg" alt="" className="lazy loaded" width="800" height="533" data-was-processed="true"/>
							</a>
						</figure>
						<div className="post_info">
							<small>Category - 20 Nov. 2021</small>
							<h2><a href="blog-post.html" className="text-decoration-none">Ea exerci option hendrerit</a></h2>
							<p style={{color: 'rgb(181, 198, 204)'}}>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos
								quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
							<ul>
								<li>
									<div className="thumb"><img src={BlogImage} data-src="img/avatar2.jpg" className="lazy loaded" alt="" width="68" height="68" data-was-processed="true"/></div> Admin
								</li>
								<li><i className="bi bi-chat"></i>20</li>
							</ul>
						</div>
					</article>
				
				</div>
				<div className="col-lg-4" data-cue="slideInUp" data-show="true" style={{ animationName: 'slideInUp', animationDuration: '300ms', animationTimingFunction: 'ease', animationDelay: '0m', animationDirection: 'normal', animationFillMode: 'both' }}>
					<article className="blog">
						<figure>
							<a href="blog-post.html"><img src={BlogImage} data-src="img/blog-4.jpg" alt="" className="lazy loaded" width="800" height="533" data-was-processed="true"/>
							</a>
						</figure>
						<div className="post_info">
							<small>Category - 20 Nov. 2021</small>
							<h2><a href="blog-post.html" className="text-decoration-none">At usu sale dolorum offendit</a></h2>
							<p style={{color: 'rgb(181, 198, 204)'}}>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos
								quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
							<ul>
								<li>
									<div className="thumb"><img src={BlogImage} data-src="img/avatar2.jpg" className="lazy loaded" alt="" width="68" height="68" data-was-processed="true"/></div> Admin
								</li>
								<li><i className="bi bi-chat"></i>20</li>
							</ul>
						</div>
					</article>
					
				</div>
				<div className="col-lg-4" data-cue="slideInUp" data-show="true" style={{ animationName: 'slideInUp', animationDuration: '300ms', animationTimingFunction: 'ease', animationDelay: '0m', animationDirection: 'normal', animationFillMode: 'both' }}>
					<article className="blog">
						<figure>
							<a href="blog-post.html"><img src={BlogImage} data-src="img/blog-6.jpg" alt="" className="lazy loaded" width="800" height="533" data-was-processed="true"/>
							</a>
						</figure>
						<div className="post_info">
							<small>Category - 20 Nov. 2021</small>
							<h2><a href="blog-post.html" className="text-decoration-none">Iusto nominavi petentium in</a></h2>
							<p style={{color: 'rgb(181, 198, 204)'}}>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos
								quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
							<ul>
								<li>
									<div className="thumb"><img src={BlogImage} data-src="img/avatar2.jpg" className="lazy loaded" alt="" width="68" height="68" data-was-processed="true"/></div> Admin
								</li>
								<li><i className="bi bi-chat"></i>20</li>
							</ul>
						</div>
					</article>
					
				</div>
			</div>
			
		</div>
        </div>
    )
}

export default LatestNews;