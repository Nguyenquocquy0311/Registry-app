/*import React from 'react';
import { useState, useEffect } from 'react';
import jsonData from '../car.json';
import '../style/Manage_Car.css';

function Manage_Car() {
  const [vehicles, setVehicles] = useState([]);
  const [owners, setOwners] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [expiringVehicles, setExpiringVehicles] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    licensePlate: "",
    owner: "",
    uses: "",
    manufacturer: "",
    registryDate: '',
    expiryDate: "",
  });
  const [editingCar, setEditingCar] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [filterOption, setFilterOption] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [isFilterCenter, setIsFilterCenter] = useState(false);
  const [filterCenter, setFilterCenter] = useState('');

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleFilterCenterChange = (event) => {
    setFilterCenter(event.target.value);
  };

  const handleFilterCenter = () => {
    setIsFilterCenter(true);
  }

  const handleFilter = () => {
    // Logic to filter based on filterOption and filterValue
    if (filterOption === 'year') {
      // Filter by year
      console.log('Filter by year:', filterValue);
    } else if (filterOption === 'month') {
      // Filter by month
      console.log('Filter by month:', filterValue);
    } else if (filterOption === 'quarter') {
      // Filter by quarter
      console.log('Filter by quarter:', filterValue);
    } else {
      // No filter option selected
      console.log('No filter option selected');
    }

    setFilterOption('');
    setFilterValue('');
  };

  useEffect(() => {
    // Gán dữ liệu từ file JSON vào state
    setVehicles(jsonData.car);
  }, []);

  useEffect(() => {
    const today = new Date();
    const expiring = vehicles.filter(vehicle => vehicle.expiryDate && new Date(vehicle.expiryDate) <= today);
    setExpiringVehicles(expiring);
  }, [vehicles]);

  useEffect(() => {
    const expiringArea = vehicles.filter(vehicle => vehicle.province === filterCenter);
    setExpiringVehicles(expiringArea);
  }, [vehicles]);

  const handleFilterClick = () => {
    setIsFiltered(true);
  };

  const handleInputChange = (e) => {
    setNewVehicle({ ...newVehicle, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const data = JSON.parse(content);
      setVehicles(data.car);
    };
    reader.readAsText(file);
  };

  const handleRowClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleOwnerClick = (owner) => {
    setSelectedOwner(owner);
    //selectedVehicle(null);
  };

  const handleResetClick = () => {
    setSelectedVehicle(null);
    setSelectedOwner(null);
    setIsFiltered(false);
  };

  const editAccount = (vehicle) => {
    setEditingCar(vehicle);
    setNewVehicle({
      licensePlate: vehicle.licensePlate,
      owner: vehicle.owner,
      uses: vehicle.uses,
      manufacturer: vehicle.manufacturer,
      registryDate: vehicle.registryDate,
      expiryDate: vehicle.expiryDate
    });
    setShowEditForm(true);
  };

  const updateCar = () => {
    const updatedCar = vehicles.map((vehicle) =>
      vehicle === editingCar ? newVehicle : vehicle
    );
    setNewVehicle(updatedCar);
    setEditingCar(null);
    setNewVehicle({
      licensePlate: '',
      owner: '',
      uses: '',
      manufacturer: '',
      registryDate: '',
      expiryDate: ''
    });
    setShowEditForm(false);
  };

  const deleteAccount = (vehicle) => {
    const updatedCar = vehicles.filter((item) => item !== vehicle);
    setVehicles(updatedCar);
    setIsFiltered(true);
  };

  const cancelForm = () => {
    setShowEditForm(false);
  };

  const showDetails = (vehicle) => {
    selectedVehicle(vehicle);
  }

  return (
    <div className='container'>
      <h1>Danh sách xe đã đăng kiểm</h1>
      <div className="filter-buttons"></div>
      <div className='btn'>
        <button className='btn-manage' onClick={handleFilterClick}>Lọc</button>
        <button className='btn-manage' onClick={handleResetClick}>Reset</button>
        <button className='btn-manage' type='file' onChange={handleFileUpload} accept=".json">Choose file</button>
      </div>
      {/* Display filter options if filterOption is selected }
      {isFiltered && (
        <div>
          <label htmlFor="filterOption">Lọc theo:</label>
          <select name="filterOption" id="filterOption" onChange={handleFilterOptionChange} value={filterOption}>
            <option value="">Chọn</option>
            <option value="year">Năm</option>
            <option value="month">Tháng</option>
            <option value="quarter">Quý</option>
          </select>
        </div>
      )}

      {/* Display filter value input }
      {filterOption === "year" && (
        <div>
          <label>Năm:</label>
          <select name='year' id='year'>
            <option value={4}>2023</option>
            <option value={3}>2022</option>
            <option value={2}>2021</option>
            <option value={1}>2020</option>
          </select>
        </div>
      )}
      {filterOption === "month" && (
          <>
            <label>Tháng:</label>
            <select name='month' id='month'>
              <option value={9}>1</option>
              <option value={8}>2</option>
              <option value={7}>3</option>
              <option value={6}>4</option>
              <option value={5}>5</option>
            </select>
          </>
      )}
      {filterOption === "quarter" && (
          <>
            <label>Quý:</label>
            <select name='year' id='year'>
              <option value={14}>1</option>
              <option value={13}>2</option>
              <option value={12}>3</option>
              <option value={11}>4</option>
              <option value={10}>Chọn</option>
            </select>
          </>
      )}
      <button onClick={handleFilterCenter}>Show Table</button>
      {isFilterCenter && (
        <div>
          <label htmlFor="filterCenter">Chọn tỉnh/thành:</label>
          <select name="filterCenter" id="filterCenter" onChange={handleFilterCenterChange} value={filterCenter}>
            <option value="">Chọn</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="TP. Hồ Chí Minh">TP HCM</option>
            <option value="Nghệ An">Nghệ An</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
        </div>
      )}
      {isFiltered && (
        <table className='ds-xe'>
          <thead>
            <tr>
              <th>TT</th>
              <th>Biển số</th>
              <th>Chủ sở hữu</th>
              <th>Mục đích sử dụng</th>
              <th>Hãng sản xuất</th>
              <th>Đăng kiểm ở</th>
              <th>Ngày đăng kiểm</th>
              <th>Ngày hết hạn đăng kiểm</th>
            </tr>
          </thead>
          {filterCenter === "Hà Nội" && expiringVehicles.map((vehicle, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{vehicle.licensePlate}</td>
                <td>{vehicle.owner}</td>
                <td>{vehicle.uses}</td>
                <td>{vehicle.manufacturer}</td>
                <td>{vehicle.province}</td>
                <td>{vehicle.registryDate}</td>
                <td>{vehicle.expiryDate}</td>
              </tr>
            </tbody>
          ))}
          {filterCenter === "TP. Hồ Chí Minh" && expiringVehicles.map((vehicle, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{vehicle.licensePlate}</td>
                <td>{vehicle.owner}</td>
                <td>{vehicle.uses}</td>
                <td>{vehicle.manufacturer}</td>
                <td>{vehicle.province}</td>
                <td>{vehicle.registryDate}</td>
                <td>{vehicle.expiryDate}</td>
              </tr>
            </tbody>
          ))}
          {filterCenter === "Nghệ An" && expiringVehicles.map((vehicle, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{vehicle.licensePlate}</td>
                <td>{vehicle.owner}</td>
                <td>{vehicle.uses}</td>
                <td>{vehicle.manufacturer}</td>
                <td>{vehicle.province}</td>
                <td>{vehicle.registryDate}</td>
                <td>{vehicle.expiryDate}</td>
              </tr>
            </tbody>
          ))}
        <table/>
      )}
      {/*selectedVehicle && (
            <div className='details'>
              <h2>Thông tin chi tiết về xe</h2>
              <p>Biển số: {selectedVehicle.licensePlate}</p>
              <p>Chủ sở hữu: {selectedVehicle.owner}</p>
              <p>Mục đích sử dụng: {selectedVehicle.uses}</p>
              <p>Hãng sản xuất:{selectedVehicle.manufacturer}</p>
              <p>Ngày đăng kiểm: {selectedVehicle.registryDate}</p>
              <p>Ngày hết hạn đăng kiểm: {selectedVehicle.expiryDate}</p>
            </div>
      )}
          {/*selectedOwner && (
            <div className='details'>
              <h2>Thông tin chi tiết về chủ sở hữu</h2>
              <p>Tên: {selectedVehicle.owner}</p>
              <p>Email: {selectedVehicle.email}</p>
              <p>Điện thoại: {selectedVehicle.phone}</p>
              <p>Khu vực: {selectedVehicle.province}</p>
            </div>
          )}
          {showEditForm && (
            <div>
              <h2>Edit Car</h2>
              <div>
                <label>Bien so:</label>
                <input
                  type="text"
                  name="licensePlate"
                  value={newVehicle.licensePlate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Chu so huu:</label>
                <input
                  type="text"
                  name="owner"
                  value={newVehicle.owner}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Muc dich su dung:</label>
                <input
                  type="text"
                  name="uses"
                  value={newVehicle.uses}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Hang san xuat:</label>
                <input
                  type="text"
                  name="manufacturer"
                  value={newVehicle.manufacturer}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Dang kiem o:</label>
                <input
                  type="text"
                  name="province"
                  value={newVehicle.province}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Ngay dang kiem:</label>
                <input
                  type="text"
                  name="registryDate"
                  value={newVehicle.registryDate}
                  readOnly
                />
              </div>
              <div>
                <label>Ngay het han dang kiem:</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={newVehicle.expiryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button onClick={updateCar}>Update Account</button>
                <button onClick={cancelForm}>Cancel</button>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Manage_Car; */

