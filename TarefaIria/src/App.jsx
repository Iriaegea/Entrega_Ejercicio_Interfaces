import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'




import React from "react";


import { Fragment } from "react";



const pasos = [
  { id: 1, texto: "Executa npm run build." },
  { id: 2, texto: "Proba a versión final con npm run preview." },
  { id: 3, texto: "Sube o proxecto a GitHub." },
  { id: 4, texto: "Publica o sitio no servizo que escollas." },
];

export default function App() {

  const elementos = pasos.map((paso, indice) =>{
      if(indice>0) {
        return (<div key={paso.id}>
        <hr key={paso.id * 10}/>  
        <p key={paso.id}>{paso.texto}</p> 
      </div>)
    
        }

    return <p key={paso.id}>{paso.texto}</p>
});

  //const elementos = pasos.map((paso, indice) => indice > 0 ?  {<hr key={paso.id * indice}> </hr> <p key={paso.id}>{paso.texto}</p> } : <p key={paso.id}>{paso.texto}</p>);

  return (
    <article>
      <h1>Como despregar o proxecto</h1>
      {elementos}
    </article>
  );
}





