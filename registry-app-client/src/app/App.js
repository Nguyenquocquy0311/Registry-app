import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';

import PollList from '../poll/PollList';
import NewPoll from '../poll/NewPoll';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from '../common/PrivateRoute';
import Footer from '../components/Footer';

import { read, utils } from 'xlsx';

import * as XLSX from 'xlsx'

import $ from 'jquery';
import jQuery from 'jquery';
// window.jQuery = jQuery;


import { Layout, notification } from 'antd';
import Poll from '../poll/Poll';
import Them_Moi from '../poll/Them_Moi';
import Manager from '../components/Manager';
import PollListUser from '../poll/PollListUser';


const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: true
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });
  }

  loadCurrentUser() {
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
      }).catch(error => {
        this.setState({
          isLoading: false
        });
      });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push("/login");

    notification[notificationType]({
      message: 'Polling App',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Polling App',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();

    console.log(document.getElementById("usernameOrEmail").value)

    if(document.getElementById("usernameOrEmail").value==='cucdangkiem'){

      this.props.history.push("/admin");
  }
  else{
    this.props.history.push("/ttdk");
  }
   
  }

  // handleFileChange = (event) => {
  //   const fileInput = document.getElementById('excelFileInput');
  //   const file = fileInput.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     const data = new Uint8Array(e.target.result);
  //     const workbook = XLSX.read(data, { type: 'array' });

  //     // Process the workbook and access the data
  //     // For example, you can access the first sheet and its rows
  //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  //     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  //     console.log(jsonData); // Log the rows to the console


  //     const arr = Object.entries(jsonData);

  //     console.log(arr);

  //     for (var i = 1; i < arr.length; i++) {

  //       var obj = {};
  //       // console.log(arr[i][1])

  //       obj["maso"] = arr[i][1][1];
  //       obj["namsanxuat"] = arr[i][1][8];
  //       obj["ngaycap"] = arr[i][1][2];
  //       obj["biendangky"] = arr[i][1][0];
  //       obj["noidangky"] = arr[i][1][3];

  //       //check kieu xe 

  //       if (arr[i][1][5] === 'Ô tô chở người các loại trên 9 chỗ đã sản xuất từ 15 năm trở lên ( kể cả ô tô chở người trên 9 chỗ đã cải tạo thành ô tô chở người đến 9 chỗ)') {
  //         obj["kieuXe"] = { "id": 1 };
  //       }

  //       if (arr[i][1][5] === 'Ô tô tải các loại , ô tô chuyên dùng  , ô tô đầu kéo , rơ moóc , sơmi rơ moóc') {
  //         obj["kieuXe"] = { "id": 2 };
  //       }


  //       if (arr[i][1][5] === 'Ô tô chở người các loại đến 9 chỗ') {
  //         obj["kieuXe"] = { "id": 3 };
  //       }

  //       if (arr[i][1][5] === 'Ô tô chở người các loại đến 9 chỗ kinh doanh vận tải') {
  //         obj["kieuXe"] = { "id": 4 };
  //       }

  //       if (arr[i][1][5] === 'Ô tô chở người các loại đến 9 chỗ không kinh doanh vận tải') {
  //         obj["kieuXe"] = { "id": 5 };
  //       }


  //       obj["phienbanxe"] = {
  //         "id": 1
  //       };
  //       obj["mucDich"] = {
  //         "id": 1
  //       };

  //       obj["chuSoHuu"] = {
  //         "id": arr[i][1][4]
  //       };

  //       console.log(JSON.stringify(obj))


  //       jQuery.ajax({
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //         'type': 'POST',
  //         'async': false,
  //         'url': "http://localhost:8080/everyone/xe",
  //         'data': JSON.stringify(obj),
  //         'dataType': 'json',
  //       }).done(function (response) {
  //         console.log(response.id)
  //       })



  //     }

  //   };

  //   reader.readAsArrayBuffer(file);
  // };

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />
    }

    return (
      <Layout className="app-container">
        <AppHeader isAuthenticated={this.state.isAuthenticated}
          currentUser={this.state.currentUser}
          onLogout={this.handleLogout} />

        <Content className="app-content">
          <div className="container">
            <Switch>
              {/* <Route extract path="/"
                render={(props) => <Home isAuthenticated={this.state.isAuthenticated}
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
              </Route> */}
              <Route path="/admin"
                render={(props) => <PollList isAuthenticated={this.state.isAuthenticated}
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
              </Route>
              <Route path="/login"
                render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/users/:username"
                render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props} />}>
              </Route>
              <Route path="/ttdk" 
                render={(props) => <PollListUser isAuthenticated={this.state.isAuthenticated}
                currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
              </Route>
              <PrivateRoute authenticated={this.state.isAuthenticated} path="/poll/new" component={NewPoll} handleLogout={this.handleLogout}></PrivateRoute>
              {/* <Route path="/ttdk" component={Manage_Car_ttdk}></Route> */}
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(App);
