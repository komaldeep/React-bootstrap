import React, { Component } from 'react';
import Navigationheader from '../../Components/NavigationHeader';
import NavigatorMiddlePanel from './Navigators/NavigatorMiddle';
import Navigationfooter from '../../Components/NavigationFooter';

export default class UserPanel extends Component {

    render() {
        return(
            <div className=" container app app-aside-dock">
                <Navigationheader />
                <NavigatorMiddlePanel />
                <Navigationfooter />
            </div>
        )
    }
 }



