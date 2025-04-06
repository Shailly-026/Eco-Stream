
// import React from 'react'

// const page = () => {

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if(!file) toast.error('No file selected');

//     const formData = new FormData();
//     formData.append('file',file);
//     formData.append('upload_preset','mypreset');
//     formData.append('cloud_name','dssjgtsjl');

//     axios.post('http://api.cloudinary.com/v1_1/dssjgtsjl/image/upload',formData)
//     .then((result) => {
//         toast.success('File Uploaded Successfully');
//     }).catch((err) => {
//         toast.error('File upload successfully');
//     });
//   }

//   return (
//     <div>
//         <input type='file' onChange={handleFileUpload}/>
//     </div>
//   )
// }

// export default page;