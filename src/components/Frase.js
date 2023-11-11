import styles from './Frase.module.css'
 
function Frase(){
    return (
        <div>
            <div className={styles.fraseContainer}></div>
            <p className={styles.fraseContent}></p>
            <p>Este é um componente com uma frase!</p>
        </div>
    )
}

export default Frase