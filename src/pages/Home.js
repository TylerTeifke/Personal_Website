//This will be the home page for the website

//Pictures
import picture from '../pictures/myself.jpg'
import software_picture from '../pictures/recursive_solve.png'
import web_dev from '../pictures/after_css.png'
import database from '../pictures/database_structure.png'

import PageList from '../components/PageList'
import './Page.css'
//import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {

    return (
    <div>
      <header className='header'>
        <PageList/>
        <h1>Tyler Teifke</h1>
        <img src={picture} className="picture" alt="" />
        <p className='Intro-text'>
          Hello, my name is Tyler Teifke and this is my personal website that I use to demonstrate my
          knowledge of computer programming.
        </p>
      </header>
      <a className='button' href='Resume.pdf' download="Resume.pdf">Download resume</a>
      <br/>
      <h1>Software Development</h1>
      <div className='flexbox'>
        <img src={software_picture} className='screenshot' alt=""/>
        <p className='box-text'>
          I am highly proficient in Java, C++, and python, and have used all of those languages on multiple
          projects. These projects demonstrate my knowledge of object-oriented programming and the fundamentals
          of software development.
        </p>
      </div>
      <br/>
      <h1>Web Development</h1>
      <div className='flexbox'>
        <img src={web_dev} className='screenshot' alt=""/>
        <p className='box-text'>
          I have been experimenting with React and web development since 2024. In that time I have created
          multiple web applications, including this one, and have developed a rudimentary understanding of
          the basics of web development. I am mainly knowledgeable of front-end development, but I have
          dabbled in back-end development occasionally.
        </p>
      </div>
      <br/>
      <h1>Database Development</h1>
      <div className='flexbox'>
        <img src={database} className='screenshot' alt=""/>
        <p className='box-text'>
          My skills and knowledge in SQL database development and querying are very robust. On several
          occasions I have created my own database from scratch, including designing the schema for said
          databases.
        </p>
      </div>
      <br/>
    </div>
  );
}

export default Home