import { useState } from "react";
import "./App.css";
import { motion, transform } from "framer-motion";
import anime from "animejs/lib/anime.es.js";

function App() {
  const [tarjeta, setTarjeta] = useState([
    { titulo: "Precio 1", precio: 20, contenido: "Velocidad de subida baja" },
    { titulo: "Precio 2", precio: 50, contenido: "Velocidad de subida media" },
    { titulo: "Precio 3", precio: 100, contenido: "Velocidad de subida baja" },
  ]);
  let [resumen, setResumen] = useState("velocidad X");
  let [progreso, setProgreso] = useState(0);

  const prueba = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100px",
    height: "100px",
    perspective: "1000px",
    transform: `rotateX(${progreso - 20}deg) rotateY(${
      progreso - 20
    }deg) rotateZ(${progreso - 20}deg)`,
    transition: "all 1s",
    color: "black",
  };

  function handleClick(item) {
    setResumen(item.contenido);
    setProgreso(item.precio);
    anime({
      targets: ".progreso",
      width: item.precio + "%",
      duration: 1000,
    });
  }

  return (
    <main>
      <div style={prueba}>Logo</div>
      <div className="cardContainer">
        {tarjeta.map((item, index) => {
          return (
            <motion.button
              type="button"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              className="card"
              key={index}
              onClick={() => {
                handleClick(item);
              }}
            >
              <div>{item.titulo}</div>
              <div>{item.precio}</div>
              <input
                className="radio"
                type="radio"
                name="opciones"
                value={item.titulo}
              />
            </motion.button>
          );
        })}
      </div>

      <div className="resumen">{resumen}</div>
      <div className="barra">
        <div className="progreso"></div>
      </div>
    </main>
  );
}

export default App;
