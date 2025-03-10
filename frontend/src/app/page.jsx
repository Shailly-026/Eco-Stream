import React from "react";
import Image from "next/image";

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">

          <nav className="flex items-center justify-between">
            <a href="index.html">
              <img src="images/logo.png" alt="Logo" />
            </a>
            <button
              className="lg:hidden text-xl"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="hidden lg:flex space-x-6">
              <a className="text-gray-800 hover:text-gray-600" href="index.html">
                Home
              </a>
              <a className="text-gray-800 hover:text-gray-600" href="about.html">
                About
              </a>
              <a className="text-gray-800 hover:text-gray-600" href="icecream.html">
                Icecream
              </a>
              <a className="text-gray-800 hover:text-gray-600" href="services.html">
                Services
              </a>
              <a className="text-gray-800 hover:text-gray-600" href="blog.html">
                Blog
              </a>
              <a className="text-gray-800 hover:text-gray-600" href="contact.html">
                Contact Us
              </a>
              <div className="flex items-center">
                <a className="text-gray-800 hover:text-gray-600 flex items-center" href="#">
                  Login <i className="fa fa-user ml-2"></i>

                </a>
                <div className="fa fa-search ml-4"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Banner Section */}
    
     

      {/* About Section */}
  


      {/* Featured Ice Cream Section */}
  

      {/* Services Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Ice Cream Services</h1>
          <p className="text-lg mt-4">tempor incididunt ut labore et dolore magna aliqua</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {['icon-1', 'icon-2', 'icon-1'].map((icon, index) => (
              <div className="bg-white shadow-lg p-6" key={index}>
                <h5 className="text-xl font-semibold">
                  <span className="inline-block mr-2">
                    <img src={`images/${icon}.png`} alt="Service Icon" className="inline-block w-6" />
                  </span>
                  Cookies Ice Cream
                </h5>
                <p className="text-lg mt-4">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat.</p>
              </div>
            ))}
          </div>
          <a href="#" className="mt-6 text-blue-500">Read More</a>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Testimonial</h1>
          <div className="mt-12">
            {/* Testimonials carousel */}
            <div className="carousel-inner">
              {['client-img'].map((clientImg, index) => (
                <div className="carousel-item active" key={index}>
                  <p className="text-lg italic">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <h4 className="text-xl font-semibold mt-4">Marri Fen</h4>
                  <div className="mt-4">
                    <img src={`images/${clientImg}.png`} alt="Client" className="w-16 h-16 rounded-full mx-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
     
      {/* Footer Section */}
      <div className="bg-gray-800 py-6 text-center text-white">
        <p className="text-lg">
          2020 All Rights Reserved. Design by{" "}
          <a href="https://html.design" className="text-blue-400">Free Html Templates</a> Distribution by{" "}
          <a href="https://themewagon.com" className="text-blue-400">ThemeWagon</a>
        </p>
      </div>
    </div>
  );
};

export default App;