import { Link } from 'react-router-dom'; // Para navegar entre as páginas
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="DerwolfGroup">
      <nav>
        <ul>
          <li><Link to="/nousNova">Nous Nova</Link></li>
          <li><Link to="/">Derwolf Entertainment</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
