import React, { useContext } from 'react';
import { AuthContext } from '../provaiders/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {
  const { createUser } = useContext(AuthContext)
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value;
    console.log(password, email);
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        //new user has been created

        const cratedAt =result.user?.metadata?.creationTime

        const user = { email, cratedAt: cratedAt };
        fetch('http://localhost:5000/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Added Successfully",
                icon: "success",
                draggable: true
              });
            }
          })
      })
      .catch(error => {
        console.error(error);

      })
  };

  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-8">
        <form onSubmit={handleSignUp} className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl mb-4">Sign Up</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
              placeholder="Enter your password"
            />
          </div>

          {/* <div className="mb-4">
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
              placeholder="Confirm your password"
            />
          </div> */}

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
