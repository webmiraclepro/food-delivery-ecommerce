
import Slider from "react-slick";
import NextJsCarousel from "../../components/Carousel";
import CardService from "../../components/CardService";
import CardOrder from "../../components/CardOrder";
import Arrow from "../../components/Arrow";

const deliveryIcon = "/images/delivery.png"
const cashIcon = "/images/cash.png"
const checkIcon = "/images/check.png"
const orderIcon = "/images/order.png"
const nextArrow = '/images/rightarrow.png'
const prevArrow = '/images/leftarrow.png'

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow arrowIcon={nextArrow} />,
    prevArrow: <Arrow arrowIcon={prevArrow} />
};

export default function HomePage() {

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <NextJsCarousel />
            <div id="#cardservice" className='flex flex-row py-10 justify-around w-full'>
                <CardService icon={deliveryIcon} title="Fast Delivery" description="Fastest Delivery in Birmingham" />
                <CardService icon={cashIcon} title="Card & Cash" description="Pay by cash or card" />
                <CardService icon={checkIcon} title="Mouth Watering" description="Quality Food & Taste" />
                <CardService icon={orderIcon} title="Easy to order" description="fast and easy order process" />
            </div>

            <div className="w-[90%]">
                <Slider {...settings}>
                    <CardOrder caption="Free" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                    <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                    <CardOrder caption="Free" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                    <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                    <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                    <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                </Slider>
            </div>
        </div>
    )
}
