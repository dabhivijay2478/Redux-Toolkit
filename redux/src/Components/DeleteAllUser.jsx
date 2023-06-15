import React from 'react'
import { useSelector } from 'react-redux'
import { clearalluser } from '../Store/Userslice'
import { useDispatch } from 'react-redux'

export default function DeleteAllUser() {
  const dispatch = useDispatch();

  const deletealluser = () => {
    dispatch(clearalluser())
  }
  return (
    <div>
      <button className="btn btn-error" onClick={deletealluser}>Delete All User</button>
    </div>
  )
}
