import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Settings.scss';
import {Accordion, Button} from 'react-bootstrap';
import Clients from './Clients';
import AddWard from './AddWard';
import Navigation from '../../Common/Resource/Template/Navigation';
  
function Settings(props) {
    const [currentPage, setCurrentPage] = useState<String>('');
    const sidebarHeight:number = window.innerHeight - 190;
    return (
        <div id="container">
            <div className="container">
                <div id="ra-navigation-bar">
                    <Navigation/>
                </div>
            </div>
            <Router>
            <div className="d-flex">
                <div className="side-bar" style={{height: sidebarHeight}}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        HardWare
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <ul className="list-unstyled p-0 accordin-list">
                        <li>
                            <Link to="/Settings/Clients">Clients</Link>
                        </li>
                        <li>
                            <Link to="/Settings/Reports">Menu Items</Link>
                        </li>
                        <li>
                            <Link to="/Settings/TV">Client Group</Link>
                        </li>
                    </ul>
                    </Accordion.Collapse>
                </Accordion>
                <hr className="m-0"/>
                <Accordion defaultActiveKey="1">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Live Streams
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <ul className="list-unstyled p-0 accordin-list">
                        <li>
                            <Link to="/Settings/Channels">Channels</Link>
                        </li>
                        <li>
                            <Link to="/Settings/Reports">Channel Groups</Link>
                        </li>
                    </ul>
                    </Accordion.Collapse>
                </Accordion>
                <hr className="m-0"/>
                <Accordion defaultActiveKey="2">
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Media on Demand
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <ul className="list-unstyled p-0 accordin-list">
                        <li>
                            <Link to="/Settings/Categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/Settings/Reports">Ratings</Link>
                        </li>
                        <li>
                            <Link to="/Settings/Movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/Settings/Reports">Healthily</Link>
                        </li>
                    </ul>
                    </Accordion.Collapse>
                </Accordion>
                <hr className="m-0"/>
                <Accordion defaultActiveKey="2">
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <Link to="/Settings/Reports">Alarms</Link>
                    </Accordion.Toggle>
                </Accordion>
                <Accordion defaultActiveKey="2">
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <Link to="/Settings/Reports">Audio Logs</Link>
                    </Accordion.Toggle>
                </Accordion>
                <hr className="m-0"/>
                <Accordion defaultActiveKey="2">
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <Link to="/Settings/Reports">Users</Link>
                    </Accordion.Toggle>
                </Accordion>
                </div>
                <div className="d-flex w-100 justify-content-center p-2">
                <Switch>
                    <Route exact path="/Settings/Clients" children={<Clients page={setCurrentPage}/>} />
                    <Route path="/Settings/Clients/AddWards" children={<AddWard />} />
                    <Route path="/Settings/Categories" children={<Settings />} />
                    <Route path="/Settings/Ratings" children={<Settings />} />
                    <Route path="/Settings/Movies" children={<Settings/>} />
                </Switch>
                </div>
            </div>
            </Router>
        </div>
    )
}

export default React.memo(Settings);

