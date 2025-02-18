import React from 'react';

const Banner = () => {
  return (
    <div >
      <div
        className="hero py-[200px]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/cc4Z9sdj/6.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className=" text-white">
          <div className="pl-[450px] max-w-7xl mx-auto">
            <h1 className="mb-5 text-3xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#E3B577]">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;