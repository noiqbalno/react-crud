import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Home = () => {
  // const buttonHandler = () => {
  //   console.log('Button Clicked');
  //   Swal.fire('Good job!', 'This is a button handler', 'success');
  // };

  const [items, setItems] = useState([]);

  const [item, setItem] = useState({
    id: '',
    name: '',
    price: '',
    stock: '',
    category: '',
  });

  // const changeHandler = (e) => {
  //   setItem({ ...item, [e.target.name]: e.target.value });
  // };

  const getItems = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3500/items',
    })
      .then((res) => {
        setItems(res.data);
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
            url: `http://localhost:3500/items/delete/${id}`,
          });
          getItems();
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const createHandler = async () => {
    try {
      item.UserId = 1;
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:3500/items/create',
        data: item,
      });
      console.log(response.data);

      getItems();
      Swal.fire('Berhasil menyimpan data');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="container">
      <h1 className="display-4">Item</h1>
      {/* <button className="btn btn-sm btn-success" onClick={buttonHandler}>
        Click Me
      </button> */}
      <div className="container">
        <form action="" onSubmit={() => createHandler()}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="name"
              onChange={(e) => setItem({ ...item, name: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="price"
              onChange={(e) => setItem({ ...item, price: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="stock"
              className="form-control"
              placeholder="stock"
              onChange={(e) => setItem({ ...item, stock: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="category"
              onChange={(e) => setItem({ ...item, category: e.target.value })}
            />
          </div>
          <button className="btn btn btn-primary mb-5" type="submit">
            Simpan
          </button>
        </form>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>
                  <Link to={`/update-item/${item.id}`}>
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

export default Home;
