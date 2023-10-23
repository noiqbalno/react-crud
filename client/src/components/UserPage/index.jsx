import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3500/users',
    })
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            method: 'DELETE',
            url: `http://localhost:3500/users/delete/${id}`,
          });
          getUsers();
          Swal.fire('Deleted!', 'Data successfully deleted.', 'success');
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="display-4 mb-5">Data User</h1>
      <Link to={`/user/tambah`}>
        <button className="btn btn-primary mb-3">Tambah Data</button>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  <Link to={`/user/update/${item.id}`}>
                    <button className="btn btn-sm btn-info">
                      <MdOutlineEdit /> Ubah
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandler(item.id)}
                    className="btn btn-sm btn-danger me-2"
                  >
                    <MdDeleteOutline />
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
