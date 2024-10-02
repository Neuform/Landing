// LoginPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { login } from '../state/Auth/Action';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { loading, error } = useSelector((state) => state.auth); // Assuming your reducer is named `auth`
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
  
    const userData = {
      username:email,
      password,
    };
  
    // Dispatch login action
    dispatch(login(userData))
      .then((res) => {
        // Check if login was successful by checking the state (e.g., if a JWT exists)
        const jwt = localStorage.getItem('jwt');
        
        if (jwt) {
          // Only navigate if login is successful
          navigate('/blog/author');
        }
      })
      .catch((err) => {
        console.error('Login failed:', err);
        // You could also handle showing an error message here
      });
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
      <form onSubmit={handleLogin} className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Username
          </label>
          <input
            type="name"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your authorized username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </form>
     
    </div>
  </div>
  );
};

export default LoginPage;
