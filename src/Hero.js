import './Hero.css';
import hand from "./waving-hand.webp";
import {HiMail} from "react-icons/hi";
import {FaLinkedinIn} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

function Hero() {
  return (
    <div className="hero-container">
        <span className='hey'>Hey <img src={hand}/></span>
        <h2>I'm Vignesh Bakthavatchalam</h2>
        <p>Student at Sona College of Arts and Science </p>
        <ul>
        <li><a href="https://www.linkedin.com/in/vignesh-bakthavatchalam-40093b178/"><FaLinkedinIn size={12}/> LinkedIn</a></li>
        <li><a href=""><FaTwitter size={12}/> Twitter</a></li>
        <li><a href="https://github.com/vignesh2324"><FaGithub size={12}/> Github</a></li>
        <li><a href=""><HiMail size={12}/> Mail</a></li>
        </ul>
    </div>
  );
}

export default Hero;
