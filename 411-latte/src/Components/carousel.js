import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/image1.webp';
import img2 from '../images/image2.jpeg';
import img3 from '../images/image3.webp';
import img4 from '../images/image4.jpeg';
import img5 from '../images/image5.jpeg';
import img6 from '../images/image6.webp';
import img7 from '../images/img7.jpeg';
import React from 'react'
import ReactDOM from 'react-dom'
import img1a from '../images/img1.jpeg';

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          style = {{ width: 400, height: 655}}
          className="d-block w-100"
          src={img1a}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style = {{font: 'Sans-serif',color: 'white'}}>
            Be Not Latte
            </h3>
          <h5 style = {{ color: 'white',font: 'Sans-serif'}}>
        
            Don't be that guy that's always late to your class.
            </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style = {{ width: 400, height: 655,}}
          className="d-block w-100"
          src={img7}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Reliable Friend</h3>
          <h5 style = {{ color: 'white',font: 'Sans-serif',display:"inline"}}>
           Your best companion through your tedious, arduous, and stressful life.
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
          <h3 style = {{ color: 'white',font: 'Sans-serif'}}>Never Latte</h3>
          <h5 style = {{ color: 'black',font: 'Sans-serif'}}>
            Best price, closest store, you name it, we got it.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;