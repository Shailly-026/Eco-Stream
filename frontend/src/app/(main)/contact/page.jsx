import React from 'react'

const Contact = () => {
  return (
    <div className='contact-bg'style={{backgroundImage: `url('/bg.jpg.jpg' bg-cover)`}}>
    <div>
      <div className=" mx-w-xl mx-auto py-16 bg-gray-100 contact-bg" >
        <div className="container mx-auto ">
          <div className="w-1/3">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
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

  )
}

export default Contact;