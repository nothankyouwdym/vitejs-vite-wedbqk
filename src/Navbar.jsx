import {Link} from "react-router-dom"

const Navbar = () =>{
  return(
    <section>
      <nav>
        <h3><span>Boubacar</span></h3>

        <Link to="/"><span>Home</span></Link>
        <Link to="/About"><span>About</span></Link>
        <Link to="/Contact"><span>Contact</span></Link>
      </nav>
    </section>
  )
}

export default Navbar