import React from 'react';
import { Nav, Row, Col} from 'react-bootstrap';
import {IoIosPeople, IoMdSettings} from 'react-icons/io';
import {FaRegCreditCard, FaRegPlayCircle} from 'react-icons/fa';
import {GoRepo} from 'react-icons/go';
import {
    Link
  } from "react-router-dom";

function Home(props) {
    return (
        <Row className="router-elements mx-5 mt-5 text-center">
          <Col sm={12}>
            <Nav className="" activeKey="/">
              <Col xs lg="3" className="mt-5">
                <Nav.Item>
                  <Link to="/Patients"><IoIosPeople className="board-item-icons"/><h3>Patients</h3></Link>
                </Nav.Item>
              </Col>
              <Col xs lg="3" className="mt-5">
                <Nav.Item>
                  <Link to="/Media"><FaRegPlayCircle className="board-item-icons"/><h3>Media</h3></Link>
                </Nav.Item>
              </Col>
              <Col xs lg="3" className="mt-5">
                <Nav.Item>
                  <Link to="/Cashier"><FaRegCreditCard className="board-item-icons"/><h3>Cashier</h3></Link>
                </Nav.Item>
                </Col>
                <Col xs lg="3" className="mt-5">
                <Nav.Item>
                  <Link to="/Reports"><GoRepo className="board-item-icons"/><h3>Reports</h3></Link>
                </Nav.Item>
                </Col>
                <Col xs lg="3" className="mt-5">
                <Nav.Item>
                  <Link to="/Settings"><IoMdSettings className="board-item-icons"/><h3>Settings</h3></Link>
                </Nav.Item>
                </Col>
            </Nav>
          </Col>
        </Row>
    )
}

export default React.memo(Home);
