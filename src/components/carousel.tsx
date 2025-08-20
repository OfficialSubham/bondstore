import React, { useState, useEffect, useRef, useCallback } from "react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Discover Amazing Places",
    subtitle: "Adventure Awaits",
    description:
      "Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.",
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "Start Your Journey",
  },
  {
    id: 2,
    title: "Modern Technology Solutions",
    subtitle: "Innovation at Its Best",
    description:
      "Transform your business with cutting-edge technology solutions designed for the digital age.",
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "Culinary Excellence",
    subtitle: "Taste the Difference",
    description:
      "Experience extraordinary flavors crafted by world-class chefs using the finest ingredients.",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "View Menu",
  },
  {
    id: 4,
    title: "Wellness & Relaxation",
    subtitle: "Find Your Balance",
    description:
      "Rejuvenate your mind, body, and soul with our comprehensive wellness programs and spa services.",
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "Book Now",
  },
  {
    id: 5,
    title: "Creative Workspace",
    subtitle: "Where Ideas Come to Life",
    description:
      "Join a vibrant community of creators and innovators in our state-of-the-art collaborative spaces.",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "Get Started",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch/swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isAutoPlaying]);

  return (
    <div className="relative w-full md:w-100 mx-auto h-100 overflow-hidden rounded-2xl shadow-2xl group">
      {/* Main carousel container */}
      <div
        ref={carouselRef}
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative w-full h-full flex-shrink-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

              {/* Slide content */}
              <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
                <div className="text-white max-w-2xl space-y-4 animate-fade-in">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    {slide.subtitle}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                    {slide.description}
                  </p>
                  <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
