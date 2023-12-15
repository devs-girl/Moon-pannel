import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Line from "../src/img/Line 60.png";
import Unbenannt from "../src/img/Unbenannt.png";
import Arrow from "../src/img/arrow.jpeg";
import Banner1 from "../src/img/banner1.png";
import Emoji from "../src/img/emoji.png";
import Instagram from "../src/img/insta.jpeg";
import Lock from "../src/img/locked.png";
import Logo from "../src/img/logo.png";
import Love from "../src/img/love.png";
import Package from "../src/img/package_1f4e6.png";
import Rocket from "../src/img/rocket.png";
import ShadowBgRt from "../src/img/shadow4.jpg";
import ShadowBg from "../src/img/srshot.jpg";
import Support from "../src/img/support.png";
import Tiktok from "../src/img/tiktok.jpeg";
import Top from "../src/img/top.png";
import Youtube from "../src/img/yt.jpeg";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(0);
  const handleClick = () => {
    localStorage.setItem("theme", JSON.stringify(!theme));
    setTheme(!theme);
  };
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("theme"));
    if (storedTheme !== null) {
      setTheme(storedTheme);
    }
  }, []);
  return (
    <div style={{ fontFamily: "Poppins" }} className="leading-[33px]">
      {/* navbar  */}

      <div className="px-[20px] md:px-[100px] lg:px-[227px] mt-8 md:mt-12 md:mb-36">
        <div>
          {/* Nav menu */}
          <div className="flex justify-between items-center mb-10">
            <div className="">
              <img
                className="pr-5 lg:pr-[60px] w-[144px] md:w-[200px] lg:w-[244px]"
                src={Logo}
                alt=""
              />
            </div>
            <script src="https://cdn.tailwindcss.com/"></script>

            <div className="hidden md:block">
              <ul className="flex justify-between items-center">
                <div className="overflow-hidden">
                  <div
                    className={`toggle-slide ${theme ? "bg-slate-400" : "bg-gray-400"
                      }`}
                    onClick={handleClick}
                  >
                    <div className={`switch ${theme ? "slide " : ""}`}>
                      <BsSunFill
                        color="gray"
                        className="mt-[5px] p-1 bg-white rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <li className="px-5 lg:px-[60px] text-lg lg:text-xl font-regular leading-[39px]">
                  <a href="#">About</a>
                </li>
                <li className="text-lg lg:text-xl  font-regular leading-[39px]">
                  <img src={Line} alt="" />
                </li>
                <li className="px-5 lg:px-[60px] text-lg lg:text-xl  font-regular leading-[39px]">
                  <a href="#">Login</a>
                </li>
                <li className=" text-lg lg:text-xl  font-regular leading-[39px] w-[136px] h-[40px]  lg:h-[50px] bg-black rounded-xl text-white  flex justify-center items-center">
                  <a href="#">Register</a>
                </li>
              </ul>
            </div>
            <div className="block md:hidden">
              {" "}
              {open ? (
                <div onClick={() => setOpen(false)}>
                  <AiOutlineClose color="black" size={25} />
                </div>
              ) : (
                <div onClick={() => setOpen(true)}>
                  <FiMenu color="black" size={25} />
                </div>
              )}
            </div>
            {/* menu icon for mobile device  */}
            {open && (
              <div
                className={`block md:hidden absolute   top-20 bg-black  inset-x-0 py-4 h-[200px] ${open && "transition delay-700 z-[999]"
                  }`}
              >
                <ul className=" space-y-3 ml-4 ">
                  <li className="px-5 lg:px-[60px] text-lg lg:text-xl font-regular leading-[39px] text-white">
                    <a href="#">About</a>
                  </li>
                  <li className="px-5 lg:px-[60px] text-lg lg:text-xl  font-regular leading-[39px] text-white">
                    <a href="#">Login</a>
                  </li>
                  <li className=" text-lg lg:text-xl  font-regular leading-[39px] w-[120px] h-[40px]  lg:h-[50px] bg-white rounded-xl text-black  flex justify-center items-center text-white">
                    <a href="#">Register</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* banner-area  */}
      <div>
        <div className="px-[20px] md:px-[100px] lg:px-[227px] mb-[260px] relative z-50">
          <div className="block md:flex justify-between">
            <div>
              <h3 className="text-xl md:text-4xl font-bold leading-5 lg:leading-[75px]">
                Boost your
              </h3>
              <div class="">
                <h2 className="text-xl md:text-4xl lg:text-[64px] text-center font-bold bg-gradient-to-r inline-block text-transparent bg-clip-text  from-[#4b0082]  via-[#a921e7]  to-[#fa5c18] leading-5 lg:leading-[75px] ">
                  SOCIAL MEDIA
                </h2>
              </div>
              <h3 className="text-xl md:text-4xl font-bold leading-5 lg:leading-[75px]">
                Presence…
              </h3>
              <p className="lg:text-xl font-regular w-auto md:w-64 lg:w-[548px] md:mb-[90px]">
                Are you looking to boost your social media presence? Look no
                further! Our genuine social media services can help you reach
                new heights.
              </p>
              <button class="  bg-[#051A29] w-1/2 md:w-2/4 lg:w-[190px] lg:h-[55px] rounded-2xl py-1 md:py-3 font-bold text-white">
                Get started
              </button>

            </div>
            <div className=" relative mt-5 md:mt-0 ">
              <img
                className="hidden md:block md:w-full md:h-full"
                src={Banner1}
                alt=""
              />
              {/* box  */}
              <div className=" backdrop-blur-lg shadow-[0_9px_30px_rgb(0,0,0,0.12)] absolute top-14 lg:left-[25%] md:left-1/4 rounded-2xl border-4 border-[#FDFDFD] w-full md:w-[300px] lg:w-[400px]  z-50">
                <div className="bg-opacity-36 backdrop-blur-20 border border-opacity-100 border-solid border-white   m-4 rounded-2xl  p-2 md:p-5">
                  <div className="p-2 w-full">
                    <div className="flex justify-center items-center">
                      <h3 className="text-base mb-5 font-semibold">
                        Choose the social media platfrom you wish too boost!
                      </h3>
                      <img className="h-[22px] w-[22px]" src={Rocket} alt="" />
                    </div>
                    <div>
                      <div
                        className="flex justify-between items-center  mt-4 px-3 py-2  lg:px-5 lg:py-4 rounded-2xl w-full"
                        style={{ border: "1px solid #D0CFD0" }}
                      >
                        <div className="flex items-center gap-3 md:gap-2">
                          <img
                            className="w-[29px] h-[29px]"
                            src={Instagram}
                            alt=""
                          />
                          <h2 className="text-sm lg:text-[17px] font-regular">
                            {" "}
                            Instagram
                          </h2>
                        </div>
                        <div>
                          <img src={Arrow} alt="" />
                        </div>
                      </div>
                      <div
                        className="flex justify-between items-center  mt-4 px-3 py-2  lg:px-5 lg:py-4 rounded-2xl w-full"
                        style={{ border: "1px solid #D0CFD0" }}
                      >
                        <div className="flex items-center gap-3 md:gap-2">
                          <img
                            className=" w-[29px] h-[29px]"
                            src={Tiktok}
                            alt=""
                          />
                          <h2 className="text-sm lg:text-[17px]"> Tiktok</h2>
                        </div>
                        <div>
                          <img src={Arrow} alt="" />
                        </div>
                      </div>

                      <div
                        className="flex justify-between items-center  mt-4 px-3 py-2  lg:px-5 lg:py-4 rounded-2xl w-full"
                        style={{ border: "1px solid #D0CFD0" }}
                      >
                        <div className="flex items-center gap-3 md:gap-2">
                          <img
                            className=" w-[29px] h-[29px]"
                            src={Youtube}
                            alt=""
                          />
                          <h2 className="text-sm lg:text-[17px]"> Youtube</h2>
                        </div>
                        <div>
                          <img src={Arrow} alt="" />
                        </div>
                      </div>

                      <div className="flex justify-center items-center mt-5 mb-10 gap-3">
                        <h2 className="text-[15px] font-bold">see more</h2>
                        <IoIosArrowDown />
                      </div>
                      <div className="mb-10 rounded-2xl">
                        <button class="  bg-gradient-to-r bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full rounded-2xl pt-2 lg:pt-3 pb-2 lg:pb-3">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* emoji  */}
              <div className="absolute hidden lg:block md:-top-2 lg:-top-4 left-20 md:-left-20 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-3 rounded-2xl">
                <div className="flex justify-center gap-3 items-center w-[179px]">
                  <img className="w-[26px] h-[21px]" src={Love} alt="" />
                  <span>Marketing</span>
                </div>
              </div>
              <div className="absolute hidden lg:block right-7 md:-top-2 lg:-top-4 md:right-16 lg:-right-14 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-3 rounded-2xl">
                <div className="flex justify-center gap-3 items-center w-[179px]">
                  <img className="w-[26px] h-[21px]" src={Emoji} alt="" />
                  <span>Influencer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-auto md:h-2/3 md:pb-14  bg-left-bottom absolute top-1/4 px-0">
          <img src={ShadowBg} alt="" />
        </div>
        <div className="hidden lg:block h-auto md:h-2/3 md:pb-14  bg-right-top right-0 absolute top-1/4 px-0">
          <img src={ShadowBgRt} alt="" />
        </div>
      </div>

      {/* title  */}
      <div className="relative">
        <div className="mb-[110px] mt-[700px] md:mt-0  lg:mt-96  px-[20px] md:px-[50px] lg:px-[90px]">
          <h1 className="text-xl lg:text-[50px] font-bold leading-10  text-center mb-4">
            The #1 Plattform for Social Media Growth
          </h1>
          <h2 className="text-lg md:text-xl lg:text-[35px] font-medium text-center">
            Grow your Social Media account the smart way.
          </h2>
        </div>
        {/* platform  */}

        <div className="px-[20px] md:px-[100px] lg:px-[227px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[100px] mb-44 relative z-30  text-center md:text-left">
          <div className="flex md:block justify-center md:justify-start items-center flex-col ">
            <img
              className="shadow-lg rounded-lg p-4 mb-10 h-[63px] w-[63px] "
              src={Rocket}
              alt=""
            />
            <h4 className="text-2xl lg:text-[35px] font-bold mb-2">
              Fastest Service
            </h4>
            <p className="text-base lg:text-xl font-normal mb-2 ">
              Our delivery is automated, and it takes minutes if not seconds to
              fulfil orders.
            </p>
          </div>
          <div className="flex md:block justify-center md:justify-start items-center flex-col">
            <img
              className="shadow-lg rounded-lg p-4 mb-10 h-[63px] w-[63px]"
              src={Top}
              alt=""
            />
            <h4 className="text-2xl lg:text-[35px] font-bold mb-2">
              Top Quality
            </h4>
            <p className="text-base lg:text-xl font-normal mb-2">
              The highest quality top services on the market. We are working to
              make quality even more and keep low cost.
            </p>
          </div>
          <div className="flex md:block justify-center md:justify-start items-center flex-col">
            <img
              className="shadow-lg rounded-lg p-4 mb-10 h-[63px] w-[63px]"
              src={Support}
              alt=""
            />
            <h4 className="text-2xl lg:text-[35px] font-bold mb-2">
              24/7 Support
            </h4>
            <p className="text-base lg:text-xl font-normal mb-2 ">
              Support available around the clock, nothing like it in the market.
            </p>
          </div>
          <div className="flex md:block justify-center md:justify-start items-center flex-col">
            <img
              className="shadow-lg rounded-lg p-4 mb-10 h-[63px] w-[63px]"
              src={Package}
              alt=""
            />
            <h4 className="text-2xl lg:text-[35px] font-bold mb-2">
              Customized Packages
            </h4>
            <p className="text-base lg:text-xl font-normal mb-2">
              We understand that every social media strategy is unique. That's
              why we offer customized packages to meet your specific goals. 24/7
              Support
            </p>
          </div>
          <div className="flex md:block justify-center md:justify-start items-center flex-col">
            <img
              className="shadow-lg rounded-lg p-4 mb-10 h-[63px] w-[63px]"
              src={Lock}
              alt=""
            />
            <h4 className="text-2xl lg:text-[35px] font-bold mb-2">
              Unleash Your Potential
            </h4>
            <p className="text-base lg:text-xl font-normal mb-2">
              Take your social media game to the next level with our services.
              Unleash the full potential of your profiles.
            </p>
          </div>
          <div className="flex md:block justify-center md:justify-start items-center flex-col">
            <img
              className="shadow-lg rounded-lg p-4 mb-10 h-[63px] w-[63px]"
              src={Unbenannt}
              alt=""
            />
            <h4 className="text-2xl lg:text-[35px] font-bold mb-2">
              Safe & Secure
            </h4>
            <p className="text-base lg:text-xl font-normal mb-2 ">
              Our services have consistently delivered real results. It's a safe
              and effective solution that works for everyone, just as it should.
              Your success is our mission.
            </p>
          </div>
        </div>

        <div className="h-auto md:h-2/3 md:pb-14  bg-left-bottom absolute top-1/4 px-0">
          <img src={ShadowBg} alt="" />
        </div>
      </div>

      {/* steps  */}
      <div className="px-[20px] md:px-[100px] lg:px-[227px] relative z-50">
        {/* title  */}
        <div className="">
          <h1 className="text-xl md:text-3xl lg:text-[50px] font-medium  text-center lg:mb-4">
            Achieve next-level growth
          </h1>
          <div class="flex items-center justify-center">
            <h2 className="mb-[150px] text-xl md:text-3xl lg:text-[45px] text-center font-bold p-0  lg:p-4   bg-gradient-to-r inline-block bg-clip-text text-transparent  from-[#4b0082] =  via-[#a91aeb] = to-[#fa5c18] ">
              In Just 3 Simple Steps
            </h2>
          </div>
        </div>
        {/* steps  */}
        <div className="block md:grid grid-cols-3 gap-10">
          <div className="shadow shadow-gray-200 rounded-lg p-4  text-center mb-14 md:mb-0">
            <div className="flex justify-center m-auto rounded-lg  w-12 h-12  lg:w-20 lg:h-20  -top-12 relative bg-gradient-to-tr  text-transparent  from-[#4b0082] =  via-[#a91aeb] = to-[#fa5c18]">
              <h1 className="text-xl lg:text-[30px] text-white flex justify-center items-center font-black text-center ">
                1
              </h1>
            </div>
            <h3 className="text-xl lg:text-[25px] font-bold mb-4">
              Enter Your Username
            </h3>
            <p className="text-base lg:text-xl font-medium mb-2 lg:leading-[38px]">
              Provide your social media username for the platform you're looking
              to boost. No password required; we respect your privacy.
            </p>
          </div>
          <div className="shadow shadow-gray-200 rounded-lg p-4 text-center  relative md:-top-16 mb-14 md:mb-0">
            <div className="flex justify-center m-auto rounded-lg  w-12 h-12  lg:w-20 lg:h-20  -top-12 relative bg-gradient-to-tr  text-transparent  from-[#4b0082] =  via-[#a91aeb] = to-[#fa5c18]">
              <h1 className="text-xl lg:text-[30px] text-white flex justify-center items-center font-black text-center ">
                2
              </h1>
            </div>

            <h3 className="text-xl lg:text-[25px] font-bold mb-4">
              Choose Your Package
            </h3>
            <p className="text-base lg:text-xl font-medium mb-2 lg:leading-[38px]">
              Explore our range and choose a package that aligns with your
              social media aspirations. Skip logging in and get straight to
              boosting your presence.
            </p>
          </div>
          <div className="shadow shadow-gray-200 rounded-lg p-4  text-center  mb-5 md:mb-0">
            <div className="flex justify-center m-auto rounded-lg  w-12 h-12  lg:w-20 lg:h-20  -top-12 relative bg-gradient-to-tr  text-transparent  from-[#4b0082] =  via-[#a91aeb] = to-[#fa5c18]">
              <h1 className="text-xl lg:text-[30px] text-white flex justify-center items-center font-black text-center ">
                3
              </h1>
            </div>
            <h3 className="text-xl lg:text-[25px] font-bold mb-4">
              Watch the Magic
            </h3>
            <p className="text-base lg:text-xl font-medium mb-2 lg:leading-[38px]">
              Sit tight as our automated system works its magic, making a real
              and lasting impact on your social media standing.
            </p>
          </div>
        </div>
      </div>
      {/* counter  */}
      <div className="px-[20px] md:px-[50px] lg:px-[90px] ">
        <div>
          <h1 className="text-xl md:text-3xl lg:text-[55px] font-black underline text-center my-20  md:mb-28 md:mt-40">
            The Numbers Speak for Themselves
          </h1>
        </div>
        {/* counter-box  */}
        <div className="block md:grid grid-cols-3 gap-10 lg:gap-[100px] mb-32  px-[20px] md:px-[50px] lg:px-[90px]">
          <div className="bg-black p-5 lg:p-[50px] rounded-md  mb-5 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl lg:text-[45px] font-black text-white mb-5 lg:mb-[50px]">
              21 K +
            </h2>
            <p className="text-sm font-medium text-white">Happy Users</p>
          </div>
          <div className="bg-black p-5 lg:p-[50px] rounded-md mb-5 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl lg:text-[45px] font-black text-white mb-5 lg:mb-[50px]">
              140K +
            </h2>
            <p className="text-sm font-medium text-white">Orders Completed</p>
          </div>
          <div className="bg-black p-5 lg:p-[50px] rounded-md  mb-5 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl lg:text-[45px] font-black text-white mb-5 lg:mb-[50px]">
              2.2M+
            </h2>
            <p className="text-sm font-medium text-white">Hours Saved</p>
          </div>
        </div>
      </div>

      {/* get start  */}
      {/* title  */}
      <div className="mb-[70px] px-[20px] md:px-[100px] lg:px-[227px] ">
        <div class="flex items-center justify-center">
          <h2 className="text-xl text-center font-bold p-2   bg-gradient-to-r inline-block text-transparent bg-clip-text  from-[#4b0082]  via-[#a921e7]  to-[#fa5c18] ">
            Get Started Today
          </h2>
        </div>

        <h1 className=" text-xl md:text-[30px]  lg:text-[50px] font-medium  text-center mb-4 md:leading-[50px]">
          Take the Next Step in Your Social Media Journey
        </h1>
      </div>
      {/* choose  */}
      <div className=" px-[20px] md:px-[100px] lg:px-[227px]  flex justify-center mb-8">
        <h3 className="bg-black text-white text-[17px] font-bold md:py-4 py-2 px-4 md:px-16 rounded-3xl text-center w-auto md:w-[324px]">
          Choose Your Platform
        </h3>
      </div>
      <div
        className="flex justify-center lg:mb-[460px] mb-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 md:w-[700px]">
          <div className="flex md:justify-center justify-start items-center">
            <div className="text-[30px] text-white h-[23px] w-[23px] rounded-full flex justify-center items-center font-medium text-center bg-green-500 ">
              <FaCheck className="text-xs" />
            </div>
            <h4 className="text-[17px] font-bold pl-2">No Login Required</h4>
          </div>
          <div className="flex md:justify-center justify-start items-center">
            <div className="text-[30px] text-white h-[23px] w-[23px] rounded-full flex justify-center items-center font-medium text-center bg-green-500 ">
              <FaCheck className="text-xs" />
            </div>
            <h4 className="text-[17px] font-bold pl-2">Instant Impact</h4>
          </div>
          <div className="flex md:justify-center justify-start items-center">
            <div className="text-[30px] text-white h-[23px] w-[23px] rounded-full flex justify-center items-center font-medium text-center bg-green-500 ">
              <FaCheck className="text-xs" />
            </div>
            <h4 className="text-[17px] font-bold pl-2">Quality Guaranteed</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
