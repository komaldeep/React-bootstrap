import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Lists from '../Widgets/Lists';
import NavigationLeft from '../../../Components/NavigationLeft';
import { fetch_all_custumers } from './../../../../Action/Index';

class NavigatorMiddle extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.props.fetch_all_custumers()
    }


    render() {

        const { fetching_custumer } = this.props.Reducers;

        return(

            <div className="app app-aside-folded">
                <div id="content" className="app-content" role="main">
                    <div className="app-content-body ">

                        <div className="hbox hbox-auto-xs hbox-auto-sm">

                            {/*Side bar */}
                            <NavigationLeft />
                            {/*Side bar end */}


                            <div className="col">
                                {/*List elemets*/}
                                {
                                    fetching_custumer == false ?
                                        <div></div>
                                        :
                                        <Lists detail = {fetching_custumer.Customers}/>
                                }
                                {/*List elemets ends*/}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(store) {
    return { Reducers: store.Reducers};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetch_all_custumers
    }, dispatch);
}


const NavigatorMiddlePanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigatorMiddle)

export default NavigatorMiddlePanel;
