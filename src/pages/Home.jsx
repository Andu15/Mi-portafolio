import { Row, Col } from 'antd';
import portada from '../assets/portadaHome.png';
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <>
      <Row align="middle" justify="center">
        <Col xs={12}>
          <section className="container-home">
            <h2>Hola!</h2>
            <p className="text-white">Mi nombre es Andrea</p>
            <p className="text-green">Soy Frontend Developer</p>
            <div className="container-icons">
              {/* <a className="redirect" href="https://www.linkedin.com/in/andrea-estefania-blanco-avila-b78036156/"> */}
                <img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/>
              {/* </a> */}
              <img src="https://img.icons8.com/plasticine/50/000000/github.png"/>
              <img src="https://img.icons8.com/fluency/48/000000/new-post.png"/>
              <img src="https://img.icons8.com/doodle/48/000000/slack-new.png"/>
            </div>
          </section>
        </Col>
        <Col xs={12}>
          <img className="cover-page" src={portada}/>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col xs={24} >
          <Icon icon="bi:arrow-up-circle-fill" color="#bce276" height="40" rotate={2}/>
        </Col>
      </Row>
    </>
  )
}

export default Home;