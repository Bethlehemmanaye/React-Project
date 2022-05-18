import React from 'react'
import "./Home.css";
import Product from './Product';
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import ReactCardFlip from 'react-card-flip';

function Home() {

    // const [isFlipped, setIsFlipped] = useState(false);

    // const handleClick = ()=>{
    //   setIsFlipped(!isFlipped)
    // }


    const particlesInit = async (main) => {
        console.log(main);
    
        // await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
//  background: {color: {value: "#90e4a3",},},
    return (
    <div className="home">
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{background: {color: {value: "#90e4a3",},},
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      
      <div className="home__container">
    
     
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                alt=""
                />
                
                <div className="home__row">
                
                    <Product
                    id="12321341"
                    title="Acer Chromebook Spin 311 Convertible Laptop,
                    Intel Celeron N4020, 11.6 HD Touch, 4GB LPDDR4, 32GB eMMC, Gig
                    abit Wi-Fi 5, Blutooth 5.0"
                    price={334.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Uqi+l3EiL.jpg"
                    rating={4}
                    />
                    <Product
                    id="49538094"
                    title="Matein Travel Laptop Backpack, Business Anti Theft Slim
                    Durable Laptops Backpack wiith USB Charging Port, Water Resistant
                    College School Computer Bag Gifts for Men & Women Fits 15.6 Inch Notebook,
                    Gray"
                    price={56.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Rw7jmy1LL.jpg"
              />
                    
                </div>
                <div className="home__row">
                <Product
                 id="23445930"
                title="Logitech BRIO Ultra HD Webcam for Video Conferencing,
                Recording, and Streaming - Black"
                price={167.66}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/31HtmS2FyVL.jpg"
                />
                <Product
                id="23893300"
                title="Hello am betty! Google Wifi - AC1200 - Mesh WiFi System - Wifi Router 
                - 4500 Sq Ft Coverage - 3 pack"
                price={83.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/21i+z3+0M5L.jpg"
                />
                <Product
                id="8943335"
                title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox 
                - 1-Year Rescue Service (STGX2000400)"
                price={36.29}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"/>  
                </div>
                <div className="home__row">
                <Product
                id="893930"
                title="Ankle Support Brace, Breathable Neoprene Sleeve, Adjustable Wrap!"
                price={12.95}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41bln23bzKL.jpg"
                />
                              
                </div>
            </div>    
        </div>
    );
}

export default Home

