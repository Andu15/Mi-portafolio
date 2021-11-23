import {Link } from "react-router-dom";
import { Row, Col } from 'antd';
import logo from '../assets/LOGO.png';

const Nav = () => {
  return (
    <nav>
      <Row align="middle" justify="center">
        <Col xs={6}>
          <div className="logo"></div>
        </Col>
        {/* <Col xs={4}></Col> */}
        <Col xs={4}>
          <Link to="/aboutme">ACERCA DE MI</Link>
        </Col>
        <Col xs={4}>
          <Link to="/projects">PROYECTOS</Link>
        </Col>
        <Col xs={4}>
          <Link to="/letstalk">HABLEMOS</Link>
        </Col>
      </Row>
    </nav>
  )
}

export default Nav;
