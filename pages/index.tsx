import Link from "next/link";
import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from '../styles/Formulario.module.css'

export default function Formulario() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  const handlePresent = (e) => {
    if(comPresente<qtdePortas){
      setComPresente(e)
    }else{
      alert('Não pode ser maior que a quantidade de portas')
      setComPresente(qtdePortas)
    }
  }
  const handlePortas = (e) => {
    if(qtdePortas<3){
      setQtdePortas(e)
    }else{
      alert('Não pode ser menor que 3')
      setQtdePortas(3)
    }
  }

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
            onChange = {(e)=>handlePortas(e)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica
            text="Porta com presente?" 
            value={comPresente}
            onChange = {(e)=>handlePresent(e)}
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
