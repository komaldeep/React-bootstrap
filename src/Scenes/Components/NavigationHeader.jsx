import React, {Component} from "react";

export default class Navigationheader extends Component{

    render(){
        let brand_name = "Byrd";
        return (
            <header id="header" className="app-header navbar">
                <div className="collapse pos-rlt navbar-collapse box-shadow bg-white-only topnav">
                    <ul className="nav navbar-nav hidden-sm">
                        <li className="dropdown">
                            <a href="#" className="w-xl dropdown-toggle">
                                {brand_name}
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}