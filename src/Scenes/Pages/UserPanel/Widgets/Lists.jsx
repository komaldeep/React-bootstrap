import React, { Component } from 'react';

export default class Lists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list:'',
            value:''
        }
    }


    componentWillMount(){
        this.setState({
            list: this.props.detail
        })
    }

    filters(e){
        this.setState({
            value:e.target.value
        })
    }



    render() {

        let filteredlist = this.state.list.filter(
            (detail) =>{
                return detail.name.toLowerCase().indexOf(this.state.value.toLowerCase()) !==  -1
            }
        );

        return(
            <div className="panel panel-default">
                <div className="panel-heading font-bold font-awesome">
                    Users
                </div>
                <div className="row wrapper">
                    <div className="col-sm-5 m-b-xs">
                        <input type="text"
                               onChange={this.filters.bind(this)}
                               className="input-sm form-control"
                               placeholder="Search by Name"/>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped b-t b-light">
                        <thead>
                        <tr>
                            <th>
                                <label className="i-checks m-b-none">
                                    <input type="checkbox"/><i></i>
                                </label>
                            </th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Sender Name</th>
                            <th>E-mail Address</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            filteredlist.map((item) => {
                                return(
                                    <tr>
                                        <td><label className="i-checks m-b-none"><input type="checkbox"/> <i></i></label></td>
                                        <td style={{ color:"#2196f3" }}> {item.id} </td>
                                        <td> {item.name} </td>
                                        <td> {item.sender_name} </td>
                                        <td> {item.email} </td>
                                        <td> {item.type} </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
