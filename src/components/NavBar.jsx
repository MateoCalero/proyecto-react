import CartWidget from "./CartWidget";

const NavBar = ()=>{
  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <a className="macnifico navbar-brand" href="#">Mac-nifico</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <a className="nav-link" aria-current="page" href="#">Remeras</a>
                      <a className="nav-link" href="#">Buzos</a>
                      <a className="nav-link" href="#">Articulos de bazar</a>
                      <a className="nav-link ">Chopps</a>
                  </div>
              </div>
              <a className="justify-content-end">
                  <CartWidget/>
              </a>
          </div>
      </nav>
  )
}

export default NavBar;