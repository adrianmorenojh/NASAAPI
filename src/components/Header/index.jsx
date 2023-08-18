import { Link } from "react-router-dom";
import "./style.css";
export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header--ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