import React, { useState, useEffect } from 'react';
import jsonData from '../car.json';
import '../style/Manage_Car.css';

function Manage_Car() {
  const [vehicles, setVehicles] = useState([]);
  const [expiringVehicles, setExpiringVehicles] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterOption, setFilterOption] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [filterCenter, setFilterCenter] = useState('');

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleFilterCenterChange = (event) => {
    setFilterCenter(event.target.value);
  };

  const handleFilterCenter = () => {
    setIsFiltered(true);
  };

  const handleFilter = () => {
    // Logic to filter based on filterOption and filterValue
    if (filterOption === 'year') {
      // Filter by year
      console.log('Filter by year:', filterValue);
    } else if (filterOption === 'month') {
      // Filter by month
      console.log('Filter by month:', filterValue);
    } else if (filterOption === 'quarter') {
      // Filter by quarter
      console.log('Filter by quarter:', filterValue);
    } else {
      // No filter option selected
      console.log('No filter option selected');
    }

    setFilterOption('');
    setFilterValue('');
  };

  useEffect(() => {
    // Load data from JSON file
    setVehicles(jsonData.car);
  }, []);

  useEffect(() => {
    const today = new Date();
    const expiring = vehicles.filter(
      (vehicle) =>
        vehicle.expiryDate && new Date(vehicle.expiryDate) <= today
    );
    setExpiringVehicles(expiring);
  }, [vehicles]);

  useEffect(() => {
    const expiringArea = vehicles.filter(
      (vehicle) => vehicle.province === filterCenter
    );
    setExpiringVehicles(expiringArea);
  }, [filterCenter]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const data = JSON.parse(content);
      setVehicles(data.car);
    };
    reader.readAsText(file);
  };

  const handleResetClick = () => {
    setIsFiltered(false);
  };

  return (
    <div className='container'>
      <h1>Danh sách xe đã đăng kiểm</h1>
      <div className='btn'>
        <button className='btn-manage' onClick={handleFilter}>
          Lọc
        </button>
        <button className='btn-manage' onClick={handleResetClick}>
          Reset
        </button>
        <input
          className='btn-manage'
          type='file'
          onChange={handleFileUpload}
          accept='.json'
        />
      </div>
      
      {isFiltered && (
        <div>
          <label htmlFor='filterOption'>Lọc theo:</label>
          <select
            name='filterOption'
            id='filterOption'
            onChange={handleFilterOptionChange}
            value={filterOption}
          >
            <option value=''>Chọn</option>
            <option value='year'>Năm</option>
            <option value='month'>Tháng</option>
            <option value='quarter'>Quý</option>
          </select>
          <input
            type='text'
            placeholder='Giá trị lọc'
            onChange={(e) => setFilterValue(e.target.value)}
            value={filterValue}
          />
          <button className='btn-manage' onClick={handleFilterCenter}>
            Áp dụng
          </button>
          <select
            name='filterCenter'
            id='filterCenter'
            onChange={handleFilterCenterChange}
            value={filterCenter}
          >
            <option value=''>Chọn</option>
            <option value='TP. Hồ Chí Minh'>HCM</option>
            <option value='Hà Nội'>HN</option>
            <option value='Đà Nẵng'>DN</option>
          </select>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Biển số xe</th>
            <th>Chủ xe</th>
            <th>Ngày hết hạn</th>
            <th>Địa chỉ</th>
            <th>Tỉnh thành</th>
            <th>Loại xe</th>
          </tr>
        </thead>
        <tbody>
          {expiringVehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.licensePlate}</td>
              <td>{vehicle.owner}</td>
              <td>{vehicle.expiryDate}</td>
              <td>{vehicle.address}</td>
              <td>{vehicle.province}</td>
              <td>{vehicle.uses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Manage_Car;
