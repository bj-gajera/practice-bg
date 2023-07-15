import React, { useEffect, useState } from "react";
import img30 from "../../images/page-header-bg.jpg";
import img31 from "../../images/post-1.jpg";
import img32 from "../../images/blog2.jpg";
import img33 from "../../images/blog3.jpg";
import img34 from "../../images/author.jpg";
import img35 from "../../images/bolgpost1.jpg";
import img36 from "../../images/blogpost2.jpg";
import img37 from "../../images/blogpost3.jpg";
import img38 from "../../images/1.jpg";
import img39 from "../../images/2.jpg";
import img40 from "../../images/3.jpg";
import img41 from "../../images/post-1 (1).jpg";
import img42 from "../../images/post-2 (1).jpg";
import img43 from "../../images/post-3 (1).jpg";
import img44 from "../../images/post-4 (1).jpg";
import img45 from "../../images/banner.jpg";
import img46 from "../../images/post-2.jpg";
import img47 from "../../images/post-3.jpg";
import img48 from "../../images/post-4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoReply } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { useParams } from "react-router";
import "./blog.css";
import { Link } from "react-router-dom";

const Blogdetails = () => {
  const blogdata = [
    {
      image: img31,
      name: "Sed adipiscing ornare.",
      date: "by John Doe | may 28, 2020 | 3 Comments ",
      details:
        "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.",
      life: "in Life style",
    },
    {
      image: img46,
      name: "Fusce lacinia arcuet nulla.",
      date: "by John Doe | may 28, 2020 | 3 Comments ",
      details:
        "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.",
      life: "in Life style",
    },
    {
      image: img47,
      name: "Aliquam erat volutpat.",
      date: "by John Doe | may 28, 2020 | 3 Comments ",
      details:
        "Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.",
      life: "in Life style",
    },
    {
      image: img48,
      name: "Quisque a lectus.",
      date: "by John Doe | may 28, 2020 | 3 Comments ",
      details:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      life: "in Life style",
    },
  ];
  const [data, setData] = useState([]);
  const { name } = useParams();

  const val = name.replaceAll("_", " ");

  useEffect(() => {
    const filter = blogdata.filter((item) => item.name.trim() === val.trim());
    setData(filter);
  }, [val]);

  return (
    <>
      <div className="pb-20">
        <div className="pt-28 ">
          <div className="relative ">
            <img src={img30} alt="image" className="h-[150px]" />
          </div>
          <div className="absolute top-36 left-[500px] text-center">
            <h1 className="text-5xl">Default With Sidebar</h1>
            <p className="text-xl pt-1">Single Post</p>
          </div>
        </div>
        {data.map((item) => {
          return (
            <>
              <div className="grid grid-cols-9 px-20">
                <div className=" gird col-span-7 pt-8">
                  <img src={item.image} alt="image" className="w-full" />
                  <p className="py-3">{item.date}</p>
                  <p className="font-bold text-xl">{item.name}</p>
                  <p className="py-2">
                    <a href="">{item.life}</a>
                  </p>
                  <p>{item.details}</p>
                  <div className="grid grid-cols-7 pt-6">
                    <div className="grid col-span-3 ">
                      <img src={img32} alt="image" />
                    </div>
                    <div className="grid col-span-4">
                      <div>
                        <h1 className="text-2xl font-semibold">
                          Quisque volutpat mattiseros
                        </h1>
                        <p className="py-4 text-justify">
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                        </p>
                        <p className="py-4 text-justify">
                          Sed egestas, ante et vulputate volutpat, eros pede
                          semper est, vitae luctus metus libero eu augue. Morbi
                          purus libero, faucibus adipiscing, commodo quis,
                          gravida id, est.
                        </p>
                        <p className="py-4 text-justify">
                          Sed lectus. Praesent elementum hendrerit tortor. Sed
                          semper lorem at felis. Vestibulum volutpat, lacus a
                          ultrices sagittis, mi neque euismod dui, eu pulvinar
                          nunc sapien ornare nisl. Phasellus pede arcu, dapibus
                          eu, fermentum et, dapibus sed, urna.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="py-3">
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
                    vulputate volutpat, eros pede semper est, vitae luctus metus
                    libero eu augue. Morbi purus libero, faucibus adipiscing,
                    commodo quis, gravida id, est. Sed lectus. Praesent
                    elementum hendrerit tortor. Sed semper lorem at felis.
                  </p>
                  <p>
                    Morbi purus libero, faucibus adipiscing, commodo quis,
                    gravida id, est. Sed lectus. Praesent elementum hendrerit
                    tortor. Sed semper lorem at felis. Vestibulum volutpat,
                    lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar
                    nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
                    fermentum et, dapibus sed, urna. Morbi interdum mollis
                    sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper
                    laoreet, lectus arcu pulvinar risus, vitae facilisis libero
                    dolor a purus.
                  </p>
                  <h1 className="text-2xl font font-semibold py-4">
                    Morbi interdum mollis sapien.
                  </h1>
                  <img src={img33} alt="image" className="w-full" />
                  <p className="py-4">
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor
                    libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
                    vulputate volutpat, eros pede semper est, vitae luctus metus
                    libero eu augue. Morbi purus libero, faucibus adipiscing,
                    commodo quis, gravida id, est. Sed lectus. Praesent
                    elementum hendrerit tortor. Sed semper lorem at felis.
                    Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                    euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                    pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                  </p>
                  <p className="py-2">
                    Morbi interdum mollis sapien. Sed ac risus. Phasellus
                    lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar
                    risus, vitae facilisis libero dolor a purus. Sed vel lacus.
                    Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                    vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris
                    ut lectus. Nunc tellus ante, mattis eget, gravida vitae,
                    ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
                    vulputate vel, nisl. Suspendisse mauris. Fusce accumsan
                    mollis eros. Pellentesque a diam sit amet mi ullamcorper
                    vehicula. Integer adipiscing risus a sem. Nullam quis massa
                    sit amet nibh viverra malesuada. Nunc sem lacus, accumsan
                    quis, faucibus non, congue vel, arcu.
                  </p>

                  <div className="grid col-span-7">
                    <div className="flex gap-4">
                      <p className="pt-1">Tags:</p>

                      <a
                        href=""
                        className="border-2 rounded-md bg-gray-100 px-3 py-1"
                      >
                        Photography
                      </a>
                      <a
                        href=""
                        className="border-2 rounded-md bg-gray-100 px-3 py-1"
                      >
                        Style
                      </a>
                      <div className="icon flex gap-2">
                        <p className="">Share this post:</p>
                        <ul className="flex gap-6 pt-1">
                          <Link to="">
                            <li className="text-blue-950">
                              <FaFacebookF size={16} />
                            </li>
                          </Link>
                          <Link to="">
                            <li className="text-blue-800">
                              <BsTwitter size={16} />
                            </li>
                          </Link>
                          <Link to="">
                            <li className="text-red-700">
                              <FaPinterest size={16} />
                            </li>
                          </Link>
                          <Link to="">
                            <li className="text-blue-700">
                              <FaLinkedin size={16} />
                            </li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <div className="bg-gray-100 flex pt-8 px-4">
                      <div className="py-4">
                        <img
                          src={img34}
                          alt="image"
                          className="rounded-full w-[60px]"
                        />
                      </div>
                      <div className="px-6 py-4">
                        <h1>John Doe</h1>
                        <p className="py-4">
                          Praesent dapibus, neque id cursus faucibus, tortor
                          neque egestas auguae, eu vulputate magna eros eu erat.
                          Aliquam erat volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-8">
                    <h1 className="font-bold text-xl">Related Posts</h1>
                  </div>

                  <div className="grid col-span-7">
                    <div className="flex gap-x-5">
                      <div>
                        <img src={img35} alt="image" />
                        <a
                          href=""
                          className="text-gray-400 hover:text-orange-600"
                        >
                          Nov 22,2018 | 2 Comments
                        </a>
                        <h1 className="text-xl font-semibold  hover:text-orange-600">
                          Cras ornare tristique elit.
                        </h1>
                        <a
                          href=""
                          className="text-gray-400 hover:text-orange-600"
                        >
                          in Lifestyle, Shopping
                        </a>
                      </div>
                      <div>
                        <img src={img36} alt="image" />
                        <a
                          href=""
                          className="text-gray-400 hover:text-orange-600"
                        >
                          Nov 21, 2018 | 0 comments
                        </a>
                        <h1 className="text-xl font-semibold  hover:text-orange-600">
                          Vivamus ntulla necante
                        </h1>
                        <a
                          href=""
                          className="text-gray-400 hover:text-orange-600"
                        >
                          in Lifestyle
                        </a>
                      </div>
                      <div>
                        <img src={img37} alt="image" />
                        <a
                          href=""
                          className="text-gray-400 hover:text-orange-600"
                        >
                          Nov 18, 2018 | 3 comments
                        </a>
                        <h1 className="text-xl font-semibold  hover:text-orange-600">
                          Utaliquam Sollicitudin leo.
                        </h1>
                        <a
                          href=""
                          className="text-gray-500  hover:text-orange-600"
                        >
                          in Fashion, Lifestyle
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="py-8">
                    <hr />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl">3 Comments</h1>
                  </div>
                  <div className="flex py-8">
                    <div className="pt-3">
                      <img
                        src={img38}
                        alt=""
                        className="rounded-full w-[80px]"
                      />
                    </div>
                    <div className="px-8">
                      <a href="">Jimmy pearson</a>
                      <p className="text-gray-400 flex">
                        November 9, 2018 at 2:19 pm
                        <div className="continer flex gap-2">
                          <a href="">Reply</a>
                          <GoReply size={24} className="pt-1" />
                        </div>
                      </p>
                      <p className="text-gray-600 py-4">
                        Sed pretium, ligula sollicitudin laoreet viverra, tortor
                        libero sodales leo, eget blandit nunc tortor eu nibh.
                        Nullam mollis. Ut justo. Suspendisse potenti.
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <hr />
                  </div>
                  <div className="flex py-8 px-28">
                    <div className="pt-3">
                      <img src={img39} alt="" className="rounded-full " />
                    </div>
                    <div className="px-8">
                      <a href="">Lena Knight</a>
                      <p className="text-gray-400 flex">
                        November 9, 2018 at 2:19 pm
                        <div className="cointer-1 flex gap-2">
                          <a href="">Reply</a>
                          <GoReply size={24} className="pt-1" />
                        </div>
                      </p>
                      <p className="text-gray-600 py-4">
                        Morbi interdum mollis sapien. Sed ac risus.
                      </p>
                    </div>
                  </div>
                  <div className="py-3">
                    <hr />
                  </div>
                  <div className="flex py-8">
                    <div className="pt-3">
                      <img
                        src={img40}
                        alt=""
                        className="rounded-full w-[80px]"
                      />
                    </div>
                    <div className="px-8">
                      <a href="">Johnathan Castillo</a>
                      <p className="text-gray-400 flex">
                        November 9, 2018 at 2:19 pm
                        <div className="continer flex gap-2">
                          <a href="">Reply</a>
                          <GoReply size={24} className="pt-1" />
                        </div>
                      </p>
                      <p className="text-gray-600 py-4">
                        Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                        euismod dui, eu pulvinar nunc sapien ornare nisl.
                        Phasellus pede arcu, dapibus eu, fermentum et, dapibus
                        sed, urna.
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-100 pb-6">
                    <div className="px-10 pt-8">
                      <h1 className="text-xl font-bold ">Leave A Reply</h1>
                      <p className="text-gray-400 py-2">
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <form action="" className="py-4">
                        <textarea
                          name="comments"
                          id=""
                          cols="108"
                          rows="4"
                          placeholder="Comment*"
                          className="px-4 pt-2"
                        ></textarea>
                        <div className="py-4 space-x-6">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name*"
                            className="border-2 w-[410px] px-4 py-1.5 "
                          />
                          <input
                            type="text"
                            name="Email"
                            id="email"
                            placeholder="Email*"
                            className="border-2 w-[410px] px-4 py-1.5"
                          />
                        </div>

                        <button
                          className="flex gap-2 border-2 border-solid px-4 py-1.5 border-orange-200 text-orange-400
                        hover:bg-orange-400 hover:text-white"
                          type="Post comment"
                        >
                          POST COMMENT
                          <BsArrowRight
                            size={20}
                            className="text-center pt-1"
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="grid col-span-2 pt-7">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <form action="" className="py-3 ">
                      <input
                        type="text"
                        name="Search in blog"
                        id="search"
                        placeholder="Search in blog"
                        className="border-2 px-3 py-1.5 w-[280px] text-sm relative"
                      />
                      <VscSearch
                        size={18}
                        className="absolute top-[340px] left-[1270px] text-slate-500"
                      />
                    </form>
                    <div className="pt-8">
                      <h1 className="text-xl font-semibold">Categories</h1>
                      <div className="grid grid-cols-2 gap-60 pt-6 ">
                        <div className="">
                          <ul className="space-y-1 ">
                            <li>
                              <a href="" className=" hover:text-orange-600">
                                Lifestyle
                              </a>
                            </li>
                            <li>
                              <a href="" className=" hover:text-orange-600">
                                Shopping
                              </a>
                            </li>
                            <li>
                              <a href="" className=" hover:text-orange-600">
                                Fashion
                              </a>
                            </li>
                            <li>
                              <a href="" className=" hover:text-orange-600">
                                Travel
                              </a>
                            </li>
                            <li>
                              <a href="" className=" hover:text-orange-600">
                                Hobbies
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-1">
                          <p>
                            <a href="" className=" hover:text-orange-600">
                              3
                            </a>
                          </p>
                          <p>
                            <a href="" className=" hover:text-orange-600">
                              3
                            </a>
                          </p>
                          <p>
                            <a href="" className=" hover:text-orange-600">
                              1
                            </a>
                          </p>
                          <p>
                            <a href="" className=" hover:text-orange-600">
                              3
                            </a>
                          </p>
                          <p>
                            <a href="" className=" hover:text-orange-600">
                              2
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="pt-8">
                        <h1 className="text-xl font-semibold">Popular Posts</h1>
                      </div>
                      <div className="pt-6 flex">
                        <div>
                          <img src={img41} alt="image" className="w-[100px]" />
                        </div>
                        <div className="px-3">
                          <p className="text-gray-400">Nov 22, 2018</p>
                          <a href="">Aliquam tincidunt mauris eurisus.</a>
                        </div>
                      </div>
                      <div className="pt-6 flex">
                        <div>
                          <img src={img42} alt="image" className="w-[80px]" />
                        </div>
                        <div className="px-3">
                          <p className="text-gray-400">Nov 19, 2018</p>
                          <a href="">Cras ornare tristique elit.</a>
                        </div>
                      </div>
                      <div className="pt-6 flex">
                        <div>
                          <img src={img43} alt="image" className="w-[112px]" />
                        </div>
                        <div className="px-3">
                          <p className="text-gray-400">Nov 12, 2018</p>
                          <a href="">Vivamus vestibulum ntulla nec ante.</a>
                        </div>
                      </div>
                      <div className="pt-6 flex">
                        <div>
                          <img src={img44} alt="image" className="w-[126px]" />
                        </div>
                        <div className="px-3">
                          <p className="text-gray-400">Nov 25, 2018</p>
                          <a href="">
                            Donec quis dui at dolor tempor interdum.
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pt-10">
                      <h1 className="text-center text-sm text-gray-400">
                        AD BOX 280 X 280
                      </h1>
                      <div className="pt-1">
                        <Link>
                          <img src={img45} alt="image" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold py-8">
                        Browse Tags
                      </h1>
                    </div>

                    <div className="space-x-2 ">
                      <a
                        href=""
                        className="border-2 bg-slate-50 text-center py-1 px-2 hover:bg-white hover:text-orange-500"
                      >
                        Fashion
                      </a>
                      <a
                        href=""
                        className="border-2 bg-slate-50 text-center py-1 px-2  hover:bg-white hover:text-orange-500"
                      >
                        Style
                      </a>
                      <a
                        href=""
                        className="border-2 bg-slate-50 text-center py-1 px-2  hover:bg-white hover:text-orange-500"
                      >
                        Women
                      </a>
                    </div>

                    <br />
                    <div className="space-x-2">
                      <a
                        href=""
                        className="border-2 bg-slate-50 text-center py-1 px-2  hover:bg-white hover:text-orange-500"
                      >
                        Photography
                      </a>
                      <a
                        href=""
                        className="border-2 bg-slate-50 text-center py-1 px-2  hover:bg-white hover:text-orange-500"
                      >
                        Traval
                      </a>
                      <a
                        href=""
                        className="border-2 bg-slate-50 text-center py-1 px-2  hover:bg-white hover:text-orange-500"
                      >
                        Shopping
                      </a>
                    </div>
                    <br />
                    <div>
                      <a
                        href=""
                        className="border-2 bg-slate-50 text-center py-1 px-2  hover:bg-white hover:text-orange-500"
                      >
                        Hobbies
                      </a>
                    </div>

                    <div className="inline-block pt-7">
                      <div className="">
                        <h1 className="text-xl font-semibold ">About Blog</h1>
                        <p className="pt-4">
                          Vestibulum volutpat, lacus a ultrices sagittis, mi
                          neque euismod dui, pulvinar nunc sapien ornare nisl.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogdetails;
