
import './CSS/Nav.css'
import menu from "../assets/menu.png";

export default function Nav() {
    const opener = () =>{
        var navbar = document.getElementById("navbar");
        navbar.classList.toggle("close");
    }
  return (
    <div>
      <img src={menu} alt="github" className="image-opener" onClick={opener}/>
    <nav className="nav close" id = 'navbar'>
    <a href="#home" className="text-light" onClick={opener}>
      Home
    </a>
    <a href="#about" className="text-light"onClick={opener}>
      About
    </a>
    <a href="#projects" className="text-light"onClick={opener}>
      Projects
    </a>
    
    <a href="#connect" className="text-light"onClick={opener}>
      Connect
    </a>

    <a href="https://drive.google.com/file/d/1A3vqgpf73LGuACTtcP7rWQyNvEk6ymB3/view?usp=share_link" className="text-light">
      Resume
    </a>
  </nav>

    </div>
  )
}
