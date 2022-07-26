import styles from '../styles/EntradaNumerica.module.css'

interface Props {
    text: string
    value: number
    onChange: (newValue: number) => void
   
}

const components = (props: Props) => {

    const inc = () => props.onChange(props.value + 1)
    const dec = () => props.onChange(props.value > 0 ? props.value - 1 : 0)

  return (
    <div className= {styles.entradaNumerica}>
        <span className={styles.text} > {props.text} </span>
        <span className={styles.value} > {props.value} </span>
        <div className={styles.botoes} >
            <button className={styles.btn} onClick={inc}>+</button>
            <button className={styles.btn} onClick={dec}>-</button>
        </div>
    </div>
  )
}

export default components;