import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const banner = "/images/banner.png"
const banner1 = "/images/banner1.png"

const NextJsCarousel = () => {

    return (
        <div className="">
            <Carousel
                showThumbs={false}
                emulateTouch={true}
                showArrows={false}
                infiniteLoop={true}
                interval={3000}
                autoPlay={true}
                renderIndicator={
                    (clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
                        isSelected: boolean,
                        index: number,
                        label: string) => {

                        if (isSelected) {
                            return (
                                <li className="bg-[#475569] rounded-xl w-[36px] h-[12px] cursor-pointer inline-flex mx-2" />
                            );
                        }
                        return (
                            <li
                                onClick={clickHandler}
                                className="bg-[#94A3B8] rounded-xl w-[12px] h-[12px] inline-flex mx-2 cursor-pointer"
                                value={index}
                                key={index}
                                role="button"
                                tabIndex={0}
                                
                            />
                        );
                    }
                }
            >
                <div>
                    <img src={banner1} alt="image1" />
                </div>
                <div>
                    <img src={banner1} alt="image2" />
                </div>
                <div>
                    <img src={banner1} alt="image3" />
                </div>
                <div>
                    <img src={banner1} alt="image4" />
                </div>
            </Carousel>
        </div>
    );
};

export default NextJsCarousel;
