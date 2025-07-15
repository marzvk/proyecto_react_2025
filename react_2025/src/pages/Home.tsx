import {Link} from "react-router"

// con link no refresca la pagina

function Home() {
  return (
    <div>
      <h1>Welcome a tu pagina de compras</h1>
      <p>Este es el inicio de la pagina</p>
        <Link to="/products"><b><h2>Ingresar</h2></b></Link>
    </div>
  );
}

export default Home;