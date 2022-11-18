type CardOrderProps = {
    caption: string,
    title: string,
    description: string,
    cardnumber: string
}

const cardIconl = "/images/cardiconl.png"
const cardIconr = "/images/cardiconr.png"

const CardOrder = ({caption, title, description, cardnumber}: CardOrderProps) => {
    return (
        <div className="flex flex-col w-[320px] h-[137px] bg-order-card bg-no-repeat mx-auto">
            <div className="px-4 pt-4 text-3xl font-bold text-pink-caption">{caption}</div>
            <div className="px-4 pt-1 text-xl font-bold">{title}</div>
            <div className="px-3 pt-1 text-base ">{description}</div>
            <div className="flex flex-row items-center px-3 space-x-2">
                <img src={cardIconl} alt="cardiconleft" className="w-[12px] h-[12px]"/>
                <div>{cardnumber}</div>
                <img src={cardIconr} alt="cardiconright" className="w-[12px] h-[12px]" />
            </div>
        </div>
    )
}

export default CardOrder