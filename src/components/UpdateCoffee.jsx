import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, supplier, quantity, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };

    // Send updated data to the server
    fetch(` http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Debugging line
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee updated successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          event.target.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-700">Update Coffee: {name}</h1>
        <p className="py-4 text-lg text-gray-500">
          Enhance your coffee details and keep your database updated with the latest information.
        </p>
      </div>
      <div className="bg-[#F4F3F0] p-10 shadow-lg rounded-lg">
        <form onSubmit={handleUpdateCoffee}>
          {/* Form row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label text-lg font-semibold">Name</label>
              <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold">Available Quantity</label>
              <input type="number" name="quantity" defaultValue={quantity} placeholder="Enter available quantity" className="input input-bordered w-full" required />
            </div>
          </div>

          {/* Form row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="form-control">
              <label className="label text-lg font-semibold">Supplier</label>
              <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter supplier name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold">Taste</label>
              <input type="text" name="taste" defaultValue={taste} placeholder="Enter taste profile" className="input input-bordered w-full" required />
            </div>
          </div>

          {/* Form row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="form-control">
              <label className="label text-lg font-semibold">Category</label>
              <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold">Details</label>
              <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" required />
            </div>
          </div>

          {/* Photo URL */}
          <div className="form-control mt-4">
            <label className="label text-lg font-semibold">Photo URL</label>
            <input type="url" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" required />
          </div>

          {/* Submit button */}
          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C] hover:bg-[#b79d7a] text-white text-lg w-full">Update Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
