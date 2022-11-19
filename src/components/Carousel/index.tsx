import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const banner = "/images/banner.png"
const banner1 = "/images/banner1.png"

const NextJsCarousel = () => {

    return (
        <div className="h-full px-5 xl:px-0 pt-5 xl:pt-0 rounded-lg xl:rounded-none">
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
                                <li className="bg-pink-caption xl:bg-slate-600 rounded-xl w-[24px] xl:w-[36px] h-[8px] xl:h-[12px] cursor-pointer inline-flex mx-1 xl:mx-2" />
                            );
                        }
                        return (
                            <li
                                onClick={clickHandler}
                                className="bg-white xl:bg-slate-400 rounded-xl w-[8px] h-[8px] xl:w-[12px] xl:h-[12px] inline-flex mx-1 xl:mx-2 cursor-pointer"
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
                    <img className='h-[150px] xl:h-auto rounded-xl xl:rounded-none' src={banner1} alt="image1" />
                </div>
                <div>
                    <img className='h-[150px] xl:h-auto rounded-xl xl:rounded-none' src={banner1} alt="image2" />
                </div>
                <div>
                    <img className='h-[150px] xl:h-auto rounded-xl xl:rounded-none' src={banner1} alt="image3" />
                </div>
                <div>
                    <img className='h-[150px] xl:h-auto rounded-xl xl:rounded-none' src={banner1} alt="image4" />
                </div>
            </Carousel>
        </div>
    );
};

export default NextJsCarousel;
