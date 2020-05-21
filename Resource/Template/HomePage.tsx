import React from 'react';
import {Link} from 'react-router-dom';
import {IoIosPeople, IoMdSettings} from 'react-icons/io';
import {FaRegCreditCard, FaRegPlayCircle} from 'react-icons/fa';
import {GoRepo} from 'react-icons/go';
import '../Styles/HomePage.scss';

function HomePage() {
    return (
        <div className="container">
            <div className="row ra-menu-items">
                <div className="col-md-1">
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-3 col-sm-4">
                            <Link to="/Patients" className="thumbnail">
                                <IoIosPeople className="board-item-icons"/>
                                <div className="caption">Patients</div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <Link to="/Media" className="thumbnail">
                                <FaRegPlayCircle className="board-item-icons"/>
                                <div className="caption">Media</div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <Link to="/Cashier" className="thumbnail">
                                <FaRegCreditCard className="board-item-icons"/>
                                <div className="caption">Cashier</div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <Link to="/Reports" className="thumbnail">
                                <GoRepo className="board-item-icons"/>
                                <div className="caption">Reports</div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <Link to="/Settings" className="thumbnail">
                                <IoMdSettings className="board-item-icons"/>
                                <div className="caption">Settings</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        </div>
    )
}

export default HomePage
