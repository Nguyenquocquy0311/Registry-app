import React, { Component } from 'react';
import { getAllPolls, getUserCreatedPolls, getUserVotedPolls } from '../util/APIUtils';
import Poll from './Poll';
import { castVote } from '../util/APIUtils';
import LoadingIndicator from '../common/LoadingIndicator';
import { Button, Icon, notification } from 'antd';
import { POLL_LIST_SIZE } from '../constants';
import { withRouter } from 'react-router-dom';
import './PollList.css';
import Manage_Car from './Manage_Car';
import Them_Moi from './Them_Moi';



class PollList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            polls: [],
            page: 0,
            size: 10,
            totalElements: 0,
            totalPages: 0,
            last: true,
            currentVotes: [],
            data: null,
            isLoading: false,
            showAddMenu: false,
            themMoi: false,
            bangxe: false
        };
        this.loadPollList = this.loadPollList.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }


    


    loadPollList(page = 0, size = POLL_LIST_SIZE) {
        let promise;
        if (this.props.username) {
            if (this.props.type === 'USER_CREATED_POLLS') {
                promise = getUserCreatedPolls(this.props.username, page, size);
            } else if (this.props.type === 'USER_VOTED_POLLS') {
                promise = getUserVotedPolls(this.props.username, page, size);
            }
        } else {
            promise = getAllPolls(page, size);
        }

        if (!promise) {
            return;
        }

        this.setState({
            isLoading: true
        });

        promise
            .then(response => {
                const polls = this.state.polls.slice();
                const currentVotes = this.state.currentVotes.slice();

                this.setState({
                    polls: polls.concat(response.content),
                    page: response.page,
                    size: response.size,
                    totalElements: response.totalElements,
                    totalPages: response.totalPages,
                    last: response.last,
                    currentVotes: currentVotes.concat(Array(response.content.length).fill(null)),
                    isLoading: false
                })
            }).catch(error => {
                this.setState({
                    isLoading: false
                })
            });

    }

    // componentDidMount() {
    //     const apiUrl = 'http://localhost:8080/everyone/xe'; // Replace with your API URL

    //     fetch(apiUrl)
    //         .then(response => response.json())
    //         .then(responseData => {
    //             this.setState({ data: responseData });
    //             console.log(responseData)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    //     this.loadPollList();
    // }

    componentDidUpdate(nextProps) {
        if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
            // Reset State
            this.setState({
                polls: [],
                page: 0,
                size: 10,
                totalElements: 0,
                totalPages: 0,
                last: true,
                currentVotes: [],
                isLoading: false
            });
            this.loadPollList();
        }
    }

    handleLoadMore() {
        this.loadPollList(this.state.page + 1);
    }

    handleVoteChange(event, pollIndex) {
        const currentVotes = this.state.currentVotes.slice();
        currentVotes[pollIndex] = event.target.value;

        this.setState({
            currentVotes: currentVotes
        });
    }


    handleVoteSubmit(event, pollIndex) {
        event.preventDefault();
        if (!this.props.isAuthenticated) {
            this.props.history.push("/login");
            notification.info({
                message: 'Polling App',
                description: "Please login to vote.",
            });
            return;
        }

        const poll = this.state.polls[pollIndex];
        const selectedChoice = this.state.currentVotes[pollIndex];

        const voteData = {
            pollId: poll.id,
            choiceId: selectedChoice
        };

        castVote(voteData)
            .then(response => {
                const polls = this.state.polls.slice();
                polls[pollIndex] = response;
                this.setState({
                    polls: polls
                });
            }).catch(error => {
                if (error.status === 401) {
                    this.props.handleLogout('/login', 'error', 'You have been logged out. Please login to vote');
                } else {
                    notification.error({
                        message: 'Polling App',
                        description: error.message || 'Sorry! Something went wrong. Please try again!'
                    });
                }
            });
    }
    addOn = () => {
        // document.getElementById("ghi-nhan").style.display = "block";
        document.getElementById("list_xe").style.display = "none";
        document.getElementById("vanbandangkiem").style.display = "none";
        document.getElementById("download").style.display = "none";

        this.setState({showAddMenu: true});
    }

    renderTable = () => {
        document.getElementById("ghi-nhan").style.display = "none";
        document.getElementById("list_xe").style.display = "block";
        document.getElementById("vanbandangkiem").style.display = "none";
        document.getElementById("download").style.display = "none";
        document.getElementById("choose-file").style.display = "none";
        
        document.getElementById("upload").style.display = "none";
        this.setState({showAddMenu:false, themMoi: false});

    }

    // renderBaocao = () => {

    //     const invoice = document.getElementById("vanbandangkiem");
    //     console.log(invoice);
    //     console.log(window);
    //     var opt = {
    //         margin: 1,
    //         filename: 'myfile.pdf',
    //         image: { type: 'jpeg', quality: 0.98 },
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    //     };
    //     html2pdf().from(invoice).set(opt).save();

    // }

    render() {
        const { data, showAddMenu, themMoi, selectedFile } = this.state;
        const pollViews = [];
        this.state.polls.forEach((poll, pollIndex) => {
            pollViews.push(<Poll
                key={poll.id}
                poll={poll}
                currentVote={this.state.currentVotes[pollIndex]}
                handleVoteChange={(event) => this.handleVoteChange(event, pollIndex)}
                handleVoteSubmit={(event) => this.handleVoteSubmit(event, pollIndex)} />)
        });

        return (


            <div className="polls-container">
                <h1>Cục đăng kiểm xe ô tô Việt Nam</h1>
                <button className='btn-poll' onClick={this.addOn}>Thêm mới</button>
                <button className='btn-poll' onClick={this.renderTable}>Danh sách</button>
                {/* <button className='btn-poll' onClick={this.renderBaocao}>Báo cáo</button> */}
                {showAddMenu && (
                    <ul className='menuAdd'>
                        <h3>Chọn cách thêm</h3>
                        <li><button onClick={() =>{document.getElementById("ghi-nhan").style.display = "block"
                                                document.getElementById("choose-file").style.display = "none";
                                                document.getElementById("upload").style.display = "none";}}>Nhập thông tin</button></li>
                        <li><button onClick={() => {document.getElementById("choose-file").style.display = "block";
                                            document.getElementById("upload").style.display = "block";
                                            document.getElementById("ghi-nhan").style.display = "none"
                                            document.getElementById("vanbandangkiem").style.display = "none";}}>Chọn file</button></li>
                    
                    </ul>)}
                {(<Manage_Car />)}
                {(<Them_Moi />)}
                {/* {pollViews} */}
                {/* {
                    !this.state.isLoading && this.state.polls.length === 0 ? (
                        <div className="no-polls-found">
                            <span>No Polls Found.</span>
                        </div>
                    ) : null
                }
                {
                    !this.state.isLoading && !this.state.last ? (
                        <div className="load-more-polls">
                            <Button type="dashed" onClick={this.handleLoadMore} disabled={this.state.isLoading}>
                                <Icon type="plus" /> Load more
                            </Button>
                        </div>) : null
                }
                {
                    this.state.isLoading ?
                        <LoadingIndicator /> : null
                } */}
            </div>




            // <div className='container'>



            //     <h1>Danh sách xe đã đăng kiểm</h1>
            //     <div className="filter-buttons">
            //         {data.map((item) => (
            //             <p key={item.id}>{item.maso}</p>
            //         ))}
            //     </div>
            //     <div className='btn'>
            //         <button className='btn-manage' >Lọc</button>
            //         <button className='btn-manage'>Reset</button>
            //         <button className='btn-manage' type='file'  accept=".json">Choose file</button>
            //     </div>
            //     <table className='ds-xe'>
            //         <thead>
            //             <tr>
            //                 <th>TT</th>
            //                 <th>Biển số</th>
            //                 <th>Chủ sở hữu</th>
            //                 <th>Mục đích sử dụng</th>
            //                 <th>Hãng sản xuất</th>
            //                 <th>Ngày đăng kiểm</th>
            //                 <th>Ngày hết hạn đăng kiểm</th>
            //                 <th>Thông báo</th>
            //                 <th>Actions</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             { datas.map(data => (
            //                 <tr key={data.id}>
            //                     <td>{data.id}</td>
            //                     <td>{data.licensePlate}</td>
            //                     <td >{data.owner}</td>
            //                     <td>{data.uses}</td>
            //                     <td>{data.manufacturer}</td>
            //                     <td>{data.registryDate}</td>
            //                     <td>{data.expiryDate}</td>
            //                     <td>
            //                         {data.expiryDate && new Date(data.expiryDate) <= new Date() ? (
            //                             <span className="notification-icon">&#9888;</span> // Biểu tượng thông báo
            //                         ) : "None"}
            //                     </td>
            //                     <td>
            //                         <i class="fa-solid fa-bars" ></i>
            //                         <i className="fa-solid fa-pen" ></i>
            //                         <i className="fa-solid fa-trash" ></i>
            //                     </td>
            //                 </tr>
            //             ))}
            //             { expiringdatas.length > 0 &&
            //                 expiringdatas.map(data => (
            //                     <tr key={data.id}>
            //                         <td>{data.id}</td>
            //                         <td>{data.licensePlate}</td>
            //                         <td>{data.owner}</td>
            //                         <td>{data.uses}</td>
            //                         <td>{data.manufacturer}</td>
            //                         <td>{data.registryDate}</td>
            //                         <td>{data.expiryDate}</td>
            //                         <td><span className="notification-icon">&#9888;</span></td>
            //                         <td>
            //                             <i className="fa-solid fa-bars"></i>
            //                             <i className="fa-solid fa-pen"></i>
            //                             <i className="fa-solid fa-trash" ></i>
            //                         </td>
            //                     </tr>
            //                 )
            //                 )}
            //         </tbody>
            //     </table>
            //     {selecteddata && (
            //         <div className='details'>
            //             <h2>Thông tin chi tiết về xe</h2>
            //             <p>Biển số: {selecteddata.licensePlate}</p>
            //             <p>Chủ sở hữu: {selecteddata.owner}</p>
            //             <p>Mục đích sử dụng: {selecteddata.uses}</p>
            //             <p>Hãng sản xuất:{selecteddata.manufacturer}</p>
            //             <p>Ngày đăng kiểm: {selecteddata.registryDate}</p>
            //             <p>Ngày hết hạn đăng kiểm: {selecteddata.expiryDate}</p>
            //         </div>
            //     )}
            //     {selectedOwner && (
            //         <div className='details'>
            //             <h2>Thông tin chi tiết về chủ sở hữu</h2>
            //             <p>Tên: {selecteddata.owner}</p>
            //             <p>Email: {selecteddata.email}</p>
            //             <p>Điện thoại: {selecteddata.phone}</p>
            //             <p>Khu vực: {selecteddata.province}</p>
            //         </div>
            //     )}
            //     {showEditForm && (
            //         <div>
            //             <h2>Edit Car</h2>
            //             <div>
            //                 <label>Bien so:</label>
            //                 <input
            //                     type="text"
            //                     name="licensePlate"
            //                     value={data.licensePlate}
            //                     // onChange={handleInputChange}
            //                 />
            //             </div>
            //             <div>
            //                 <label>Chu so huu:</label>
            //                 <input
            //                     type="text"
            //                     name="owner"
            //                     value={data.owner}
            //                     // onChange={handleInputChange}
            //                 />
            //             </div>
            //             <div>
            //                 <label>Muc dich su dung:</label>
            //                 <input
            //                     type="text"
            //                     name="khuVuc"
            //                     value={data.uses}
            //                     // onChange={handleInputChange}
            //                 />
            //             </div>
            //             <div>
            //                 <label>Hang san xuat:</label>
            //                 <input
            //                     type="text"
            //                     name="manufacturer"
            //                     value={data.manufacturer}
            //                     // onChange={handleInputChange}
            //                 />
            //             </div>
            //             <div>
            //                 <label>Ngay dang kiem:</label>
            //                 <input
            //                     type="text"
            //                     name="manufacturer"
            //                     value={data.registryDate}
            //                     readOnly
            //                 />
            //             </div>
            //             <div>
            //                 <label>Ngay het han dang kiem:</label>
            //                 <input
            //                     type="text"
            //                     name="manufacturer"
            //                     value={data.expiryDate}
            //                     // onChange={handleInputChange}
            //                 />
            //             </div>
            //             <div>
            //                 {/* <button onClick={updateCar}>Update Account</button> */}
            //                 {/* <button onClick={cancelForm}>Cancel</button> */}
            //             </div>
            //         </div>
            //     )}
            // </div>


        );
    }
}

export default withRouter(PollList);