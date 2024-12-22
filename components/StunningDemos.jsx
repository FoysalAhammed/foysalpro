import React from "react";

const StunningDemos = () => {
  return (
    <>
      <div class="stunning_demos" id="demos">
        <div class="stunning_demos_cont">
          <div class="stunning_tophead">
            <h1>
              <span>50+</span> Stunning Demos
            </h1>
            <h4>
              All home pages, inner pages and elements are included with the
              purchase. Mix and blend elements from different demos as per your
              preference and create awesome store with Foysal!
            </h4>
            <div class="demos_filter_btns">
              <button class="active">All Demos</button>
              <button class="">
                <img src="/svg/premium.svg" alt="premium" />
                Premium
              </button>
              <button class="">
                <img src="/svg/css3.svg" alt="css" /> CSS Design
              </button>
              <button class="">
                <img src="/svg/ecommerce.svg" alt="ecommerce" />
                E-commerce
              </button>
              <button class="">
                <img src="/svg/movies.svg" alt="movie" />
                Movies
              </button>
              <button class="">
                <img src="/svg/gaming.svg" alt="gaming" />
                Gaming
              </button>
              <button class="">
                <img src="/svg/resume.svg" alt="resume" />
                Resume
              </button>
              <button class="">
                <img src="/svg/blog.svg" alt="blog" /> Blog
              </button>
            </div>
          </div>
          <div class="bg_light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={1920}
              height={756}
              viewBox="0 0 1920 756"
              fill="none"
            >
              <g filter="url(#filter0_f_716_1492)">
                <path
                  d="M-325 305L955.5 363L2245 305V366L955.5 450.5L-325 366V305Z"
                  fill="#00C9FF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_716_1492"
                  x={-630}
                  y={0}
                  width={3180}
                  height={755.5}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation={152.5}
                    result="effect1_foregroundBlur_716_1492"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default StunningDemos;
