import "../styles/Footer.scss";
import {appTitle} from "../data/app_data.js";
const Footer = () => {
  return (
    <div className="footer">
        <div className="right">
            <h1>{appTitle}</h1>
            <p>All Right Reserved</p>
        </div>
        <div className="left">
            <h3>Follow us on:</h3>
            <a target="_blank" href="https://youtube.com">Youtube</a>
            <a target="_blank" href="https://linkedin.com">LinkedIn</a>
            <a target="_blank" href="https://github.com">GitHub</a>
        </div>
    </div>
  )
}

export default Footer