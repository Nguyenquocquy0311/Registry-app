/*import React, { Component } from 'react';
import '../../style/Services.css';

export class Services extends Component {
  render() {
    return (
      <div>
        <div className='bg-img'>
          
        </div>
        <div className='container'>
          <div class="item">
            <i class="fa-solid fa-city"></i>
            <p>Trung tâm đăng kiểm</p>
          </div>
          <div class="item">
            <i class="fa-solid fa-car-side"></i>
            <p>Quản lý xe</p>
          </div>
          <div class="item">
            <i class="fa-solid fa-id-card"></i>
            <p>Liên hệ</p>
          </div>
          <div class="item">
            <i class="fa-solid fa-user-pen"></i>
            <p>Đăng ký tài khoản</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Services; */

import React, { Component } from 'react';
import '../../style/Services.css';
import dataCenter from '../../account.json';

export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCenters: false // Trạng thái hiển thị danh sách trung tâm đăng kiểm
    };
  }

  handleClickCenter = () => {
    this.setState({ showCenters: true }); // Cập nhật trạng thái để hiển thị danh sách trung tâm đăng kiểm
  };

  handleHideList = () => {
    this.setState({showCenters: false});
  }

  render() {
    const { showCenters } = this.state;

    return (
      <div>
        <div className='bg-img'></div>
        <div className='grid-container'>
          <div className='item' onClick={this.handleClickCenter}>
            <i className='fa-solid fa-city'></i>
            <p>Trung tâm đăng kiểm</p>
          </div>
          <div class="item">
            <a className='link' href=''>
              <i class="fa-solid fa-car-side"></i>
              <p>Quản lý xe</p>
            </a>
          </div>
          <div class="item">
            <a className='link' href='/contact'> {/* Chuyển hướng sang trang "Contact" */}
              <i className='fa-solid fa-id-card'></i>
              <p>Liên hệ</p>
            </a>
          </div>
          <div class="item">
            <a className='link' href='/contact'>
              <i class="fa-solid fa-user-pen"></i>
              <p>Đăng ký tài khoản</p>
            </a>
          </div>
        </div>
        {/* Hiển thị danh sách trung tâm đăng kiểm nếu showCenters là true */}
        {showCenters && (
            <div>
              <h1>Danh sach cac trung tam dang kiem tren toan quoc:</h1>
              {dataCenter.map((car) => (
                <div key={car.id} className='item'>
                  <h3>{car.tenTrungTam}</h3>
                  <p>Khu vuc:{car.khuVuc}</p>
                  <p>Lien he:{car.soDienThoai}</p>
                </div>
              ))}
              <button onClick={this.handleHideList}>Hide list</button>
            </div>
          )}
      </div>
    );
  }
}

export default Services;
