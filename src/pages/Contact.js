//This will generate the page for displaying the ways to contact me
import HyperLink from '../components/HyperLink'
import PageList from '../components/PageList'
import './Page.css'

const Contact = () => {
    return(
        <div>
            <header className='header'>
                <PageList/>
                <h1>Contact Me</h1>
                <a>
                    email: tylerteifke@gmail.com
                </a>
                <a>
                    Phone Number: 425-892-0980
                </a>
                <HyperLink web_page={'https://www.linkedin.com/in/tyler-teifke/'} name={'LinkedIn'}/>
            </header>
        </div>
    );
}

export default Contact