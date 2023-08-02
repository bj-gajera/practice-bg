import React from "react";
import img24 from "../../images/bg-1.jpg";
import { BsArrowRight } from "react-icons/bs";
import img25 from "../../images/post-1.jpg";
import img26 from "../../images/post-2.jpg";
import img27 from "../../images/post-3.jpg";
import img28 from "../../images/post-4.jpg";
import img29 from "../../images/bg-2.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogdata = [
    {
      image: img25,
      name: "Sed adipiscing ornare.",
      date: "Nov 22,2018",
      details:
        "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.",
      comment: 1,
    },
    {
      image: img26,
      name: "Fusce lacinia arcuet nulla.",
      date: "Dec 12,2018",
      details:
        "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.",
      comment: 0,
    },
    {
      image: img27,
      name: "Aliquam erat volutpat.",
      date: "Dec 19,2018",
      details:
        "Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.",
      comment: 2,
    },
    {
      image: img28,
      name: "Quisque a lectus.",
      date: "Dec 19,2018",
      details:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      comment: 2,
    },
  ];
  return (
    <>
      <div className="pt-24">
        <div className="relative md:px-20">
          <img
            src={img24}
            alt="image"
            className="h-[240px] w-[800px] md:h-[170px] md:w-[1170px]"
          />
        </div>
        <div className="">
          <div className="absolute top-32 px-4 md:top-36 md:left-36 ">
            <h1 className="text-2xl text-sky-900 font-bold">
              New Deals! Start Daily at 12pm e.t.
            </h1>
            <p className="py-2">
              <i>
                <b> FREE SHIPPING* & 5% rewards </b>
              </i>
              on every order with Molla Theme rewards program
            </p>
          </div>

          <div className="absolute top-64 px-3 md:top-36 md:right-40 ">
            <Link to="">
              <button className="rounded-full px-6 py-3 flex gap-2 text-sm md:text-base text-sky-900 bg-white hover:bg-sky-900 hover:text-white">
                ADD TO CART FOR $50.00/YR
                <BsArrowRight size={22} />
              </button>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center font-semibold py-10">
            From Our Blog
          </h1>
        </div>
        <div className="grid md:grid-cols-4 md:px-20">
          {blogdata.map((item) => {
            let name = item.name.replaceAll(" ", "_");
            return (
              <>
                <div className="text-center py-4 md:py-0">
                  <Link to={`/blog/${name}`}>
                    <img
                      src={item.image}
                      alt="img"
                      className="w-full md:w-[285px]"
                    />
                  </Link>
                  <div className="text-gray-400  pt-4 hover:underline">
                    <a href="#">{item.date},</a> {item.comment} Comments
                  </div>
                  <h3 className="text-2xl py-2  hover:text-sky-900">
                    <a href="#">{item.name}</a>
                  </h3>
                  <p className="text-gray-500">{item.details}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="pt-24">
          <div className="relative">
            <img src={img29} alt="image" className="h-[250px] md:h-[250px]" />
          </div>
          <div className="absolute px-5 top-[2250px] md:left-[390px] md:top-[850px]">
            <h1 className="text-2xl md:text-3xl text-center text-white font-bold">
              Subscribe for Our Newsletter
            </h1>
            <p className="text-white text-center py-1 md:text-xl">
              and receive $20 coupon for first shopping
            </p>
            <div className=" relative md:flex  py-6">
              <input
                className="py-3 rounded-full w-[330px] md:w-[550px] px-6 bg-white"
                type="email"
                placeholder="Enter your Email Address"
              />

              <div className="py-2 md:py-0">
                <button className=" absolute  left-[80px] md:left-[400px] flex gap-2 bg-white rounded-full py-3 px-6 w-[150px] hover:bg-sky-900 hover:text-white">
                  SUBSCRIBE <BsArrowRight size={22} className="pt-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
