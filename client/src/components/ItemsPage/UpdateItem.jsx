import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
// import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateItem = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [item, setItem] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
  });

  const updateHandler = async () => {
    try {
      item.UserId = 1;
      const response = await axios({
        method: 'PUT',
        url: `http://localhost:3500/items/update/${id}`,
        data: item,
      });

      //   getItems();
      if (response) {
        Swal.fire('Berhasil menyimpan data');
        window.location = '/';
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.message}`,
      });
      console.log(error);
    }
  };

  const getItemsById = async () => {
    try {
      const result = await axios({
        method: 'GET',
        url: `http://localhost:3500/items/details/${id}`,
      });

      setItem({
        name: result.data.name,
        price: result.data.price,
        stock: result.data.stock,
        category: result.data.category,
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
    getItemsById();
  }, [id]);

  return (
    <div className="container">
      <h1 className="display-7 mb-5">Update Item</h1>
      {/* <button className="btn btn-sm btn-success" onClick={buttonHandler}>
        Click Me
      </button> */}
      <div className="container">
        <form action="" onSubmit={() => updateHandler()}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="name"
              defaultValue={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="price"
              defaultValue={item.price}
              onChange={(e) => setItem({ ...item, price: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="stock"
              className="form-control"
              placeholder="stock"
              defaultValue={item.stock}
              onChange={(e) => setItem({ ...item, stock: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="category"
              defaultValue={item.category}
              onChange={(e) => setItem({ ...item, category: e.target.value })}
            />
          </div>
          <button className="btn btn btn-primary mb-5" type="submit">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
