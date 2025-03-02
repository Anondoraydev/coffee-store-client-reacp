import { useState } from "react";
import { useLoaderData } from "react-router";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'; // Import SweetAlert

const Users = () => {
  const loadedUsers = useLoaderData(); // Renaming loddedUsers to loadedUsers
  const [users, setUsers] = useState(loadedUsers);

  const handelDelete = (id) => {
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
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
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
    <div className="max-w-7xl mx-auto mt-10">
      <h2>Users {loadedUsers.length}</h2>

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
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td> {/* Fixed typo here: cratedAt -> createdAt */}
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button onClick={() => handelDelete(user._id)} className="btn bg-[#EA4744]">
                    <MdDelete className="text-xl text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
