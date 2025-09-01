import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { oneProductPerCategorySelector } from "../store/allProductsStore";
import { useNavigate } from "react-router-dom";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eachProductImg = useRecoilValue(oneProductPerCategorySelector);
  // auto-slide effect
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === eachProductImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3s delay
    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {eachProductImg.map((eachPro) => (
          <img
            loading="lazy"
            key={eachPro.productName}
            src={eachPro.Images[0].imgUrl}
            alt={`bag-${eachPro.productName}`}
            className="w-full h-[400px] object-contain flex-shrink-0"
            onClick={() => {
              navigate(`/product/${eachPro.productId}`);
            }}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {eachProductImg.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
