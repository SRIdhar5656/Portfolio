import Bgimg from "../../assets/bgimg.jpg"
import hireimg from "../../assets/hire.gif"
import "../intro/intro.css"
import { ImFolderDownload } from "react-icons/im";
import Sri24 from "../../assets/Sri24.pdf";


function Intro(){

    return(
        <section className="introcontainer">
            <div className="Intro">
            <div className="Introcontent">
                <p id="hello">Hello,</p>
                <span className="details">I'm <span>SRIDHAR</span><br/>web Developer</span>
                <p className="bio-dtails">I am a skilled and passionate web developer with experience in creating visually appeling and user-friendly websites.</p>
                {/* <button className="hirebtn"><img src={hireimg} alt="hirelogo" />Hire me</button> */}
                <a
               href={Sri24}
               download="Sridhar-CV"
               target="_blank"
               rel="noreferrer"
            >
              <button className="contact-btn" style={{ marginRight: "0" }}alt="Download CV" >
                < ImFolderDownload  /> 
              </button>
              <h2>Download CV</h2>
            </a>
            </div>
            




            {/* <a
        href={aug}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download CV</button>
      </a> */}
            <div className="bg">
                <img src={Bgimg} alt="background" />
            </div>

        </div>
        </section>
    )
}
export default Intro;