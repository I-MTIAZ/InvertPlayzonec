import React from "react";
import SLIDER from "./Slider";


const Main = () => {

  return (
    /* TOP */
    <section>
      <section class=" Top flex flex-col relative h-[100vh]">
        {/* header  */}
        <div class="navbar flex max-w-screen-xl mb-[15vh]">
          <div class="navbar-start">
            <a class="btn btn-ghost text-xl text-white">Invert Playzone</a>
          </div>
          <div class="navbar-center hidden xl:flex  w-max-[1280px]">
            <ul class="menu menu-horizontal px-1">
              <li class="text-white">
                <a>Pricing</a>
              </li>
              <li class="text-white">
                <a>Offers</a>
              </li>
              <li class="text-white">
                <a>How it Works</a>
              </li>
              <li class="text-white">
                <a>About us</a>
              </li>
              <li class="text-white">
                <a>Contact us</a>
              </li>
            </ul>
          </div>

          <div class="drawer drawer-end justify-end">
            <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
              {/* <!-- Page content here --> */}
              <label for="my-drawer-4">
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="9"
                    y1="1"
                    x2="19"
                    y2="0.999999"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="1"
                    y1="6"
                    x2="19"
                    y2="6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="5"
                    y1="11"
                    x2="19"
                    y2="11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </label>
            </div>
            <div class="drawer-side">
              <label
                for="my-drawer-4"
                aria-label="close sidebar"
                class="drawer-overlay"
              ></label>
              <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* <!-- Sidebar content here --> */}
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Offers</a>
                </li>
                <li>
                  <a>How it Works</a>
                </li>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  <!-- main title --> */}

        <div class="flex flex-col justify-center items-center gap-4 ">
          <h1 class="text-center text-7xl text-white max-w-[500px]">
            A Community For Gamers By Gamers
          </h1>
          <p class="text-center text-lg text-white max-w-[300px]">
            Meet, network, make new friends and play together
          </p>
        </div>

        {/* <!-- main title Buttons --> */}
        <div class="flex justify-center gap-4 mt-[3vh]">
          <button class="btn btn-active btn-secondary w-32">
            <div class="flex justify-center items-center">
              <h1>Join now</h1>
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.305 7.13086L9.2605 20.8096"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.42041 8.64514L19.3051 7.13086L20.8194 17.0155"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
          <button class="btn btn-outline btn-warning w-32">How it works</button>
        </div>
      </section>

      {/* MAke new friends */}

      <section className="newFriends flex flex-col gap-6 justify-center items-center h-[100vh]">
        <h1 className="text-7xl text-center text-white w-[90vh] font-bold">
          Become a part of the community
        </h1>
        <h1 className="text-3xl text-center text-white w-[90vh] font-bold">
          MAKE NEW FRIENDS AND PLAY WITH THEM
        </h1>
        <button class="btn btn-active btn-secondary w-[30vh]">
          Join Chatrooms
        </button>
      </section>

      <section>
        <SLIDER />
      </section>

      {/* Offers */}
      <section className="community flex flex-col gap-6 justify-center items-center h-[100vh]">
        <h1 className="text-8xl text-center text-white w-[90vh] font-bold">
          SEPTEMBER OFFER
        </h1>
        <h1 className="text-5xl text-center text-white w-[90vh] font-bold">
          Play an hour get a free bonus match!
        </h1>
        <h1 className="text-7xl text-center text-white w-[90vh] font-bold">
          20% Off All Gaming
        </h1>
        <button class="btn btn-active btn-secondary w-[30vh]">
          How it works
        </button>
      </section>

      {/* pricing*/}
      <section className="pricing flex flex-col gap-12 justify-center items-center h-[100vh]">
        <h1 className="text-7xl text-white">PRICING</h1>
        <div className="flex justify-center items-center gap-8">
          {/* single or 2 playres */}
          <div className="bg-black flex flex-col  items-center w-[24em] pt-8 pb-8 rounded-t-lg gap-6">
            <div className="flex justify-center items-center gap-3">
              <img className="gamer" src="src\img\gamr.svg" alt="" srcset="" />
              <span className="text-white text-5xl">-</span>
              <img className="gamer" src="src\img\gamr.svg" alt="" srcset="" />
              <img className="gamer" src="src\img\gamr.svg" alt="" srcset="" />
            </div>
            <h1 className="text-white bold text-2xl font-bold p-4">
              Single / 2 Players
            </h1>

            <div className=" flex justify-center items-center align-middle w-[22em] border-pink-600 border-2">
              <h1 className="text-3xl text-white p-4">30 Minutes 50 Taka</h1>
            </div>

            <div className="flex flex-col justify-center  w-[22em]">
              <div className="bg-orange-500 h-[5vh] flex items-center justify-center rounded-t-lg">
                <h1 className="text-white text-xl font-bold">
                  <del>100 Taka</del> 20% Off
                </h1>
              </div>
              <div className="border-orange-500 rounded-b-lg  flex border-4 h-[15vh] justify-center items-center">
                <h1 className="text-white text-3xl">1 Hour 80 Taka</h1>
              </div>
            </div>
          </div>

          {/* more then 2 players */}

          <div className="bg-black flex flex-col  items-center  w-[24em] pt-8 pb-8 rounded-t-lg gap-6">
          <div className="flex justify-center items-center gap-3">
              <img className="gamer" src="src\img\gamr.svg" alt="" srcset="" />
              <img className="gamer" src="src\img\gamr.svg" alt="" srcset="" />
              <img className="gamer" src="src\img\gamr.svg" alt="" srcset="" />
              <span className="text-white text-4xl">..</span>
            </div>
            <h1 className="text-white bold text-2xl font-bold p-4">
              More than 2 Players
            </h1>
            <div className=" flex justify-center items-center align-middle w-[22em] border-pink-600 border-2">
              <h1 className="text-3xl text-white p-4  ">30 Minutes 60 Taka</h1>
            </div>
            <div className="flex flex-col justify-center  w-[22em]">
              <div className="bg-orange-500 h-[5vh] flex items-center justify-center rounded-t-lg">
                <h1 className="text-white text-xl font-bold">
                  <del>120 Taka</del> 17% Off
                </h1>
              </div>
              <div className="border-orange-500 rounded-b-lg  flex border-4 h-[15vh] justify-center items-center">
                <h1 className="text-white text-3xl">1 Hour 100 Taka</h1>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-active btn-secondary w-[30vh]">
          Get Membership
        </button>
      </section>


      {/* Membership */}
      
      <section className="membership flex flex-col gap-12 justify-center items-center h-[100vh]">
        <h1 className="text-5xl text-white">Select Your Membership Plan</h1>
        <div className="flex justify-center items-center gap-8">
          {/* BAsic Membership */}
          <div className="bg-white flex flex-col  items-center w-[24em] pt-8 pb-8 rounded-t-lg gap-6">
            <h1 className="text-black bold text-2xl font-bold p-4">
              Basic Membership
            </h1>

            <div className=" flex justify-center items-center align-middle w-[22em] border-[#2cbba0] border-2">
              <h1 className="text-2xl text-black p-4 text-center">10% off on all gaming sessions</h1>
            </div>

            <h1 className="text-black text-xl font-bold"> Plus* 30 Minutes Free gaming </h1>

            <div className="flex flex-col justify-center  w-[22em]">
              <div className="bg-[#36d0b4] h-[5vh] flex items-center justify-center rounded-t-lg">
                <h1 className="text-black text-xl font-bold">
                  <del>250 Taka</del> 20% Off
                </h1>
              </div>
              <div className="border-[#36d0b4] rounded-b-lg bg-[#e5fffa]  flex border-4 h-[15vh] justify-center items-center">
                <h1 className="text-black text-3xl text-center font-bold">Monthly 200 TAKA</h1>
              </div>
            </div>
          </div>

          {/* Premium */}

          <div className="bg-white flex flex-col  items-center  w-[24em] pt-8 pb-8 rounded-t-lg gap-6">
            <h1 className="text-black bold text-2xl font-bold p-4">
              Premium Membership
            </h1>
            <div className=" flex justify-center items-center align-middle w-[22em] border-[#a47131] border-2">
              <h1 className="text-2xl text-black p-4 text-center  ">20% off on all gaming seesoins</h1>
            </div>
            <h1 className="text-black font-bold text-xl"> Plus* 1 Hour Free gaming </h1>
            <div className="flex flex-col justify-center  w-[22em]">
              <div className="bg-[#bf9e54] h-[5vh] flex items-center justify-center rounded-t-lg">
                <h1 className="text-black text-xl font-bold">
                  <del>375 Taka</del> 20% Off
                </h1>
              </div>
              <div className="border-[#bf9e54] rounded-b-lg bg-[#fef8eb]  flex border-4 h-[15vh] justify-center items-center">
                <h1 className="text-black text-3xl font-bold">Monthly 300 TAKA</h1>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-active btn-secondary w-[30vh]">
          Get Membership
        </button>
      </section>
      
    </section>
  );
};

export default Main;
