import React from 'react';
import { useSelector } from 'react-redux';
import { removeuser } from '../Store/Userslice';
import { useDispatch } from 'react-redux';
export default function () {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    });

    const deleteuser = (id) => {
        dispatch(removeuser(id));
    };

    return (
        <>
            {
                data.map((user, id) => {
                    return <tr key={id}>
                        <td className="py-2">{user}</td>
                        <td className="py-2">
                            <button
                                className="btn btn-accent ml-5"
                                onClick={() => deleteuser(id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                })
            }
        </>


    )
}
