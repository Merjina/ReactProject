import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './About.css';
import about from './about.jpg';





const Inspiration = () => {
  return (
    <Container className="about-us-section my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img
            src={about}
            alt="About Us"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>Welcome to Market Nest - Your One-Stop Online Fashion Destination! 🛍️</h2>
          <p> <br />
            At <strong>Market Nest</strong>, we aim to provide an exceptional online shopping experience by offering a wide range of high-quality products at competitive prices. Our platform is designed to make shopping easy, convenient, and enjoyable for all our customers.
          </p>
          <p>
            From the latest fashion trends to the most innovative gadgets, our collection is curated with you in mind. We are committed to delivering top-notch customer service and fast, reliable shipping.
          </p>
          
        </Col>
      </Row>

      <h2 className="text-center mb-4">Our Story</h2>
      <Row className="mb-5">
        <Col md={12}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Text>
              Founded in 2024, Market Nest started with a simple idea: to make fashion accessible, affordable, and enjoyable for everyone. 
              We began as a small online store with a passion for fashion and a vision to revolutionize the shopping experience.
               Over the years, we have grown into a vibrant online marketplace, serving customers from all over the country.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="text-center mb-4">What Makes Us Different?..</h2>
      <Row className="mb-5">
        <Col md={12}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Text>
             
             <ul>
                  <li>Quality You Can Trust: We handpick every product, ensuring only the finest quality items make it to our catalog.</li>
                  <li>Affordable Fashion: We believe style shouldn't come with a hefty price tag. That’s why we offer trendy, high-quality products at competitive prices.</li>
                  <li>Customer-Centric Approach: Your satisfaction is our top priority. We listen to your feedback and continuously improve our services to meet your needs.</li>
                  </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <h2 className="text-center mb-4">Our Mission</h2>
      <Row className="mb-5">
        <Col md={12}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Text>
              Our mission is simple: To bring style and convenience to your fingertips.
               We aim to make online shopping a delightful experience by offering a wide range of products,
                secure payment options, and fast delivery.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
 
     

      <h2 className="text-center mb-4">Join Our Community</h2>
      <Row className="mb-5">
        <Col md={12}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Text>
                
                We love connecting with our customers! Follow us on Instagram, Facebook,
                and Twitter to stay updated with the latest trends, exclusive offers, and style inspiration. 
                Don’t forget to subscribe to our newsletter for exciting deals and updates straight to your inbox!
            <br /><br /><br />
                Thank you for choosing Market Nest. We look forward to serving you and making your shopping experience unforgettable.
<br /><br /><br />
                Happy Shopping! 🛒✨
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default Inspiration;