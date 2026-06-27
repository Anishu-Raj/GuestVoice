function ReviewCard({ review }) {

    return (

        <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-xl font-bold">

                {review.guestName}

            </h2>

            <p className="text-yellow-500">

                {"⭐".repeat(review.rating)}

            </p>

            <p className="mt-3">

                {review.review}

            </p>

            <span

                className={`

                mt-4

                inline-block

                px-3

                py-1

                rounded-full

                text-white

                ${

                    review.sentiment==="Positive"

                    ?

                    "bg-green-500"

                    :

                    review.sentiment==="Negative"

                    ?

                    "bg-red-500"

                    :

                    "bg-yellow-500"

                }

                `}

            >

                {review.sentiment}

            </span>

        </div>

    );

}

export default ReviewCard;