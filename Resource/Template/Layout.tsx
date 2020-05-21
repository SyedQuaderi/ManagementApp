import React from 'react';
import '../Styles/Layout.scss';

function Header(props) {
    let isDropClicked = false;
    const dropDownElement = document.getElementsByClassName('dropdown');
    const handleDropDown = (event) =>{
        event.preventDefault();
        dropDownElement[0].classList.toggle('open');
        isDropClicked = true;
    }
    
    return (
        <>
            <div id="pageHeader" className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="~/">Focused Patient Care</a>
                    </div>
                    <div className="pull-right">
                    <div id="user-information" className="ra-user-information">
                            <ul className="nav navbar-nav">
                                <li className="dropdown">
                                    <a href="#" onClick={(e)=>handleDropDown(e)} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <div>
                                            <div className="row">
                                                <div className="ra-user-thumbnail col-xs-3">
                                                    {/* <img src="data:image;base64,@System.Convert.ToBase64String(Model.Thumbnail)" className="img"/> */}
                                                    <span className="ra-user-initials">AS</span>
                                                </div>

                                                <div className="col-xs-8">
                                                    <div className="ra-user-name">
                                                        Abdul Syed
                                                    </div>

                                                    <div className="ra-user-title">
                                                        Product Development Engineer
                                                    </div>
                                                </div>
                                                <div className="col-xs-1">
                                                    <span className="caret"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Take a Tour</a></li>
                                        <li><a href="#">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="navbar-fixed-bottom">
                &copy; {new Date().getFullYear()} Rauland Australia
            </footer>
        </>
    )
}

export default Header;
