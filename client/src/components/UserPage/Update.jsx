import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const updateHandler = async () => {
    try {
      const response = await axios({
        method: 'PUT',
        url: `http://localhost:3500/users/update/${id}`,
        data: user,
      });

      //   getItems();
      if (response) {
        Swal.fire('Berhasil menyimpan data');
      }
      window.location = '/user';
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.message}`,
      });
      console.log(error);
    }
  };

  const getUserById = async () => {
    try {
      const result = await axios({
        method: 'GET',
        url: `http://localhost:3500/users/details/${id}`,
      });

      setUser({
        username: result.data.username,
        email: result.data.email,
        password: result.data.password,
        role: result.data.role,
      });
    } catch (error) {
      Swal.fire({
        title: 'Oops...',
        text: `${error.response.data.message}`,
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Kembali ke HOME',
      }).then((result) => {
        navigate('/');
      });
      console.log(error);
    }
  };

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div className="container">
      <h1 className="display-7 mb-5">Ubah Data User</h1>
      {/* <button className="btn btn-sm btn-success" onClick={buttonHandler}>
        Click Me
      </button> */}
      <div className="container">
        <form action="" onSubmit={() => updateHandler()}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
              defaultValue={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
              defaultValue={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label className="mb-2">Role</label>
            <select
              name="role"
              className="form-control"
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              required
            >
              <option></option>
              <option
                value="admin"
                selected={user.role === 'admin' ? true : false}
              >
                admin
              </option>
              <option
                value="notadmin"
                selected={user.role === 'notadmin' ? true : false}
              >
                notadmin
              </option>
            </select>
          </div>
          <button className="btn btn btn-primary mb-5" type="submit">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
