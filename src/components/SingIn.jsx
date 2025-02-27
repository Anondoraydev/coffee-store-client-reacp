import React from 'react';

const SignIn = () => {
  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-8">
        <form className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
