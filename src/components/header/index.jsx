import "./index.scss";

export default function Header() {
  return (
    <div className="comp-header">
      <header>
        <div className="list-header">
          <img src="/src/assets/Bolt.svg" alt="logo raio" />
          <h1>ELÉTRICA</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
