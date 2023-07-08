/*import React, { useState } from 'react';
import Manage_User from '../../services/Manage_User';
import '../../style/Admin.css';
import Manage_Car from '../../services/Manage_Car';
import Login from '../Login';

// Component đăng nhập
function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý xác thực người dùng ở đây
    // Nếu xác thực thành công, gọi handleLogin
    handleLogin(username);
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <h1>Log in</h1>
      <input type="text" placeholder="Tên người dùng" value={username} required onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Mật khẩu" value={password} required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Đăng nhập</button>
    </form>
  );
}

// Component trang admin
function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showVehicle, setshowVehicle] = useState(false);
  const [showUser, setshowUser] = useState(false);

  const handleLogin = (username) => {
    // Xác thực và xử lý đăng nhập ở đây
    // Nếu xác thực thành công, đặt trạng thái loggedIn và username
    setLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    // Xử lý đăng xuất ở đây
    // Đặt trạng thái loggedIn về false và xóa username
    setLoggedIn(false);
    setUsername('');
  };

  const handleMenuClickVehicle = () => {
    setshowVehicle(true); // Hiển thị component khi menu được nhấp vào
    setshowUser(false);
  };

  const handleMenuClickUser = () => {
    setshowUser(true); // Hiển thị component khi menu được nhấp vào
    setshowVehicle(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div className="admin-container">
          <div className="admin-sidebar">
            <h1>Admin</h1>
            <button className='logout' onClick={handleLogout}>Đăng xuất</button>
          </div>
          <div className="admin-content">
            <ul className="admin-menu">
                <li>
                  <button onClick={handleMenuClickVehicle}><i class="fa-solid fa-car-side"></i>Quan ly xe</button>
                </li>
                <li><button onClick={handleMenuClickUser}><i class="fa-solid fa-user"></i>Quan ly nguoi dung</button></li>
            </ul>
            <div className='content'>
              <h3>Chào mừng, {username}!</h3>
              {/* Hiển thị nội dung và chức năng admin tại đây  showVehicle && <Manage_Car />}
              {showUser && <Manage_User />}
            </div>
          </div>
        </div>
      ) : (
        <Login handleLogin={handleLogin}/>
      )}
    </div>
  );
}

export default Admin; */

import React, { useState } from 'react';
import '../../style/Admin.css';
import Manage_User from '../../services/Manage_User';
import Manage_Car from '../../services/Manage_Car';
// import Login from '../Login';

function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showVehicle, setShowVehicle] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  const handleMenuClickVehicle = () => {
    setShowVehicle(true);
    setShowUser(false);
  };

  const handleMenuClickUser = () => {
    setShowUser(true);
    setShowVehicle(false);
  };

  return (
    <div>
        <div className='admin-container'>
          <div className='admin-sidebar'>
            <div className='logo-admin'><h1>Admin</h1></div>
            <i className="fa-solid fa-right-from-bracket" onClick={handleLogout}></i>
          </div>
          <div className='admin-content'>
            <div className='admin-menu'>
              <ul>
                <li>
                  <button onClick={handleMenuClickVehicle} className='manage'>
                    <i className='fa-solid fa-car-side'></i>Quan ly xe
                  </button>
                </li>
                <li>
                  <button onClick={handleMenuClickUser} className='manage'>
                    <i className='fa-solid fa-user'></i>Quan ly tai khoan
                  </button>
                </li>
              </ul>
            </div>
            <div className='content'>
              <h3>Chào mừng, Admin!</h3>
              {showVehicle && <Manage_Car />}
              {showUser && <Manage_User />}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Admin;
