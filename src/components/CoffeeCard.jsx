import React from 'react';

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body mt-8 ">
          <div>
            <h2 className="text-[20px] text-[#1B1A1A] font-semibold">
              Name: <span className="text-[20px] text-[#5C5B5B] font-normal"> {name}</span>
            </h2>
            <p className="text-[20px] text-[#1B1A1A] font-semibold">
              Quantity: <span className="text-[20px] text-[#5C5B5B] font-normal"> {quantity}</span>
            </p>
            <h2 className="text-[20px] text-[#1B1A1A] font-semibold">
              Taste: <span className="text-[20px] text-[#5C5B5B] font-normal"> {taste}</span>
            </h2>
          </div>
          <div className="card-actions justify-end ">
            <button className="btn btn-primary">Watch</button>
            <button className="btn btn-primary">Watch</button>
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
