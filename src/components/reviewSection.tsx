import { useNavigate } from "react-router-dom";

export default function ReviewSection({ items }: { items: number[] }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-80 flex flex-col items-center snap-x snap-mandatory overflow-hidden">
      <div className="w-30 text-center font-toreadore text-xl font-bold leading-5 tracking-widest">
        Reviews & Ratings
      </div>
      <div className="flex-1 w-full flex gap-6 items-center px-2 overflow-x-scroll scroll-smooth scrollbar-hidden">
        {items.map((_, i) => (
          <div
            key={i}
            data-index={i}
            className={`carousel-item h-[80%] w-60 snap-center flex-shrink-0 transition-transform duration-300 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.4),0_-2px_10px_rgba(0,0,0,0.3)]`}
          />
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
