import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
const NavBar = ()=>{
  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <Link to="/" className="macnifico navbar-brand" href="#">Mac-nifico</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <Link to="/category/1" className="nav-link" aria-current="page" href="#">Remeras</Link>
                      <Link to="/category/3" className="nav-link" href="#">Buzos</Link>
                      <Link to="/category/5" className="nav-link" href="#">Articulos de bazar</Link>
                      <Link to="/category/7" className="nav-link ">Chopps</Link>
                  </div>
              </div>
              <a className="justify-content-end">
                  <CartWidget />
              </a>
          </div>
      </nav>
  )
}

export default NavBar;