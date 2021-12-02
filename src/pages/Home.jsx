import { Row, Col } from 'antd';
import portada from '../assets/portadaHome.png';
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <section className="home">
      <Row align="left" justify="center" gutter={[8, 16]}>
        <Col xs={24} md={12}>
          <section className="container-home">
            <h2>Hola!</h2>
            <p className="text-white">Mi nombre es Andrea</p>
            <p className="text-green">Soy Frontend Developer</p>
            <div className="container-icons">
              <a className="redirect" href="https://www.linkedin.com/in/andrea-estefania-blanco-avila-b78036156/">
                <img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/>
              </a>
              <a className="redirect" href="https://github.com/Andu15">
                <img src="https://img.icons8.com/plasticine/50/000000/github.png"/>
              </a>
              <a className="redirect" href="mailto:estefania_8_3@hotmail.com?Subject=Interesado%20en%20conocerte">
                <img src="https://img.icons8.com/fluency/48/000000/new-post.png"/>
              </a>
              <a className="redirect" href="https://join.slack.com/t/nuevoespaciod-y9b5607/shared_invite/zt-znd2e7uo-XGRZcOM5Lyw4knVApTA6vw">
                <img src="https://img.icons8.com/doodle/48/000000/slack-new.png"/>
              </a> 
            </div>
          </section>
        </Col>

        <Col xs={24} md={12}>
          <img className="cover-page" src={portada}/>
        </Col>
      </Row>

      {/* <Row >
        <Col xs={24} align="middle" justify="center">
          <Icon icon="bi:arrow-up-circle-fill" color="#bce276" height="40" rotate={2}/>
        </Col>
      </Row> */}
    </section>
  )
}

export default Home;