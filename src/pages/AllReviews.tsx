import { useRecoilValue } from "recoil";
import Reviews from "../components/reviews";
import { reviewState } from "../store/reviewState";

const AllReviews = () => {
  const reviews = useRecoilValue(reviewState);
  return (
    <>
      <div className="grid gap-2 mx-auto grid-cols-2 md:grid-cols-3">
        {reviews.map((review) => {
          return (
            <Reviews
              key={review.reviewId}
              name={review.name}
              rating={review.rating}
              review={review.review}
            />
          );
        })}
      </div>
      <div className="text-center mx-auto flex flex-col gap-2">
        For more reviews visit instagram
        <button className="bg-black text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore">
          <a
            href="https://www.instagram.com/bondstore_official"
            target="_blank"
          >
            Visit
          </a>
        </button>
      </div>
    </>
  );
};

export default AllReviews;
