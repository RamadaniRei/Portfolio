import React from "react";
import tip from "../assets/tip.png";
import stat from "../assets/stat.png";
import social from "../assets/social.png";
import perfume from "../assets/perfume.png";

const PortfolioSection = () => {
  return (
    <section className="py-4">
      <div className="flex justify-center text-4xl font-bold">Portfolio</div>
      <div className="container-xl lg:container m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg">
          <div className="flex flex-col justify-between bg-gray-400 p-4 rounded-xl  ">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-black  flex justify-center ">
                Tip Calculator
              </h2>
              <img src={tip} alt="html" className="flex w-full h-40" />
              <p className="mt-2 mb-4">
                Welcome to our tip calculator page! Here, you can easily
                calculate the tip for your meal by entering the bill amount and
                selecting your desired tip percentage. Our tool provides quick
                and accurate tip suggestions, helping you show appreciation for
                great service. Plus, you can easily split the total bill among
                your group, ensuring everyone contributes fairly.
              </p>
            </div>
            <a
              href="https://github.com/RamadaniRei/Time-Report-UI"
              className=" flex justify-end text-blue-700 "
            >
              {"Visit Link ->"}
            </a>
          </div>
          <div className="flex flex-col justify-between bg-gray-400 p-4 rounded-xl   ">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-black  flex justify-center ">
                App time usage
              </h2>
              <img src={stat} alt="css" className="flex w-full h-40" />

              <p className="mt-2 mb-4">
                Welcome to our app usage statistics page! Here, you can view
                detailed insights into how often and how long you've been using
                the app. Our tool provides comprehensive data, including your
                most used features and peak usage times. Use these insights to
                better understand your app habits and make the most of your
                experience.
              </p>
            </div>
            <a
              href="https://github.com/RamadaniRei/Time-Report-UI"
              className=" flex justify-end text-blue-700 "
            >
              {"Visit Link ->"}
            </a>
          </div>
          <div className="flex flex-col justify-between  bg-gray-400 p-4 rounded-xl ">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-black flex justify-center ">
                Social links
              </h2>
              <img src={social} alt="social" className="flex w-full h-40" />
              <p className="mt-2 mb-4">
                Welcome to my social media links page! Here, you'll find direct
                links to all my social media profiles, making it easy to connect
                with me across different platforms. Whether you want to follow
                my latest updates, view my photos, or join the conversation,
                this page is your gateway to staying connected. Feel free to
                explore and follow me on your favorite social media channels!
              </p>
            </div>
            <a
              href="https://github.com/RamadaniRei/Time-Report-UI"
              className=" flex justify-end text-blue-700 "
            >
              {"Visit Link ->"}
            </a>
          </div>
          <div className="flex flex-col justify-between bg-gray-400 p-4 rounded-xl  ">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-black  flex justify-center ">
                Perfume showcase
              </h2>
              <img src={perfume} alt="perfume" className="flex w-full h-40" />

              <p className="mt-2 mb-4">
                Welcome to our perfume showcase page! Here, you can explore our
                curated collection of exquisite fragrances, each designed to
                evoke a unique mood and experience. From timeless classics to
                modern scents, our selection offers something for every
                preference and occasion. Discover the perfect fragrance that
                complements your style and captivates your senses.
              </p>
              <a
                href="https://github.com/RamadaniRei/Time-Report-UI"
                className=" flex justify-end text-blue-700 "
              >
                {"Visit Link ->"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
