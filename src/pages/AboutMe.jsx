import { Row,
  Col,
  Image,
  Button,
} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import photo from "../assets/me.jpeg";


const AboutMe = () => {
  return (
    <section className="container-aboutme">
      <Row>
        <Col xs={24} md={12}>
          <h2>Sobre mí</h2>
          <p className="content-description">Mi nombre es Andrea, soy de Lima-Perú &#x1f1f5;&#x1f1ea; </p>
          <p className="content-description">Inicié en el mundo de programación junto con 
            <span className="text-yellow"> Laboratoria </span>
          durante un año pandemico, esta experiencia me permitió, en menos de 6 meses, aprender mientras desarrollaba proyectos</p>
          <p className="badge-stack">Developer Stack</p>
          <div className="container-stack">
            <Row>
              <Col xs={10}>
                <p className="text-stack">Frontend</p>
                <p className="text-stack">Backend</p>
                <p className="text-stack">Gestión de proyectos</p>
                <p className="text-stack">Bases de datos</p>
                <p className="text-stack">Servicios en la nube</p>
              </Col>
              <Col xs={14}>
                <p align="right" className="img-stack">
                  <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="html5" width="20" height="20"/>
                  <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="css3" width="20" height="20"/>
                  <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="javaScript" width="27" height="27"/>
                  <img src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg" alt="sass" width="20" height="20"/>
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="ant-design" width="20" height="20"/>
                  <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" width="20" height="20"/>
                </p>
                <p align="right" className="img-stack">
                  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" width="20" height="20"/>
                  <img src="https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg" alt="npm" width="20" height="20"/>
                </p>
                <p align="right" className="img-stack">
                  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="20" height="20"/>
                  <img src="https://www.vectorlogo.zone/logos/trello/trello-icon.svg" alt="git" width="20" height="20"/>
                </p>
                <p align="right" className="img-stack">
                  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="20" height="20"/>
                </p>
                <p align="right" className="img-stack">
                  <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="20" height="20"/>
                  <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="netlify" width="20" height="20"/>
                  <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="github-pages" width="20" height="20"/>
                </p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col Col xs={24} md={12} >
          <div className="content-img" align="middle">
            <Image
              width={250}
              height={300}
              src={photo}
            />
          </div>
          <div className="content-btn-profile" align="middle">
            <a href="https://drive.google.com/uc?id=1D7fhxe1zhYuIu5KzztUpwc2xLnYT-cG0&export=download"  download >
              <Button type="link"  icon={<DownloadOutlined />} >
                DESCARGAR CV
              </Button>
            </a>
          </div>
        </Col>

      </Row>
    </section>
  )
}

export default AboutMe;
