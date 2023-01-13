import React, {useEffect} from 'react';
import './App.css';
import gif from './assets/home.gif';
import about from './assets/about.png';
import About2 from "./assets/about2.png"
import edu from './assets/edu.jpg';
import devfolio from './assets/Devfolio_Logo-Colored.png';
import polygon from './assets/Polygon_Logo-Colored@2x.png'
import solana from './assets/Solana-Colored.png';
import whitetext from './assets/Filecoin Coloured White Text.png';
import replit from './assets/Replit-light-background.png';
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
/*=============== SCROLL REVEAL ANIMATION ===============*/

function App() {
        useEffect(() => {
          const script = document.createElement('script');
          script.src = 'https://apply.devfolio.co/v2/sdk.js';
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
          return () => {
            document.body.removeChild(script);
          }
        }, []);
  return ( 
     <>
     <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/large-purple-square_1f7ea.png" style={{width: '22px'}} /> BIT N BUILD
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link" >Home</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">About</a>
              </li>
              <li className="nav__item">
                <a href="#tracks" className="nav__link">Tracks</a>
              </li>
              <li className="nav__item">
                <a href="#faqs" className="nav__link">FAQs</a>
              </li>
              <li className="nav__item">
                <a href="#sponsors" className="nav__link">Sponsors</a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">Contact Us</a>
              </li>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line" />
            </div>
          </div>
          <div className="nav__btns">
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line" />
            </div>
          </div>
        </nav>
      </header>
      <main className="main">
        <section className="home" id="home">
          <div className="home__container container grid">
            <img img src={gif} alt="" className="home__img" />
            <div className="home__data">
              <h1 className="home__title">
                Prize pool of INR 1,20,000+
              </h1>
          
            {/* <a href="https://bit-n-build.devfolio.co/">
             <div id='ppbtn' className="apply-button btnhack" data-hackathon-slug="bit-n-build" data-button-theme="dark">
             </div>
            </a> */}
            <div 
              class="apply-button" 
              data-hackathon-slug="bit-n-build" 
              data-button-theme="dark">                
            </div>
                         
            </div>
          </div>
        </section>
        <section className="about section container" id="about">
          <div className="about__container grid">
          <img src="../home.gif" alt="" class="home__img"/>
            <img src={about} alt="" className="about__img" />
            <div className="about__data">
              <h2 className="section__title about__title">
                About  Us
              </h2>
              <p className="about__description">
                Bit N Build is a 24 hour hackathon organized by Google Developer Students Club with endless creativity. Students are challenged to further what they know by creating projects following their passions. Spending time on projects outside the classroom is the best way to not only learn what you love, but also find new interests. In a universe of infinite possibilities, you have 24 hours to innovate and show us what you got!
              </p>
              
            </div> --&gt;
            <a href="#" className="button--link button--flex">
              TRACKS <i className="ri-arrow-right-down-line button__icon" />
            </a> 
          </div>
        </section>
        <section className="steps section container">
          <div className="steps__bg">
            <h2 className="section__title-center steps__title">
              Agenda: 28th January
            </h2>
            <div className="steps__container grid">
              <div className="steps__card">
                <h3 className="steps__card-title">11:00-12:30</h3>
                <p className="steps__card-description">
                  Inauguration
                </p>
              </div>
              <div className="steps__card">
                <h3 className="steps__card-title">14:00</h3>
                <p className="steps__card-description">
                  Hackathon Begins!
                </p>
              </div> 
              <div className="steps__card">
                <h3 className="steps__card-title">18:00-20:00</h3>
                <p className="steps__card-description">
                  Mentoring Round
                </p>
              </div> 
              <div className="steps__card">
                <h3 className="steps__card-title">20:00-21:30</h3>
                <p className="steps__card-description">
                  Free Dinner. Yay!
                </p>
              </div> 
            </div>
          </div>
        </section>
        <section className="steps section container">
          <div className="steps__bg">
            <h2 className="section__title-center steps__title">
              Agenda: 29th January
            </h2>
            <div className="steps__container grid">
              <div className="steps__card">
                <h3 className="steps__card-title">07:30-08:30</h3>
                <p className="steps__card-description">
                  Breakfast is on us!
                </p>
              </div>
              <div className="steps__card">
                <h3 className="steps__card-title">09:00-11:00</h3>
                <p className="steps__card-description">
                  Judging Round 1
                </p></div>
              <div className="steps__card">
                <h3 className="steps__card-title">12:30-13:30</h3>
                <p className="steps__card-description">
                  Lunch, it's free ofcourse!
                </p>
              </div> 
              <div className="steps__card">
                <h3 className="steps__card-title">14:00-16:00</h3>
                <p className="steps__card-description">
                  Final Judging Round
                </p>
              </div> 
              <div className="steps__card">
                <h3 className="steps__card-title">16:30</h3>
                <p className="steps__card-description">
                  Finally! Winners are announced.
                </p>
              </div> 
            </div>
          </div>
        </section>
        <section className="product section container" id="tracks">
          <h2 className="section__title-center">
            TRACKS
          </h2>
          <div className="product__container grid">
            <article className="product__card">
              <div className="product__circle1" />
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/globe-with-meridians_1f310.png" alt="" className="product__img" />
              <h3 className="product__title" style={{fontSize: '1.5rem'}}>Web Dev</h3>
            </article>
            <article className="product__card">
              <div className="product__circle2" />
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/mobile-phone_1f4f1.png" alt="" className="product__img" />
              <h3 className="product__title" style={{fontSize: '1.5rem'}}>App Dev</h3>
            </article>
            <article className="product__card">
              <div className="product__circle3" />
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/alien-monster_1f47e.png" alt="" className="product__img" />
              <h3 className="product__title" style={{fontSize: '1.5rem'}}>Blockchain</h3>
            </article>
            <article className="product__card">
              <div className="product__circle4" />
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/robot_1f916.png" alt="" className="product__img" />
              <h3 className="product__title" style={{fontSize: '1.5rem'}}>AI</h3>
            </article>
          </div>
        </section>
        <section className="steps section container" style={{marginTop: '-5rem'}}>
          <div className="steps__bg" style={{backgroundColor: '#00000000'}}>
            <h2 className="section__title-center steps__title" style={{color: '#000000'}}>
              PRIZES
            </h2>
            <div className="steps__container grid">
              <div className="steps__card" style={{backgroundColor: '#EA4335', textAlign: 'center'}}>
                <div className="steps__card-number">INR 30,000</div>
                <h3 className="steps__card-title" style={{fontSize: '1.5rem', textAlign: 'left'}}>Web Dev</h3>
              </div>
              <div className="steps__card" style={{backgroundColor: '#4285F4', textAlign: 'center'}}>
                <div className="steps__card-number">INR 30,000</div>
                <h3 className="steps__card-title" style={{fontSize: '1.5rem', textAlign: 'left'}}>App Dev</h3>
              </div>
              <div className="steps__card" style={{backgroundColor: '#FBBC04', textAlign: 'center'}}>
                <div className="steps__card-number">INR 30,000</div>
                <h3 className="steps__card-title" style={{fontSize: '1.5rem', textAlign: 'left'}}>Blockchain</h3>
              </div>
              <div className="steps__card" style={{backgroundColor: '#0F9D58', textAlign: 'center'}}>
                <div className="steps__card-number">INR 30,000</div>
                <h3 className="steps__card-title" style={{fontSize: '1.5rem', textAlign: 'left'}}>AI</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="about section container" id="about">
          <div className="about__container grid">
            <img src={About2} alt="" className="about__img2" />
            <div className="about__data">
              <h2 className="section__title about__title">
                Let's Build!
              </h2>
              <p className="about__description">
                Google Developer Students Club of Usha Mittal Institute of Technology, Fr. Conceicao Rodrigues College of Engineering and K.J. Somaiya Institute of Technology are collaborating together to bring you the first ever flagship hackathon.  
              </p>
              <div className="about__details">
                <p className="about__details-description">
                  <i className="ri-map-pin-2-fill about__details-icon" />
                  K.J. Somaiya Institute Of Technology, Sion.
                </p>
                <p className="about__details-description">
                  <i className="ri-timer-fill about__details-icon" />
                  24 Hour Offline
                </p>
                <p className="about__details-description">
                  <i className="ri-calendar-fill about__details-icon" />
                  28-29 January 2023
                </p>
              </div>
              <a href="#" className="button--link button--flex">
                Register <i className="ri-arrow-right-down-line button__icon" />
              </a> 
            </div>
          </div>
        </section>
        <section className="questions section" id="faqs" style={{marginTop: '5rem'}}>
          <h2 className="section__title-center questions__title container" style={{color: '#ffffff'}}>
            Some common questions <br /> were often asked
          </h2>
          <div className="questions__container container grid">
            <div className="questions__group">
              <div className="questions__item">
                <header className="questions__header">
                  <i className="ri-add-line questions__icon" />
                  <h3 className="questions__item-title">
                    What is a hackathon
                  </h3>
                </header>
                <div className="questions__content">
                  <p className="questions__description" style={{color: '#000000'}}>
                    Hacking is a creative way to solve a problem, and hacka\
                    thons are innovation marathons where students from around the country who have an interest in technology come together to learn, build &amp; share their creations over the course of a weekend in a relaxed and welcoming atmosphere.
                  </p>
                </div>
              </div>
              <div className="questions__item">
                <header className="questions__header">
                  <i className="ri-add-line questions__icon" />
                  <h3 className="questions__item-title">
                    How many people per team?
                  </h3>
                </header>
                <div className="questions__content">
                  <p className="questions__description">
                    Teams can range anywhere from 1-4 people. If you do not have a team before the event, worry not - you can find one on our handy Discord server.
                  </p>
                </div>
              </div>
              <div className="questions__item">
                <header className="questions__header">
                  <i className="ri-add-line questions__icon" />
                  <h3 className="questions__item-title">
                    What does it cost?
                  </h3>
                </header>
                <div className="questions__content">
                  <p className="questions__description">
                    Bit N Build is free for all hackers! We provide our hackers with tools, swags, and prizes without any cost through our generous sponsors.
                  </p>
                </div>
              </div>
              <div className="questions__item">
                <header className="questions__header">
                  <i className="ri-add-line questions__icon" />
                  <h3 className="questions__item-title">
                    Who can participate? Are There any prerequisites or required skills?
                  </h3>
                </header>
                <div className="questions__content">
                  <p className="questions__description">
                    Anyone is welcome to participate in this event. While experience coding and programming is a huge plus, teams will also need people with strong presentation skills and brilliant ideas.
                  </p>
                </div>
              </div>
              <div className="questions__item">
                <header className="questions__header">
                  <i className="ri-add-line questions__icon" />
                  <h3 className="questions__item-title">
                    Will there be food?
                  </h3>
                </header>
                <div className="questions__content">
                  <p className="questions__description">
                    Yes, delicious food and beverages will be provided throughout the event, courtesy of *sponsor name*.
                  </p>
                </div>
              </div>
            </div>
            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon" />
                <h3 className="questions__item-title">
                  Who will be judging?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  The judge panel composition will be announced closer to the date of the hackathon.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="product section container" id="sponsors">
          <h2 className="section__title-center">
            SPONSORS
          </h2>
          <div className="product__container grid" id="sponsorcontainer">
            <article className="product__card">
              <h3 className="product__title" style={{fontSize: '1.3rem'}}>Title Sponsor</h3>
              <br />
              <br />
              <br />
              <img src={edu} style={{scale: '2.2'}} alt="" className="product__img" />
            </article>
            <br />
            <article className="product__card">
              <h3 className="product__title" style={{fontSize: '1.3rem'}}>Platinum Sponsor</h3>
              <br />
              <br />
              <br />
              <img src={devfolio} style={{scale: '2.2'}} alt="" className="product__img" />
            </article>
            <br />
            <article className="product__card">
              <img src={polygon} style={{scale: '2.2'}} alt="" className="product__img" />
              <br />
            </article>
            <br />
            <article className="product__card">
              <h3 className="product__title" style={{fontSize: '1.3rem'}}>Silver Sponsor</h3>
              <br />
              <br />
              <br />
              <img src={solana} style={{scale: '2.2'}} alt="" className="product__img" />
            </article>
            <br />
            <article className="product__card">
              <img src={whitetext} style={{scale: '2.2'}} alt="" className="product__img" />
            </article>
            <br />
            <article className="product__card">
              <img src={replit} style={{scale: '2.2'}} alt="" className="product__img" />
              <br />
            </article>
          </div>
        </section>
        <section className="contact section container" id="contact">                
          <div className="contact__container grid">
            <div className="contact__box">
              <h2 className="section__title">
                Reach out to us today <br /> via any of the given <br /> information
              </h2>
              <div className="contact__data">
                <div className="contact__information">
                  <h3 className="contact__subtitle">Call us for instant support</h3>
                  <span className="contact__description">
                    <i className="ri-phone-line contact__icon" />
                    +9326007088
                  </span>
                </div>
                <div className="contact__information">
                  <h3 className="contact__subtitle">Write us by mail</h3>
                  <span className="contact__description">
                    <i className="ri-mail-line contact__icon" />
                    bitnbuild@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <form action className="contact__form">
              <div className="contact__inputs">
                <div className="contact__content">
                  <input type="email" placeholder=" " className="contact__input" />
                  <label htmlFor className="contact__label">Email</label>
                </div>
                <div className="contact__content">
                  <input type="text" placeholder=" " className="contact__input" />
                  <label htmlFor className="contact__label">Subject</label>
                </div>
                <div className="contact__content contact__area">
                  <textarea name="message" placeholder=" " className="contact__input" defaultValue={""} />                              
                  <label htmlFor className="contact__label">Message</label>
                </div>
              </div>
              <button className="button button--flex">
                Send Message
                <i className="ri-arrow-right-up-line button__icon" />
              </button>
            </form>
          </div>
        </section>
      </main>
      <div>
        <footer className="footer section">
          <div className="footer__container container grid">
            <div className="footer__content">
              <a href="#" className="footer__logo">
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/large-purple-square_1f7ea.png" style={{width: '20px'}} /> BIT N BUILD
              </a>
              <h3 className="footer__title">
                If you would like to sponsor this hackathon, please reach out to us at
              </h3>
              <div className="footer__subscribe">
                <input type="email" placeholder="bitnbuild@gmail.com" className="footer__input" />
                <button className="button button--flex footer__button">
                  Sponsor
                  <i className="ri-arrow-right-up-line button__icon" />
                </button>
              </div>
            </div>
            <div className="footer__content">
              <h3 className="footer__title">Our Address</h3>
              <ul className="footer__data">
                <li className="footer__information">Mumbai</li>
              </ul>
            </div>
            <div className="footer__content">
              <h3 className="footer__title">Contact Us</h3>
              <ul className="footer__data">
                <li className="footer__information">+999 888 777</li>
                <div className="footer__social">
                  <a href="https://www.instagram.com/bitnbuild" className="footer__social-link">
                    <i className="ri-instagram-line" />
                  </a>
                </div>
              </ul>
            </div>
            <div className="footer__content">
              <h3 className="footer__title">
                In Collaboration With GDSC UMIT, GDSC CRCE and GDSC KJSIT
              </h3>
            </div>
          </div>
          <p className="footer__copy">© Bit N Build. All rigths reserved</p>
        </footer>
        <a href="#" className="scrollup" id="scroll-up"> 
          <i className="ri-arrow-up-fill scrollup__icon" />
        </a>
      </div>
     </>
 
  );
}

export default App;
