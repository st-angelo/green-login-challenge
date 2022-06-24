import React from 'react';
import { useMemo } from 'react';
import Carousel from './common/Carousel';

const photoGroups = [
  ['./photo-1.jpg', './photo-2.jpg', './photo-3.jpg', './photo-4.jpg'],
  ['./photo-5.jpg', './photo-6.jpg', './photo-7.jpg', './photo-8.jpg'],
  ['./photo-9.jpg', './photo-10.jpg', './photo-11.jpg', './photo-12.jpg'],
];

const DropletsCarousel = () => {
  const pages = useMemo(
    () =>
      photoGroups.map((group, g_idx) => {
        return (
          <div className="flex shrink-0 basis-full justify-between px-12">
            {group.map((src, p_idx) => (
              <img
                key={`carousel-img-${g_idx}-${p_idx}`}
                src={src}
                alt={`carousel-${g_idx}-${p_idx}`}
                className={`h-[5.5rem] w-[5.5rem] cursor-pointer rounded-full border-[7px] border-white object-cover shadow-[0_5px_15px_-5px_0_8px_10px_-8px] shadow-jade-600 transition-transform first:mt-2 first:h-28 first:w-28 first:self-center last:h-28 last:w-28 last:self-start hover:scale-125 hover:shadow-[0_5px_25px_-5px_0_8px_10px_-8px] hover:shadow-jade-600 ${
                  p_idx === 1
                    ? '-mt-5 -mr-3'
                    : p_idx === 2
                    ? '-mb-4 -ml-3 self-end'
                    : ''
                }`}
              />
            ))}
          </div>
        );
      }),
    []
  );

  return <Carousel pages={pages} />;
};

export default DropletsCarousel;
