import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
function Featured() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="featured d-block-inline w-100 h-25"
        src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Nimish Agarwal</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="featured d-block-inline w-100 h-25"
src={image2}          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Aparna Raj</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="featured d-block-inline w-100 h-25"
src={image3}         alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Jasmine Bajaj</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Featured;