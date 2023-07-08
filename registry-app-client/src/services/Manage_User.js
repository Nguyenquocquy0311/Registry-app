import React, { useState, useEffect } from 'react';
import data from '../account.json';
import '../style/Manage_User.css';

function Manage_User() {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    username: '',
    tenTrungTam: '',
    diaChi: '',
    khuVuc: '',
    soDienThoai: ''
  });
  const [editingAccount, setEditingAccount] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    // Lấy dữ liệu từ file JSON khi component được render
    setAccounts(data);
  }, []);

  const handleInputChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  const addAccount = () => {
    setAccounts([...accounts, newAccount]);
    setNewAccount({
      username: '',
      tenTrungTam: '',
      diaChi: '',
      khuVuc: '',
      soDienThoai: ''
    });
    setShowAddForm(false);
  };

  const editAccount = (account) => {
    setEditingAccount(account);
    setNewAccount({
      username: account.username,
      tenTrungTam: account.tenTrungTam,
      diaChi: account.diaChi,
      khuVuc: account.khuVuc,
      soDienThoai: account.soDienThoai
    });
    setShowEditForm(true);
  };

  const updateAccount = () => {
    const updatedAccounts = accounts.map((account) =>
      account === editingAccount ? newAccount : account
    );
    setAccounts(updatedAccounts);
    setEditingAccount(null);
    setNewAccount({
      username: '',
      tenTrungTam: '',
      diaChi: '',
      khuVuc: '',
      soDienThoai: ''
    });
    setShowEditForm(false);
  };

  const deleteAccount = (account) => {
    const updatedAccounts = accounts.filter((item) => item !== account);
    setAccounts(updatedAccounts);
    setShowEditForm(false);
    setShowAddForm(false);
  };

  const showAddAccountForm = () => {
    setShowAddForm(true);
    setShowEditForm(false);
  };

  const showEditAccountForm = () => {
    setShowAddForm(false);
    setShowEditForm(true);
  }; 

  const cancelForm = () => {
    setEditingAccount(null);
    setNewAccount({
      username: '',
      tenTrungTam: '',
      diaChi: '',
      khuVuc: '',
      soDienThoai: ''
    });
    setShowAddForm(false);
    setShowEditForm(false);
  };

  return (
    <div>
      <h1>Quản lý tài khoản</h1>
      <button onClick={() => {setShowAddForm(true)}}>+ Thêm mới</button>
      <table>
        <thead>
          <tr>
            <th>TT</th>
            <th>Username</th>
            <th>Tên trung tâm</th>
            <th>Địa chỉ</th>
            <th>Khu vực</th>
            <th>Số điện thoại</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={account.username}>
              <td>{index + 1}</td>
              <td>{account.username}</td>
              <td>{account.tenTrungTam}</td>
              <td>{account.diaChi}</td>
              <td>{account.khuVuc}</td>
              <td>{account.soDienThoai}</td>
              <td>
                <i className="fa-solid fa-pen" onClick={() => editAccount(account)}></i>
                <i className="fa-solid fa-trash" onClick={() => deleteAccount(account)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAddForm && !showEditForm && (
        <div className='form-container'>
          <h2>Add Account</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={newAccount.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Tên trung tâm:</label>
            <input
              type="text"
              name="tenTrungTam"
              value={newAccount.tenTrungTam}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Địa chỉ:</label>
            <input
              type="text"
              name="diaChi"
              value={newAccount.diaChi}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Khu vực:</label>
            <input
              type="text"
              name="khuVuc"
              value={newAccount.khuVuc}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Số điện thoại:</label>
            <input
              type="text"
              name="soDienThoai"
              value={newAccount.soDienThoai}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button onClick={addAccount}>Add Account</button>
            <button onClick={cancelForm}>Cancel</button>
          </div>
        </div>
      )}

      {showEditForm && (
        <div className='form-container'>
          <h2>Edit Account</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={newAccount.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Tên trung tâm:</label>
            <input
              type="text"
              name="tenTrungTam"
              value={newAccount.tenTrungTam}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Khu vực:</label>
            <input
              type="text"
              name="khuVuc"
              value={newAccount.khuVuc}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Số điện thoại:</label>
            <input
              type="text"
              name="soDienThoai"
              value={newAccount.soDienThoai}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button onClick={updateAccount}>Update Account</button>
            <button onClick={cancelForm}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Manage_User;

