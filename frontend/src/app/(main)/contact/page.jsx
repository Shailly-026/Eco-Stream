import React from 'react'

const contact = () => {
  return (
    <div className='max-w-xl mx-auto'>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto flex space-x-16">
          <div className="w-1/3">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <form action="/action_page.php">
              <div className="mt-6">
                <input type="text" className="w-full py-3 px-4 border border-gray-300 rounded-md" placeholder="Name" name="Name" />
              </div>
              <div className="mt-4">
                <input type="text" className="w-full py-3 px-4 border border-gray-300 rounded-md" placeholder="Email" name="Email" />
              </div>
              <div className="mt-4">
                <input type="text" className="w-full py-3 px-4 border border-gray-300 rounded-md" placeholder="Phone Number" name="Phone" />
              </div>
              <div className="mt-4">
                <textarea className="w-full py-3 px-4 border border-gray-300 rounded-md" placeholder="Message" rows="5" name="Message"></textarea>
              </div>
              <button type="submit" className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md">Send</button>
            </form>
          </div>
          <div className="w-2/3">
            <div className="text-lg">
              <ul>
                <li>
                  <a href="#" className="flex items-center">
                    <i className="fa fa-map-marker mr-2"></i>Making this the first true
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center">
                    <i className="fa fa-phone mr-2"></i>Call : +01 1234567890
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center">
                    <i className="fa fa-envelope mr-2"></i>Email : demo@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Newsletter</h3>
              <div className="mt-4">
                <textarea className="w-full py-3 px-4 border border-gray-300 rounded-md" placeholder="Enter Your Email" rows="4"></textarea>
                <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md">Subscribe</button>
              </div>
            </div>
            <div className="mt-8">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-blue-500"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#" className="text-blue-500"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#" className="text-blue-500"><i className="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#" className="text-blue-500"><i className="fa fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact;