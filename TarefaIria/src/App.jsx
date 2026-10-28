import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'




const libros = [
  { id: 1, titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
  { id: 2, titulo: "Cen anos de soidade", autor: "Gabriel García Márquez", ano: 1967 },
  { id: 3, titulo: "Os Lusíadas", autor: "Luís de Camões", ano: 1572 },
  { id: 4, titulo: "Memorias dun neno labrego", autor: "Xosé Neira Vilas", ano: 1961 },
];

export default function App() {
  const elementos = libros.map((l) => (
    <Libro libro = {l} ></Libro>
  ));

  return (
    <section>
      <h1>Biblioteca</h1>
      <ul>{elementos}</ul>
    </section>
  );
}


function Libro(libro){
  return 
  <>
  <li key={libro.id}>
      <h3>{libro.titulo}</h3>
      <p>
        {libro.autor}, {libro.ano}
      </p>
    </li>
    </>
}
  
  





