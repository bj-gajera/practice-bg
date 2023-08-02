import React from "react";
import img21 from "../../images/contact-header-bg.jpg";
import img22 from "../../images/img-1.jpg";
import img23 from "../../images/img-2.jpg";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";

const Contactus = () => {
  return (
    <>
      <div className="pt-20">
        <div className=" h-0.5 bg-gray-200">
          <hr />
        </div>
        <div className="relative">
          <img
            src={img21}
            alt="Image"
            className="py-6 md:py-10 px-2 md:px-20 w-[410px] h-[260px] md:w-full md:h-[550px]"
          ></img>
          <div className="absolute top-24 left-24 md:top-56 md:left-[550px] text-center text-white">
            <h1 className="text-4xl md:text-5xl">Contact us</h1>
            <p className="text-xl">Keep in touch with us</p>
          </div>
        </div>
      </div>
      <div>
        <div className="md:grid grid-cols-2">
          <div className="px-2 md:px-20 col-span-1">
            <h1 className="text-2xl font-semibold">Contact Information</h1>
            <p className="md:text-justify py-1">
              Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
              dapibus eu, fermentum et, dapibus sed, urna.
            </p>
            <div className="md:grid grid-cols-2 py-4">
              <div className=" grid col-span-1">
                <h1 className="text-2xl">The Office</h1>

                <address className="flex gap-3 py-4">
                  <CiLocationOn size={38} className="text-orange-500 pb-3" />
                  70 Washington Square South New York, NY 10012, United States
                </address>
                <p className="flex gap-2 py-3">
                  <IoIosCall size={26} className="text-orange-500" />
                  <a className="hover:text-orange-500" href="tel:+92423567">
                    +92 423 567
                  </a>
                </p>

                <p className="flex gap-3 py-2 text-orange-500">
                  <AiOutlineMail size={22} className="pt-0.5" />
                  <a href="mail:info@Molla.com">info@Molla.com</a>
                </p>
              </div>
              <div className="md:px-8 grid col-span-1">
                <h1 className="text-2xl py-2 md:py-0">The Office</h1>
                <p className="flex gap-3 py-2 md:py-0">
                  <BiTime size={28} className="text-orange-500" />
                  Monday-Saturady 11am-7pm ET
                </p>
                <p className="flex gap-3 py-2 md:py-0">
                  <VscCalendar size={20} className="text-orange-500 pt-0.5" />
                  Sunday 11am-6pm ET
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 md:px-0 col-span-1">
            <h1 className="font-semibold text-2xl">Got Any Questions?</h1>
            <p className="py-3">
              Use the form below to get in touch with the sales team
            </p>
            <div className="space-y-4 py-4">
              <form action="" className="md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Name"
                  className="bg-slate-50 w-[340px] md:w-[280px] border-2 border-solid border-orange-200  px-2 py-1"
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="bg-slate-50 w-[340px] md:w-[280px] border-2 border-solid  border-orange-200 px-2 py-1"
                />
              </form>
              <form action="" className="md:space-x-4 space-y-4 md:space-y-0 ">
                <input
                  type="text"
                  id="phon"
                  name="phon"
                  placeholder="Phon"
                  className="bg-slate-50 w-[340px]  md:w-[280px] border-2 border-solid  border-orange-200 px-2 py-1"
                />
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Subject"
                  className="bg-slate-50 w-[340px] md:w-[280px] border-2 border-solid border-orange-200 px-2 py-1"
                />
              </form>
              <form action="">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-[340px] h-[120px] md:w-[575px] md:h-[140px] border-2 border-solid border-orange-200 px-2 py-1"
                />
              </form>
              <form action="">
                <button
                  className="flex gap-2 border-2 border-solid px-4 py-1.5 border-orange-200 text-orange-400
                  hover:bg-orange-400 hover:text-white"
                  type="submit"
                >
                  Submit <BsArrowRight size={20} className="text-center pt-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 md:px-20 py-8 md:py-14 md:w-[1340px]">
        <div className="h-0.5  bg-gray-200">
          <hr />
        </div>
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          Our Stores
        </h1>
        <div className="md:grid grid-cols-2 py-8">
          <div className="md:flex col-span-1 ">
            <div className="pl-2 md:pl-20">
              <img src={img22} alt="image" className="w-[375px] md:w-[400px]" />
            </div>
            <div className="px-2 py-3 md:px-8 md:py-0">
              <h1 className="text-xl">Wall Street Plaza</h1>
              <p className="pt-3 pb-1 text-gray-500">
                88 Pine St, New York, NY 10005, USA
              </p>
              <a
                className=" text-gray-500 hover:text-orange-500"
                href="tel:+19876543"
              >
                +1 987-876-6543
              </a>
              <p className="pt-6">Store Hours:</p>
              <p className="text-gray-500 pt-2">
                Monday - Saturday 11am to 7pm Sunday 11am to 6pm
              </p>
            </div>
          </div>
          <div className="col-span-1 md:flex">
            <div className="px-2 md:px-0">
              <img src={img23} alt="image" className="w-[375px] md:w-[270px]" />
            </div>
            <div className="px-2 py-3 md:px-8 md:py-0">
              <h1 className="text-xl">One New York Plaza</h1>
              <p className="pt-3 pb-1 text-gray-500">
                88 Pine St, New York, NY 10005, USA
              </p>
              <a
                className=" text-gray-500 hover:text-orange-500"
                href="tel:+19876543"
              >
                +1 987-876-6543
              </a>
              <p className="pt-6">Store Hours:</p>
              <p className="text-gray-500 pt-2">
                Monday - Friday 9am to 8pm <br /> Saturday - 9am to 2pm <br />
                Sunday - Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5608484223776!2d-74.00867082415752!3d40.705668471394624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3d8bd97fdb%3A0x2c63563cac21c14a!2s88%20Pine%20St%2C%20New%20York%2C%20NY%2010005%2C%20USA!5e0!3m2!1sen!2sin!4v1686555667054!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-[370px] h-[320px] md:w-full md:h-[460px] pt-4 md:pt-12"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Contactus;
