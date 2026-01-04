//This component will structure how my projects are presented on the website
import "./Project.css"
import HyperLink from "./HyperLink"

const Project = ({ image, description, project_link }) => {
    return (
        <div className="box">
            <img src={image} className="picture"/>
            <p className="description">
                {description} <br/>
                <HyperLink web_page={project_link} name={'Find the project here'}/>
            </p>
        </div>
    )
}

export default Project