import styles from './Cartao.module.css'
import Imgcartao from './images/cartao.png'
import Taxa from './images/semtaxa.png'
import Premio from './images/premios.png'
import Sacola from './images/sacola.png'


function Cartao(){
    return(
        <div className={styles.containercartao}>
            <div className={styles.cartaotextos}>
                <div className={styles.cartaotext}>
                    <h2>Muito mais que um cartão</h2>
                    <h1>O poder na palma da sua mão</h1>
                </div>
                <div className={styles.containercards}>
                    <div>
                        <h3>SEM ANUIDADE</h3>
                        <p>Para você não se preocupar com taxas.</p>
                        <img src={Taxa} alt="sem taxas" />
                    </div>
                    <div>
                        <h3>RECOMPENSAS</h3>
                        <p>Suas compras convertidas em prêmios.</p>
                        <img src={Premio} alt="medalha" />
                    </div>
                    <div>
                        <h3>PARCELAMENTO</h3>
                        <p>Gostou? Comprou: carpe diem.</p>
                        <img src={Sacola} alt="compras" />
                    </div>
                </div>
                <button className={styles.cartaobtn}>QUERO MEU CARTÃO</button>
            </div>
            <div className={styles.cartaoimagem}>
                <img src={Imgcartao} alt="imagem do cartão" />
            </div>
        </div>
    );
}

export default Cartao;