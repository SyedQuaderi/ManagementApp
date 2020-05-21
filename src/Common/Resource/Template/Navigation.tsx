import React from 'react';
import '../Styles/Navigation.scss';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <>
            <div className="navbar-container">
                {
                    <ol className="breadcrumb">
                        <li id="breadcrumb-home">
                            <Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span></Link>
                        </li>
                        {
                            <li>
                                <Link to="/Settings">Settings</Link>
                            </li>
                        }
                        {
                            
                        }
                        {/* {
                            <li className="dropdown">
                                <Link className="dropdown-toggle" data-toggle="dropdown" to="/Settings">
                                    <span className="caret"></span>
                                </Link>
                                <ul className="dropdown-menu" role="menu">
                                    {
                                        <li>
                                            <Link to="/Settings">
                                                All Boards
                                            </Link>
                                        </li>
                                    }

                                    {
                                        <li>
                                            <Link to="/Settings">
                                                board.Name
                                            </Link>
                                        </li>
                                    }
                                </ul>
                            </li>
                        } */}
                    </ol>
                }

                <div className="pull-right">
                    <Link to="/"><img src={process.env.PUBLIC_URL + '/Assets/Images/fpc.png'} alt="fpc_logo" className="logo" /></Link>
                </div>
            </div>
        </>
    )
}

export default Navigation
