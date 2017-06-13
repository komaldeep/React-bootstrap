import React, {Component} from "react";
import {Link} from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { departments, escalation_level } from './../../Action/Index';

class LeftPanel extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render(){

        return (

               <div className="col w-md bg-white dk b-r bg-auto">
                   <div className="wrapper b-b bg-white">

                       <a className="btn font-bold">
                           Dashboard
                       </a>

                   </div>

                   <div className="wrapper hidden-sm hidden-xs" id="email-menu">
                       <ul className="nav nav-pills nav-stacked nav-sm text-sm">

                           <li className="active">
                               <a>Users</a>
                           </li>

                           <li>
                               <a>Shipments</a>
                           </li>

                           <li>
                               <a>Pickups</a>
                           </li>

                       </ul>
                   </div>
               </div>
        );
    }
}


function mapStateToProps(store) {
    return { Reducers: store.Reducers};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        departments,
        escalation_level
    }, dispatch);
}


const NavigationLeft = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel)

export default NavigationLeft;
