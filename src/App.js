import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../src/img/logo.png"
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../src/img/brand-1.png'
import brand2 from '../src/img/brand-2.png'
import brand3 from '../src/img/brand-3.png'
import brand4 from '../src/img/brand-4.png'
import brand5 from '../src/img/brand-5.png'
import brand6 from '../src/img/brand-6.png'
import brand7 from '../src/img/brand-7.png'
import brand8 from '../src/img/brand-8.png'
import brand9 from '../src/img/brand-9.png'
import brand10 from '../src/img/brand-10.png'
import brand11 from '../src/img/brand-11.png'
import brand12 from '../src/img/brand-12.png'
import brand13 from '../src/img/brand-13.png'
import brand14 from '../src/img/brand-14.png'
import brand15 from '../src/img/brand-15.png'
import brand16 from '../src/img/brand-16.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import product6 from '../src/img/product-6.jpeg'
import product7 from '../src/img/product-7.jpeg'
import product8 from '../src/img/product-8.jpeg'
import product9 from '../src/img/product-9.jpeg'
import product10 from '../src/img/product-10.jpeg'
import product11 from '../src/img/product-11.jpeg'
import product12 from '../src/img/product-12.jpeg'
import product13 from '../src/img/product-13.jpeg'
import  Button  from 'react-bootstrap/button';


function App() {
  return (
    <><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">About us</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Contacts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Store Location</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Track Order</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
        </ul>
        <span className="navbar-text">
          Compare:2  Currency:RS  Language:EN
        </span>
      </div>
    </div>
  </nav>
  <div>
  <img className= "logo" src={logo}/>
  <select style={{background: "yellow"}}>
    <option>Select vechile</option>
  </select>
  <input type="text" placeholder="Search.." name="search"></input>
  </div>
  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Megamenu</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Shop</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Account</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Buy theme</a></li>
        <li className="nav-item end">
        <a className="nav-link" href="#">Call:8925297807</a>
      
      </li>
    </ul>
  </div>
</nav>
  </div>
    <Carousel className="container">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/slide-1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container grid-container">
      <div><img src={brand1}/><p>AIMPARTS</p></div>
      <div><img src={brand2}/>WINDENGINE</div>
      <div><img src={brand3}/>TURBOELECTRIC</div>
      <div><img src={brand4}/>STARONE</div>
      <div><img src={brand5}/>BRANDIX</div>
      <div><img src={brand6}/>ASS-BRAND</div>
      <div><img src={brand7}/>GREATCIRCLE</div>
      <div><img src={brand8}/>JUSTBOMB</div>
      <div><img src={brand9}/>FASTWHEELS</div>
      <div><img src={brand10}/>STROYKA-X</div>
      <div><img src={brand11}/>MISSION-51</div>
      <div><img src={brand12}/>FUELCORP</div>
      <div><img src={brand13}/>REDGATE</div>
      <div><img src={brand14}/>BLOCKS</div>
      <div><img src={brand15}/>BLACKBOX</div>
      <div><img src={brand16}/>SQUAREGARDENS</div>
      </div>
      
    <CardGroup className='container'>
      <Card>
        <Card.Img variant="top" src="../img/product-1.jpeg" />
        <Card.Body>
          <Card.Title>Grossy grey aluminium wheel</Card.Title>
          <Card.Text>
          <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../img/product-2.jpeg" />
        <Card.Body>
          <Card.Title>Twin extract type from band</Card.Title>
          <Card.Text>
          <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../img/product-3.jpeg" />
        <Card.Body>
          <Card.Title>Motor oil level</Card.Title>
          <Card.Text>
          <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../img/product-4.jpeg" />
        <Card.Body>
          <Card.Title>Brandex indi brand</Card.Title>
          <Card.Text>
          <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../img/product-5.jpeg" />
        <Card.Body>
          <Card.Title>Brandex clutch brand</Card.Title>
          <Card.Text>
          <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>

    <CardGroup className='container gap'>
      <Card>
        <Card.Img variant="top" src="../img/banner1.jpeg" />
      </Card>
      <Card>
        <Card.Img variant="top" src="../img/banner2.jpeg" />
      </Card>
    </CardGroup>
    

    <Container>
    <Row>
        <Col xs={6} md={4}>
          <h5>Top Rated products</h5>
          <img src={product6} className='product'></img>
          <span>Fanastic tweleve stoke engine</span>
          <li><span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span></li>
        </Col>
        <Col xs={6} md={4}>
          <h5>Special offers</h5>
        <img src={product7} className='product'></img>
        <span>Brandix four wheels</span>
        <li><span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></li>
        </Col>
        <Col xs={6} md={4}>
          <h5>Bestsellers</h5>
        <img src={product8} className='product'></img>
        <span>High power engine</span>
        <li>
        <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></li>
        </Col>
      </Row>

      
      <Row>
        <Col xs={6} md={4}>
        <img src={product9} className='product'></img>
        <span>Four stoke engine</span>
        <li>
        <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span></li>
        </Col>
        <Col xs={6} md={4}>
        <img src={product10} className='product'></img>
        <span>Set of car floor matts</span>
        <li>
        <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></li>
        </Col>
        <Col xs={6} md={4}>
        <img src={product11} className='product'></img>
        <span>Talllights</span>
        <li>
        <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></li>
        </Col>
      </Row>

      
      <Row>
        <Col xs={6} md={4}>
        <img src={product12} className='product'></img>
        <span>Brandix engine block</span>
        <li>
        <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></li>
        </Col>
        <Col xs={6} md={4}>
        <img src={product13} className='product'></img>
        <span>Brandix dics</span>
        <li>
        <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></li>
        </Col>
        <Col xs={6} md={4}>
        <img src={product6} className='product'></img>
        <span>Brandix four wheels</span>
        <li>
        <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></li>
        </Col>
      </Row>
    </Container>
    <card className="Cards">
    <div className="container grid-container2">
      <div><p>Free shipping</p></div>
      <div><p>24*7</p></div>
      <div>100% safety</div>
      <div>Hot offers</div>
      </div>
      </card>

      <div className=" grid-container2 final">
      <div><h5>Contact us</h5>
      <p>Hi, we are always open for suggestions and cooperations <li>contact us in one of the ways below:</li>
      Phone number</p><ui>8932457865</ui><li>Our Location<p>102, Athipalayam rd,ramakrishnapuram, Coimbatore</p></li></div>
      <div><h5>Information</h5><li>About us</li><li>Delivery information</li><li>Pravicy policy</li><li>Brands</li><li>Contact us</li></div>
      <div><h5>My account</h5><li>Store Location</li><li>Order history</li><li>Wish list</li><li>Newsletter</li><li>Special offers</li></div>
      <div><h5>Newsletter <p>Enter your email address below to subscribe <ui>and keep up to date with discounts and special offers</ui></p></h5>
      <p>Enter you</p>
          <input type="text" className="form-control"></input>
          <Button variant="primary">Subscribe</Button>
      </div>
      </div>
  </>
  );
}


export default App;
