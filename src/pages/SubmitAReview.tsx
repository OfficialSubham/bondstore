import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../store/loadingState";

const SubmitAReview = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();
  const setLoading = useSetRecoilState(loadingState);
  const rating = [1, 2, 3, 4, 5];
  const [currentRating, setCurrentRate] = useState(0);
  const [review, setReview] = useState({
    name: "",
    review: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setReview((rev) => {
      return {
        ...rev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmitReview = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${BACKEND_URL}/review/createReview`, {
        name: review.name,
        rating: currentRating,
        review: review.review,
      });
      if (res.status != 200)
        return alert("Sorry there is a problem please try again later");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      alert("Review uploaded successfully");
      navigate("/");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" py-4 w-100 flex flex-col gap-2 bg-slate-300/18 p-2 rounded-md font-toreadore">
        <div>
          <h1>Name*</h1>
          <input
            type="text"
            className="bg-slate-300/40 px-2 h-8 w-full rounded-md"
            name="name"
            value={review.name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <h1>Review*</h1>
          <textarea
            className="bg-slate-300/40 h-20 w-full rounded-md px-2"
            name="review"
            value={review.review}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <h1>Rating*</h1>
          <div className="flex gap-2">
            {rating.map((rate) => {
              return (
                <div
                  className={`w-10 hover:bg-slate-300 h-10 flex items-center justify-center cursor-pointer text-white rounded-full ${
                    rate == currentRating ? "bg-sky-300" : "bg-slate-300"
                  } transition-colors duration-300`}
                  onClick={() => {
                    setCurrentRate(rate);
                  }}
                  key={rate}
                >
                  {rate}
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="bg-black mx-auto text-white rounded-md hover:bg-transparent border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
          onClick={handleSubmitReview}
        >
          Submit Your Review
        </button>
      </div>
    </div>
  );
};

export default SubmitAReview;
