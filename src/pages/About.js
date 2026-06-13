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
        <h1>About Me</h1>
        <img src={picture} className="picture" alt="" />
        <p className='Intro-text'>
          I am a computer programmer from Bothell, Washington, with
          a Bachelors degree in computer science from the University of Washington. I am
          highly proficient in object-oriented programming through languages like Java, C++, and Python,
          all of which I have used on various projects that you can find on this website. I am also
          well versed in the fundamentals of software engineering, SQL database development, and web
          development. I am currently employed at Electroimpact as programming intern, where I primarily
          work with C# and .NET.
        </p>
        <p className='Intro-text'>
          Feel free to reach out to me on one of the following websites below.
        </p>
        <HyperLink web_page={'https://www.linkedin.com/in/tyler-teifke/'} name={'My LinkedIn'}/>
        <HyperLink web_page={'https://github.com/TylerTeifke'} name={'My GitHub'}/>
      </header>
      <br></br>
    </div>
  );
}

export default About