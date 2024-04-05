import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import image1 from '../../images/team.jpg'
import image2 from '../../images/joinUsToday.jpeg'
import image3 from '../../images/connect.jpeg'

function Content() {
  return (
    <Container  style={{"margin":"1rem", "text-align":"center"}}>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row  style={{"padding":"20px"}}>
      <Col xs={6} md={4}>
          <h3>What we Do</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut viverra nulla, nec luctus tellus. Aenean luctus augue vel leo auctor, id semper tortor consectetur. Fusce orci elit, tincidunt vitae metus ut, eleifend convallis ligula. Pellentesque eros erat, commodo sed turpis eu, eleifend rutrum neque. Cras nec sagittis enim. Proin at quam diam. Sed laoreet velit viverra, interdum nulla vel, vehicula est. Maecenas eget quam ac sem lacinia sodales. Aliquam erat volutpat. Vestibulum fermentum mattis convallis.</p>
        <Button variant="outline-dark">Meet our Team</Button>
        </Col>
        <Col xs={12} md={8}>
        <Image src={image1} fluid />;
        </Col>
      </Row>
      <Row  style={{"padding":"20px"}}>
        <Col xs={12} md={8} >
        <Image src={image2} fluid />;
        </Col>
        <Col xs={6} md={4}>
          <h3>Join Us Today</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut viverra nulla, nec luctus tellus. Aenean luctus augue vel leo auctor, id semper tortor consectetur. Fusce orci elit, tincidunt vitae metus ut, eleifend convallis ligula. Pellentesque eros erat, commodo sed turpis eu, eleifend rutrum neque. Cras nec sagittis enim. Proin at quam diam. Sed laoreet velit viverra, interdum nulla vel, vehicula est. Maecenas eget quam ac sem lacinia sodales. Aliquam erat volutpat. Vestibulum fermentum mattis convallis.</p>
        <Button variant="outline-dark">Register</Button>
        </Col>
      </Row>
      <Row  style={{"padding":"20px"}}>
      <Col xs={6} md={4}>
          <h3>Meet and Greet</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut viverra nulla, nec luctus tellus. Aenean luctus augue vel leo auctor, id semper tortor consectetur. Fusce orci elit, tincidunt vitae metus ut, eleifend convallis ligula. Pellentesque eros erat, commodo sed turpis eu, eleifend rutrum neque. Cras nec sagittis enim. Proin at quam diam. Sed laoreet velit viverra, interdum nulla vel, vehicula est. Maecenas eget quam ac sem lacinia sodales. Aliquam erat volutpat. Vestibulum fermentum mattis convallis.</p>
        <Button variant="outline-dark">Connect</Button>
        </Col>
        <Col xs={12} md={8}>
        <Image src={image3} fluid />;
        </Col>
      
      </Row>
    </Container>
  );
}

export default Content;