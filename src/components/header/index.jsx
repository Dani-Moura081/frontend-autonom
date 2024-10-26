import "./index.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="comp-header">
      <header>
        <div className="list-header">
          <img src="/src/assets/images/Bolt.svg" alt="logo raio" />
          <h1>ELÉTRICA</h1>
        </div>
        <nav>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>

            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <Link to={'/contact'}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
