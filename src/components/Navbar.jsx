import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark">

      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="#">React Project</Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" aria-current="page" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/rickmorty">Rick and Morty</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/quotes">Quotes API</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/projLog">Project Log</Link>
          </li>
        </ul>
      </div>
        </nav>
    )
}

export default Navigation;
