const heartIcon = '/images/heart.png'
const plusIcon = '/images/add.png'

const CardCoupon = (props: any) => {
    const { heartNumber, foodIcon, title, description, price } = props;
    return (
        <div className=" w-[200px] h-[280px] flex flex-col rounded-lg bg-white shadow-[0px_1px_9px_rgba(0,0,0,0.1)] justify-center">
            <img src={heartIcon} alt="heartIcon" className="ml-auto pr-1" />
            <div className="ml-auto pr-1">{heartNumber}</div>
            <img src={foodIcon} alt="foodIcon" className="w-[120px] h-[80px] mx-auto" />
            <div className="text-xl font-bold pl-2">{title}</div>
            <div className="pl-2"> {description}</div>
            <div className="flex flex-row items-center justify-between pt-4">
                <span className="text-xl pl-2">${price}</span>
                <img src={plusIcon} alt="addIcon" className="cursor-pointer" />
            </div>

        </div>
    )
}

export default CardCoupon