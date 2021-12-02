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
    <div className="container-projects">
      <Row gutter={[0, 4]} >
        {
          cardItems ? cardItems : <Spin />
        }
      </Row>
      <Row align="middle">
        <Col xs={0} sm={12} md={12} >
          <h2 className="text-portafolio">PORTAFOLIO</h2>
          <a href={data.profile} className="github-portafolio"><img src="https://img.icons8.com/cute-clipart/64/000000/github.png"/></a>
        </Col>
        <Col xs={0} sm={12} md={12} >
          <img className="cover-page spacing" src={logo}/>
        </Col>
      </Row>
    </div>
  )
}

export default Projects;