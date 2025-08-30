import { useRecoilValue } from "recoil";
import Reviews from "../components/reviews";
import { reviewState } from "../store/reviewState";
import { FacebookIcon, Instagram } from "lucide-react";

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
        <div className="flex justify-center gap-2">
          <button className="bg-black text-white rounded-md hover:bg-transparent border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore">
            <a
              target="_blank"
              href="https://www.facebook.com/share/1642eVqdPZ"
              className="cursor-pointer hover:underline gap-1 flex items-center"
            >
              <FacebookIcon height={15} />
              Facebook
            </a>
          </button>
          <button className="bg-black text-white rounded-md hover:bg-transparent border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore">
            <a
              target="_blank"
              href="https://www.instagram.com/bondstore_official"
              className="cursor-pointer items-center gap-1 flex hover:underline"
            >
              <Instagram height={15} />
              Instagram
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default AllReviews;
