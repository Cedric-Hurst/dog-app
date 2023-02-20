import { NavLink } from "react-router-dom"

export default function NavBar(props) {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand">Dog Shelter</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className='nav-link' to="/dogs">Home</NavLink>
                {props.dogs.map(dog =>
                  <NavLink className='nav-link' key={dog.name} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
                )}
            </div>
          </div>
        </div>
      </nav>
    )
}