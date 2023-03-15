import { Col } from "react-bootstrap"

const MobileCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="card">
        <div className="imgBox">
          <img src={imgUrl} />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  )
}
export default MobileCard
