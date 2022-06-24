import React, { useCallback } from 'react';
import { useState } from 'react';

const Carousel = ({ pages }) => {
  const [page, setPage] = useState(0);

  const handlePageChange = useCallback(idx => {
    setPage(idx);
  }, []);

  return (
    <div className="my-4 flex w-full flex-col items-center justify-center">
      <div
        className={`mb-8 flex h-40 w-full transition-transform`}
        style={{ transform: `translateX(${-100 * page}%)` }}
      >
        {pages}
      </div>
      <div className="my-4 flex items-center justify-center">
        {pages.map((_, idx) => (
          <div
            key={`carousel-handle-${idx}`}
            className="mx-1 flex w-6 justify-center"
          >
            <button
              onClick={() => handlePageChange(idx)}
              className={`h-[.7rem] w-[.7rem] transition-[padding] ${
                idx === page
                  ? 'bg-jade-600 px-3 focus:bg-jade-800'
                  : 'bg-carbon-200 focus:bg-carbon-400'
              } cursor-pointer rounded-full outline-none`}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
