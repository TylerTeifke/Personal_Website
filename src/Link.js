/*
* This class will be for creating links to other web pages
*/
import './Link.css'

const Link = ({ web_page, name }) => {

    return(
        <a className="App-link" href={web_page}>
            {name}
        </a>
    )
}

export default Link