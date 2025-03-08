import React from 'react'
const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="bg-black text-white  py-6">
          <div className=" max-w-[90%] md:max-w-[80%] mx-auto grid grid-cols-12">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-xl font-bold">XStreams</h2>
              <p>All rights reserved © 2025</p>
            </div>
            <div className="col-span-6 md:col-span-2">
              <h1 className="text-lg font-bold">View website</h1>
              <ul className=" mt-4 space-y-3 ">
                <li className="flex gap-2 items-center">
                  <i className="fa-solid fa-check" />
                  <p>English</p>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-2">
              <h1 className="text-lg font-bold">Need Help?</h1>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#">Visit Help Center</a>
                </li>
                <li>
                  <a href="#">Share Feedback</a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h4 className="text-lg font-bold">Connect with us</h4>
              <ul className="mt-4 space-y-4">
                <div className="flex gap-x-6">
                  <a href="">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="" className="hover:text-crimson">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="">
                    <i className="fa-brands fa-google" />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6 bg-slate-[1000] text-white" />
        <div></div>
      </footer>

    </div>
  )
}

export default Footer