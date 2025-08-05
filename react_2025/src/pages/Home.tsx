import {Link} from "react-router"

// con link no refresca la pagina

function Home() {
  return (
    <div>
      <h1 style={{ color: 'black' }}>Welcome a tu pagina de compras</h1>
      <p style={{ color: 'black' }}>Este es el inicio de la pagina</p>
        <Link to="/products"><button><h2>Ingresar</h2></button></Link>
    </div>
  );
}

export default Home;