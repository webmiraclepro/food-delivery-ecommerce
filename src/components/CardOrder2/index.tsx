type CardOrderProps = {
    caption: string,
    title: string,
    description: string,
}

const arrowright = "/images/ArrowRightOutline.png"
const coupon = '/images/coupon.png'
const line = '/images/line1.png'

const CardOrder2 = ({ caption, title, description }: CardOrderProps) => {
    return (
        <div className="flex flex-col min-w-[200px] min-h-[210px] w-fit bg-coupon-card bg-no-repeat bg-[length:100%_100%] rounded-lg">
            <div className="flex flex-row items-center h-1/2">
                <img src={coupon} alt="coupon" className="px-5" />
                <div className="flex flex-col">
                    <div className="px-1 text-3xl font-bold text-pink-caption">{caption}</div>
                    <div className="px-1 pt-1 text-sm text-slate-900 font-bold">{title}</div>
                </div>
            </div>
            {/* <div className="border-dashed border border-gray-200 px-10"></div> */}
            <img src={line} className="w-fit" alt="div line"/>
            <div className="flex flex-col h-1/2">
                <div className="px-3 py-5 text-xs text-slate-600 font-medium">{description}</div>
                <div className="flex flex-row items-center px-3 py-1">
                    <span className="ml-auto inline-flex">Claim<img src={arrowright} /></span>
                </div>
            </div>
        </div>
    )
}

export default CardOrder2