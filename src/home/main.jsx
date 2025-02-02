import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/img-hero1.jpg'
import image2 from '../assets/images/img-hero2.jpg'
import image3 from '../assets/images/img-hero3.jpg'
import UserService from '../service/userService';

var heroData = [
    {
      id: 1,
      image: image1,
      title: 'The perfect design for your website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: image2,
      title: 'Start Your Future Financial Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: image3,
      title: 'Enjoy the Difference',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.twitter.com'
    }
  ]
  

const AppHero = () => {

  const isAuthenticated = UserService.isAuthenticated();

    return (
      
        <section id='home' className='hero-block'>
                  <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    {!isAuthenticated && <a className="btn btn-primary" href='/login'>Get Start <i className="fas fa-chevron-right"></i></a>}
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
        </section>
    );

};

export default AppHero;