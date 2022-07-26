import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { autalizarPortas, criarPortas } from "../../../functions/porta"
import styles from '../../../styles/Jogo.module.css'

export default function Jogo() {

    const router = useRouter()
    const [portas, setPortas] = useState([])

    useEffect(() =>{
      const portas =  +router.query.portas 
      const temPresente = +router.query.temPresente/9845715468716
      console.log(portas);
      
      if(portas<3 || temPresente>portas){
        alert('Quantidade inválida. Retorne a pagina inicial e altere o número')
        router.push('/')
        
      }
      
      setPortas(criarPortas(portas,temPresente))
    },[router])

    const renderizarPortas = () => {
      return portas.map(porta => {
        return(
          <Porta 
            key={porta.numero}        
            onchange={novaPorta => setPortas(autalizarPortas(portas, novaPorta))} 
            value={porta}
          />
        )
      })
    }  
  
    return (
      <div id={styles.jogo}>
        <div className={styles.portas} >
            {renderizarPortas()}
        </div>
        <div className={styles.botoes} >
            <Link href={'/'} >
                <button>Reiniciar</button>
            </Link>
        </div>
      </div>
    )
}