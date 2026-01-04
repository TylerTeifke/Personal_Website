//This component will structure how my projects are presented on the website
import "./Project.css"

const Project = ({ image, description}) => {
    return (
        <div className="box">
            <img src={image} className="picture"/>
            <p className="description">
                {description}
            </p>
        </div>
    )
}

export default Project