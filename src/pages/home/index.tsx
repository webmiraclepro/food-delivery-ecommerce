
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'
import NextJsCarousel from "../../components/Carousel";
import CardService from "../../components/CardService";
import CardOrder from "../../components/CardOrder";
import Arrow from "../../components/Arrow";
import CardCoupon from "../../components/CardCoupon";
import CardReview from "../../components/CardReview";
import CardOrder2 from "../../components/CardOrder2";
import CardCoupon2 from "../../components/CardCoupon2";

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

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className='flex flex-col items-center w-full bg-gray-50 xl:bg-white'>
            <NextJsCarousel />
            <div className=" max-w-xl w-full flex flex-col  px-4 xl:px-10 items-center">

                <div id="#card-service" className='flex flex-row py-5 xl:py-10 justify-between w-full overflow-auto'>
                    <CardService icon={deliveryIcon} title="Fast Delivery" description="Fastest Delivery in Birmingham" />
                    <CardService icon={cashIcon} title="Card & Cash" description="Pay by cash or card" />
                    <CardService icon={checkIcon} title="Mouth Watering" description="Quality Food & Taste" />
                    <CardService icon={orderIcon} title="Easy to order" description="fast and easy order process" />
                </div>

                {
                    isDesktopOrLaptop ?
                        <div id="#card-order" className="w-full">
                            <Slider {...settings}>
                                <CardOrder caption="Free" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                                <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                                <CardOrder caption="Free" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                                <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                                <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                                <CardOrder caption="20% OFF" title="on all Orders" description="When you order $20 or over" cardnumber="AAA-98765-123" />
                            </Slider>
                        </div> :
                        <div id="#card-order-mobile" className="flex flex-row w-full overflow-auto gap-4">
                            <CardOrder2 caption="Free" title="on all Orders" description="When you order $20 or over" />
                            <CardOrder2 caption="Free" title="on all Orders" description="When you order $20 or over" />
                            <CardOrder2 caption="Free" title="on all Orders" description="When you order $20 or over" />
                            <CardOrder2 caption="Free" title="on all Orders" description="When you order $20 or over" />
                        </div>
                }
                {
                    !isDesktopOrLaptop &&
                    <div className="w-full border border-[rgba(255,255,255,0.6)] bg-white mt-5 border-solid rounded-md flex flex-row justify-center gap-4  p-5 items-center">
                        <div className="w-full bg-pink-caption rounded-md py-3 text-white text-xs text-center font-medium">Order Delivery</div>
                        <div className="w-full border border-pink-caption bg-white rounded-md text-center py-3 text-pink-caption text-xs font-medium">Order Delivery</div>
                    </div>
                }
                <div className="w-full text-2xl font-bold pt-4 xl:pt-20 pb-3 xl:pb-10">Most Wanted Foods</div>
                {
                    isDesktopOrLaptop ?

                        <div id="#card-food" className="w-full flex flex-row items-center justify-between w-full pb-12">
                            <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                            <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                            <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                            <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                            <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                            <CardCoupon heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                        </div> :
                        <div id="#card-food-mobile" className="flex flex-row w-full overflow-auto gap-4">
                            <div className="flex flex-col gap-4">
                                <CardCoupon2 heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                                <CardCoupon2 heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <CardCoupon2 heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />
                                <CardCoupon2 heartNumber={29} foodIcon={food1} title="Peperoni Pizza" description="Hot beef with fry Hot beef with fry Hot beef with fry" price="30" />

                            </div>
                        </div>
                }
                {
                    isDesktopOrLaptop &&

                    <div id="#kfc-restaurant" className="flex flex-row bg-none xl:bg-kfc-restaurant bg-no-repeat w-full p-8 items-center justify-around bg-cover rounded-2xl">
                        <div className="flex flex-col hidden xl:block">
                            <p className="font-bold text-white text-4xl py-2">Order in KFC Restourant</p>
                            <p className="text-white">Order in KFC Restourant and Order in KFC Restou</p>
                        </div>
                        <div className="border border-[rgba(255,255,255,0.6)] border-solid rounded-md flex flex-row justify-center gap-4  p-5 items-center">
                            <div className="bg-pink-caption rounded-md px-24 py-5 text-white text-lg font-medium">Order Delivery</div>
                            <div className="border-pink-caption bg-slate-600 rounded-md px-24 py-5 text-white text-lg font-medium">Order Collection</div>
                        </div>
                    </div>
                }
                <div className="w-full text-2xl font-bold pt-5 xl:pt-20 pb-5 xl:pb-10">Review Customers</div>
            </div>
                <div className="max-w-xl flex flex-row items-center justify-around gap-5 w-full overflow-auto bg-white py-4 px-0 xl:px-10 mb-5">
                    <CardReview person="Pedro Alexander" rating={2} review="Customer reviews the paid versions let you create customizable review invitations, share ratings and reviews." />
                    <CardReview person="Pedro Alexander" rating={2} review="Customer reviews the paid versions let you create customizable review invitations, share ratings and reviews." />
                    <CardReview person="Pedro Alexander" rating={2} review="Customer reviews the paid versions let you create customizable review invitations, share ratings and reviews." />
                    <CardReview person="Pedro Alexander" rating={2} review="Customer reviews the paid versions let you create customizable review invitations, share ratings and reviews." />
                </div>
        </div>
    )
}
