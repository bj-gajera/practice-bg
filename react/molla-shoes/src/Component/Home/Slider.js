import React from "react";
import Slider from "react-slick";
import img1 from "../../images/slide-1.jpg";
import img2 from "../../images/slide-2.jpg";
import img3 from "../../images/slide-3.jpg";
import { RxArrowRight } from "react-icons/rx";
import "./Slider.css";
import { Link } from "react-router-dom";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  initialSlide: 0,
  cssEase: "linear",
  adaptiveHeight: true,
};

const HomeSlider = () => {
  let sliderList = [
    {
      id: 1,
      name: "Sneakers & Athletic Shoes",
      catogory: "Deals and Promotions",
      src: img1,
      alt: "Image Slider 1",
      price: 9.99,
    },
    {
      id: 2,
      name: "This Week's Most Wanted",
      catogory: "Trending Now",
      src: img2,
      alt: "Image Slider 2",
      price: 49.99,
    },
    {
      id: 3,
      name: "Can't-miss Clearance:",
      catogory: "Deals and Promotions",
      price: "starting at 60% off",
      src: img3,
      alt: "Image Slider 3",
    },
  ];
  return (
    <>
      <div className="homeBanner mx-4 md:mx-20 pb-8 pt-20 ">
        <Slider {...settings}>
          {sliderList.map((item, key) => {
            return (
              <div key={key}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-[78vh] md:h-[80vh]"
                ></img>
                <div className="relative text-white bottom-96 px-6 md:px-24">
                  <p className="text-2xl py-2">{item.catogory}</p>
                  <h1 className="text-5xl font-bold py-2">{item.name}</h1>
                  <p className="text-3xl"> from ${item.price}</p>

                  <Link
                    to="/product"
                    className="w-[175px] flex text-center items-center  gap-4 border-2 rounded-full px-6 my-6  h-12 border-gray-500 bg-white text-gray-500 hover:bg-sky-900 hover:text-white"
                  >
                    SHOP NOW <RxArrowRight size={22} />
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default HomeSlider;
