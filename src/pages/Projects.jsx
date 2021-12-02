import { Row, Col, Spin } from 'antd';
import CardUnit from "../components/CardUnit";
import data from '../dataProjects.json';
import logo from "../assets/logoProyect.png"

const Projects = () => {

  const dataBase = data.repositories;
  const cardItems = dataBase && dataBase.map((proyect) => {
    return(<CardUnit key={proyect.id} proyect={proyect}/>)
  })

  return (
    <div>
      <Row gutter={[0, 4]} >
        {
          cardItems ? cardItems : <Spin />
        }
      </Row>
      <Row align="middle">
        <Col xs={0} sm={12} md={12} >
          <h2 className="text-portafolio">PORTAFOLIO</h2>
        </Col>
        <Col xs={0} sm={12} md={12} >
          <img className="cover-page spacing" src={logo}/>
        </Col>
      </Row>
    </div>
  )
}

export default Projects;