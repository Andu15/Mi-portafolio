import FormTemplate from '../components/FormTemplate';
import { Row, Col } from 'antd';

const Letstalk = () => {
  return (
    <section className="letstalk">
      <Row>
        <Col xs={24}>
          <h2 className="text-talk">Hablemos</h2>
          <p className="text-talk-description">Si deseas comunicarte conmigo, no dudes en escribirme para ponernos en contacto</p>
          <FormTemplate />
        </Col>
      </Row>
    </section>
  )
}

export default Letstalk;