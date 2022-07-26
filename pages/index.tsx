import Link from "next/link";
import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from '../styles/Formulario.module.css'

export default function Formulario() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div  className={styles.formulario} >
      <div>
        <Cartao bgcolor="#c0392c" >
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde Portas?" 
            value={qtdePortas}
            onChange = {(e)=>setQtdePortas(e)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica
            text="Porta com presente?" 
            value={comPresente}
            onChange = {(e)=>setComPresente(e)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085" >
          <Link href= {`/jogo/${qtdePortas}/${comPresente*9845715468716}`}>
            <h2  className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
