// Crea un compoñente ProductCard que reciba nome e prezo por props e os mostre dentro dun <div className="produto">.
// Estilízao en ProductCard.css con fondo, bordo, padding, cantos redondeados e sombra.
// Convérteo a Módulo CSS: renomea o arquivo a ProductCard.module.css, importa styles e usa className={styles.produto}.
// Aplica unha das dúas técnicas á páxina do teu proxecto.

import styles from "./ProductCard.module.css";

export default function ProductCard({nome, prezo}){
    return <div className={styles.producto}>︃︃︃{nome} --- ︃{prezo}</div>
}