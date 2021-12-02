import { Card, Row, Col} from 'antd';
import {GithubOutlined} from '@ant-design/icons';
const { Meta } = Card;

const CardUnit = ({proyect}) => {

  return (
    <Col className="container-card" xs={24} sm={12} xl={8} xxl={6}>
      <Card
        style={{ marginTop: 16}}
        type="inner"
        title={proyect.title.toUpperCase()}
        extra={<a className="linkUrl" href={proyect.url}><GithubOutlined /> Ver proyecto</a>}
        className="cardItem"
        headStyle={{color: "#81C452", fontWeight: "bold"}}
        bodyStyle={{}}
      >
        <p>{proyect.description}</p>
        <Row className="container-stack" >
          <Col xs={10}><h4>Desarrollado en {proyect.dev}</h4></Col>
          <Col xs={14} align="right">
            {
              proyect.technologies.map((tech)=><img width="15" src={tech}/>)
            }
          </Col>
        </Row> 
      </Card>
    </Col>
  )
}

export default CardUnit;
