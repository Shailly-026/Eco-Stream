// 'use client';
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'Yup';


// const LoginSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Required'),
// });
// const Login = () => {

//     const loginForm = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//         },
//         onSubmit: (values) => {          // formvalue
//             console.log(values);
//             //send values to backend

            

//         },
//         validationSchema: LoginSchema
//     })
//     return (
//         <div className='max-w-xl mx-auto'>
//             <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
//                 <div className="p-4 sm:p-7">
//                     <div className="text-center">
//                         <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
//                             User Sign in
//                         </h1>
//                         <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
//                             Don't have an account yet?
//                             <a
//                                 className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
//                                 href="../user-signup"
//                             >
//                                 Sign up here
//                             </a>
//                         </p>
//                     </div>
//                     <div className="mt-5">
//                         <button
//                             type="button"
//                             className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
//                         >
//                             <svg
//                                 className="w-4 h-auto"
//                                 width={46}
//                                 height={47}
//                                 viewBox="0 0 46 47"
//                                 fill="none"
//                             >
//                                 <path
//                                     d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
//                                     fill="#4285F4"
//                                 />
//                                 <path
//                                     d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
//                                     fill="#34A853"
//                                 />
//                                 <path
//                                     d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
//                                     fill="#FBBC05"
//                                 />
//                                 <path
//                                     d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
//                                     fill="#EB4335"
//                                 />
//                             </svg>
//                             Sign in with Google
//                         </button>
//                         <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
//                             Or
//                         </div>
//                         {/* Form */}
//                         <form onSubmit={loginForm.handleSubmit}>
//                             <div className="grid gap-y-4">
//                                 {/* Form Group */}
//                                 <div>
//                                     <label
//                                         htmlFor="email"
//                                         className="block text-sm mb-2 dark:text-white"
//                                     >
//                                         Email address
//                                     </label>
//                                     <div className="relative">
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             onChange={loginForm.handleChange}
//                                             value={loginForm.values.email}
//                                             className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//                                             required=""
//                                             aria-describedby="email-error"
//                                         />
//                                         <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
//                                             <svg
//                                                 className="size-5 text-red-500"
//                                                 width={16}
//                                                 height={16}
//                                                 fill="currentColor"
//                                                 viewBox="0 0 16 16"
//                                                 aria-hidden="true"
//                                             >
//                                                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     {
//                                         (loginForm.touched.email && loginForm.errors.email) &&
//                                         (
//                                             <p className="text-xs text-red-600 mt-2" id="email-error">
//                                                 {loginForm.errors.email}
//                                             </p>
//                                         )
//                                     }
//                                 </div>
//                                 {/* End Form Group */}
//                                 {/* Form Group */}
//                                 <div>
//                                     <div className="flex justify-between items-center">
//                                         <label
//                                             htmlFor="password"
//                                             className="block text-sm mb-2 dark:text-white"
//                                         >
//                                             Password
//                                         </label>
//                                         <a
//                                             className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
//                                             href="../user-login/forget-password"
//                                         >
//                                             Forgot password?
//                                         </a>
//                                     </div>
//                                     <div className="relative">
//                                         <input
//                                             type="password"
//                                             id="password"
//                                             onChange={loginForm.handleChange}
//                                             value={loginForm.values.email}
//                                             className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//                                             required=""
//                                             aria-describedby="password-error"
//                                         />
//                                         <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
//                                             <svg
//                                                 className="size-5 text-red-500"
//                                                 width={16}
//                                                 height={16}
//                                                 fill="currentColor"
//                                                 viewBox="0 0 16 16"
//                                                 aria-hidden="true"
//                                             >
//                                                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     {
//                                         (loginForm.touched.password && loginForm.errors.password) &&
//                                         (
//                                             <p className="text-xs text-red-600 mt-2" id="email-error">
//                                                 {loginForm.errors.password}
//                                             </p>
//                                         )
//                                     }
//                                 </div>
//                                 {/* End Form Group */}
//                                 {/* Checkbox */}
//                                 <div className="flex items-center">
//                                     <div className="flex">
//                                         <input
//                                             id="remember-me"
//                                             name="remember-me"
//                                             type="checkbox"
//                                             className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//                                         />
//                                     </div>
//                                     <div className="ms-3">
//                                         <label htmlFor="remember-me" className="text-sm dark:text-white">
//                                             Remember me
//                                         </label>
//                                     </div>
//                                 </div>
//                                 {/* End Checkbox */}
//                                 <button
//                                     type="submit"
//                                     className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//                                 >
//                                     Sign in
//                                 </button>
//                             </div>
//                         </form>
//                         {/* End Form */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Login;


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

