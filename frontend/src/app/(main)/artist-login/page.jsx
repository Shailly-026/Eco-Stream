'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

const ArtistLoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const ArtistLogin = () => {

  const router = useRouter();

  const artistLoginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ArtistLoginSchema,
    onSubmit: (values) => {

      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/artist/authenticate`, values)
        .then((result) => {
          toast.success('Login Successful');
          localStorage.setItem('artist', result.data.token);
          router.push('/artist/add-podcast');
        }).catch((err) => {
          toast.error('Invalid Credentials');
          console.log(err);
        });

      console.log('Login Submitted:', values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a001f] to-[#2c003e] px-4">
      <div className="w-full max-w-md bg-[#0e0014] border border-purple-900 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Artist Sign In</h1>
          <p className="text-sm text-neutral-400 mt-2">
            Don’t have an account?
            <a href="../artist-signup" className="text-purple-400 ml-1 hover:underline">
              Sign up here
            </a>
          </p>
        </div>

        <button
          type="button"
          className="w-full py-3 px-4 flex justify-center items-center gap-2 text-sm font-medium rounded-lg border border-purple-800 bg-[#1a001f] text-white hover:bg-purple-900 transition mb-6"
        >
          <svg className="w-5 h-5" viewBox="0 0 46 47" fill="none">
            <path fill="#4285F4" d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" />
            <path fill="#34A853" d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" />
            <path fill="#FBBC05" d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" />
            <path fill="#EB4335" d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" />
          </svg>
          Sign in with Google
        </button>

        <form onSubmit={artistLoginForm.handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={artistLoginForm.handleChange}
              onBlur={artistLoginForm.handleBlur}
              value={artistLoginForm.values.email}
              className="w-full px-4 py-3 rounded-lg bg-[#1a001f] border border-purple-800 text-white placeholder-purple-500 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              placeholder="Enter your email"
            />
            {artistLoginForm.touched.email && artistLoginForm.errors.email && (
              <p className="text-xs text-red-500 mt-1">{artistLoginForm.errors.email}</p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="text-sm font-medium text-purple-300">
                Password
              </label>
              <a
                href="../artist-login/forget-password"
                className="text-sm text-purple-400 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              onChange={artistLoginForm.handleChange}
              onBlur={artistLoginForm.handleBlur}
              value={artistLoginForm.values.password}
              className="w-full px-4 py-3 rounded-lg bg-[#1a001f] border border-purple-800 text-white placeholder-purple-500 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              placeholder="Enter your password"
            />
            {artistLoginForm.touched.password && artistLoginForm.errors.password && (
              <p className="text-xs text-red-500 mt-1">{artistLoginForm.errors.password}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-purple-600 bg-[#1a001f] border-purple-700 rounded focus:ring-purple-600"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-purple-200">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-sm font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArtistLogin;
