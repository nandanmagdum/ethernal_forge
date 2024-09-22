import "../styles/Home.scss";
import vg from "../assets/2.webp";
import {
  appTitle,
  subTitle,
  description,
  whoWeAre,
  whoWeAreAns,
  brandTitle,
  brandList,
} from "../data/app_data";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="box1">
        <h1>{appTitle}</h1>
        <p>{subTitle}</p>
      </div>

      <div className="box2">
        <img src={vg} alt="Graphics" />
        <p>{description}</p>
      </div>

      <div className="box3" id="about">
        <div className="box3In">
          <h1>{whoWeAre}</h1>
          <p>{whoWeAreAns}</p>
        </div>
      </div>
      
      <div className="box4" id="brand">
        <div className="box4In">
          <h1>{brandTitle}</h1>
           <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <h3>{brandList[0]}</h3>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillYoutube />
              <h3>{brandList[1]}</h3>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillLinkedin />
              <h3>{brandList[2]}</h3>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <h3>{brandList[3]}</h3>
            </div>
          </article>
        </div> 
       </div>
    </div>
  );
};

export default Home;
