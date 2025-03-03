import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
const User2 = () => {


  const { isPending, isError,error, data: users } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(' http://localhost:5000/user');
      return res.json();
    }
  })

  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch(" http://localhost:5000/user")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     })
  // }, []);

  if (isPending) {
    return <div className='text-center top-1/2 left-1/2 absolute'><span className="loading loading-spinner text-neutral"></span></div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Success alert
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });

              // Update the users state to remove the deleted user

              // const remainingUsers = users.filter((user) => user._id !== id);
              // setUsers(remainingUsers);
            }
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            // Error alert
            Swal.fire({
              icon: "error",
              title: "Error deleting user!",
              text: "Please try again later.",
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto mt-10">
        {/* <h2>Users {loadedUsers.length}</h2> */}

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Created At</th>
                <th>Last Logged In</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user._id}>
                  <th>1</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td>
                    <button onClick={() => handleDelete(user._id)} className="btn bg-[#EA4744]">
                      <MdDelete className="text-xl text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User2;