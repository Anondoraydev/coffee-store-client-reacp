import React, { useContext } from 'react';
import { AuthContext } from '../provaiders/AuthProviders';

const SignIn = () => {
  const { singInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    if (singInUser) {
      singInUser(email, password)
        .then((result) => {
          console.log("User signed in:", result.user);
          const user = {
            email,
            lastLoggedAt: result.user?.metadata?.lastSignInTime,
          }
          //update last logged at in the database

          fetch('http://localhost:5000/user', {
            method: 'PATCH',
            headers: {
              'content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <form onSubmit={handleSignIn} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
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
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
