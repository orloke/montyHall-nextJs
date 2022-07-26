import styles from '../styles/Cartao.module.css'

interface Props{
    bgcolor?: string;
    children?: React.ReactNode
}

export default function Cartao(props: Props){
    return(
        <div className={styles.cartao}
            style = {{backgroundColor: props.bgcolor ?? 'white'}}
        >
            {props.children}
        </div>
    )
}