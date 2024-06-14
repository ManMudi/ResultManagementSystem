import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import image2 from '../assets/images/img2.jpg'
import image3 from '../assets/images/img3.jpg'
import image4 from '../assets/images/img4.jpg'
import image5 from '../assets/images/img5.jpg'
import image6 from '../assets/images/img6.jpg'
import image7 from '../assets/images/img7.jpg'
import image8 from '../assets/images/img8.jpg'
import image9 from '../assets/images/img9.jpg'


const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: image2,
    title: 'Lonely Path',
    subtitle: 'Web Design'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: image3,
    title: 'Photographer Girl',
    subtitle: 'Branding'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: image4,
    title: 'The Difference',
    subtitle: 'Web Design'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: image5,
    title: 'Nature Patterns',
    subtitle: 'Branding'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: image6,
    title: 'The Difference',
    subtitle: 'Photography'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: image7,
    title: 'Winter Sonata',
    subtitle: 'Web Design'
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: image8,
    title: 'Lonely Path',
    subtitle: 'Branding'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: image9,
    title: 'Appreciation',
    subtitle: 'Photography'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: image9,
    title: 'Happy Days',
    subtitle: 'Web Design'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


const Work = () => {
    return (
        <section id="work" className="block works-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our works</h2>
            <div className="subtitle">our awesome works</div>
          </div>
          <Row className='portfoliolist'>
            {
              worksData.map(works => {
                return (
                  <Col sm={4} key={works.id}>
                    <div className='portfolio-wrapper'>
                      <a href={works.link}>
                        <Image src={works.image} />
                        <div className='label text-center'>
                          <h3>{works.title}</h3>
                          <p>{works.subtitle}</p>
                        </div>
                      </a>
                    </div>
                  </Col>
                );
              })
            }
          </Row>
          <Pagination>{items}</Pagination>
        </Container>  
      </section>
  
    );
};

export default Work;