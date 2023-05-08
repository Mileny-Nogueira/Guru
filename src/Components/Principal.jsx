import styles from './Principal.module.css'
import Mulher from  './images/mulher.png'

function Principal(){
    return(
        <div className={styles.containerprincipal}>
            <div className={styles.principaltext}>
                <h2>Não seja mais um, seja guru!</h2>
                <h1>Transforme o seu dinheiro em possibilidades</h1>
            </div>
            <div className={styles.principalimagem}>
                <img src={Mulher} alt="Mulher segurando o cartão do Guru" />
            </div>
        </div>
    );
}

export default Principal;