
import Tarxeta from "./Tarxeta.jsx";
import Aviso from "./Aviso.jsx";
import ProductCard from "./ProductCard.jsx"; 

let nome = "algo";
let prezo = 112.0;



export default function App() {
  return (
    <>
      <Tarxeta />
      <Aviso />
      <ProductCard nome={nome} prezo = {prezo} />
    </>
  );
}



