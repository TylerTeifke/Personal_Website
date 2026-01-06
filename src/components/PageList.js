//A component for listing the pages so that the user can navigate to 
//any page
import "./PageList.css"

const PageList = () => {
    //Code gotten from: https://www.w3schools.com/howto/howto_js_topnav.asp
    return (
        <div className="List">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Personal">Personal Projects</a>
            <a href="/University">University Projects</a>
        </div>
    )
}

export default PageList