import { Card } from 'antd';

const CardUnit = () => {
  return (
    <div>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Inner Card title"
        extra={<a href="#">More</a>}
      >
        Inner Card content
      </Card>
    </div>
  )
}

export default CardUnit;
