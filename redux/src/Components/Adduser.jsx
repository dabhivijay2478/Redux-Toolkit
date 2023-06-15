import React from 'react';
import DeleteAllUser from './DeleteAllUser';
import { fakedata } from '../Fakedata/Fakedata';
import { useDispatch } from "react-redux"
import { adduser } from '../Store/Userslice';
import UserList from './Displayuser';
export default function AddUser() {
  const dispatch = useDispatch()
  const addnewuser = (data) => {
    dispatch(adduser(data))
  }
  return (
    <div className="container mx-auto flex justify-center px-1 py-4">
      <div className="px-5 py-5">
        <div className="px-5 py-5" >
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn mt-5 bg-blue-500 text-white" onClick={() => addnewuser(fakedata())}>Add New Users</button>
        </div>
        <ul>
          <UserList />
        </ul>
        <hr className='px-5 py-5' />
        <DeleteAllUser />
      </div>
    </div>
  );
}
