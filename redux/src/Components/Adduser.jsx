import React from 'react';
import DeleteAllUser from './DeleteAllUser';

export default function AddUser() {
  return (
    <div className="container mx-auto flex justify-center px-1 py-4">
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn">Add New Users</button>
        </div>
        <ul>
          {/* <li>Hi</li>
          <li>Hii</li> */}
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </div>
  );
}
