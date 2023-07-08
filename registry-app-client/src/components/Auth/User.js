import React, { useState } from 'react';
import Manage_Car from '../../services/Manage_Car';
import '../../style/User.css';

function User() {
  const [cars, setCars] = useState([]);
  const [licensePlate, setLicensePlate] = useState('');
  const [owner, setOwner] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const handleGhiNhan = () => {
    setShowForm(true);
  };
  // Thêm các state và hàm xử lý khác tại đây

  const handleAddCar = () => {
    // Xử lý thêm xe vào danh sách xe
    const newCar = {
      licensePlate,
      owner,
    };
    setCars([...cars, newCar]);
    // Xóa các giá trị đã nhập sau khi thêm xe thành công
    setLicensePlate('');
    setOwner('');
  };

  const handleXuatBang = () => {
    setShowTable(true);
  }

  const handleHideTable = () => {
    setShowTable(false);
  }

  const handleCancel = () => {
    setShowForm(false);
  }

  const handleManufacturerChange = (event) => {
    setManufacturer(event.target.value);
  };
    
    const handleXuatGiay = () => {
      // Chuỗi văn bản đăng kiểm
      const vanBanDangKiem = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Giấy đăng kiểm</title>
        <style>
          /* CSS cho văn bản đăng kiểm */
          body {
            font-family: Arial, sans-serif;
          }
          
          h1 {
            text-align: center;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          th, td {
            padding: 8px;
            border: 1px solid #ddd;
          }
          
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <table style="width: 100%; border: none; border-collapse: collapse;">
          <tr>
            <td style="width: 40%; text-align: center; vertical-align: top;">
                <p style="text-transform: uppercase; font-weight: normal; margin: 0; padding: 0; font-size: 12pt;">CỤC ĐĂNG KIỂM VIỆT NAM</p>
                <p style="text-transform:uppercase; margin: 0; padding: 0; font-size:12pt; font-weight:bold;">TRUNG TÂM ĐĂNG KIỂM KHÁNH NGU</p>
            </td>
            <td style="width: 60%; text-align: center; vertical-align: top;">
                <p style="text-transform: uppercase; font-weight: bold; margin: 0; padding: 0; font-size: 12pt;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                <p style="margin: 0; padding: 0; font-weight: bold;">Độc lập - Tự do - Hạnh phúc</p>
            </td>
          </tr>
        </table>
        <h1>Giấy đăng kiểm</h1>
        <h4>Mã số cấp: QĐ14780983</h4>
        <h4>Ngày cấp: 23/04/2010</h4>
        <table>
          <tr>
            <th>Biển số xe</th>
            <th>Chủ sở hữu</th>
            <th>Ngày đăng kiểm</th>
            <th>Ngày hết hạn</th>
            <th>Mục đích sử dụng</th>
            <th>Hãng xe</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Tỉnh/Thành phố</th>
          </tr>
          <tr>
            <td>ABC123</td>
            <td>John Doe</td>
            <td>23/04/2010</td>
            <td>25/05/2023</td>
            <td>Di chuyển cá nhân</td>
            <td>Honda</td>
            <td>nguyenvana@example.com</td>
            <td>0123456789</td>
            <td>Hà Nội</td>
          </tr>
        </table>
        <p>Tổng số xe đăng kiểm: 1</p>
        <table style="width: 100%; border: none; border-collapse: collapse; margin-top: 30px;">
            <tr>
                <td style="width: 50%; vertical-align: top; text-align: center;">
                    <p style="font-weight: bold; margin: 0; padding: 0; font-size: 12pt; text-transform:uppercase;">CHỦ SỞ HỮU</p>
                    <p style="margin: 0; padding: 0; font-size: 11pt; font-style: italic;">(Ký và ghi rõ họ tên)</p>
                    <p style="margin-top:80px;"><b>Nguyễn Quốc Khánh</b></p>
                </td>
                <td style="width: 50%; text-align: center; vertical-align: top; ">
                    <p style="font-size: 12pt; margin:0; padding:0;">Hà Nội, ngày ..... tháng ..... năm 20...</p>
                    <p style="font-weight: bold; margin: 0; padding: 0; text-transform: uppercase; font-size: 12pt;">XÁC NHẬN CỦA TRUNG TÂM ĐĂNG KIỂM</p>
                    <p style="font-weight: bold; margin-top: 80px;">&nbsp;</p>
                </td>
            </tr>
        </table>
        <div style="margin-bottom: 0;" class="form-actions form-actions-padding-sm form-actions-padding-md form-actions-padding-lg">
          <button class="btn-print-this btn btn-primary"><i class="icon-print"></i> In giay chung nhan</button>
          <button class=" btn btn-success"><i class="icon-save"></i> Xuất danh sach ra Word</button>
        </div>
      </body>
      </html>
      `;
    
      // Mở trang mới và hiển thị văn bản đăng kiểm
      const newWindow = window.open();
      newWindow.document.write(vanBanDangKiem);
      newWindow.document.close();
    };

  return (
    <div>
      <div className='sidebar'>
        <h2>TTDK</h2>
        <i className="fa-solid fa-right-from-bracket"></i>
      </div>
      <div className='main-content'>
        <h3>Manage Cars</h3>
        <button className='btn-mn' onClick={handleGhiNhan}>Ghi nhận</button>
        <button className='btn-mn' onClick={handleXuatGiay}>Xuất giấy</button>
        <button className='btn-mn' onClick={!showTable ? handleXuatBang : handleHideTable}>{!showTable ? 'Thống kê' : 'Ẩn bảng'}</button>
        {showForm && (
          <form className='ghi-nhan'>
            
              <thead><h4>Nhập thông tin</h4></thead>
              <tbody>
                <tr>
                  <h5>Thông tin về xe</h5>
                  <td>
                    <label>Mã số:</label>
                    <input type='text' required></input>
                  </td>
                  <td>
                    <label>Ngày cấp:</label>
                    <input type='date'required></input>
                  </td>
                  <td>
                    <label>Nơi đăng ký:</label>
                    <input type='text' required></input>
                  </td>
                  <td>
                    <label>Hãng xe</label>
                    <select name='manufacturer' id='manufacturer' onChange={handleManufacturerChange} value={manufacturer}>
                      <option>Chọn</option>
                      <option value={1}>Toyata</option>
                      <option value={2}>Ford</option>
                      <option value={3}>Honda</option>
                      <option value={4}>BMW</option>
                      <option value={5}>Mercedes-Benz</option>
                      <option value={6}>Huyndai</option>
                      <option value={7}>Kia</option>
                      <option value={8}>Tesla</option>
                      <option value={9}>Mazda</option>
                      <option value={10}>Volvo</option>
                    </select>
                  </td>
                  {manufacturer && (
                      <td>
                        <label>Dòng xe</label>
                          {/* Render options based on selected manufacturer */}
                          {manufacturer == 1 && (
                            <select name='dongxe' id='dongxe'>
                              <option value={4}>SUV</option>
                              <option value={3}>Sedan</option>
                              <option value={2}>Yaris</option>
                              <option value={1}>Wigo</option>
                            </select>)
                          }
                          {manufacturer == 2 && (
                            <select name='dongxe' id='dongxe'>
                              <option value={9}>Rapter</option>
                              <option value={8}>Ranger</option>
                              <option value={7}>Explorer</option>
                              <option value={6}>Everest</option>
                              <option value={5}>EcoSport</option>
                            </select>
                          )}
                          {manufacturer == 3 && (
                            <select name='dongxe' id='dongxe'>
                              <option value={14}>CRV</option>
                              <option value={13}>Accord</option>
                              <option value={12}>Civic</option>
                              <option value={11}>Jazz</option>
                              <option value={10}>City</option>
                            </select>
                          )}
                          {manufacturer == 5 && (
                            <select name='dongxe' id='dongxe'>
                              <option value={18}>E class</option>
                              <option value={17}>C class</option>
                              <option value={16}>B class</option>
                              <option value={15}>A class</option>
                            </select>
                          )}
                          {manufacturer == 6 && (
                            <select name='dongxe' id='dongxe'>
                              <option value={22}>Santa Cruz</option>
                              <option value={21}>SantaFe</option>
                              <option value={20}>Accent</option>
                              <option value={19}>I10</option>
                            </select>
                          )}
                        
                      </td>
                  )}

                  <td>
                    <label>Kiểu xe</label>
                    <select name='type' id='type'>
                      <option>Chọn</option>
                      <option value={1}>Oto chở người loại 9 chỗ đã sản xuất từ 15 năm trở lên (kể cả xe cải tạo thành 9 chỗ)</option>
                      <option value={2}>Oto tải các loại: chuyên dụng, đầu kéo, rơ mooc, ...</option>
                      <option value={3}>Oto chở người loại đến 9 chỗ</option>
                      <option value={4}>Oto chở người loại đến 9 chỗ kinh doanh vận tải</option>
                      <option value={5}>Oto chở người loại đến 9 chỗ không kinh doanh vận tải</option>
                    </select>
                  </td>
                  <td>
                    <label>Mục đích:</label>
                    <select name='uses' id='uses'>
                      <option>Chọn</option>
                      <option value={1}>Đi lại cá nhân</option>
                      <option value={2}>Dịch vụ chở khách</option>
                      <option value={3}>Dịch vụ vận tải</option>
                      <option value={4}>Thể thao và giải trí</option>
                      <option value={5}>Phương tiện công cộng</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <h5>Thông tin về chủ sở hữu</h5>
                  <td>
                    <label>Chu so huu</label>
                    <select name='owner' id='owner'>
                      <option>Chọn</option>
                      <option>Cá nhân</option>
                      <option>Cơ quan</option>
                    </select>
                  </td>
                  <td>
                    <label>Khu vực thường trú</label>
                    <input type='text' required></input>
                  </td>
                </tr>
                <tr>
                  <h5>Thông tin đăng kiểm</h5>
                  <td>
                    <label>Mã số :</label>
                    <input type='text' required></input>
                  </td>
                  <td>
                    <label>Ngày đăng kiểm:</label>
                    <input type='date' required></input>
                  </td>
                  <td>
                    <label>Ngày hết hạn:</label>
                    <input type='date' required></input>
                  </td>
                </tr>
              </tbody>
            
            <button>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </form>
        )}
        {showTable && (<Manage_Car />)}
      </div>
    </div>
  );
}

export default User;

