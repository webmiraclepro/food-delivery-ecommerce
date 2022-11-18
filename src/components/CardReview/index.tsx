import StarRatings from 'react-star-ratings';

const CardReview = (props: any) => {
    const { person, rating, review } = props
    return (
        <div className="flex flex-col border border-solid border-[#E4E4E7] p-4 rounded-xl">
            <div className="flex flex-row items-center justify-between">
                <div className="text-xl font-bold">{person}:</div>
                <div>

                    <StarRatings
                        rating={rating}
                        starRatedColor="#FBBF24"
                        numberOfStars={5}
                        starDimension="16px"
                        starSpacing='2px'
                        name='rating'
                    />
                </div>
            </div>

            <div className='text-gray-400 text-base py-2'>{review}</div>
        </div>
    )
}

export default CardReview;