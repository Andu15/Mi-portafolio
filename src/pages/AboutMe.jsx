import { Row,
  Col,
  Image,
  Button,
} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import photo from "../assets/me.jpeg";


const AboutMe = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h2>Sobre mí</h2>
          <p>Mi nombre es Andrea, soy de Lima-Perú &#x1f1f5;&#x1f1ea; </p>
          <p>Inicié en el mundo de programación junto con Laboratoria durante un año pandemico, esta experiencia me permitió, en menos de 6 meses, aprender mientras desarrollaba proyectos</p>
          <p>Developer Stack</p>
          <div>
            <Row>
              <Col xs={12}>
                <p>Frontend</p>
                <p>Backend</p>
                <p>Gestión de proyectos</p>
                <p>Bases de datos</p>
                <p>Servicios en la nube</p>
              </Col>
              <Col xs={12}>
                <p align="left">
                  <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="html5" width="20" height="20"/>
                  <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="css3" width="20" height="20"/>
                  <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="javaScript" width="27" height="27"/>
                  <img src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg" alt="sass" width="20" height="20"/>
                  <img src="" alt="ant-design" width="20" height="20"/>
                  <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" width="20" height="20"/>

                </p>
                <p align="left">
                  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg" alt="npm" width="40" height="40"/>
                </p>
                <p align="left">
                  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/trello/trello-icon.svg" alt="git" width="40" height="40"/>
                </p>
                <p align="left">
                  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/>
                </p>
                <p align="left">
                  <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="netlify" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="github-pages" width="40" height="40"/>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12}>
          <Image
            width={200}
            src={photo}
          />
          <div>
          <a href="https://drive.google.com/uc?id=1D7fhxe1zhYuIu5KzztUpwc2xLnYT-cG0&export=download" download>
             <Button type="link" shape="round" icon={<DownloadOutlined />} >
              DESCARGAR CV
            </Button>
          </a>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AboutMe;
