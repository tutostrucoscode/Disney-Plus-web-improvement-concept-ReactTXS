import React, { useEffect, useRef, useState } from "react";
import ApiMovie from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
const SCREEN_WIDTH = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    ApiMovie.getTrendingVideo.then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  const sliderRight = (element: any) => {
    element.scrollLeft += SCREEN_WIDTH - 110;
  };
  const sliderLeft = (element: any) => {
    element.scrollLeft -= SCREEN_WIDTH - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item: any) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
