import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const banner = "/images/banner.png"

 const NextJsCarousel = () => {
	
		return (
			<div className="">
			<Carousel
            showThumbs={false}
            emulateTouch={true}
            showArrows={false}
            infiniteLoop={true}
            transitionTime={1000}
            >
				<div>
					<img src={banner} alt="image1"/>
				</div>
				<div>
					<img src={banner} alt="image2" />

				</div>
				<div>
					<img src={banner} alt="image3"/>

				</div>
				<div>
					<img src={banner} alt="image4"/>

				</div>
			</Carousel>
			</div>
		);
};

export default NextJsCarousel;
