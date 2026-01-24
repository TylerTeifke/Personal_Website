//The page for my personal projects
import PageList from '../components/PageList'
import Project from '../components/Project'
import FadeInSection from '../components/fadeInSection'

import menus from '../pictures/menus.png'
import pentominos from '../pictures/Pentomino_demonstration.jpg'
import ADAM from '../pictures/ADAM_screenshot.png'
import cards from '../pictures/after_css.png'
import profile from '../pictures/frontend_profile.png'
import lighting from '../pictures/lighting_engine.png'
import './Page.css'

const Personal = () => {
    return(
        <div>
            <header className='header'>
                <PageList/>
                <h1>
                    Personal Projects
                </h1>
                <p className='Intro-text'>
                    Here you will find all of the projects I have made in my spare time.
                    These demonstrate both my skills as a programmer, as well as how I plan 
                    and develop projects.
                </p>
            </header>
            <FadeInSection>
                <h2>
                    Grocery Store Database
                </h2>
                <Project image={menus} project_link={'https://github.com/TylerTeifke/Grocery-Store'} description={"I Created a rudimentary database for a grocery store using Python and SQLite3. Python was used to create simple menus for user interaction, while SQLite was used for creating and querying the database. I also personally created the schema for the database using my knowledge of the fundamentals of good database design."}/>
            </FadeInSection>
            <br/>
            <FadeInSection>
                <h2>
                    Pentomino Puzzle
                </h2>
                <Project image={pentominos} project_link={'https://github.com/TylerTeifke/Pentominoes'} description={'Over the course of two months I created an algorithm for programmatically solving a 6x10 pentomino puzzle. The program works by recursively placing the puzzle pieces in different locations until a solution is found. After either a solution is found or the puzzle becomes unsolvable, the algorithm backtracks to test out different orientations and positions that a piece can be placed in. The image to the side demonstrates how this type of puzzle usually looks, as well as how I depicted it in my program with ascii characters.'}/>
            </FadeInSection>
            <br/>
            <FadeInSection>
                <h2>
                    ADAM
                </h2>
                <Project image={ADAM} project_link={'https://github.com/TylerTeifke/ADAM'} description={"I created an interactive web application in which a machine called ADAM talks to the user. The user is also able to interact with ADAM in various ways, such as changing the color of the background and rotating ADAM's sprite. This project involved the use of React.js to develop the application, and specifically involved an understanding of the useState and useEffect hooks to make and keep track of changes the user makes to the various web pages. I also did a bit of creative writing for ADAM's dialogue."}/>
            </FadeInSection>
            <br/>
            <FadeInSection>
                <h2>
                    Hidden Card Game
                </h2>
                <Project image={cards} project_link={'https://github.com/TylerTeifke/solitaire'} description={"Created a simple card game using React in which the user must arrange the cards in the order specified, but can only see the card at the bootm of the stack. My work involved utilizing the dnd kit extension for React, and required me to gain an understanding of both dragging/dropping objects, as well as dynamically changing the appearance of objects as they are moved around the screen."}/>
            </FadeInSection>
            <br/>
            <FadeInSection>
                <h2>
                    Team Recommendation Application Prototype
                </h2>
                <Project image={profile} project_link={'https://docs.google.com/presentation/d/17IBuTn5aT1s_g97ITd-klilwO-sXuWtg/edit?usp=sharing&ouid=111025572855758527097&rtpof=true&sd=true'} description={"The Team Recommendation application is a website designed to help university students and professors form teams. My contributions to this project include reworking the back-end so that it uses Flask, connecting the front-end to the back-end, extending the database to be able to hold information vital to making a working prototype, updating the login and sign up pages so that they work properly, and adding new pages to the front end that demonstrate the potential functionality of the finished project."}/>
            </FadeInSection>
            <br/>
            <FadeInSection>
                <h2>
                    Custom Lighting Engine
                </h2>
                <Project image={lighting} project_link={'https://github.com/TylerTeifke/CSS452_FinalProject'} description={"A prototype lighting engine, designed with javaScript and HTML, I made with the help of another university student. My primary contribution was programming the APIs for moving around lights, changing their color, and increasing or decreasing the brightness of lights."}/>
            </FadeInSection>
            <br/>
        </div>
    )
}

export default Personal