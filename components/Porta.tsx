import PortaModel from '../model/porta';
import styles from '../styles/Porta.module.css';
import Presente from './Presente';

interface PortaProps {
    value: PortaModel,
    onchange: (e:PortaModel) => void
}

export default function Porta(props:PortaProps) {
    const porta  = props.value;
    const portaSelecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''
    const alternarSelecao = () => props.onchange(porta.alternarSelecao())

    const abrirPorta = (e) => {
        e.stopPropagation()
        props.onchange(porta.abrir())
    }

    const renderizarPorta = () => {
        return (
            <div className= {styles.porta} >
                <div className= {styles.numero} >{porta.numero}</div>
                <div className= {styles.macaneta} onClick = {abrirPorta} ></div>
            </div> 
        )
    }

    return (
        <div className={styles.area} onClick = {alternarSelecao}>
            <div className= {`${styles.estrutura} ${portaSelecionada}`} >
               {porta.aberta ? 
                    porta.temPresente ? <Presente/> : false
                    :renderizarPorta()
               }
            </div>
            <div className={styles.chao} ></div>
        </div>
    )
}