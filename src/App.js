import picture from './myself.jpg'
import Link from './Link'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="picture" alt="" />
        <p>
          Hello, my name is Tyler Teifke and this is my personal website that I use to demonstrate my
          knowledge of computer programming. I am a computer programmer from Bothell, Washington, with
          a Bachelors degree in computer science from the University of Washington. I am highly
          highly proficient in object-oriented programming through languages like Java, C++, and Python,
          all of which I have used on various projects that you can find on this website. I am also
          well versed in the fundamentals of software engineering, SQL database development, and web
          development.
        </p>
        <p>
          If you are a recruiter for a company and any of this sounds interesting to you, then fell free
          to contact me using one of the methods below. I am available for a chat any time.
        </p>
        <a>
          email: tylerteifke@gmail.com
        </a>
        <a>
          Phone Number: 425-892-0980
        </a>
        <Link web_page={'https://www.linkedin.com/in/tyler-teifke/'} name={'LinkedIn'}/>
        <Link web_page={'https://github.com/TylerTeifke'} name={'GitHub'}/>
      </header>
    </div>
  );
}

export default App;
