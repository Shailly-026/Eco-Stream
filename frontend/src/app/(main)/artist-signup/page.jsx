'use client'
import axios from 'axios';
import { IconLoader3, IconSend2 } from '@tabler/icons-react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const ArtistSignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Password is required')
        .matches(/[a-z]/, 'Lowercase letter is required')
        .matches(/[A-Z]/, 'Uppercase letter is required')
        .matches(/[0-9]/, 'Number is required'),
    confirmPassword: Yup.string().required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const ArtistSignup = () => {
    const router = useRouter();

    const artistsignupform = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (value, { resetForm, setSubmitting }) => {
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/artist/add`, value)
                .then(() => {
                    toast.success('User added successfully');
                    resetForm();
                    router.push('/artist-login');
                }).catch(() => {
                    toast.error('Something went wrong');
                    setSubmitting(false);
                });
        },
        validationSchema: ArtistSignupSchema
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-black to-black p-6">
            <div className="w-full max-w-xl bg-black border border-purple-700 rounded-2xl shadow-lg p-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Artist Sign Up</h1>
                    <p className="text-sm text-purple-300">
                        Already have an account?{' '}
                        <a href="../artist-login" className="text-purple-400 hover:underline">Sign in here</a>
                    </p>
                </div>

                <form onSubmit={artistsignupform.handleSubmit} className="mt-6 space-y-5">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-purple-200">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            onChange={artistsignupform.handleChange}
                            value={artistsignupform.values.name}
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-purple-950 text-white border border-purple-700 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Enter your name"
                        />
                        {artistsignupform.touched.name && artistsignupform.errors.name && (
                            <p className="text-xs text-red-400 mt-1">{artistsignupform.errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-purple-200">Email</label>
                        <input
                            id="email"
                            type="email"
                            onChange={artistsignupform.handleChange}
                            value={artistsignupform.values.email}
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-purple-950 text-white border border-purple-700 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Enter your email"
                        />
                        {artistsignupform.touched.email && artistsignupform.errors.email && (
                            <p className="text-xs text-red-400 mt-1">{artistsignupform.errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-purple-200">Password</label>
                        <input
                            id="password"
                            type="password"
                            onChange={artistsignupform.handleChange}
                            value={artistsignupform.values.password}
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-purple-950 text-white border border-purple-700 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Enter your password"
                        />
                        {artistsignupform.touched.password && artistsignupform.errors.password && (
                            <p className="text-xs text-red-400 mt-1">{artistsignupform.errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-200">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            onChange={artistsignupform.handleChange}
                            value={artistsignupform.values.confirmPassword}
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-purple-950 text-white border border-purple-700 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Confirm your password"
                        />
                        {artistsignupform.touched.confirmPassword && artistsignupform.errors.confirmPassword && (
                            <p className="text-xs text-red-400 mt-1">{artistsignupform.errors.confirmPassword}</p>
                        )}
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center">
                        <input
                            id="terms"
                            type="checkbox"
                            className="w-4 h-4 text-purple-600 bg-purple-950 border-purple-600 rounded focus:ring-purple-500"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-purple-300">
                            I accept the <a href="#" className="text-purple-400 underline">Terms and Conditions</a>
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={artistsignupform.isSubmitting}
                        className="w-full flex justify-center items-center gap-2 px-4 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50"
                    >
                        {artistsignupform.isSubmitting ? <IconLoader3 className="animate-spin" /> : <IconSend2 />}
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ArtistSignup;

