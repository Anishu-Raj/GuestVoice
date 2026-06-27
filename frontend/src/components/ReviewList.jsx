import ReviewCard from "./ReviewCard";

function ReviewList({ reviews }) {

    return (

        <div className="grid md:grid-cols-2 gap-8">

            {

                reviews.map((review)=>(

                    <ReviewCard

                    key={review.id}

                    review={review}

                    />

                ))

            }

        </div>

    );

}

export default ReviewList;