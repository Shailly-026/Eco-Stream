'use client';
import axios from 'axios';
import { IconLoader3, IconSend2 } from '@tabler/icons-react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Password is required')
    .matches(/[a-z]/, 'Lowercase required')
    .matches(/[A-Z]/, 'Uppercase required')
    .matches(/[0-9]/, 'Number required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  const router = useRouter();

  const signupform = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      axios
        .post('http://localhost:5000/user/add', values)
        .then(() => {
          toast.success('Account created!');
          resetForm();
          router.push('/user-login');
        })
        .catch(() => {
          toast.error('Signup failed. Try again.');
          setSubmitting(false);
        });
    },
    validationSchema: SignupSchema
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1f0c2e] to-[#120d26] px-4">
      <div className="w-full max-w-lg bg-[#1b1629]/60 backdrop-blur-md rounded-2xl shadow-xl border border-[#322947] p-8">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">Create an Account</h1>
        <p className="text-center text-sm text-neutral-400 mb-8">
          Already have an account?{' '}
          <a href="/user-login" className="text-violet-400 hover:underline">
            Sign in
          </a>
        </p>

        <form onSubmit={signupform.handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-neutral-300 block mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              onChange={signupform.handleChange}
              value={signupform.values.name}
              className="w-full px-4 py-3 rounded-lg bg-[#2b233d] border border-[#3a2d52] text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
            {signupform.touched.name && signupform.errors.name && (
              <p className="text-xs text-red-400 mt-1">{signupform.errors.name}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-neutral-300 block mb-1">Email</label>
            <input
              type="email"
              id="email"
              onChange={signupform.handleChange}
              value={signupform.values.email}
              className="w-full px-4 py-3 rounded-lg bg-[#2b233d] border border-[#3a2d52] text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
            {signupform.touched.email && signupform.errors.email && (
              <p className="text-xs text-red-400 mt-1">{signupform.errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-neutral-300 block mb-1">Password</label>
            <input
              type="password"
              id="password"
              onChange={signupform.handleChange}
              value={signupform.values.password}
              className="w-full px-4 py-3 rounded-lg bg-[#2b233d] border border-[#3a2d52] text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
            {signupform.touched.password && signupform.errors.password && (
              <p className="text-xs text-red-400 mt-1">{signupform.errors.password}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-neutral-300 block mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              onChange={signupform.handleChange}
              value={signupform.values.confirmPassword}
              className="w-full px-4 py-3 rounded-lg bg-[#2b233d] border border-[#3a2d52] text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
            {signupform.touched.confirmPassword && signupform.errors.confirmPassword && (
              <p className="text-xs text-red-400 mt-1">{signupform.errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 text-violet-500 bg-[#1b1629] border-[#3a2d52] rounded focus:ring-violet-600"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-neutral-300">
              I agree to the{' '}
              <a href="#" className="text-violet-400 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            disabled={signupform.isSubmitting}
            type="submit"
            className="w-full py-3 flex justify-center items-center gap-2 text-white bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition disabled:opacity-50"
          >
            {signupform.isSubmitting ? (
              <IconLoader3 className="animate-spin" />
            ) : (
              <IconSend2 />
            )}
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
