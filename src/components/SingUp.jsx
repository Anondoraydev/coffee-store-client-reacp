import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provaiders/AuthProviders';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Signing up user:", name, email, password);

    try {
      const result = await createUser(email, password);
      console.log("User created:", result.user);

      const createdAt = result.user?.metadata?.creationTime;
      const user = { name, email, createdAt };

      console.log("Sending data to backend:", user);

      const response = await fetch(' http://localhost:5000/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log("Backend response:", data);

      if (data.insertedId) {
        console.log("Swal should appear now!");
        Swal.fire({
          title: 'User Added Successfully',
          text: `Welcome, ${name}!`, // Show the name in the alert
          icon: 'success',
          draggable: true,
        });
      } else {
        console.error("Error inserting user data.");
        Swal.fire({
          title: 'Something went wrong!',
          icon: 'error',
          text: 'Failed to add the user to the database.',
        });
      }
    } catch (error) {
      console.error("Sign-up failed:", error);
      Swal.fire({
        title: 'Sign Up Failed',
        icon: 'error',
        text: error.message || 'An unexpected error occurred.',
      });
    }
  };

  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-8">
        <form onSubmit={handleSignUp} className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl mb-4">Sign Up</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input type="text" name="name" className="w-full px-3 py-2 border border-gray-300 rounded" required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded" required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input type="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded" required />
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
