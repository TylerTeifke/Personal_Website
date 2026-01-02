/*
* This class will be for creating links to other web pages
*/
import './HyperLink.css'

const HyperLink = ({ web_page, name }) => {

    return(
        <a className="App-link" href={web_page}>
            {name}
        </a>
    )
}

export default HyperLink