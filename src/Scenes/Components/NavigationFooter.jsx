import React, {Component} from "react";

export default class Navigationfooter extends Component{

    render(){

        return (
            <footer id="footer" className="app-footer">
                <div className="wrapper b-t bg-light">
                    <span className="pull-right"> <a className="m-l-sm text-muted"><i className="fa fa-long-arrow-up"></i></a></span> &copy; 2017 Copyright.
                </div>
            </footer>
        );
    }
}