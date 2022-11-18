
import Slider from "react-slick";
import NextJsCarousel from "../../components/Carousel";
import CardService from "../../components/CardService";
import CardOrder from "../../components/CardOrder";
import Arrow from "../../components/Arrow";
import CardCoupon from "../../components/CardCoupon";

const deliveryIcon = "/images/delivery.png"
const cashIcon = "/images/cash.png"
const checkIcon = "/images/check.png"
const orderIcon = "/images/order.png"
const nextArrow = '/images/rightarrow.png'
const prevArrow = '/images/leftarrow.png'
const food1 = '/images/food1.png'

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
        <div className='flex flex-col items-center w-full'>
            <NextJsCarousel />
            <div className="flex flex-col w-full px-20 items-center">

                <div id="#card-service" className='flex flex-row py-10 justify-between w-full'>
                    <CardService icon={deliveryIcon} title="Fast Delivery" description="Fastest Delivery in Birmingham" />
                    <CardService icon={cashIcon} title="Card & Cash" description="Pay by cash or card" />
                    <CardService icon={checkIcon} title="Mouth Watering" description="Quality Food & Taste" />
                    <CardService icon={orderIcon} title="Easy to order" description="fast and easy order process" />
                </div>

                <div id="#card-order" className="w-full">
                    <Slider {...settings}>
                        <CardOrder caption="Free" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                        <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                        <CardOrder caption="Free" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                        <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                        <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                        <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                    </Slider>
                </div>
                <div className="w-full text-2xl font-bold pt-20 pb-10">Most Wanted Foods</div>
                <div id="#card-food" className="w-full flex flex-row items-center justify-between w-full pb-12">
                    <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                    <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                    <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                    <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                    <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                    <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                </div>
                <div id="#kfc-restaurant" className="flex flex-row bg-kfc-restaurant bg-no-repeat w-full p-8 items-center justify-around bg-cover">
                    <div className="flex flex-col">
                        <p className="font-bold text-white text-4xl py-2">Order in KFC Restourant</p>
                        <p className="text-white">Order in KFC Restourant and Order in KFC Restou</p>
                    </div>
                    <div className="border border-[rgba(255,255,255,0.6) border-solid  rounded-md w-[690px] h-[100px] flex flex-row justify-center space-x-4  p-5 items-center">
                        <div className="bg-[#F4894A] rounded-md px-24 py-5 text-white text-lg">Order Delivery</div>
                        <div className="bg-[#475569] rounded-md px-24 py-5 text-white text-lg ">Order Collection</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
