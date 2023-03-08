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

{
  /*
 <div class="container">
<a href="./links/pest.html">
  <div class="card">
    <div class="imgBx">
      <img src="./img/pest/pest1_cropped.png" />
    </div>
    <div class="content">
      <h2>Pest Control</h2>
      <p>Android App that was made for a local pest control to help them manage
      their dialy appointments</p>
    </div>
  </div>
</a>
<div/> 
*/
}
