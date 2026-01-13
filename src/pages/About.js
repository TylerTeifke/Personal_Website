//This will be the about page for the website
import picture from '../pictures/Rocky_and_me.jpg'
import HyperLink from '../components/HyperLink'
import PageList from '../components/PageList'
import './Page.css'

const About = () => {
    return (
    <div>
      <header className="header">
        <PageList/>
        <img src={picture} className="picture" alt="" />
        <p className='Intro-text'>
          I am a computer programmer from Bothell, Washington, with
          a Bachelors degree in computer science from the University of Washington. I am highly
          highly proficient in object-oriented programming through languages like Java, C++, and Python,
          all of which I have used on various projects that you can find on this website. I am also
          well versed in the fundamentals of software engineering, SQL database development, and web
          development.
        </p>
        <p className='Intro-text'>
          If you are a recruiter for a company and any of this sounds interesting to you, then fell free
          to contact me using one of the methods below. I am available for a chat any time.
        </p>
        <a>
          email: tylerteifke@gmail.com
        </a>
        <a>
          Phone Number: 425-892-0980
        </a>
        <HyperLink web_page={'https://www.linkedin.com/in/tyler-teifke/'} name={'LinkedIn'}/>
        <HyperLink web_page={'https://github.com/TylerTeifke'} name={'GitHub'}/>
      </header>
    </div>
  );
}

export default About