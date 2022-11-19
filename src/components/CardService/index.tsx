

type CardServiceProps = {
    icon: string,
    title: string,
    description: string
}

const CardService = ({ icon, title, description }: CardServiceProps) => {
    return (
        <div className='flex flex-row items-center justify-center min-w-[260px]'>
            <img src={icon} className="fast delivery" />
            <div className="flex flex-col px-2">
                <p className="font-bold text-zinc-800 text-xl">{title}</p>
                <p className="text-zinc-600">{description}</p>
            </div>
        </div>
    )
}

export default CardService