import {Link } from "react-router-dom";
import { Row, Col } from 'antd';
import logo from '../assets/logoinitial.png';

const Nav = () => {
  return (
    <header>
      <Row align="middle" justify="center">
        <Col xs={8} md={6} lg={4}>
          <img className="logo" src={logo} alt ="logo"/>
        </Col>
        <Col xs={16} md={18} lg={20}>
          <nav class="menu">
            <Link to="/aboutme">ACERCA DE MI</Link>
            <Link to="/projects">PROYECTOS</Link>
            <Link to="/letstalk">HABLEMOS</Link>
          </nav>
        </Col>
      </Row>
    </header>
  )
}

export default Nav;
