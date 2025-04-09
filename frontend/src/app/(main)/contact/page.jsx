'use client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react'
import * as Yup from 'Yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.number().required('Number is Required'),
  msg: Yup.string()
    .min(10, 'Too Short!')
    .max(30, 'Too Long!'),


});
const Contact = () => {

  const router = useRouter();

  const ContactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      msg: ''
    },

    onSubmit: (value, { resetForm, setSubmitting }) => {          // formvalue
      console.log(value);

      axios.post('', value)
        .then((result) => {
          toast.success('Request has been submitted Successfully');
          resetForm();
          // router.push('/user-login');
        }).catch((err) => {
          console.log(err);
          toast.error('something went wrong');
          setSubmitting(false);
        });
    },
    validationSchema: ContactSchema
  })



  return (
    <div className='contact-bg' style={{ backgroundImage: `url('/bg.jpg.jpg' bg-cover)` }}>
      <div>
        <div className=" mx-w-xl mx-auto py-16 bg-gray-100 contact-bg" >
          <div className="container mx-auto ">
            <div className="w-1/3">
              <h1 className="text-4xl font-bold text-white">Contact Us</h1>
              <form onSubmit={ContactForm.handleSubmit} >
                <div className="mt-6">
                  <input type="text" onChange={ContactForm.handleChange} value={ContactForm.values.name} className="w-full py-3 px-4 border border-gray-300 rounded-md" placeholder="Name" id='name' name="Name" />
                </div>
                <div className="mt-4">
                  <input type="text" onChange={ContactForm.handleChange} value={ContactForm.values.email} className="w-full py-3 px-4 border border-gray-300 rounded-md" placeholder="Email" id='email' name="Email" />
                </div>
                <div className="mt-4">
                  <input type="text" onChange={ContactForm.handleChange} value={ContactForm.values.phone} className="w-full py-3 px-4 border border-gray-300 rounded-md" placeholder="Phone Number" id='phone' name="Phone" />
                </div>
                <div className="mt-4">
                  <textarea className="w-full py-3 px-4 border border-gray-300 rounded-md" placeholder="Message" rows="5" id='msg' name="Message"></textarea>
                </div>
                <button type="submit" className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md ">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;