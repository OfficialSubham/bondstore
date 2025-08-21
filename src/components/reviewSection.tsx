import { useNavigate } from "react-router-dom";
import { FewReviews } from "./reviews";

export default function ReviewSection({ items }: { items: number[] }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-80 flex flex-col items-center snap-x snap-mandatory overflow-hidden">
      <div className="w-30 text-center font-toreadore text-xl font-bold leading-5 tracking-widest">
        Reviews & Ratings
      </div>
      <div className="flex-1 w-full flex gap-6 items-center px-2 overflow-x-scroll scroll-smooth scrollbar-hidden">
        {items.map((_, i) => (
          <FewReviews key={i} />
        ))}
      </div>
      <button
        className="bg-black text-white rounded-md hover:bg-transparent border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
        onClick={() => {
          navigate("/reviews");
        }}
      >
        View All Reviews
      </button>
    </div>
  );
}
