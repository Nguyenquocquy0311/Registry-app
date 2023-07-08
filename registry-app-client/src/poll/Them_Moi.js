import React, { Component, useState } from "react";
import './Them_Moi.css';
import html2pdf from 'html2pdf.js';
import $ from 'jquery';
import jQuery from 'jquery';
import * as XLSX from 'xlsx'


class Them_Moi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: true,
            manufacturer: '',
            selectedFile: null,
            showDongxe: false,
            chonHang: '',
            hangselect:''
        }
    }


    renderBaocao() {


        const invoice = document.getElementById("vanbandangkiem");
        console.log(invoice);
        console.log(window);
        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(invoice).set(opt).save();


    }


    save = () => {


        var maso = document.getElementById("maso").value;
        var bienso = document.getElementById("bienso").value;
        var chusohuhu = document.getElementById("owner-name").value;
        var ngaydangkiem = document.getElementById("registryDate").value;
        var ngayhethan = document.getElementById("expiryDate").value;
        var hangxe = document.getElementById("manufacturer").value;
        var sdt = document.getElementById("sdt").value;
        var diachi = document.getElementById("diachi").value;
        var noidangky = document.getElementById("noidangky").value;
        var kieusohuu = document.getElementById("owner").value;
        var kieuxe = document.getElementById("type").value;
        var dongxe = document.getElementById(this.state.hangselect).value;
        var mucdich = document.getElementById("uses").value;
        var ngaycap = document.getElementById("ngaycap").value;
        var namsanxuat = document.getElementById("namsanxuat").value;

        






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
            display: block;
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
                <p style="text-transform: uppercase; font-weight: normal; margin: 0; padding: 0; font-size: 12pt;">-----------</p>
            </td>
            <td style="width: 60%; text-align: center; vertical-align: top;">
                <p style="text-transform: uppercase; font-weight: bold; margin: 0; padding: 0; font-size: 12pt;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                <p style="margin: 0; padding: 0; font-weight: bold;">Độc lập - Tự do - Hạnh phúc</p>
                <p style="margin: 0; padding: 0; font-weight: bold;">------------</p>
            </td>
          </tr>
        </table>
        <h1 style="padding: 10px">Giấy đăng kiểm</h1>
        <h4>Mã số cấp: `+maso+`</h4>
        <h4>Ngày cấp:  `+ngaycap+`</h4>
        <table style="width: 100%; border-collapse: collapse; text-align: center;">
          <tr>
            <th>Biển số xe</th>
            <th>Chủ sở hữu</th>
            <th>Ngày đăng kiểm</th>
            <th>Ngày hết hạn</th>
            <th>Mục đích sử dụng</th>
            <th>Hãng xe</th>
            <th>Số điện thoại</th>
            <th>Tỉnh/Thành phố</th>
          </tr>
          <tr>
            <td>`+bienso+`</td>
            <td>`+chusohuhu+`</td>
            <td>`+ngaydangkiem+`</td>
            <td>`+ngayhethan+`</td>
            <td>`+$("#uses option:selected").text()+`</td>
            <td>`+$("#manufacturer option:selected").text()+`</td>
            <td>`+sdt+`</td>
            <td>`+diachi+`</td>
          </tr>
        </table>
        <p>Tổng số xe đăng kiểm: 1</p>
        <table style="width: 100%; border: none; border-collapse: collapse; margin-top: 30px;">
            <tr>
                <td style="width: 50%; vertical-align: top; text-align: center;">
                    <p style="font-weight: bold; margin: 0; padding: 0; font-size: 12pt; text-transform:uppercase;">CHỦ SỞ HỮU</p>
                    <p style="margin: 0; padding: 0; font-size: 11pt; font-style: italic;">(Ký và ghi rõ họ tên)</p>
                    <p style="margin-top:80px;"><b>`+chusohuhu+`</b></p>
                </td>
                <td style="width: 50%; text-align: center; vertical-align: top; ">
                    <p style="font-size: 12pt; margin:0; padding:0;">`+noidangky+`, ngày ..... tháng ..... năm 20...</p>
                    <p style="font-weight: bold; margin: 0; padding: 0; text-transform: uppercase; font-size: 12pt;">XÁC NHẬN CỦA TRUNG TÂM ĐĂNG KIỂM</p>
                    <p style="font-weight: bold; margin-top: 80px;">&nbsp;</p>
                </td>
            </tr>
        </table>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>


        <script>  </script>
      </body>
      </html>
      `;


     
        document.getElementById("vanbandangkiem").innerHTML = vanBanDangKiem ;
        // document.getElementById("vanbandangkiem").innerHTML += nutIn;
        document.getElementById("vanbandangkiem").style.display = "block";
        document.getElementById("download").style.display = "block";
        document.getElementById("ghi-nhan").style.display = "none";



        //here

        // var maso = document.getElementById("maso").value;
        // var bienso = document.getElementById("bienso").value;
        // var chusohuhu = document.getElementById("owner-name").value;
        // var ngaydangkiem = document.getElementById("registryDate").value;
        // var ngayhethan = document.getElementById("expiryDate").value;
        // var hangxe = document.getElementById("manufacturer").value;
        // var sdt = document.getElementById("sdt").value;
        // var diachi = document.getElementById("diachi").value;
        // var noidangky = document.getElementById("noidangky").value;
        // var kieusohuu = document.getElementById("owner").value;
        // var kieuxe = document.getElementById("type").value;
        // var dongxe = document.getElementById("dongxepick").value;
        // var mucdich = document.getElementById("uses").value;
        // var ngaycap = document.getElementById("ngaycap").value;
        // var namsanxuat = document.getElementById("namsanxuat").value;


        console.log("133")
        var firstobj = {};


        firstobj["loaiSoHuu"] = { "id":  kieusohuu};
        firstobj["ten"] = chusohuhu;
        firstobj["sdt"] = sdt;
        firstobj["tinhthanh"] = diachi;
        firstobj["khuvuccutru"] = diachi;

        // console.log(JSON.stringify(firstobj))
        jQuery.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'type': 'POST',
            'async': false,
            'url': "http://localhost:8080/everyone/chusohuu",
            'data': JSON.stringify(firstobj),
            'dataType': 'json',
        }).done(function (data) {
            var obj = {};
                console.log("1 go")

                obj["maso"] = maso;
                obj["namsanxuat"] = namsanxuat;
                obj["ngaycap"] = ngaycap;
                obj["biendangky"] = bienso;
                obj["noidangky"] = noidangky;

                //check kieu xe 

                    obj["kieuXe"] = { "id": mucdich};
                
                obj["phienbanxe"] = {
                    "id": dongxe
                };
                obj["mucDich"] = {
                    "id": mucdich
                };

                obj["chuSoHuu"] = {
                    "id": data.id
                };
                console.log("xê")
                console.log(JSON.stringify(obj))


                jQuery.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    'type': 'POST',
                    'async': false,
                    'url': "http://localhost:8080/everyone/xe",
                    'data': JSON.stringify(obj),
                    'dataType': 'json',
                }).done(function (response) {
                    console.log(response)
                    var objthongtin = {};

                    objthongtin["maso"] = maso;
                    objthongtin["ngaycap"] = ngaydangkiem;
                    objthongtin["ngayhethan"] = ngayhethan;
                    objthongtin["xe"] = { "id": response.id};

                    
                    objthongtin["trungtamDangkiem"]= {
                        "id": 1
                        
                    }
                    console.log("thontindangkiem")
                    console.log(JSON.stringify(objthongtin))


                    jQuery.ajax({
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        'type': 'POST',
                        'async': false,
                        'url': "http://localhost:8080/everyone/thongtindangkiem",
                        'data': JSON.stringify(objthongtin),
                        'dataType': 'json',
                    }).done(function (response) {

                        console.log("success")

                        console.log(response)


                    })
                })
        })



        






    }


    changeHang = (e) => {
        var id_hang = document.getElementById("manufacturer").value;
        // document.getElementsByClassName("hang").style.display = "none";


        var cusid_ele = document.getElementsByClassName('hang');
        for (var i = 0; i < cusid_ele.length; ++i) {
            var item = cusid_ele[i];
            item.style.display = "none";
        }




        document.getElementById("dongxepick").style.display = "block";


        this.setState({showDongxe: true});


        console.log(id_hang)




        if (id_hang === '1') {
            document.getElementById("hang1").style.display = "block";
        }
        if (id_hang === '2') {
            document.getElementById("hang2").style.display = "block";
        }
        if (id_hang === '3') {
            document.getElementById("hang3").style.display = "block";
        }
        if (id_hang === '4') {
            document.getElementById("hang4").style.display = "block";
        }
        if (id_hang === '5') {
            document.getElementById("hang5").style.display = "block";
        }
        if (id_hang === '6') {
            document.getElementById("hang6").style.display = "block";
        }
        if (id_hang === '7') {
            document.getElementById("hang7").style.display = "block";
        }
        if (id_hang === '8') {
            document.getElementById("hang8").style.display = "block";
        }
        if (id_hang === '9') {
            document.getElementById("hang9").style.display = "block";
        }
        if (id_hang === '10') {
            document.getElementById("hang10").style.display = "block";
        }
        this.state.hangselect = "hang"+id_hang;

        this.setState({chonHang: e.target.value, showDongxe: true});


    }


    handleFileChange = (event) => {
        this.setState({selectedFile: event.target.files[0]});
    };
   
    handleUpload = () => {
        // Xác nhận upload file ở đây
        if (this.selectedFile !== null) {
            // Gửi selectedFile lên server hoặc thực hiện xử lý tùy ý
            console.log("File được xác nhận để upload:", this.selectedFile);
        } else {
            console.log("Vui lòng chọn một file để upload.");
        }

        document.getElementById("upload").style.display = "none";
        document.getElementById("choose-file").style.display = "none";


        const fileInput = document.getElementById('choose-file');
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Process the workbook and access the data
            // For example, you can access the first sheet and its rows
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            console.log(jsonData); // Log the rows to the console


            const arr = Object.entries(jsonData);

            console.log(arr);

            for (var i = 1; i < arr.length; i++) {

                var obj = {};
                // console.log(arr[i][1])

                obj["maso"] = arr[i][1][1];
                obj["namsanxuat"] = arr[i][1][8];
                obj["ngaycap"] = arr[i][1][2];
                obj["biendangky"] = arr[i][1][0];
                obj["noidangky"] = arr[i][1][3];

                //check kieu xe 

                if (arr[i][1][5] === 'Ô tô chở người các loại trên 9 chỗ đã sản xuất từ 15 năm trở lên ( kể cả ô tô chở người trên 9 chỗ đã cải tạo thành ô tô chở người đến 9 chỗ)') {
                    obj["kieuXe"] = { "id": 1 };
                }

                if (arr[i][1][5] === 'Ô tô tải các loại , ô tô chuyên dùng  , ô tô đầu kéo , rơ moóc , sơmi rơ moóc') {
                    obj["kieuXe"] = { "id": 2 };
                }


                if (arr[i][1][5] === 'Ô tô chở người các loại đến 9 chỗ') {
                    obj["kieuXe"] = { "id": 3 };
                }

                if (arr[i][1][5] === 'Ô tô chở người các loại đến 9 chỗ kinh doanh vận tải') {
                    obj["kieuXe"] = { "id": 4 };
                }

                if (arr[i][1][5] === 'Ô tô chở người các loại đến 9 chỗ không kinh doanh vận tải') {
                    obj["kieuXe"] = { "id": 5 };
                }


                obj["phienbanxe"] = {
                    "id": 1
                };
                obj["mucDich"] = {
                    "id": 1
                };

                obj["chuSoHuu"] = {
                    "id": arr[i][1][4]
                };

                console.log(JSON.stringify(obj))


                jQuery.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    'type': 'POST',
                    'async': false,
                    'url': "http://localhost:8080/everyone/xe",
                    'data': JSON.stringify(obj),
                    'dataType': 'json',
                }).done(function (response) {
                    console.log(response)
                    var objthongtin = {};

                    objthongtin["maso"] = arr[i][1][9];
                    objthongtin["ngaycap"] = arr[i][1][10];
                    objthongtin["ngayhethan"] = arr[i][1][11];
                    objthongtin["xe"] = { "id": response.id};

                    
                    objthongtin["trungtamDangkiem"]= {
                        "id": 1
                        
                    }

                    if(arr[i][1][12] ==="HCM"){
                        objthongtin["trungtamDangkiem"]= {
                            "id": 2
                            
                        }
                    }

                    console.log(JSON.stringify(objthongtin))


                    jQuery.ajax({
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        'type': 'POST',
                        'async': false,
                        'url': "http://localhost:8080/everyone/thongtindangkiem",
                        'data': JSON.stringify(objthongtin),
                        'dataType': 'json',
                    }).done(function (response) {
                        console.log(response)


                    })


                })



            }

        };

        reader.readAsArrayBuffer(file);

        alert("Upload file thành công")




    }


    render() {
        const {
            showForm,
            manufacturer,
            selectedFile,
            showDongxe,
            chonHang
        } = this.state;


        return (
            <div>
                <div className='ghi-nhan' id="ghi-nhan">
                    <table className="tbl-ghinhan">
                        <thead id="nhap">Nhập thông tin</thead>
                        <tbody>
                            <tr><h3>Thông tin về xe :</h3></tr>
                            <tr>
                                <td>
                                    <label>Biển số:</label>
                                    <input type='text' id="bienso" placeholder="29A-123 45" ></input>
                                </td>
                                <td>
                                    <label>Ngày cấp:</label>
                                    <input type='date' id="ngaycap" ></input>
                                </td>
                                <td>
                                    <label>Năm sản xuất:</label>
                                    <input type='text' id="namsanxuat" placeholder="vd:2010,..." required></input>
                                </td>
                                <td>
                                    <label>Hãng xe</label>
                                    <select name='manufacturer' id='manufacturer' onChange={this.changeHang} value={chonHang}>
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
                                {
                                    (<td id="dongxepick" >
                                        <label>Dòng xe</label>
                                        <select id="hang1" className="hang">
                                            <option value={4}>SUV</option>
                                            <option value={3}>Sedan</option>
                                            <option value={2}>Yaris</option>
                                            <option value={1}>Wigo</option>
                                        </select>


                                        <select id="hang2" className="hang">
                                            <option value={9}>Rapter</option>
                                            <option value={8}>Ranger</option>
                                            <option value={7}>Explorer</option>
                                            <option value={6}>Everest</option>
                                            <option value={5}>EcoSport</option>
                                        </select>


                                        <select id="hang3" className="hang">
                                            <option value={14}>CRV</option>
                                            <option value={13}>Accord</option>
                                            <option value={12}>Civic</option>
                                            <option value={11}>Jazz</option>
                                            <option value={10}>City</option>
                                        </select>


                                        <select id="hang5" className="hang">
                                            <option value={18}>E class</option>
                                            <option value={17}>C class</option>
                                            <option value={16}>B class</option>
                                            <option value={15}>A class</option>
                                        </select>


                                        <select id="hang4" className="hang">
                                            <option value={29}>320i</option>
                                            <option value={30}>520i</option>
                                            <option value={31}>M3</option>
                                        </select>


                                        <select id="hang6" className="hang">
                                            <option value={22}>Santa Cruz</option>
                                            <option value={21}>SantaFe</option>
                                            <option value={20}>Accent</option>
                                            <option value={19}>I10</option>
                                        </select>


                                        <select id="hang7" className="hang">
                                            <option value={25}>Kia Cerato</option>
                                            <option value={26}>Kia Seltos</option>
                                            <option value={27}>Kia Cerento</option>
                                            <option value={28}>Kia Cedona</option>
                                        </select>


                                        <select id="hang8" className="hang">
                                            <option value={32}>Model 3</option>
                                            <option value={33}>Model S</option>
                                            <option value={34}>Model X</option>
                                        </select>


                                        <select id="hang9" className="hang">
                                            <option value={36}>Mazda 3</option>
                                            <option value={37}>Mazda 6</option>
                                            <option value={38}>Cx-5</option>
                                        </select>


                                        <select id="hang10" className="hang">
                                            <option value={39}>S60</option>
                                            <option value={40}>S90</option>
                                        </select>


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
                            <tr><h3>Thông tin về chủ sở hữu:</h3></tr>
                            <tr>
                                <td>
                                    <label>Chủ sở hữu</label>
                                    <select name='owner' id='owner'>
                                        <option value=''>Chọn</option>
                                        <option value={1}>Cá nhân</option>
                                        <option value={2}>Cơ quan</option>
                                    </select>
                                </td>
                                <td>
                                    <label>Tên chủ sở hữu</label>
                                    <input type='text' id="owner-name" placeholder="Harry John" required></input>
                                </td>
                                <td>
                                    <label>Khu vực thường trú</label>
                                    <input type='text' id="diachi" required></input>
                                </td>
                                <td>
                                    <label>Số điện thoại</label>
                                    <input type='tel' id="sdt" required></input>
                                </td>
                            </tr>
                            <tr><h3>Thông tin đăng kiểm :</h3></tr>
                            <tr>
                               
                                <td>
                                    <label>Mã số :</label>
                                    <input type='text' id="maso" placeholder="123..." required></input>
                                </td>
                                <td>
                                    <label>Ngày đăng kiểm:</label>
                                    <input type='date' id="registryDate" required></input>
                                </td>
                                <td>
                                    <label>Ngày hết hạn:</label>
                                    <input type='date' id="expiryDate" required></input>
                                </td>
                                <td>
                                    <label>Nơi đăng kiểm:</label>
                                    <input type='text' id="noidangky" placeholder="" required></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="save" onClick={this.save}>Save</button>
                    {/* <button onClick={handleCancel}>Cancel</button> */}
                </div>
               
               
                <div id="upload-file">
                    <input id='choose-file' type='file' onChange={this.handleFileUpload} accept=".xlsx" />
                    <button id='upload' onClick={this.handleUpload}>Xác nhận file</button>
                </div>
               


                <div id="vanbandangkiem">
                </div>


                {/* <div id ="xuatvanban">
                    <button id="download" class="btn-print-this btn btn-primary" onClick={this.renderBaocao}>In giay chung nhan</button>
                </div> */}


                <button id="download" onClick={this.renderBaocao}>In giay chung nhan</button>


            </div>
        );
    }
}


export default Them_Moi;

