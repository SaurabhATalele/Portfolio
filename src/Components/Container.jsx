import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

export default function Container() {
  return (
    <div className="pages-container">

    <Home/>
    <About/>
    <Projects/>
    <Contact/>
      
    </div>
  )
}
