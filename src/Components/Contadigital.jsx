import styles from './Contadigital.module.css'
import Celular from './images/celular.png'

function Contadigital(){
    return(
        <div className={styles.containerdigital}>
            <div className={styles.contadigitalimagem}>
                <img src={Celular} alt="Celular mostrando o app" />
            </div>
            <div className={styles.contadigitaltext}>
                <h1>Planeje e invista com a sua Conta Digital</h1>
                <h2>Do jeito que a sua vida pede.</h2>
                <p>FUNCIONALIDADES:</p>
                <button></button>
            </div>
        </div>
    );
}

export default Contadigital;