import { Row, Col } from 'antd';
import logo from '../assets/portadaHome.png';
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h2>Hola!</h2>
          <p>Mi nombre es Andrea</p>
          <p>Soy Frontend Developer</p>
          <div>
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/>
            <img src="https://img.icons8.com/plasticine/50/000000/github.png"/>
            <img src="https://img.icons8.com/fluency/48/000000/new-post.png"/>
            <img src="https://img.icons8.com/doodle/48/000000/slack-new.png"/>
          </div>
        </Col>
        <Col xs={12}>
          <img src={logo}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Icon icon="bi:arrow-up-circle-fill" color="#bce276" rotate={2} />
        </Col>
      </Row>
    </>
  )
}

export default Home;