import React from 'react';
import Swal from 'sweetalert2';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router';
const handealAddCoffee = event => {
  event.preventDefault();
  const form = event.target;

  const name = form.name.value;
  const quantity = form.quantity.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;

  const newCoffee = {
    name,
    quantity,
    supplier,
    taste,
    category,
    details,
    photo,
  };
  console.log(newCoffee);

  // send data to the server

  fetch(' http://localhost:5000/coffee', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newCoffee),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'User Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
    });
};

const About = () => {
  return (
    <div className="mt-6 max-w-7xl mx-auto">
      <Link to={'/dashboard'}> <h3 className='text-[20px] pb-5 flex items-center gap-1 '> <FaLongArrowAltLeft />Back to home</h3></Link>
      <div className="bg-[#F4F3F0] py-[70px] px-[100px]">
        <h2 className="text-[45px] text-center">Add New Coffee</h2>
        <p className="text-[18px] text-center px-24 py-6  ">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handealAddCoffee}>
          {/* form row */}
          <div className="md:flex">
            <div className="form-control mb-5 md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px] font-semibold  ">
                  Coffee Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee name"
                  className="input input-bordered text-[16px] w-full"
                />
              </label>
            </div>
            <div className="form-control mb-5 md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[20px] font-semibold  ">
                  Avaliable Quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Avaliable Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row */}
          <div className="md:flex">
            <div className="form-control mb-5 md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px] font-semibold  ">
                  Supplier
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered text-[16px] w-full"
                />
              </label>
            </div>
            <div className="form-control mb-5 md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[20px] font-semibold  ">
                  Taste
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row */}
          <div className="md:flex">
            <div className="form-control mb-5 md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px] font-semibold  ">
                  Category
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered text-[16px] w-full"
                />
              </label>
            </div>
            <div className="form-control mb-5 md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[20px] font-semibold  ">
                  Details
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control mb-5 ">
            <label className="label">
              <span className="label-text text-[20px] font-semibold ">
                Photo
              </span>
            </label>
            <label className="input-group">
              <input
                type="url"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block bg-[#D2B48C] "
          />
        </form>
      </div>
    </div>
  );
};

export default About;
