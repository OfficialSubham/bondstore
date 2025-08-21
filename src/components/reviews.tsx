const Reviews = () => {
  return (
    <div
      className={`carousel-item h-55 sm:w-40 snap-center flex-shrink-0 flex flex-col gap-2 md:w-58 md:h-50 font-toreadore transition-transform duration-300 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.2),0_-2px_10px_rgba(0,0,0,0.1)] p-2`}
    >
      <h1>
        Name : <br />
        <span className="text-xs"> Subham Mondal</span>
      </h1>
      <h2>
        Review: <br />
        <div className="text-xs tracking-tight leading-4">
          This store is very good and had suitable enviroment. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Recusandae, velit possimus
          corporis sequi quia
        </div>
      </h2>
      <h4>Rating : 4/5</h4>
    </div>
  );
};

export const FewReviews = () => {
  return (
    <div
      className={`carousel-item h-55 w-60 snap-center flex-shrink-0 flex flex-col gap-2 md:w-58 md:h-50 font-toreadore transition-transform duration-300 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.2),0_-2px_10px_rgba(0,0,0,0.1)] p-2`}
    >
      <h1>
        Name : <br />
        <span className="text-xs"> Subham Mondal</span>
      </h1>
      <h2>
        Review: <br />
        <div className="text-xs tracking-tight leading-4">
          This store is very good and had suitable enviroment. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Recusandae, velit possimus
          corporis sequi quia
        </div>
      </h2>
      <h4>Rating : 4/5</h4>
    </div>
  );
};

export default Reviews;
