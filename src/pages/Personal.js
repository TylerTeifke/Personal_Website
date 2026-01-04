//The page for my personal projects
import PageList from '../components/PageList'
import Project from '../components/Project'
import menus from '../pictures/menus.png'
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
            <h2>
                Grocery Store Database
            </h2>
            <Project image={menus} description={"Created a rudimentary database for a grocery store using Python and SQLite3. Python was used to create simple menus for user interaction, while SQLite was used for creating and querying the database. I also personally created the schema for the database using my knowledge of the fundamentals of good database design."}/>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
        </div>
    )
}

export default Personal