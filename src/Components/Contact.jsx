import "./CSS/Contact.css"
import Insta from'../assets/Instagram.png'
import Gh from "../assets/GitHub.png"
import Fb from "../assets/Facebook.png"
import linkedin from "../assets/LinkedIn.png"
import Mail from "../assets/mail.png"

export default function Contact() {
  return (
    <div className="pages contact-page" id="connect">
    <h1 className="heading">Contact</h1>

    <div className="cf">

    <form>


    <div className="field">
    <label className="text-light">Name</label>
    
    <input type="text" name="Name" id="Name" placeholder="Name"></input>
    </div>
    

    <div className="field">
    <label className="text-light">Email</label>
    <input type="email" name="email" id="Email" placeholder="Email"></input>
    </div>

    <div className="field">
    <label className="text-light">Phone No</label>
    <input type="tel" name="tel" id="tel" placeholder="Phone No"></input>
</div>

<div className="field">
    <label className="text-light">Subject</label>

    <input type="text" name="sub" id="sub" placeholder="Subject"></input>
    </div>
    <div className="field">
    <label className="text-light">Message</label>
    <textarea type="text" className="Message" rows={3} name="Message" id="message" placeholder="Message"></textarea>
    </div>
    
    <button className="submit-btn bg-yellow">Submit</button>
    </form>

    </div>


    <div className="socials">
    <a href=""><img src={Insta} alt="Instagram"/></a>
    <a href="https://github.com/SaurabhATalele"><img src={Gh} alt="GitHub"/></a>
    <a href="https://www.linkedin.com/in/saurabh-talele-6558601b1/">
    <img src={linkedin} alt="LinkedIn"/>
    </a>
    <a href="mailto:saurabhatalele@gmail.com">
    <img src={Mail} alt="Mail"/>
    </a>
    <a href="https://www.facebook.com/SaurabhTalele.1122">
    <img src={Fb} alt="Facebook"/>
    </a>
    </div>

    

    <footer className="text-light d-flex">
    This project is Build using React, Html, CSS
    </footer>

    </div>
  )
}
