import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/image1.webp';
import img2 from '../images/image2.jpeg';
import img3 from '../images/image3.webp';
import img4 from '../images/image4.jpeg';
import img5 from '../images/image5.jpeg';
import img6 from '../images/image6.webp';
import React from 'react'
import ReactDOM from 'react-dom'

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          style = {{ width: 400, height: 655}}
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            Be Not Latte
            </h3>
          <h5>Don't be that guy that's always late to your class.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style = {{ width: 400, height: 655}}
          className="d-block w-100"
          src={img4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Reliable Friend</h3>
          <h5>
            Introducting, I'm Not Latte, your best companion through your tedious, arduous, and stressful life.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style = {{ width: 400, height: 655}}
          className="d-block w-100"
          src={img5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Never Latte</h3>
          <h5>
            Best price, closest store, you name it, we got it.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;