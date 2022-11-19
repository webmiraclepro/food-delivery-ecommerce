

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
                <p className="font-bold text-zinc-800 text-md xl:text-xl">{title}</p>
                <p className="text-zinc-600 text-sm xl:text-xl">{description}</p>
            </div>
        </div>
    )
}

export default CardService