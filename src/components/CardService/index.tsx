

type CardServiceProps = {
    icon: string,
    title: string,
    description: string
}

const CardService = ({ icon, title, description }: CardServiceProps) => {
    return (
        <div className='flex flex-row items-center justify-center'>
            <img src={icon} className="fast delivery" />
            <div className="flex flex-col px-2">
                <p className="font-bold text-zink-800 text-xl">{title}</p>
                <p className="text-zink-600">{description}</p>
            </div>
        </div>
    )
}

export default CardService