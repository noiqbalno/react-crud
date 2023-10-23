import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CreateUser = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const createHandler = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: `http://localhost:3500/users/register`,
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

  return (
    <div className="container">
      <h1 className="display-7 mb-5">Tambah Data User</h1>
      {/* <button className="btn btn-sm btn-success" onClick={buttonHandler}>
        Click Me
      </button> */}
      <div className="container">
        <form action="" onSubmit={() => createHandler()}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
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
            />
          </div>
          <div className="form-group mb-3">
            {/* <input
              type="text"
              name="category"
              className="form-control"
              placeholder="category"
              onChange={(e) => setUser({ ...user, category: e.target.value })}
            /> */}
            <label className="mb-2">Role</label>
            <select
              name="role"
              className="form-control"
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              required
            >
              <option></option>
              <option value="admin">admin</option>
              <option value="notadmin">notadmin</option>
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

export default CreateUser;
