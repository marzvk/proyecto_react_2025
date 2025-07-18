import { Link } from "react-router";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Page not found</h1>
      <Link to="/products"><b><h3>Volver a Compras</h3></b></Link>
    </div>
  );
}

export default NotFound;