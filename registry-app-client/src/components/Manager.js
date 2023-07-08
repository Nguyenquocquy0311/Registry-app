



import React, { Component } from 'react';
import '../poll/Manage_Car.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core';
import  $ from 'jquery'

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
            data: [],
            owners: [],
            selectedVehicle: {
                licensePlate: "",
                owner: "",
                uses: "",
                manufacturer: "",
                registryDate: '',
                expiryDate: ""
            },
            selectedOwner: null,
            expiringVehicles: [],
            isFiltered: false,
            newCar: {
                cod: '',
                licensePlate: "",
                owner: "",
                uses: "",
                manufacturer: "",
                yearOfManufacturer: '',
                registryDate: '',
                expiryDate: ""
            },
            editingCar: null,
            showEditForm: false,
            showAddForm: false,
            showDetail: false,
            idtrungtam: '',
            isXacNhanLoc: false,
            xetngay: false,
            showTable: false
        };
    }


    componentDidMount() {




        const apiUrl = 'http://localhost:8080/everyone/thongtindangkiems'; // Replace with your API URL


        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ vehicles: responseData });
                console.log(responseData)
                console.log("123456")
            })
            .catch(error => {
                console.error(error);
            });
    }














    componentDidUpdate(prevProps, prevState) {
        if (prevState.vehicles !== this.state.vehicles) {
            const today = new Date();
            const expiring = this.state.vehicles.filter(vehicle => vehicle.expiryDate && new Date(vehicle.expiryDate) <= today);
            this.setState({ expiringVehicles: expiring });
        }
    }


    handleFilterClick = () => {
        this.setState({
            isFiltered: true,
            idtrungtam: document.getElementById("filterCenter").value,
            isXacNhanLoc: true,
            showTable: true,
            showDetail: false
        });
        const apiUrl = 'http://localhost:8080/everyone/thongtindangkiem/findByttdk/' + document.getElementById("filterCenter").value; // Replace with your API URL




        document.getElementById("selected").style.display = "block"
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ expiringVehicles: responseData });
                console.log(responseData)
                // console.log(vehicles)
            })
            .catch(error => {
                console.error(error);
            });


    };




    handleFilterClickhethan = () => {
        this.setState({
            isFiltered: true,
            idtrungtam: document.getElementById("filterCenter").value,
            isXacNhanLoc: true,
            xetngay: true
        });
        const apiUrl = 'http://localhost:8080/everyone/thongtindangkiem/findByttdk/' + document.getElementById("filterCenter").value; // Replace with your API URL




        document.getElementById("selected").style.display = "block"
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ expiringVehicles: responseData });
                console.log(responseData)
                // console.log(vehicles)
            })
            .catch(error => {
                console.error(error);
            });


    };


    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            newCar: { ...prevState.newCar, [name]: value }
        }));
    };


    handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            const data = JSON.parse(content);
            this.setState({ vehicles: data.car });
        };
        reader.readAsText(file);
    };


    handleRowClick = (vehicle) => {
        this.setState({


            selectedVehicle: {
                cod: vehicle.maso,
                licensePlate: vehicle.xe.biendangky,
                owner: vehicle.xe.chuSoHuu.ten,
                uses: vehicle.xe.mucDich.mucdich,
                manufacturer: vehicle.xe.phienbanxe.hangXe.tenhang,
                yearOfManufacturer: vehicle.xe.namsanxuat,
                registryDate: vehicle.ngaycap,
                expiryDate: vehicle.ngayhethan
            },
            // selectedVehicle:vehicle
            showDetail: true,
        })
        console.log(this.selectedVehicle)
    };


    handleOwnerClick = (owner) => {
        this.setState({ selectedOwner: owner });
    };


    handleResetClick = () => {
        this.setState({ selectedVehicle: null, selectedOwner: null, isFiltered: false });
    };


    handleAddCar = () => {
        this.setState({ showAddForm: true });
    }


    detailVehicle = (vehicle) => {
        console.log(vehicle)
        this.setState({


            selectedVehicle: {
                cod: vehicle.maso,
                licensePlate: vehicle.xe.biendangky,
                owner: vehicle.xe.chuSoHuu.ten,
                uses: vehicle.xe.mucDich.mucdich,
                manufacturer: vehicle.xe.phienbanxe.hangXe.tenhang,
                yearOfManufacturer: vehicle.xe.namsanxuat,
                registryDate: vehicle.ngaycap,
                expiryDate: vehicle.ngayhethan
            },
            // selectedVehicle:vehicle

            showDetail: false
        })
        //showDetail: true;


    }


    /*addCar = (vehicle) => {
        //this.setAccounts([...vehicle, newCar]);
        this.setState(prevState => ({
            vehicles: [...prevState.vehicle, newCar]
        }));
        this.setState({
            //vehicle: newCar,
                cod: vehicle.maso,
                licensePlate: vehicle.xe.biendangky,
                owner: vehicle.xe.chuSoHuu.ten,
                uses: vehicle.xe.mucDich.mucdich,
                manufacturer: vehicle.xe.phienbanxe.hangXe.tenhang,
                yearOfManufacturer: vehicle.xe.namsanxuat,
                registryDate: vehicle.ngaycap,
                expiryDate: vehicle.ngayhethan
        });
        showAddForm: false;
    } */


    editAccount = (vehicle) => {
        this.setState({
            editingCar: vehicle,
            newCar: {
                cod: vehicle.maso,
                licensePlate: vehicle.xe.biendangky,
                owner: vehicle.xe.chuSoHuu.ten,
                uses: vehicle.xe.mucDich.mucdich,
                manufacturer: vehicle.xe.phienbanxe.hangXe.tenhang,
                yearOfManufacturer: vehicle.xe.namsanxuat,
                registryDate: vehicle.ngaycap,
                expiryDate: vehicle.ngayhethan
            },
            showEditForm: true,
            showDetail: false
        });
    };


    updateCar = () => {
        const { vehicles, editingCar, newCar } = this.state;
        console.log(editingCar.id)
        var xet = document.getElementById(editingCar.id)
        console.log(newCar)


        this.setState({ showEditForm: false });


        console.log(xet.childNodes[1])
        xet.childNodes[1].innerHTML = '<td>' + newCar.cod + '</td>'
        xet.childNodes[2].innerHTML = '<td>' + newCar.licensePlate + '</td>'
        xet.childNodes[4].innerHTML = '<td>' + newCar.uses + '</td>'
        xet.childNodes[6].innerHTML = '<td>' + newCar.yearOfManufacturer + '</td>'


        var newurl = "http://localhost:8080/everyone/xe/" + editingCar.id;




        var obj = {};


        // obj["maso"] = arr[i][1][1];
        // obj["namsanxuat"] = arr[i][1][8];
        // obj["ngaycap"] = arr[i][1][2];
        // obj["biendangky"] = newCar.licensePlate;
        // obj["noidangky"] = arr[i][1][3];




        // jQuery.ajax({
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     'type': 'PUT',
        //     'async': false,
        //     'url': newurl,
        //     'data': JSON.stringify(obj),
        //     'dataType': 'json',
        // }).done(function (response) {
        //     console.log(response.id)
        // })








    };


    deleteAccount = (id) => {
        // const { vehicles } = this.state;
        // const updatedVehicles = vehicles.filter((item) => item !== vehicle);
        // this.setState({ vehicles: updatedVehicles, isFiltered: true });
        $.ajax({
            url: "http://localhost:8080/everyone/thongtindangkiem/" + id,
            type: 'DELETE',
            success: function (result) {}
            })

        document.getElementById(id).remove();
    };


    cancelForm = () => {
        this.setState({ showEditForm: false });
    };

    hideTable = () => {
        this.setState({showDetail: false});
    }


    renderTable = () => {
        var select = document.getElementById("filterOption").value;
        if(document.getElementById("filterDate").value==='1'){
            this.state.xetngay = true;
        }

        if(document.getElementById("filterDate").value==='2'){
            this.state.xetngay = false;
        }

        console.log(this.state.xetngay)

        this.setState({showDetail: false});
        
        

        if (this.state.xetngay === true) {
            console.log("ngaybatdau")
            if (select === 'year') {

                console.log("year")
                var apiUrl = 'http://localhost:8080/everyone/thongtindangkiem/byyear/' + document.getElementById("selected_year_year").value + "/" + document.getElementById("filterCenter").value; // Replace with your API URL
                console.log(apiUrl)
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(responseData => {
                        this.setState({ expiringVehicles: responseData });
                        console.log(responseData)
                        // console.log(vehicles)
                    })
                    .catch(error => {
                        this.setState({ expiringVehicles: '' });
                        console.error(error);
                    });
            }
            if (select === 'month') {
                console.log("month")
                var apiUrl = 'http://localhost:8080/everyone/thongtindangkiem/bymonth/' + document.getElementById("selected_month_month").value + "/" + document.getElementById("selected_month_year").value + "/" + document.getElementById("filterCenter").value;; // Replace with your API URL
                console.log(apiUrl)
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(responseData => {
                        this.setState({ expiringVehicles: responseData });
                        console.log(responseData)
                        // console.log(vehicles)
                    })
                    .catch(error => {
                        this.setState({ expiringVehicles: '' });
                        console.error(error);
                    });
            }
            if (select === 'quarter') {
                //console.log("")
                var thangbatdau;
                var thangketthuc;
                console.log(document.getElementById("selected_quarter_quarter").value)

                if (document.getElementById("selected_quarter_quarter").value === '1') {
                    thangbatdau = 1;
                    thangketthuc = 3
                }
                if (document.getElementById("selected_quarter_quarter").value === '2') {
                    thangbatdau = 4;
                    thangketthuc = 6
                }

                if (document.getElementById("selected_quarter_quarter").value === '3') {
                    thangbatdau = 7;
                    thangketthuc = 9
                }
                if (document.getElementById("selected_quarter_quarter").value === '4') {
                    thangbatdau = 10;
                    thangketthuc = 12;
                }


                var apiUrl = 'http://localhost:8080/everyone/thongtindangkiem/byquy/' + thangbatdau + "/" + thangketthuc + "/" + document.getElementById("selected_quarter_year").value + "/" + document.getElementById("filterCenter").value;; // Replace with your API URL
                console.log(apiUrl)
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(responseData => {
                        this.setState({ expiringVehicles: responseData });
                        console.log(responseData)
                        // console.log(vehicles)
                    })
                    .catch(error => {
                        this.setState({ expiringVehicles: '' });
                        console.error(error);
                    });



            }
        }



        if (this.state.xetngay === false) {
            console.log("ngayhethan")

            if (select === 'year') {

                console.log("year")
                var apiUrl = 'http://localhost:8080/everyone/thongtindangkiem/endbyyear/' + document.getElementById("selected_year_year").value + "/" + document.getElementById("filterCenter").value; // Replace with your API URL
                console.log(apiUrl)
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(responseData => {
                        this.setState({ expiringVehicles: responseData });
                        console.log(responseData)
                        // console.log(vehicles)
                    })
                    .catch(error => {
                        this.setState({ expiringVehicles: '' });
                        console.error(error);
                    });
            }
            if (select === 'month') {
                console.log("month")
                var apiUrl = 'http://localhost:8080/everyone/thongtindangkiem/endbymonth/' + document.getElementById("selected_month_month").value + "/" + document.getElementById("selected_month_year").value + "/" + document.getElementById("filterCenter").value;; // Replace with your API URL
                console.log(apiUrl)
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(responseData => {
                        this.setState({ expiringVehicles: responseData });
                        console.log(responseData)
                        // console.log(vehicles)
                    })
                    .catch(error => {
                        this.setState({ expiringVehicles: '' });
                        console.error(error);
                    });
            }
            if (select === 'quarter') {
                //console.log("")
                var thangbatdau;
                var thangketthuc;
                console.log(document.getElementById("selected_quarter_quarter").value)

                if (document.getElementById("selected_quarter_quarter").value === '1') {
                    thangbatdau = 1;
                    thangketthuc = 3
                }
                if (document.getElementById("selected_quarter_quarter").value === '2') {
                    thangbatdau = 4;
                    thangketthuc = 6
                }

                if (document.getElementById("selected_quarter_quarter").value === '3') {
                    thangbatdau = 7;
                    thangketthuc = 9
                }
                if (document.getElementById("selected_quarter_quarter").value === '4') {
                    thangbatdau = 10;
                    thangketthuc = 12;
                }


                var apiUrl = 'http://localhost:8080/everyone/thongtindangkiem/endbyquy/' + thangbatdau + "/" + thangketthuc + "/" + document.getElementById("selected_quarter_year").value + "/" + document.getElementById("filterCenter").value;; // Replace with your API URL
                console.log(apiUrl)
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(responseData => {
                        this.setState({ expiringVehicles: responseData });
                        console.log(responseData)
                        // console.log(vehicles)
                    })
                    .catch(error => {
                        this.setState({ expiringVehicles: '' });
                        console.error(error);
                    });



            }
        }







    }



    selectedOne = () => {


        var selectDate = document.getElementById("filterDate").value;
        var select = document.getElementById("filterOption").value;


        if (select === 'year') {
            document.getElementById('selected_year').style.display = "block";
            document.getElementById('selected_month').style.display = "none";
            document.getElementById('selected_quarter').style.display = "none";
        }

        if (select === 'month') {
            document.getElementById('selected_month').style.display = "block";
            document.getElementById('selected_year').style.display = "none";
            document.getElementById('selected_quarter').style.display = "none";
        }

        if (select === 'quarter') {
            document.getElementById('selected_quarter').style.display = "block";
            document.getElementById('selected_month').style.display = "none";
            document.getElementById('selected_year').style.display = "none";
        }


    }


    render() {
        const {
            vehicles,
            data,
            owners,
            selectedVehicle,
            selectedOwner,
            expiringVehicles,
            isFiltered,
            newCar,
            editingCar,
            showEditForm,
            showAddForm,
            showDetail,
            isXacNhanLoc,
            xetngay,
            showTable
        } = this.state;


        return (
            <div className='list_xe' id="list_xe">
                <h1>Danh sách xe đã đăng kiểm</h1>
                <div className="filter-buttons">
                    {/* {vehicles.map((item) => (
                        <p key={item.id}>{item.maso}</p>
                    ))} */}
                </div>
                <div className='btn'>

                    {/* <button className='btn-manage' onClick={this.handleAddCar}>Them moi</button>
                        <button className='btn-manage' onClick={this.handleFilterClick}>Lọc</button>
                        <button className='btn-manage' onClick={this.handleResetClick}>Reset</button>
                        <input className='choose-file' type='file' onChange={this.handleFileUpload} accept=".json" /> */}
                </div>


                {/* <div>
                    <label htmlFor="filterCenter">Chọn trung tâm:</label>
                    <select name="filterCenter" id="filterCenter"
                    >
                        <option value="">Chọn</option>
                        <option value={1}>Hà Nội</option>
                        <option value={2}>TP HCM</option>
                        <option value={3}>Nghệ An</option>
                        <option value={4}>Đà Nẵng</option>
                    </select>
                    <button className='btn-manage' onClick={this.handleFilterClick}>Lọc</button>
                </div> */}








                <div id="selected">


                    <label htmlFor='filterDate'>Lọc theo:</label>
                    <select id='filterDate' onChange={this.selectedOne}>

                        <option value={1}>Lọc theo ngày đăng kiểm</option>
                        <option value={2}>Lọc theo ngày hết hạn</option>
                    </select>



                    <select name="filterOption" id="filterOption" onChange={this.selectedOne} >
                        <option value=''>Chọn</option>
                        <option value="year">Năm</option>
                        <option value="month">Tháng</option>
                        <option value="quarter">Quý</option>
                    </select>


                </div>






                <div id="selected_year">
                    <label>Năm:</label>
                    <select name='year' id='selected_year_year'>
                        <option value={2023}>2023</option>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                        <option value={2016}>2016</option>
                        <option value={2015}>2015</option>
                        <option value={2014}>2014</option>
                        <option value={2013}>2013</option>
                        <option value={2012}>2012</option>
                        <option value={2011}>2011</option>
                        <option value={2010}>2010</option>
                    </select>








                </div>




                <div id="selected_month">


                    

                    <label>Tháng:</label>
                    <select name='month' id='selected_month_month'>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>

                    <label>Năm:</label>
                    <select name='year' id='selected_month_year'>
                        <option value={2023}>2023</option>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                        <option value={2016}>2016</option>
                        <option value={2015}>2015</option>
                        <option value={2014}>2014</option>
                        <option value={2013}>2013</option>
                        <option value={2012}>2012</option>
                        <option value={2011}>2011</option>
                        <option value={2010}>2010</option>
                    </select>







                </div>


                <div id="selected_quarter">
                    

                    <label>Quý:</label>
                    <select name='year' id='selected_quarter_quarter'>
                        <option value=''>Chọn</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>

                    <label>Năm:</label>
                    <select name='year' id='selected_quarter_year'>
                        <option value=''>Chọn</option>
                        <option value={2023}>2023</option>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                        <option value={2022}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                        <option value={2016}>2016</option>
                        <option value={2015}>2015</option>
                        <option value={2014}>2014</option>
                        <option value={2013}>2013</option>
                        <option value={2012}>2012</option>
                        <option value={2011}>2011</option>
                        <option value={2010}>2010</option>
                    </select>
                </div>

                {isXacNhanLoc && (<button className='btn-xacnhan' onClick={this.renderTable}> Xác nhận</button>)}

















                {/* <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday"> */}


                {showTable && (<table className='ds-xe'>
                    <thead>
                        <tr>
                            <th>TT</th>
                            <th>Mã số</th>
                            <th>Biển số</th>
                            <th>Chủ sở hữu</th>
                            <th>Mục đích sử dụng</th>
                            <th>Hãng sản xuất</th>
                            <th>Năm sản xuất</th>
                            <th>Ngày đăng kiểm</th>
                            <th>Ngày hết hạn đăng kiểm</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isFiltered && vehicles.map((vehicle, index) => (
                            <tr id={vehicle.id} key={vehicle.id}>
                                <td>{index + 1}</td>
                                <td>{vehicle.maso}</td>
                                <td>{vehicle.xe.biendangky}</td>
                                <td>{vehicle.xe.chuSoHuu.ten}</td>
                                <td>{vehicle.xe.mucDich.mucdich}</td>
                                <td>{vehicle.xe.phienbanxe.hangXe.tenhang}</td>
                                <td>{vehicle.xe.namsanxuat}</td>
                                <td>{vehicle.ngaycap}</td>
                                <td>{vehicle.ngayhethan}</td>
                                <td>
                                    <span onClick={() => this.handleRowClick(vehicle)}> <FontAwesomeIcon icon={faBars} /></span>


                                    <span onClick={() => this.editAccount(vehicle)}><FontAwesomeIcon icon={faPen} /></span>
                                    <span onClick={() => this.deleteAccount(vehicle.id)}> <FontAwesomeIcon icon={faTrash} /> </span>
                                </td>
                            </tr>
                        ))}
                        {isFiltered && expiringVehicles.length > 0 &&
                            expiringVehicles.map((vehicle, index) => (
                                <tr key={vehicle.id}>
                                    <td>{index + 1}</td>
                                    <td>{vehicle.maso}</td>
                                    <td>{vehicle.xe.biendangky}</td>
                                    <td>{vehicle.xe.chuSoHuu.ten}</td>
                                    <td>{vehicle.xe.mucDich.mucdich}</td>
                                    <td>{vehicle.xe.phienbanxe.hangXe.tenhang}</td>
                                    <td>{vehicle.xe.namsanxuat}</td>
                                    <td>{vehicle.ngaycap}</td>
                                    <td>{vehicle.ngayhethan}</td>
                                    <td>
                                        <span className='icon' onClick={() => this.handleRowClick(vehicle)}> <FontAwesomeIcon icon={faBars} /></span>
                                        <span className='icon' onClick={() => this.editAccount(vehicle)}><FontAwesomeIcon icon={faPen} /></span>
                                        <span className='icon' onClick={() => this.deleteAccount(vehicle.id)}> <FontAwesomeIcon icon={faTrash} /> </span>
                                    </td>
                                </tr>
                            )
                            )}
                    </tbody>
                </table>)}


                {showDetail && selectedVehicle && (
                    <div className='details'>
                        <h2>Thông tin chi tiết về xe</h2>
                        <p><b>Mã số đăng kiểm:</b>{selectedVehicle.cod}</p>
                        <p><b>Biển số: </b>{selectedVehicle.licensePlate}</p>
                        <p><b>Chủ sở hữu: </b>{selectedVehicle.owner}</p>
                        <p><b>Mục đích sử dụng: </b>{selectedVehicle.uses}</p>
                        <p><b>Hãng sản xuất: </b>{selectedVehicle.manufacturer}</p>
                        <p><b>Dòng xe: </b>{selectedVehicle.manufacturer}</p>
                        <p><b>Năm sản xuất: </b>{selectedVehicle.yearOfManufacturer}</p>
                        <p><b>Ngày đăng kiểm: </b>{selectedVehicle.registryDate}</p>
                        <p><b>Ngày hết hạn đăng kiểm: </b>{selectedVehicle.expiryDate}</p>
                        <button className='hide' onClick={this.hideTable}>Ẩn thông tin</button>
                    </div>
                )}
                {selectedOwner && (
                    <div className='details'>
                        <h2>Thông tin chi tiết về chủ sở hữu</h2>
                        <p>Tên: {selectedVehicle.owner}</p>
                        <p>Email: {selectedVehicle.email}</p>
                        <p>Điện thoại: {selectedVehicle.phone}</p>
                        <p>Khu vực: {selectedVehicle.province}</p>
                    </div>
                )}
                {/* {showAddForm && (
                    <div>
                        <h2>Thong tin ve xe</h2>
                        <div>
                            <label>Ma so:</label>
                            <input
                            type="text"
                            name="cod"
                            value={newCar.cod}
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Bien so:</label>
                            <input
                            type="text"
                            name="licensePlate"
                            value={newCar.licensePlate}
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Chu so huu:</label>
                            <input
                            type="text"
                            name="owner"
                            value={newCar.owner}
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Muc dich su dung:</label>
                            <select
                                name="uses"
                                value={newCar.uses}
                                onChange={this.handleInputChange}
                            >
                                <option>Chon</option>
                                <option>Di lai ca nhan</option>
                                <option>Cho hang</option>
                            </select>
                        </div>
                        <div>
                            <label>Hang san xuat:</label>
                            <input
                            type="text"
                            name="manufacturer"
                            value={newCar.manufacturer}
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Nam san xuat:</label>
                            <input
                            type="text"
                            name="yearOfManufacturer"
                            value={newCar.yearOfManufacturer}
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Ngay cap:</label>
                            <input
                            type="date"
                            name="regitryDate"
                            value={newCar.registryDate}
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Ngay het han:</label>
                            <input
                            type="date"
                            name="expiryDate"
                            value={newCar.expiryDate}
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <button onClick={this.handleAddCar}>Add Account</button>
                            <button onClick={this.cancelForm}>Cancel</button>
                        </div>
                    </div>
                )} */}
                {showEditForm && (
                    <div className='edit-form'>
                        <h2>Edit vehicle</h2>
                        <div>
                            <label>Biển số:</label>
                            <input
                                type="text"
                                name="licensePlate"
                                value={newCar.licensePlate}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Mã số:</label>
                            <input
                                type="text"
                                name="cod"
                                value={newCar.cod}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Mục đích sử dụng:</label>
                            <select
                                name="uses"
                                id='uses'
                                value={newCar.uses}
                                onChange={this.handleInputChange}
                            >
                                <option>Chọn</option>
                                <option value={1}>Đi lại cá nhân</option>
                                <option value={2}>Dịch vụ chở khách</option>
                                <option value={3}>Dịch vụ vận tải</option>
                                <option value={4}>Thể thao và giải trí</option>
                                <option value={5}>Phương tiện công cộng</option>
                            </select>
                        </div>
                        <div>
                            <label>Năm sản xuất:</label>
                            <input
                                type="text"
                                name="yearOfManufacturer"
                                value={newCar.yearOfManufacturer}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        {/* <div>
                            <label>Ngay dang kiem:</label>
                            <input
                                type="text"
                                name="manufacturer"
                                value={newCar.registryDate}
                                readOnly
                            />
                        </div>
                        <div>
                            <label>Ngay het han dang kiem:</label>
                            <input
                                type="text"
                                name="manufacturer"
                                value={newCar.expiryDate}
                                onChange={this.handleInputChange}
                            />
                        </div> */}
                        <div>
                            <button className="update" onClick={this.updateCar}>Update Vehicle</button>
                            <button className='cancel' onClick={this.cancelForm}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default Manager;



