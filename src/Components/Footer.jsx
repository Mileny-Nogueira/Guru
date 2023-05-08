import styles from './Footer.module.css'
import Logofooter from './images/logofooter.png'
import Facebook from './images/facebook.png'
import Linkedin from './images/linkedin.png'
import Instagram from './images/instagram.png'
import Twitter from './images/twitter.png'
import Yt from './images/youtube.png'
import App from './images/app.png'


function Footer(){
    return(
        <div className={styles.containerfooter}>
           <div>
                <img src={Logofooter} alt="logo para o footer" />
                <div className={styles.redesocial}>
                    <img src={Facebook} alt="ícone do facebook" />
                    <img src={Linkedin} alt="ícone do linkedin" />
                    <img src={Instagram} alt="ícone do instagram" />
                    <img src={Twitter} alt="ícone do twitter" />
                    <img src={Yt} alt="ícone do youtube" />
                </div>
           </div>
           <div className={styles.containercolunas}>
                <div className={styles.coluna}>
                    <h4>PRODUTOS</h4>
                    <p>Conta digital</p>
                    <p>Cartão de crédito</p>
                    <p>Conta digital PJ</p>
                    <p>Conta digital MEI</p>
                    <p>Empréstimos</p>
                    <p>Crédito imobiliário</p>
                    <p>Seguros</p>
                </div>
                <div className={styles.coluna}>
                    <h4>ATENDIMENTO</h4>
                    <p>Perguntas frequentes</p>
                    <p>Serviços online</p>
                    <p>Canais de atendimento</p>
                    <p>Ouvidoria</p>
                </div>
                <div className={styles.coluna}>
                    <h4>BAIXE O APP</h4>
                    <img src={App} alt="ícone para baixar o app" />
                </div>
           </div>
           
        </div>
    );
}

export default Footer;