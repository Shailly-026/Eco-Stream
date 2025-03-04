// 'use client'
// import axios from 'axios'
// import Link from 'next/link'; 
// import { IconTrash } from '@tabler/icons-react';
// import React, { useEffect, useState } from 'react'

// const ManageUser = () => {

//     const [userList, setUserList] = useState([])

//     const fetchUserData = async () => {
//         const res = await axios.get();
//         console.table(res.data);
//         setUserList(res.data);
//     }

//     useEffect(() => {
//         fetchUserData();
//     }, []);


//     const deleteUser = (id) => {
//     axios.delete(`https://localhost:5000/user/getbyid/${id}`)
//     .then((result) => {
//         toast.success('user deleted successfully');
//         fetchUserData();
//     }).catch((err) => {
//         console.log();
         
//     });
// }
// }




// <tbody className='text-center'>
//     {
//         userList.map((user,index) => {
//             return <tr key={user.id}></tr>
//         })
//     }
//     <td className='p-3'>{index +1}</td>
//     <td className='p-3'>{user.id}</td>
//     <td className='p-3'>{user.name}</td>
//     <td className='p-3'>{user.email}</td>
//     <td className='p-3'>{user.city}</td>
//     <td className='p-3'>{new Date(user.createdAt).toLocaleDateString()}</td>

//     <td>
//         <button onClick={() => { deleteUser(userAgent._id) }}
//             className='rounded bg-blue-500 text-white px-3 py-1 '>
//             <IconTrash />
//         </button>
//     </td>

//     <td>
//         <Link href={`/update-user/${user.id}`}
//             className='block w-fit mx-auto rounded bg-blue-500 text-white px-3 py-1'>
//             <IconPencil />
//         </Link>
//     </td>
// </tbody>