import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './components/Home';
import './styles/App.css';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateUser from './components/UserPage/Update';
import Layout from './components/Layout';
import UpdateItem from './components/ItemsPage/UpdateItem';
import UserPage from './components/UserPage';
import CreateUser from './components/UserPage/CreateUser';
import ItemsPageWRedux from './components/ItemsPageWRedux';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="item" element={<Home />} />
            <Route path="update-item/:id" element={<UpdateItem />} />
            <Route path="user" element={<UserPage />} />
            <Route path="user/tambah" element={<CreateUser />} />
            <Route path="user/update/:id" element={<UpdateUser />} />

            <Route path="item-redux" element={<ItemsPageWRedux />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
