const heartIcon = '/images/heart.png'
const plusIcon = '/images/add.png'

const CardCoupon2 = (props: any) => {
    const { heartNumber, foodIcon, title, description, price } = props;
    return (
        <div className=" min-w-[304px] h-[180px] flex flex-row items-center rounded-lg bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.03)] justify-center">
            <div className="flex flex-col">
                <div className="text-base font-bold text-zinc-800 pl-2 pt-4">{title}</div>
                <div className="pl-2 text-xs text-zinc-500 pt-5"> {description}</div>
                <div className="flex flex-row items-center justify-between pt-4">
                    <div className="flex flex-row items-center gap-2">

                        <span className="text-base pl-2 text-slate-800">${price}</span>
                        <img src={heartIcon} alt="heartIcon" className="w-fit h-fit" />
                        <div className="ml-auto pr-1 text-slate-800 text-xs">{heartNumber}LIKES</div>
                    </div>
                </div>
            </div>
            <img src={foodIcon} alt="foodIcon" className="w-fit h-fit mx-auto" />
        </div>
    )
}

export default CardCoupon2