import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div clasname="container">
        <h1 className="display-4  text-center">Hello, world!</h1>
        <nav className="navbar bg-body-tertiaryr">
          <form className="container-fluid justify-content-center">
            <Link to={`/item`}>
              <button className="btn btn-success me-5" type="button">
                ITEM
              </button>
            </Link>
            <Link to={`/item-redux`}>
              <button className="btn btn-success me-5" type="button">
                ITEM REDUX
              </button>
            </Link>
            <Link to={`/user`}>
              <button className="btn btn btn-primary" type="button">
                USER
              </button>
            </Link>
          </form>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
