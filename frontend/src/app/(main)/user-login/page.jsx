'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
      // backend call here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d1c2b] to-[#0f0e17] p-4">
      <div className="w-full max-w-md bg-black/40 border border-[#312450] backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h2 className="text-center text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-center text-sm text-purple-300 mb-6">
          New here?{' '}
          <a
            href="../user-signup"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            Create an account
          </a>
        </p>

        <form onSubmit={loginForm.handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-white mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              className="w-full px-4 py-3 rounded-xl bg-[#1c1a2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
            {loginForm.touched.email && loginForm.errors.email && (
              <p className="text-red-500 text-xs mt-1">{loginForm.errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-white mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              className="w-full px-4 py-3 rounded-xl bg-[#1c1a2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
            />
            {loginForm.touched.password && loginForm.errors.password && (
              <p className="text-red-500 text-xs mt-1">{loginForm.errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center text-sm text-white">
              <input
                type="checkbox"
                className="form-checkbox rounded text-purple-500 focus:ring-purple-500 bg-[#1c1a2e] border-[#312450]"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="../user-login/forget-password"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center text-gray-500 text-sm">
          <div className="flex-grow border-t border-[#2c2442]"></div>
          <span className="mx-4 text-purple-300">or</span>
          <div className="flex-grow border-t border-[#2c2442]"></div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-[#312450] bg-[#1c1a2e] text-white rounded-xl py-3 hover:bg-[#2d2b3e] transition duration-200"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285F4"
              d="M533.5 278.4c0-17.7-1.6-35.4-5.3-52.4H272v99.1h147.6c-6.4 34.5-25.2 63.7-53.5 83.2v68h86.4c50.8-46.6 80-115.3 80-197.9z"
            />
            <path
              fill="#34A853"
              d="M272 544.3c72.6 0 133.6-24.2 178.2-65.4l-86.4-68c-23.8 16-54.2 25.2-91.8 25.2-70.7 0-130.6-47.9-152-112.1H30.1v70.2C76.2 479.6 168.3 544.3 272 544.3z"
            />
            <path
              fill="#FBBC04"
              d="M120 324c-10.1-29.5-10.1-61.2 0-90.7v-70.2H30.1c-38.9 77.7-38.9 153.3 0 231l89.9-70.1z"
            />
            <path
              fill="#EA4335"
              d="M272 107.3c39.6-.6 77.8 14.1 106.4 40.6l79.5-78.6C403.3 24.6 340.7 0 272 0 168.3 0 76.2 64.6 30.1 153.1l89.9 70.2c21.6-64.2 81.5-112 152-112z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

